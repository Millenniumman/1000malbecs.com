export default {
  async fetch(request, env) {
    const corsHeaders = {
      'Access-Control-Allow-Origin': 'https://www.1000malbecs.com',
      'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization',
      'Access-Control-Allow-Credentials': 'true'
    };

    // Preflight OPTIONS
    if (request.method === 'OPTIONS') {
      return new Response(null, { headers: corsHeaders });
    }

    // ====================== GET SESSION ======================
    if (request.url.endsWith('/get-session') && request.method === 'POST') {
      try {
        const { session_id } = await request.json();

        const stripeResponse = await fetch(`https://api.stripe.com/v1/checkout/sessions/${session_id}?expand[]=line_items`, {
          headers: { 'Authorization': `Bearer ${env.STRIPE_SECRET_KEY}` },
        });

        const session = await stripeResponse.json();

        return new Response(JSON.stringify({
          id: session.id,
          total: session.amount_total || 0,
          currency: session.currency,
          customer_email: session.customer_details?.email,
          shipping_details: session.shipping_details,
          items: session.line_items?.data ? session.line_items.data.map(item => ({
            quantity: item.quantity,
            description: item.description,
            amount: item.amount_total
          })) : []
        }), {
          headers: { 
            'Content-Type': 'application/json',
            ...corsHeaders 
          }
        });
      } catch (error) {
        return new Response(JSON.stringify({ error: error.message }), { 
          status: 400, 
          headers: corsHeaders 
        });
      }
    }

    // ====================== CREATE CHECKOUT ======================
    if (request.method === 'POST') {
      try {
        const { cart, language = 'de', isSubscription = false } = await request.json();

        if (!cart || cart.length === 0) throw new Error("Carrito vacío");

        const baseUrl = 'https://www.1000malbecs.com';
        const successUrl = `${baseUrl}/${language}/thank-you.html?session_id={CHECKOUT_SESSION_ID}`;
        const cancelUrl = `${baseUrl}/${language}/carrito.html`;

             const formData = new URLSearchParams();
        formData.append('mode', isSubscription ? 'subscription' : 'payment');
        formData.append('success_url', successUrl);
        formData.append('cancel_url', cancelUrl);

        // Line items
        cart.forEach((item, index) => {
          formData.append(`line_items[${index}][price_data][currency]`, 'eur');
          formData.append(`line_items[${index}][price_data][product_data][name]`, item.name || 'Producto sin nombre');
          formData.append(`line_items[${index}][price_data][unit_amount]`, Math.round((item.price || 0) * 100));
          formData.append(`line_items[${index}][quantity]`, item.quantity || 1);
        });

        // Envío
        const totalBottles = cart.reduce((sum, item) => sum + (item.quantity || 0), 0);
        const shippingCost = totalBottles >= 12 ? 0 : 699;

        formData.append('shipping_address_collection[allowed_countries][0]', 'ES');
        formData.append('shipping_address_collection[allowed_countries][1]', 'DE');
        formData.append('shipping_address_collection[allowed_countries][2]', 'FR');
        formData.append('shipping_address_collection[allowed_countries][3]', 'IT');
        formData.append('shipping_address_collection[allowed_countries][4]', 'PT');

        formData.append('shipping_options[0][shipping_rate_data][type]', 'fixed_amount');
        formData.append('shipping_options[0][shipping_rate_data][fixed_amount][amount]', shippingCost);
        formData.append('shipping_options[0][shipping_rate_data][fixed_amount][currency]', 'eur');
        formData.append('shipping_options[0][shipping_rate_data][display_name]', shippingCost === 0 ? 'Envío Gratis' : 'Envío Estándar (6,99€)');

        // Opcional: descripción del pago (evita "Pay Discovery Package")
        formData.append('payment_intent_data[description]', 'Compra en 1000 Malbecs');
        formData.append('payment_intent_data[statement_descriptor]', '1000MALBECS');
        const totalBottles = cart.reduce((sum, item) => sum + (item.quantity || 0), 0);
        const shippingCost = totalBottles >= 12 ? 0 : 699;

        formData.append('shipping_address_collection[allowed_countries][0]', 'ES');
        formData.append('shipping_address_collection[allowed_countries][1]', 'DE');
        formData.append('shipping_options[0][shipping_rate_data][type]', 'fixed_amount');
        formData.append('shipping_options[0][shipping_rate_data][fixed_amount][amount]', shippingCost);
        formData.append('shipping_options[0][shipping_rate_data][fixed_amount][currency]', 'eur');
        formData.append('shipping_options[0][shipping_rate_data][display_name]', shippingCost === 0 ? 'Envío Gratis' : 'Envío Estándar (6,99€)');

        const stripeResponse = await fetch('https://api.stripe.com/v1/checkout/sessions', {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${env.STRIPE_SECRET_KEY}`,
            'Content-Type': 'application/x-www-form-urlencoded',
          },
          body: formData,
        });

        const session = await stripeResponse.json();

        if (session.error) throw new Error(session.error.message);
 // === ENVIAR EMAIL DE CONFIRMACIÓN ===
        try {
          const emailResponse = await fetch('https://api.resend.com/emails', {
            method: 'POST',
            headers: {
              'Authorization': `Bearer ${env.RESEND_API_KEY}`,
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              from: '1000 Malbecs <no-reply@1000malbecs.com>',
              to: ['ventas@1000malbecs.com'],
              subject: `Nuevo Pedido Recibido #${session.id.slice(-8)}`,
              html: `
                <h2>Nuevo Pedido - 1000 Malbecs</h2>
                <p><strong>Nº de Pedido:</strong> ${session.id}</p>
                <p><strong>Total:</strong> €${(session.amount_total / 100).toFixed(2)}</p>
                <p><strong>Email del cliente:</strong> ${session.customer_details?.email || 'No disponible'}</p>
                <hr>
                <p>Revisa el dashboard de Stripe para más detalles.</p>
              `
            })
          });

          console.log("Email enviado a ventas@1000malbecs.com");
        } catch (emailError) {
          console.error("Error enviando email:", emailError);
        }
        return new Response(JSON.stringify({ url: session.url }), {
          headers: { 
            'Content-Type': 'application/json',
            ...corsHeaders 
          }
        });

      } catch (error) {
        return new Response(JSON.stringify({ error: error.message }), { 
          status: 400,
          headers: corsHeaders 
        });
      }
    }

    return new Response('Method not allowed', { status: 405, headers: corsHeaders });
  }
};

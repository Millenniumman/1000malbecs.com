export default {
  async fetch(request, env) {
    const corsHeaders = {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    };
    if (request.method === 'POST') {
      try {
        const { cart, language = 'de', isSubscription = false } = await request.json();

        if (!cart || !Array.isArray(cart) || cart.length === 0) {
          throw new Error("El carrito está vacío");
        }

        const baseUrl = 'https://www.1000malbecs.com';
        const successUrl = `${baseUrl}/${language}/gracias.html?session_id={CHECKOUT_SESSION_ID}`;
        const cancelUrl = `${baseUrl}/${language}/carrito.html`;

        const formData = new URLSearchParams();
        formData.append('mode', isSubscription ? 'subscription' : 'payment');
        formData.append('success_url', successUrl);
        formData.append('cancel_url', cancelUrl);

        // Line items
        cart.forEach((item, index) => {
          if (isSubscription) {
            formData.append(`line_items[${index}][price]`, item.priceId);
          } else {
            formData.append(`line_items[${index}][price_data][currency]`, 'eur');
            formData.append(`line_items[${index}][price_data][product_data][name]`, item.name);
            formData.append(`line_items[${index}][price_data][unit_amount]`, Math.round(item.price * 100));
          }
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

        // Corrección del título
        formData.append('payment_intent_data[description]', 'Compra en 1000 Malbecs');
        formData.append('payment_intent_data[statement_descriptor]', '1000MALBECS');
        formData.append('invoice_creation[enabled]', 'true');
        formData.append('invoice_creation[invoice_data][description]', 'Compra de vinos - 1000 Malbecs');

        console.log(`Total botellas: ${totalBottles} | Envío: ${shippingCost/100}€`);

        // === FETCH A STRIPE ===
        const stripeResponse = await fetch('https://api.stripe.com/v1/checkout/sessions', {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${env.STRIPE_SECRET_KEY}`,
            'Content-Type': 'application/x-www-form-urlencoded',
          },
          body: formData,
        });

        const session = await stripeResponse.json();

        if (session.error) {
          throw new Error(session.error.message);
        }

        return new Response(JSON.stringify({ url: session.url }), {
          headers: { 
            'Content-Type': 'application/json',
            ...corsHeaders 
          }
        });

      } catch (error) {
        console.error("Error en Worker:", error);
        return new Response(JSON.stringify({ error: error.message }), { 
          status: 400,
          headers: corsHeaders 
        });
      } 
    }

    return new Response('Method not allowed', { status: 405, headers: corsHeaders });
  }
};

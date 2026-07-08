export default {
  async fetch(request, env) {
    const corsHeaders = {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    };

    if (request.method === 'OPTIONS') {
      return new Response(null, { headers: corsHeaders });
    }

    if (request.method === 'POST') {
      try {
        const body = await request.json();
        const { cart, language = 'de', isSubscription = false } = body;

        if (!cart || !Array.isArray(cart) || cart.length === 0) {
          throw new Error("El carrito está vacío");
        }

        const baseUrl = 'https://www.1000malbecs.com';
        const successUrl = `${baseUrl}/${language}/thank-you.html?session_id={CHECKOUT_SESSION_ID}`;
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
            formData.append(`line_items[${index}][price_data][product_data][name]`, item.name || 'Producto');
            formData.append(`line_items[${index}][price_data][unit_amount]`, Math.round((item.price || 0) * 100));
          }
          formData.append(`line_items[${index}][quantity]`, item.quantity || 1);
        });

        // Envío
        const totalBottles = cart.reduce((sum, item) => sum + (item.quantity || 0), 0);
        const shippingCost = totalBottles >= 12 ? 0 : 699;

        formData.append('shipping_address_collection[allowed_countries][0]', 'ES');
        formData.append('shipping_address_collection[allowed_countries][1]', 'DE');
        formData.append('shipping_options[0][shipping_rate_data][type]', 'fixed_amount');
        formData.append('shipping_options[0][shipping_rate_data][fixed_amount][amount]', shippingCost);
        formData.append('shipping_options[0][shipping_rate_data][fixed_amount][currency]', 'eur');
        formData.append('shipping_options[0][shipping_rate_data][display_name]', shippingCost === 0 ? 'Envío Gratis' : 'Envío Estándar (6,99€)');

        // Corrección título
        formData.append('payment_intent_data[description]', 'Compra en 1000 Malbecs');
        formData.append('payment_intent_data[statement_descriptor]', '1000MALBECS');

        console.log(`Total botellas: ${totalBottles} | Envío: ${shippingCost/100}€`);

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

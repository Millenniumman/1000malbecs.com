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
        const { cart, language = 'de', isSubscription = false } = await request.json();

        if (!cart || !Array.isArray(cart) || cart.length === 0) {
          throw new Error("El carrito está vacío");
        }

        const baseUrl = 'https://www.1000malbecs.com';
        const successUrl = `${baseUrl}/${language}/gracias.html?session_id={CHECKOUT_SESSION_ID}`;
        const cancelUrl = `${baseUrl}/${language}/carrito.html`;

        // Calcular envío
        const totalBottles = cart.reduce((sum, item) => sum + (item.quantity || 0), 0);
        const shippingCost = totalBottles >= 12 ? 0 : 699;

        console.log(`Total botellas: ${totalBottles} | Envío: ${shippingCost} centavos`);

        const sessionData = {
          mode: isSubscription ? 'subscription' : 'payment',
          payment_method_types: ['card'],
          success_url: successUrl,
          cancel_url: cancelUrl,

          line_items: cart.map(item => ({
            price_data: {
              currency: 'eur',
              product_data: { name: item.name },
              unit_amount: Math.round(item.price * 100),
            },
            quantity: item.quantity || 1,
          })),

          shipping_address_collection: {
            allowed_countries: ['ES', 'DE', 'FR', 'IT', 'PT', 'BE', 'NL', 'AT', 'LU', 'CH']
          },

          shipping_options: [{
            shipping_rate_data: {
              type: 'fixed_amount',
              fixed_amount: { amount: shippingCost, currency: 'eur' },
              display_name: shippingCost === 0 ? 'Envío Gratis' : 'Envío Estándar (6,99€)',
              delivery_estimate: {
                minimum: { unit: 'business_day', value: 3 },
                maximum: { unit: 'business_day', value: 7 },
              }
            }
          }]
        };

        const stripeResponse = await fetch('https://api.stripe.com/v1/checkout/sessions', {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${env.STRIPE_SECRET_KEY}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(sessionData),
        });

        const session = await stripeResponse.json();

        if (session.error) {
          console.error("Stripe Error:", session.error);
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

export default {
  async fetch(request, env) {
    const corsHeaders = {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    };

    if (request.method === 'OPTIONS') return new Response(null, { headers: corsHeaders });

    if (request.method === 'POST') {
      try {
        const { cart, mode = 'guest', language = 'de', isSubscription = false } = await request.json();

        if (!cart || cart.length === 0) throw new Error("Carrito vacío");

        // Dentro del try, después de validar el cart

// === DENTRO DEL TRY, después de validar el cart ===

const baseUrl = 'https://www.1000malbecs.com';
const successUrl = `${baseUrl}/${language}/gracias.html?session_id={CHECKOUT_SESSION_ID}`;
const cancelUrl = `${baseUrl}/${language}/carrito.html`;

// === CÁLCULO DE ENVÍO ===
const totalBottles = cart.reduce((sum, item) => sum + (item.quantity || 0), 0);
const shippingCost = totalBottles >= 12 ? 0 : 699;   // 6.99 €

console.log(`Total botellas: ${totalBottles} → Envío: ${shippingCost/100}€`);

const sessionData = {
  mode: 'payment',
  payment_method_types: ['card'],
  success_url: successUrl,
  cancel_url: cancelUrl,

  line_items: cart.map(item => ({
    price_data: {
      currency: 'eur',
      product_data: { 
        name: item.name,
        // description: item.description || undefined, // opcional
      },
      unit_amount: Math.round(item.price * 100),
    },
    quantity: item.quantity || 1,
  })),

  // === CONFIGURACIÓN DE ENVÍO ===
  shipping_address_collection: {
    allowed_countries: ['ES', 'DE', 'FR', 'IT', 'PT', 'BE', 'NL', 'AT', 'LU', 'CH']
  },

  shipping_options: [
    {
      shipping_rate_data: {
        type: 'fixed_amount',
        fixed_amount: {
          amount: shippingCost,     // 0 o 699
          currency: 'eur'
        },
        display_name: shippingCost === 0 ? 'Envío Gratis' : 'Envío Estándar',
        delivery_estimate: {
          minimum: { unit: 'business_day', value: 3 },
          maximum: { unit: 'business_day', value: 7 }
        }
      }
    }
  ],

  // Forzar que el envío sea obligatorio
  phone_number_collection: {
    enabled: true
  },

  metadata: {
    language: language,
    total_bottles: totalBottles.toString(),
    shipping_applied: shippingCost.toString()
  }
};
        const formData = new URLSearchParams();
        formData.append('mode', isSubscription ? 'subscription' : 'payment');
        formData.append('success_url', successUrl);
        formData.append('cancel_url', cancelUrl);

        // Line items
        cart.forEach((item, index) => {
          if (isSubscription) {
            formData.append(`line_items[${index}][price]`, item.priceId);
            formData.append(`line_items[${index}][quantity]`, item.quantity || 1);
          } else {
            formData.append(`line_items[${index}][price_data][currency]`, 'eur');
            formData.append(`line_items[${index}][price_data][product_data][name]`, item.name);
            formData.append(`line_items[${index}][price_data][unit_amount]`, Math.round(item.price * 100));
            formData.append(`line_items[${index}][quantity]`, item.quantity || 1);
          }
        });

        const stripeResponse = await fetch('https://api.stripe.com/v1/checkout/sessions', {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${env.STRIPE_SECRET_KEY}`,
            'Content-Type': 'application/x-www-form-urlencoded',
          },
          body: formData.toString(),
        });

        const session = await stripeResponse.json();

        if (session.error) throw new Error(session.error.message);

        return new Response(JSON.stringify({ url: session.url }), {
          headers: { 
            'Content-Type': 'application/json',
            ...corsHeaders 
          }
        });

      } catch (error) {
        console.error("Error:", error);
        return new Response(JSON.stringify({ error: error.message }), { 
          status: 400, 
          headers: corsHeaders 
        });
      }
    }

    return new Response('Method not allowed', { status: 405, headers: corsHeaders });
  }
};

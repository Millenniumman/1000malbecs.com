export async function onRequestPost({ request, env }) {
  try {
    const { session_id, order_id, provider } = await request.json();

    let customer = {};

    if (provider === 'stripe' && session_id) {
      const stripe = new Stripe(env.STRIPE_SECRET_KEY, {
        httpClient: Stripe.createFetchHttpClient(), // importante en Cloudflare
      });

      const session = await stripe.checkout.sessions.retrieve(session_id, {
        expand: ['customer_details', 'shipping_details']
      });

      customer = {
        name: session.customer_details?.name || '',
        email: session.customer_details?.email || '',
        phone: session.customer_details?.phone || '',
        address: session.shipping_details?.address || null,
        reference: session_id,
        method: 'Stripe',
        amount: (session.amount_total / 100).toFixed(2)
      };
    } 
    else if (provider === 'paypal' && order_id) {
      // Por ahora devolvemos datos básicos de PayPal
      customer = {
        name: 'Cliente PayPal',
        email: '', // PayPal pasa menos datos fáciles
        reference: order_id,
        method: 'PayPal'
      };
    }

    return new Response(JSON.stringify({
      success: true,
      customer: customer
    }), {
      headers: { 'Content-Type': 'application/json' }
    });

  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({
      success: false,
      error: error.message
    }), { status: 400 });
  }
}

// Necesitas instalar stripe en tu proyecto
// npm install stripe

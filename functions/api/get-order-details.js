// functions/api/get-order-details.js
// import Stripe from 'stripe';

export async function onRequestPost({ request, env }) {
  try {
    const { session_id, order_id, provider } = await request.json();

    let customer = {};

    if (provider === 'stripe' && session_id) {
      
      const stripe = new Stripe(env.STRIPE_SECRET_KEY);

      const session = await stripe.checkout.sessions.retrieve(session_id, {
        expand: ['customer_details', 'shipping_details']
      });

      customer = {
        name:    session.customer_details?.name || 'Cliente',
        email:   session.customer_details?.email || '',
        phone:   session.customer_details?.phone || '',
        address: session.shipping_details?.address || null,
        reference: session_id,
        method:  'Stripe',
        amount:  ((session.amount_total || 0) / 100).toFixed(2) + ' €'
      };
    } 
    else if (provider === 'paypal' && order_id) {
      customer = {
        name: 'Cliente PayPal',
        email: '',
        reference: order_id,
        method: 'PayPal'
      };
    }

    return Response.json({
      success: true,
      customer: customer
    });

  } catch (error) {
    console.error("Error en get-order-details:", error);
    return Response.json({
      success: false,
      error: error.message
    }, { status: 400 });
  }
}

// functions/api/get-order-details.js
// import Stripe from 'stripe';   // Comentado para evitar error de build

export async function onRequestPost({ request, env }) {
  try {
    const { session_id, order_id, provider } = await request.json();

    let customer = {};

    if (provider === 'stripe' && session_id) {
      
      // Temporalmente desactivado Stripe para que compile
      customer = {
        name:    'Cliente Stripe',
        email:   '',
        phone:   '',
        address: null,
        reference: session_id,
        method:  'Stripe',
        amount:  '0.00 €'
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

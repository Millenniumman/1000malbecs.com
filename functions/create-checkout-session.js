const stripe = require('stripe')(env.STRIPE_SECRET_KEY);

export async function onRequestPost({ request }) {
  try {
    const { cart } = await request.json();

    const line_items = cart.map(item => ({
      price_data: {
        currency: 'eur',
        product_data: {
          name: item.name,
          images: [item.image],
        },
        unit_amount: Math.round(item.price * 100),   // Stripe usa centavos
      },
      quantity: item.quantity || 1,
    }));

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: line_items,
      mode: 'payment',
      success_url: 'https://www.1000malbecs.com/{{ lang }}/gracias.html?session_id={CHECKOUT_SESSION_ID}',
      cancel_url: 'https://www.1000malbecs.com/{{ lang }}/carrito.html',
    });

    return new Response(JSON.stringify({ id: session.id }), {
      headers: { 'Content-Type': 'application/json' },
    });

  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  }
}

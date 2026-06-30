export async function onRequestPost({ request, env }) {
  try {
    const { cart } = await request.json();

    const line_items = cart.map((item, index) => ({
      price_data: {
        currency: 'eur',
        product_data: {
          name: item.name,
        },
        unit_amount: Math.round(item.price * 100),
      },
      quantity: item.quantity || 1,
    }));

    const formData = new URLSearchParams();
    formData.append('mode', 'payment');
    formData.append('payment_method_types[0]', 'card');
    formData.append('success_url', 'https://www.1000malbecs.com/{{ lang }}/gracias.html?session_id={CHECKOUT_SESSION_ID}');
    formData.append('cancel_url', 'https://www.1000malbecs.com/{{ lang }}/carrito.html');

    line_items.forEach((item, index) => {
      formData.append(`line_items[${index}][price_data][currency]`, item.price_data.currency);
      formData.append(`line_items[${index}][price_data][product_data][name]`, item.price_data.product_data.name);
      formData.append(`line_items[${index}][quantity]`, item.quantity);
      formData.append(`line_items[${index}][price_data][unit_amount]`, item.price_data.unit_amount);
    });

    const response = await fetch('https://api.stripe.com/v1/checkout/sessions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${env.STRIPE_SECRET_KEY}`,
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: formData.toString(),
    });

    const session = await response.json();

    if (session.error) {
      throw new Error(session.error.message);
    }

    return new Response(JSON.stringify({ id: session.id }), {
      headers: { 'Content-Type': 'application/json' },
    });

  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  }
}

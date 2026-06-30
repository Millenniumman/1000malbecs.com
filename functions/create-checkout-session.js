async function goToCheckout() {
  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  console.log("Carrito enviado:", cart);

  try {
    const response = await fetch('/create-checkout-session', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ cart: cart })
    });

    const responseText = await response.text();
    console.log("Respuesta raw del servidor:", responseText);

    const session = JSON.parse(responseText);
    console.log("Sesión parseada:", session);

    const stripe = Stripe(STRIPE_PUBLISHABLE_KEY);
    stripe.redirectToCheckout({ sessionId: session.id });

  } catch (error) {
    console.error("Error completo:", error);
    alert("Error: " + error.message);
  }
}
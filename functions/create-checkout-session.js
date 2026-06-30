export async function onRequestPost({ request, env }) {
  try {
    const body = await request.text();
    console.log("Body recibido:", body);

    const { cart } = JSON.parse(body);
    console.log("Carrito recibido:", cart);

    if (!cart || cart.length === 0) {
      throw new Error("Carrito vacío");
    }

    // Simulación temporal (para probar que el endpoint responde)
    const session = {
      id: "cs_test_" + Date.now()
    };

    return new Response(JSON.stringify({ id: session.id }), {
      headers: { 'Content-Type': 'application/json' },
    });

  } catch (error) {
    console.error("Error en create-checkout-session:", error);
    return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  }
}
export async function onRequestPost({ request, env }) {
  try {
    const { cart } = await request.json();

    // Simulación temporal - solo para probar que funciona
    const session = {
      id: "cs_test_" + Math.random().toString(36).substring(2, 15)
    };

    return new Response(JSON.stringify({ id: session.id }), {
      headers: { 'Content-Type': 'application/json' },
      status: 200
    });

  } catch (error) {
    console.error("Error en create-checkout-session:", error);
    return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  }
}
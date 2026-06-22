// Temporary file to fix build - Stripe disabled
export async function onRequestPost({ request, env }) {
  return new Response(
    JSON.stringify({ 
      success: true, 
      message: "Function temporalmente desactivada para permitir el deploy" 
    }),
    { 
      status: 200,
      headers: { "Content-Type": "application/json" }
    }
  );
}

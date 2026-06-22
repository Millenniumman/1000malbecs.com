// functions/api/get-order-details.js
export async function onRequestPost() {
  return new Response(
    JSON.stringify({ 
      success: false, 
      message: "Esta función está temporalmente deshabilitada" 
    }),
    { 
      status: 200,
      headers: { "Content-Type": "application/json" }
    }
  );
}

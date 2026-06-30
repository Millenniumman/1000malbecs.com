export async function onRequestPost({ request }) {
  return new Response(JSON.stringify({ 
    id: "cs_test_" + Date.now() 
  }), {
    headers: { 'Content-Type': 'application/json' }
  });
}
export async function onRequestGet() {
  return new Response("Functions funcionando!", {
    headers: { 'Content-Type': 'text/plain' }
  });
}
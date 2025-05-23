addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request));
});

async function handleRequest(request) {
  const url = new URL(request.url);
  // Redirigir al dominio real para pruebas
  const targetUrl = 'https://1000malbecs.com' + url.pathname;
  // Excluir footer.html y archivos no HTML
  if (url.pathname.endsWith('footer.html') || !url.pathname.endsWith('.html')) {
    return fetch(targetUrl);
  }
  // Excluir rutas específicas
  if (url.pathname.includes('/anotate.html') || url.pathname.includes('/gracias.html')) {
    return fetch(targetUrl);
  }
  // Obtener la página
  let response = await fetch(targetUrl);
  let html = await response.text();
  // Obtener el footer
  const footerResponse = await fetch('https://1000malbecs.com/footer.html');
  const footerHtml = await footerResponse.text();
  // Inyectar el footer
  if (html.includes('</footer>')) {
    html = html.replace(/<footer>[\s\S]*<\/footer>/, footerHtml);
  } else {
    html = html.replace('</body>', `${footerHtml}</body>`);
  }
  return new Response(html, {
    status: response.status,
    headers: response.headers
  });
}

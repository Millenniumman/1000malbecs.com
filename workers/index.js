addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request));
});

async function handleRequest(request) {
  try {
    const url = new URL(request.url);
    // Mapear la ruta del Worker al dominio real
    let targetUrl = 'https://1000malbecs.com' + url.pathname;
    // Ajustar rutas específicas
    if (url.pathname === '/eventos' || url.pathname === '/eventos/') {
      targetUrl = 'https://1000malbecs.com/es/eventos/eventos.html';
    }

    // Excluir footer.html y archivos no HTML
    if (url.pathname.endsWith('footer.html') || !url.pathname.endsWith('.html')) {
      const response = await fetch(targetUrl);
      if (!response.ok) {
        return new Response(`Error fetching ${targetUrl}: ${response.status} ${response.statusText}`, { status: 500 });
      }
      return response;
    }

    // Excluir rutas específicas (formularios)
    if (url.pathname.includes('/anotate.html') || url.pathname.includes('/gracias.html')) {
      const response = await fetch(targetUrl);
      if (!response.ok) {
        return new Response(`Error fetching ${targetUrl}: ${response.status} ${response.statusText}`, { status: 500 });
      }
      return response;
    }

    // Obtener la página
    let response = await fetch(targetUrl);
    if (!response.ok) {
      return new Response(`Error fetching ${targetUrl}: ${response.status} ${response.statusText}`, { status: 500 });
    }
    let html = await response.text();

    // Obtener el footer
    const footerResponse = await fetch('https://1000malbecs.com/footer.html');
    if (!footerResponse.ok) {
      return new Response(`Error fetching footer.html: ${footerResponse.status} ${response.statusText}`, { status: 500 });
    }
    const footerHtml = await footerResponse.text();

    // Inyectar el footer
    if (html.includes('</footer>')) {
      html = html.replace(/<footer>[\s\S]*<\/footer>/, footerHtml);
    } else {
      html = html.replace('</body>', `${footerHtml}</body>`);
    }

    return new Response(html, {
      status: response.status,
      headers: { ...response.headers, 'Content-Type': 'text/html' }
    });
  } catch (error) {
    return new Response(`Worker error: ${error.message}`, { status: 500 });
  }
}

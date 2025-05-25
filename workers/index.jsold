addEventListener('fetch', event => {
    event.respondWith(handleRequest(event.request));
});

async function handleRequest(request) {
    const url = new URL(request.url);
    const path = url.pathname;

    // Excluir ciertas páginas y archivos no HTML
    if (path.includes('/footer.html') || path.includes('/anotate.html') || path.includes('/gracias.html') || !path.endsWith('.html')) {
        return fetch(request);
    }

    // Detectar idioma desde la URL
    let lang = 'es';
    if (path.startsWith('/en/')) {
        lang = 'en';
    } else if (path.startsWith('/de/')) {
        lang = 'de';
    }

    // Definir traducciones
    const translations = {
        es: { inquiries: 'Consultas', follow: 'Síguenos' },
        en: { inquiries: 'Inquiries', follow: 'Follow us' },
        de: { inquiries: 'Anfragen', follow: 'Folge uns' }
    };

    // Generar el HTML del footer
    const footerHtml = `
        <footer>
            <div class="footer-content">
                <div class="footer-contact">
                    <p><strong>${translations[lang].inquiries}:</strong></p>
                    <a href="https://wa.me/4915158224728" target="_blank"><i class="fab fa-whatsapp"></i> +49 151 5822 4728</a>
                    <span class="separator">|</span>
                    <a href="mailto:federico@1000malbecs.com"><i class="fas fa-envelope"></i> federico@1000malbecs.com</a>
                </div>
                <div class="footer-social">
                    <p><strong>${translations[lang].follow}:</strong></p>
                    <a href="https://www.instagram.com/1000malbecs/" target="_blank"><i class="fab fa-instagram"></i> @1000malbecs</a>
                    <span class="separator">|</span>
                    <a href="https://x.com/1000malbecs" target="_blank"><i class="fab fa-x-twitter"></i> @1000malbecs</a>
                </div>
            </div>
        </footer>
    `;

    // Obtener la página solicitada
    try {
        const pageResponse = await fetch(request);
        if (!pageResponse.ok) {
            console.error(`Failed to fetch page: ${pageResponse.status}`);
            return pageResponse;
        }

        // Procesar la página
        let pageHtml = await pageResponse.text();
        const footerRegex = /<footer\b[^>]*>[\s\S]*?</footer>/i;
        if (pageHtml.match(footerRegex)) {
            pageHtml = pageHtml.replace(footerRegex, footerHtml);
        } else if (pageHtml.includes('</body>')) {
            pageHtml = pageHtml.replace(/<\/body>/i, `${footerHtml}</body>`);
        } else {
            pageHtml = pageHtml + footerHtml; // Añade al final si no hay </body>
        }

        return new Response(pageHtml, {
            headers: { 'Content-Type': 'text/html; charset=utf-8' },
            status: pageResponse.status
        });
    } catch (error) {
        console.error(`Worker error: ${error.message}`);
        return fetch(request); // Fallback a la página original
    }
}
// Excluir ciertas páginas y archivos no HTML, pero permitir home
if (path.includes('/footer.html') || path.includes('/anotate.html') || path.includes('/gracias.html') || (!path.endsWith('.html') && !path.match(/^\/(es|en|de)?\/?$/))) {
    return fetch(request);
}

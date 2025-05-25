addEventListener('fetch', event => {
    event.respondWith(handleRequest(event.request));
});

async function handleRequest(request) {
    const url = new URL(request.url);
    const path = url.pathname;

    // Excluir páginas específicas y archivos no HTML
    const excludedPaths = ['/footer.html', '/anotate.html', '/gracias.html'];
    if (
        excludedPaths.some(excluded => path.includes(excluded)) ||
        (!path.endsWith('.html') && path !== '/' && !path.startsWith('/es/') && !path.startsWith('/en/') && !path.startsWith('/de/'))
    ) {
        return fetch(request);
    }

    // Detectar idioma desde la URL
    let lang = 'es';
    if (path.startsWith('/en/')) {
        lang = 'en';
    } else if (path.startsWith('/de/')) {
        lang = 'de';
    }

    // Soporte para parámetro ?lang= (para pruebas)
    const langParam = url.searchParams.get('lang');
    if (langParam && ['es', 'en', 'de'].includes(langParam)) {
        lang = langParam;
    }

    // Definir traducciones
    const translations = {
        es: {
            inquiries: 'Consultas',
            follow: 'Síguenos',
            whatsapp: '+49 151 5822 4728',
            email: 'federico@1000malbecs.com',
            instagram: '@1000malbecs',
            twitter: '@1000malbecs'
        },
        en: {
            inquiries: 'Inquiries',
            follow: 'Follow us',
            whatsapp: '+49 151 5822 4728',
            email: 'federico@1000malbecs.com',
            instagram: '@1000malbecs',
            twitter: '@1000malbecs'
        },
        de: {
            inquiries: 'Anfragen',
            follow: 'Folge uns',
            whatsapp: '+49 151 5822 4728',
            email: 'federico@1000malbecs.com',
            instagram: '@1000malbecs',
            twitter: '@1000malbecs'
        }
    };

    // Generar el HTML del footer
    const footerHtml = `
        <footer>
            <div class="footer-content">
                <div class="footer-contact">
                    <p><strong>${translations[lang].inquiries}:</strong></p>
                    <a href="https://wa.me/4915158224728" target="_blank"><i class="fab fa-whatsapp"></i> ${translations[lang].whatsapp}</a>
                    <span class="separator">|</span>
                    <a href="mailto:${translations[lang].email}"><i class="fas fa-envelope"></i> ${translations[lang].email}</a>
                </div>
                <div class="footer-social">
                    <p><strong>${translations[lang].follow}:</strong></p>
                    <a href="https://www.instagram.com/1000malbecs/" target="_blank"><i class="fab fa-instagram"></i> ${translations[lang].instagram}</a>
                    <span class="separator">|</span>
                    <a href="https://x.com/1000malbecs" target="_blank"><i class="fab fa-x-twitter"></i> ${translations[lang].twitter}</a>
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

        // Verificar que la respuesta es HTML
        const contentType = pageResponse.headers.get('content-type') || '';
        if (!contentType.includes('text/html')) {
            return pageResponse;
        }

        // Procesar la página
        let pageHtml = await pageResponse.text();
        // Simplificar el regex para evitar errores
        const footerRegex = /<footer\b[^>]*>.*?</footer>/is;
        if (pageHtml.match(footerRegex)) {
            pageHtml = pageHtml.replace(footerRegex, footerHtml);
        } else if (pageHtml.includes('</body>')) {
            pageHtml = pageHtml.replace(/<\/body>/i, `${footerHtml}</body>`);
        } else {
            pageHtml += footerHtml; // Añadir al final si no hay </body>
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

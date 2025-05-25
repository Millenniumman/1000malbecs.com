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
            navbar: {
                categories: 'Categorías',
                provinces: 'Provincias',
                wineries: 'Bodegas',
                events: 'Eventos',
                home: 'Volver al inicio',
                provinces_list: {
                    la_rioja: 'La Rioja',
                    mendoza: 'Mendoza',
                    neuquen: 'Neuquén',
                    salta: 'Salta'
                },
                events_list: {
                    view_events: 'Ver eventos',
                    sign_up: 'Anotate'
                }
            },
            footer: {
                inquiries: 'Consultas',
                follow: 'Síguenos',
                whatsapp: '+49 151 5822 4728',
                email: 'federico@1000malbecs.com',
                instagram: '@1000malbecs',
                twitter: '@1000malbecs'
            }
        },
        en: {
            navbar: {
                categories: 'Categories',
                provinces: 'Provinces',
                wineries: 'Wineries',
                events: 'Events',
                home: 'Back to home',
                provinces_list: {
                    la_rioja: 'La Rioja',
                    mendoza: 'Mendoza',
                    neuquen: 'Neuquén',
                    salta: 'Salta'
                },
                events_list: {
                    view_events: 'View events',
                    sign_up: 'Sign Up'
                }
            },
            footer: {
                inquiries: 'Inquiries',
                follow: 'Follow us',
                whatsapp: '+49 151 5822 4728',
                email: 'federico@1000malbecs.com',
                instagram: '@1000malbecs',
                twitter: '@1000malbecs'
            }
        },
        de: {
            navbar: {
                categories: 'Kategorien',
                provinces: 'Provinzen',
                wineries: 'Weingüter',
                events: 'Veranstaltungen',
                home: 'Zurück zur Startseite',
                provinces_list: {
                    la_rioja: 'La Rioja',
                    mendoza: 'Mendoza',
                    neuquen: 'Neuquén',
                    salta: 'Salta'
                },
                events_list: {
                    view_events: 'Veranstaltungen ansehen',
                    sign_up: 'Anmelden'
                }
            },
            footer: {
                inquiries: 'Anfragen',
                follow: 'Folge uns',
                whatsapp: '+49 151 5822 4728',
                email: 'federico@1000malbecs.com',
                instagram: '@1000malbecs',
                twitter: '@1000malbecs'
            }
        }
    };

    // Lista de bodegas (sin traducción, nombres en español para todos los idiomas)
    const wineries = [
        { key: 'agustin-lanus', name: 'Agustín Lanús' },
        { key: 'bodega-chanarmuyo', name: 'Bodega Chañarmuyo' },
        { key: 'bodega-estancia-mendoza', name: 'Bodega Estancia Mendoza' },
        { key: 'bodega-foster-lorca', name: 'Bodega Foster Lorca' },
        { key: 'bodega-goyenechea', name: 'Bodega Goyenechea' },
        { key: 'bodega-septima', name: 'Bodega Séptima' },
        { key: 'bodega-tukma', name: 'Bodega Tukma' },
        { key: 'bodegas-bianchi', name: 'Bodegas Bianchi' },
        { key: 'bodegas-etchart', name: 'Bodegas Etchart' },
        { key: 'casa-araujo', name: 'Casa Araujo' },
        { key: 'chakana', name: 'Chakana' },
        { key: 'cicchitti', name: 'Cicchitti' },
        { key: 'eral-bravo', name: 'Eral Bravo' },
        { key: 'familia-schroeder', name: 'Familia Schroeder' },
        { key: 'finca-y-bodega-vistalba', name: 'Finca y Bodega Vistalba' },
        { key: 'jasmine-monet', name: 'Jasmine Monet' },
        { key: 'jorge-rubio', name: 'Jorge Rubio' },
        { key: 'luigi-bosca', name: 'Luigi Bosca' },
        { key: 'vina-alicia', name: 'Viña Alicia' },
        { key: 'weinert-bodega-y-cavas', name: 'Weinert Bodega y Cavas' }
    ];

    // Generar el HTML de la navbar
    const navbarHtml = `
        <nav id="sidebar">
            <div class="logo-container">
                <a href="/${lang}/" title="${translations[lang].navbar.home}">
                    <img src="/images/l000-malbecs-logo.png" alt="1000malbecs Logo" class="logo">
                </a>
            </div>
            <h2>${translations[lang].navbar.categories}</h2>
            <details>
                <summary><i class="fas fa-map-marker-alt"></i> ${translations[lang].navbar.provinces}</summary>
                <ul>
                    <li><a href="/${lang}/provincias/la-rioja.html" class="nav-link">${translations[lang].navbar.provinces_list.la_rioja}</a></li>
                    <li><a href="/${lang}/provincias/mendoza.html" class="nav-link">${translations[lang].navbar.provinces_list.mendoza}</a></li>
                    <li><a href="/${lang}/provincias/neuquen.html" class="nav-link">${translations[lang].navbar.provinces_list.neuquen}</a></li>
                    <li><a href="/${lang}/provincias/salta.html" class="nav-link">${translations[lang].navbar.provinces_list.salta}</a></li>
                </ul>
            </details>
            <details>
                <summary><i class="fas fa-wine-bottle"></i> ${translations[lang].navbar.wineries}</summary>
                <ul>
                    ${wineries.map(winery => `<li><a href="/${lang}/bodegas/${winery.key}.html" class="nav-link">${winery.name}</a></li>`).join('')}
                </ul>
            </details>
            <details>
                <summary><i class="fas fa-calendar-alt"></i> ${translations[lang].navbar.events}</summary>
                <ul>
                    <li><a href="/${lang}/eventos/eventos.html" class="nav-link">${translations[lang].navbar.events_list.view_events}</a></li>
                    <li><a href="/${lang}/eventos/anotate.html" class="nav-link">${translations[lang].navbar.events_list.sign_up}</a></li>
                </ul>
            </details>
        </nav>
    `;

    // Generar el HTML del footer
    const footerHtml = `
        <footer>
            <div class="footer-content">
                <div class="footer-contact">
                    <p><strong>${translations[lang].footer.inquiries}:</strong></p>
                    <a href="https://wa.me/4915158224728" target="_blank"><i class="fab fa-whatsapp"></i> ${translations[lang].footer.whatsapp}</a>
                    <span class="separator">|</span>
                    <a href="mailto:${translations[lang].footer.email}"><i class="fas fa-envelope"></i> ${translations[lang].footer.email}</a>
                </div>
                <div class="footer-social">
                    <p><strong>${translations[lang].footer.follow}:</strong></p>
                    <a href="https://www.instagram.com/1000malbecs/" target="_blank"><i class="fab fa-instagram"></i> ${translations[lang].footer.instagram}</a>
                    <span class="separator">|</span>
                    <a href="https://x.com/1000malbecs" target="_blank"><i class="fab fa-x-twitter"></i> ${translations[lang].footer.twitter}</a>
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
        // Inyectar la navbar después de <body>
        if (pageHtml.includes('<body>')) {
            pageHtml = pageHtml.replace(/<body>/i, `<body>${navbarHtml}`);
        } else {
            pageHtml = navbarHtml + pageHtml; // Añadir al inicio si no hay <body>
        }
        // Inyectar el footer antes de </body>
        if (pageHtml.includes('</body>')) {
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

addEventListener('fetch', event => {
    event.respondWith(handleRequest(event.request));
});

async function handleRequest(request) {
    const url = new URL(request.url);
    const path = url.pathname;

    // Excluir páginas específicas y archivos no HTML
    const excludedPaths = ['/footer.html', '/anotate.html', '/gracias.html', '/data/navigation.json'];
    if (
        excludedPaths.some(excluded => path.includes(excluded)) ||
        (!path.endsWith('.html') && path !== '/' && !path.startsWith('/es/') && !path.startsWith('/en/') && !path.startsWith('/de/'))
    ) {
        return fetch(request);
    }

    // Detectar idioma desde la URL
    let lang = 'es';
    if (path.startsWith('/en/')) lang = 'en';
    else if (path.startsWith('/de/')) lang = 'de';
    else if (path.startsWith('/es/')) lang = 'es';

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
                    salta: 'Salta',
                    san_juan: 'San Juan' // Añadido correctamente con coma
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
                    salta: 'Salta',
                    san_juan: 'San Juan' // Añadido correctamente con coma
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
                    salta: 'Salta',
                    san_juan: 'San Juan' // Añadido correctamente con coma
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

    // Obtener datos de navegación desde navigation.json
    let provincias = [];
    let bodegas = [];
    try {
        const navResponse = await fetch('https://raw.githubusercontent.com/millenniumman/1000malbecs.com/data/navigation.json');
        if (navResponse.ok) {
            const navData = await navResponse.json();
            provincias = navData.provincias || [];
            bodegas = navData.bodegas || [];
        } else {
            console.error('Error fetching navigation.json:', navResponse.status);
        }
    } catch (error) {
        console.error('Error loading navigation data:', error);
    }

    // Fallback data if navigation.json fails
    if (provincias.length === 0) {
        provincias = [
            'La Rioja',
            'Mendoza',
            'Neuquén',
            'Salta',
            'San Juan' // Añadido correctamente con coma
        ];
    }
    if (bodegas.length === 0) {
        bodegas = [
            { name: 'A Corazón Abierto', slug: 'a-corazon-abierto' },
            { name: 'Agustín Lanús', slug: 'agustin-lanus' },
            { name: 'Bemberg Estate Wines', slug: 'bemberg-estate-wines' },
            { name: 'Bodega Bressia', slug: 'bodega-bressia' },
            { name: 'Bodega Chañarmuyo', slug: 'bodega-chanarmuyo' },
            { name: 'Bodega Estancia Mendoza', slug: 'bodega-estancia-mendoza' },
            { name: 'Bodega Foster Lorca', slug: 'bodega-foster-lorca' },
            { name: 'Bodega Goyenechea', slug: 'bodega-goyenechea' },
            { name: 'Bodega Séptima', slug: 'bodegas-septima' },
            { name: 'Bodega Tukma', slug: 'bodega-tukma' },
            { name: 'Bodegas Bianchi', slug: 'bodegas-bianchi' },
            { name: 'Casa Araujo', slug: 'casa-araujo' },
            { name: 'Chakana', slug: 'chakana' },
            { name: 'Cicchitti', slug: 'cicchitti' },
            { name: 'El Esteco', slug: 'el-esteco' },
            { name: 'Eral Bravo', slug: 'eral-bravo' },
            { name: 'Falasco Wines', slug: 'falasco-wines' },
            { name: 'Familia Schroeder', slug: 'familia-schroeder' },
            { name: 'Finca La Anita', slug: 'finca-la-anita' },
            { name: 'Finca & Bodega Arca Yaco', slug: 'finca-bodega-arca-yaco' },
            { name: 'Finca y Bodega Vistalba', slug: 'finca-y-bodega-vistalba' },
            { name: 'Finca Las Moras', slug: 'finca-las-moras' },
            { name: 'Finca Las Nubes', slug: 'finca-las-nubes' },
            { name: 'Humberto Canale', slug: 'humberto-canale' },
            { name: 'Jasmine Monet', slug: 'jasmine-monet' },
            { name: 'Jorge Rubio', slug: 'jorge-rubio' },
            { name: 'La Rural', slug: 'la-rural' },
            { name: 'Los Haroldos', slug: 'los-haroldos' },
            { name: 'Luigi Bosca', slug: 'luigi-bosca' },
            { name: 'Mascota Vine Yards', slug: 'mascota-vine-yards' },
            { name: 'Piattelli Vineyards', slug: 'piattelli-vineyards' },
            { name: 'Rutini Wines', slug: 'rutini-wines' },
            { name: 'San Telmo', slug: 'san-telmo' },
            { name: 'Trapiche', slug: 'trapiche' },
            { name: 'Viña Alicia', slug: 'vina-alicia' },
            { name: 'Weinert Bodega y Cavas', slug: 'weinert-bodega-y-cavas' },
        ];
    }

    // Generar enlaces de provincias
    const provinciaLinks = provincias.map(prov => {
        const slug = prov.toLowerCase().replace(/[^a-z0-9\s-]/g, '').replace(/[\s-]+/g, '-').replace(/^-+|-+$/g, '') || 'unnamed';
        const displayName = translations[lang].navbar.provinces_list[slug.replace(/-/g, '_')] || prov;
        return `<li><a href="/${lang}/provincias/${slug}.html" class="nav-link">${displayName}</a></li>`;
    }).join('');

    // Generar enlaces de bodegas
    const bodegaLinks = bodegas.map(bodega => {
        return `<li><a href="/${lang}/bodegas/${bodega.slug}.html" class="nav-link">${bodega.name}</a></li>`;
    }).join('');

    // Generar el HTML de la navbar
    const navbarHtml = `
        <nav id="sidebar">
            <div class="logo-container">
                <a href="/${lang}/" title="${translations[lang].navbar.home}">
                    <img src="https://www.1000malbecs.com/images/1000-malbecs-logo.png" alt="1000malbecs Logo" class="logo">
                </a>
            </div>
            <h2>${translations[lang].navbar.categories}</h2>
            <details>
                <summary><i class="fas fa-map-marker-alt"></i> ${translations[lang].navbar.provinces}</summary>
                <ul>
                    ${provinciaLinks}
                </ul>
            </details>
            <details>
                <summary><i class="fas fa-wine-bottle"></i> ${translations[lang].navbar.wineries}</summary>
                <ul>
                    ${bodegaLinks}
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

    const footerHtml = `
        <footer>
            <div class="footer-content">
                <div class="footer-contact">
                    <p><strong>${translations[lang].footer.inquiries}:</strong></p>
                    <div class="contact-links">
                        <a href="https://wa.me/4915158224728" target="_blank" class="icon-text"><i class="fab fa-whatsapp"></i><span>${translations[lang].footer.whatsapp}</span></a>
                        <span class="separator">|</span>
                        <a href="mailto:${translations[lang].footer.email}" class="icon-text"><i class="fas fa-envelope"></i><span>${translations[lang].footer.email}</span></a>
                    </div>
                </div>
                <div class="footer-social">
                    <p><strong>${translations[lang].footer.follow}:</strong></p>
                    <div class="social-links">
                        <a href="https://www.instagram.com/1000malbecs/" target="_blank" class="icon-text"><i class="fab fa-instagram"></i><span>${translations[lang].footer.instagram}</span></a>
                        <span class="separator">|</span>
                        <a href="https://x.com/1000malbecs" target="_blank" class="icon-text"><i class="fab fa-x-twitter"></i><span>${translations[lang].footer.twitter}</span></a>
                    </div>
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

        // Construir la estructura HTML completa con meta viewport
        const html = `
            <!DOCTYPE html>
            <html lang="${lang}">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <link rel="stylesheet" href="/css/styles.css">
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css" integrity="sha512-Kc323vGBEqzTmouAECnVceyQqyqdsSiqLQISBL29aUW4U/M7pSPA/gEUZQqv1cwx4OnYxTxve5UMg5GT6L4JJg==" crossorigin="anonymous" referrerpolicy="no-referrer">
                <!-- Extract and preserve original head content if needed -->
                ${pageHtml.match(/<head[^>]*>([\s\S]*?)<\/head>/i)?.[1] || ''}
            </head>
            <body>
                ${navbarHtml}
                <div class="main-content">
                    ${pageHtml.match(/<body[^>]*>([\s\S]*?)<\/body>/i)?.[1] || pageHtml}
                </div>
                ${footerHtml}
            </body>
            </html>
        `;

        return new Response(html, {
            headers: { 'Content-Type': 'text/html; charset=utf-8' },
            status: pageResponse.status
        });
    } catch (error) {
        console.error(`Worker error: ${error.message}`);
        return fetch(request); // Fallback a la página original
    }
}

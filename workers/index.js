export default {
  async fetch(request) {
    const url = new URL(request.url);
    const path = url.pathname.toLowerCase(); // Case-insensitive matching

    // Bypass Worker for static files and excluded paths
    const staticPaths = ['.js', '.json', '.css', '.png', '.jpg', '.jpeg', '.ico'];
    const excludedPaths = ['/footer.html', '/anotate.html', '/gracias.html', '/data/navigation.json', '/data/vinos.json', '/js/search.js'];
    if (staticPaths.some(ext => path.endsWith(ext)) || excludedPaths.some(excluded => path.includes(excluded))) {
      console.log('Bypassing Worker for path:', path);
      return fetch(request.url.replace('https://footer-injector.federico-augspach.workers.dev', 'https://1000malbecs.com'), {
        headers: request.headers
      });
    }

    // Determine language
    let lang = 'es';
    if (path.startsWith('/en/')) lang = 'en';
    else if (path.startsWith('/de/')) lang = 'de';
    else if (path.startsWith('/es/')) lang = 'es';
    const langParam = url.searchParams.get('lang');
    if (langParam && ['es', 'en', 'de'].includes(langParam)) {
      lang = langParam;
    }

    // Translations
    const translations = {
      es: {
        navbar: {
          categories: 'Categorías',
          provinces: 'Provincias',
          wineries: 'Bodegas',
          events: 'Eventos',
          info: 'Info',
          home: 'Volver al inicio',
          provinces_list: {
            la_rioja: 'La Rioja',
            mendoza: 'Mendoza',
            neuquen: 'Neuquén',
            salta: 'Salta',
            san_juan: 'San Juan'
          },
          events_list: {
            view_events: 'Ver eventos',
            sign_up: 'Anotate'
          },
          info_list: {
            about_us: 'About us',
            faq: 'FAQ',
            impressum: 'Impressum'
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
          info: 'Info',
          home: 'Back to home',
          provinces_list: {
            la_rioja: 'La Rioja',
            mendoza: 'Mendoza',
            neuquen: 'Neuquén',
            salta: 'Salta',
            san_juan: 'San Juan'
          },
          events_list: {
            view_events: 'View events',
            sign_up: 'Sign Up'
          },
          info_list: {
            about_us: 'About us',
            faq: 'FAQ',
            impressum: 'Impressum'
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
          info: 'Info',
          home: 'Zurück zur Startseite',
          provinces_list: {
            la_rioja: 'La Rioja',
            mendoza: 'Mendoza',
            neuquen: 'Neuquén',
            salta: 'Salta',
            san_juan: 'San Juan'
          },
          events_list: {
            view_events: 'Veranstaltungen ansehen',
            sign_up: 'Anmelden'
          },
          info_list: {
            about_us: 'About us',
            faq: 'FAQ',
            impressum: 'Impressum'
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

    // Load navigation data
    let provincias = [];
    let bodegas = [];
    try {
      const navResponse = await fetch(`https://1000malbecs.com/data/navigation.json?ts=${Date.now()}`);
      console.log('navigation.json status:', navResponse.status, 'URL:', navResponse.url);
      if (navResponse.ok) {
        const navData = await navResponse.json();
        provincias = navData.provincias || [];
        bodegas = navData.bodegas || [];
        console.log('Provincias loaded:', provincias);
        console.log('Bodegas loaded:', bodegas.map(b => b.name));
      } else {
        console.error('Error fetching navigation.json:', navResponse.status);
      }
    } catch (error) {
      console.error('Error loading navigation data:', error.message);
    }

    // Fallback for provincias and bodegas
    if (provincias.length === 0) {
      console.warn('Falling back to hardcoded provincias');
      provincias = ['la-rioja', 'mendoza', 'neuquen', 'salta', 'san-juan'];
    }
    if (bodegas.length === 0) {
      console.warn('Falling back to hardcoded bodegas');
      bodegas = [
        { name: 'A Corazón Abierto', slug: 'a-corazon-abierto' },
        { name: 'Agustín Lanús', slug: 'agustin-lanus' },
        { name: 'Alamos', slug: 'alamos' },
        { name: 'Bemberg Estate Wines', slug: 'bemberg-estate-wines' },
        { name: 'Bodega Amalaya', slug: 'bodega-amalaya' },
        { name: 'Bodega Bressia', slug: 'bodega-bressia' },
        { name: 'Bodega Chañarmuyo', slug: 'bodega-chanarmuyo' },
        { name: 'Bodega Colomé', slug: 'bodega-colome' },
        { name: 'Bodega Estancia Mendoza', slug: 'bodega-estancia-mendoza' },
        { name: 'Bodega Foster Lorca', slug: 'bodega-foster-lorca' },
        { name: 'Bodega Goyenechea', slug: 'bodega-goyenechea' },
        { name: 'Bodega Noemía Patagonia', slug: 'bodega-noemia-patagonia' },
        { name: 'Bodega Séptima', slug: 'bodega-septima' },
        { name: 'Bodega Tukma', slug: 'bodega-tukma' },
        { name: 'Bodegas Bianchi', slug: 'bodegas-bianchi' },
        { name: 'Bodegas Caro', slug: 'bodegas-caro' },
        { name: 'Casa Araujo', slug: 'casa-araujo' },
        { name: 'Catena Zapata', slug: 'catena-zapata' },
        { name: 'Chakana', slug: 'chakana' },
        { name: 'Cicchitti', slug: 'cicchitti' },
        { name: 'Dieter Meier & Family Wines', slug: 'dieter-meier-and-family-wines' },
        { name: 'El Esteco', slug: 'el-esteco' },
        { name: 'Eral Bravo', slug: 'eral-bravo' },
        { name: 'Falasco Wines', slug: 'falasco-wines' },
        { name: 'Familia Schroeder', slug: 'familia-schroeder' },
        { name: 'Finca La Anita', slug: 'finca-la-anita' },
        { name: 'Finca & Bodega Arca Yaco', slug: 'finca-bodega-arca-yaco' },
        { name: 'Finca Las Moras', slug: 'finca-las-moras' },
        { name: 'Finca Las Nubes', slug: 'finca-las-nubes' },
        { name: 'Finca y Bodega Vistalba', slug: 'finca-y-bodega-vistalba' },
        { name: 'Humberto Canale', slug: 'humberto-canale' },
        { name: 'Jasmine Monet', slug: 'jasmine-monet' },
        { name: 'Jorge Rubio', slug: 'jorge-rubio' },
        { name: 'Kaiken', slug: 'kaiken' },
        { name: 'La Rural', slug: 'la-rural' },
        { name: 'Los Haroldos', slug: 'los-haroldos' },
        { name: 'Luigi Bosca', slug: 'luigi-bosca' },
        { name: 'Mascota Vineyards', slug: 'mascota-vineyards' },
        { name: 'Piattelli Vineyards', slug: 'piattelli-vineyards' },
        { name: 'Rutini Wines', slug: 'rutini-wines' },
        { name: 'San Telmo', slug: 'san-telmo' },
        { name: 'Trapiche', slug: 'trapiche' },
        { name: 'Viña Alicia', slug: 'vina-alicia' },
        { name: 'Weinert Bodega y Cavas', slug: 'weinert-bodega-y-cavas' }
      ];
    }

    // Generate navigation HTML
    const provinciaLinks = provincias.map((prov) => {
      const slug = typeof prov === 'string' ? prov : prov.slug || prov.toLowerCase().replace(/[^a-z0-9\s-]/g, '').replace(/[\s-]+/g, '-').replace(/^-+|-+$/g, '') || 'unnamed';
      const displayName = translations[lang].navbar.provinces_list[slug.replace(/-/g, '_')] || (typeof prov === 'string' ? prov : prov.name || 'Unnamed');
      const isActive = path === `/${lang}/provincias/${slug}.html` ? ' active' : '';
      return `<li><a href="/${lang}/provincias/${slug}.html" class="nav-link${isActive}">${displayName}</a></li>`;
    }).join('');

    const bodegaLinks = bodegas.map((bodega) => {
      const slug = bodega.slug || bodega.name.toLowerCase().replace(/[^a-z0-9\s-]/g, '').replace(/[\s-]+/g, '-').replace(/^-+|-+$/g, '') || 'unnamed';
      const displayName = bodega.name || 'Unnamed';
      const isActive = path === `/${lang}/bodegas/${slug}.html` ? ' active' : '';
      return `<li><a href="/${lang}/bodegas/${slug}.html" class="nav-link${isActive}">${displayName}</a></li>`;
    }).join('');

    const navbarHtml = `
      <nav id="sidebar">
        <div class="logo-container">
          <a href="/${lang}/" title="${translations[lang].navbar.home}">
            <img src="/images/1000-malbecs-logo.png" alt="1000malbecs Logo" class="logo" onerror="this.src='https://via.placeholder.com/80x80?text=Logo+Nicht+Verfügbar';">
          </a>
        </div>
        <h2>${translations[lang].navbar.categories}</h2>
        <details>
          <summary><i class="fas fa-map-marker-alt"></i> ${translations[lang].navbar.provinces}</summary>
          <ul>${provinciaLinks}</ul>
        </details>
        <details>
          <summary><i class="fas fa-wine-bottle"></i> ${translations[lang].navbar.wineries}</summary>
          <ul>${bodegaLinks}</ul>
        </details>
        <details>
          <summary><i class="fas fa-calendar-alt"></i> ${translations[lang].navbar.events}</summary>
          <ul>
            <li><a href="/${lang}/eventos/eventos.html" class="nav-link">${translations[lang].navbar.events_list.view_events}</a></li>
            <li><a href="/${lang}/eventos/anotate.html" class="nav-link">${translations[lang].navbar.events_list.sign_up}</a></li>
          </ul>
        </details>
        <details>
          <summary><i class="fas fa-wine-glass"></i> ${translations[lang].navbar.info}</summary>
          <ul>
            <li><a href="/${lang}/about-us.html" class="nav-link">${translations[lang].navbar.info_list.about_us}</a></li>
            <li><a href="/${lang}/faq.html" class="nav-link">${translations[lang].navbar.info_list.faq}</a></li>
            <li><a href="/${lang}/impressum.html" class="nav-link">${translations[lang].navbar.info_list.impressum}</a></li>
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

    // Fetch the original page
    const pageResponse = await fetch(request.url.replace('https://footer-injector.federico-augspach.workers.dev', 'https://1000malbecs.com'), {
      headers: request.headers
    });
    let pageHtml = await pageResponse.text();

    // Only manipulate HTML responses
    const contentType = pageResponse.headers.get('content-type') || '';
    if (!contentType.includes('text/html')) {
      console.log('Non-HTML response, bypassing manipulation:', path);
      return pageResponse;
    }

    // Extract and modify HTML
    let modifiedHtml = pageHtml;

    // Replace or append sidebar
    const sidebarRegex = /<nav id="sidebar">[\s\S]*?<\/nav>/i;
    if (modifiedHtml.match(sidebarRegex)) {
      modifiedHtml = modifiedHtml.replace(sidebarRegex, navbarHtml);
    } else {
      modifiedHtml = modifiedHtml.replace(/<body[^>]*>/i, `$&${navbarHtml}`);
    }

    // Replace or append footer
    const footerRegex = /<footer>[\s\S]*?<\/footer>/i;
    if (modifiedHtml.match(footerRegex)) {
      modifiedHtml = modifiedHtml.replace(footerRegex, footerHtml);
    } else {
      modifiedHtml = modifiedHtml.replace(/<\/body>/i, `${footerHtml}</body>`);
    }

    // Ensure single <html>, <head>, and <body> tags
    const htmlRegex = /<!DOCTYPE html>\s*<html[^>]*>\s*(<head>[\s\S]*?</head>)?\s*(<body[^>]*>[\s\S]*?</body>)?\s*<\/html>/i;
    const match = modifiedHtml.match(htmlRegex);
    if (match) {
      const headContent = match[1] || '<head></head>';
      const bodyContent = match[2] || '<body></body>';
      modifiedHtml = `<!DOCTYPE html><html lang="${lang}">${headContent}${bodyContent}</html>`;
    }

    return new Response(modifiedHtml, {
      status: pageResponse.status,
      statusText: pageResponse.statusText,
      headers: {
        ...Object.fromEntries(pageResponse.headers),
        'content-type': 'text/html; charset=utf-8',
        'Cache-Control': 'public, max-age=0, must-revalidate' // Prevent caching issues
      }
    });
  }
};

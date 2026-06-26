export default {
  async fetch(request) {
    const url = new URL(request.url);
    const path = url.pathname;
    const excludedPaths = ["/footer.html", "/anotate.html", "/gracias.html", "/data/navigation.json"];
    if (excludedPaths.some((excluded) => path.includes(excluded))) {
      return fetch(request.url.replace("https://footer-injector.federico-augspach.workers.dev", "https://1000malbecs.com"), {
        headers: request.headers
      });
    }
    let lang = "es";
    if (path.startsWith("/en/")) lang = "en";
    else if (path.startsWith("/de/")) lang = "de";
    else if (path.startsWith("/es/")) lang = "es";

    const b2bText = lang === "es" ? "Bares y Restaurants" :
                    lang === "en" ? "Bars & Restaurants" :
                                    "Bars & Restaurants";

    const b2bLink = `
      <a href="/${lang}/b2b.html" class="nav-link${path === `/${lang}/b2b.html` ? ' active' : ''}">
        <i class="fas fa-utensils"></i> ${b2bText}
      </a>`;

    const translations = {
      es: {
        navbar: {
          categories: "Categorías",
          provinces: "Provincias",
          wineries: "Bodegas",
          events: "Eventos",
          info: "Info",
          offers: "Ofertas",
          home: "Volver al inicio",
          blog: "1000 Historias - Blog",
          B2B: "Bares y Restaurants",
          provinces_list: {
            la_rioja: "La Rioja",
            mendoza: "Mendoza",
            neuquen: "Neuquén",
            salta: "Salta",
            san_juan: "San Juan"
          },
          events_list: {
            view_events: "Ver eventos",
            sign_up: "Anotate"
          },
          info_list: {
            about_us: "About us",
            faq: "FAQ",
            impressum: "Impressum",
            agb: "AGB",
            datenschutz: "Datenschutz"
          }
        },
        footer: {
          inquiries: "Consultas",
          follow: "Síguenos",
          whatsapp: "+49 151 5822 4728",
          email: "federico@1000malbecs.com",
          instagram: "@1000malbecs",
          twitter: "@1000malbecs"
        }
      },
      en: {
        navbar: {
          categories: "Categories",
          provinces: "Provinces",
          wineries: "Wineries",
          events: "Events",
          info: "Info",
          offers: "Offers",
          home: "Back to home",
          blog: "1000 Stories - Blog",
          B2B: "Bares y Restaurants", 
          provinces_list: {
            la_rioja: "La Rioja",
            mendoza: "Mendoza",
            neuquen: "Neuquén",
            salta: "Salta",
            san_juan: "San Juan"
          },
          events_list: {
            view_events: "View events",
            sign_up: "Sign Up"
          },
          info_list: {
            about_us: "About us",
            faq: "FAQ",
            impressum: "Impressum",
            agb: "AGB"
          }
        },
        footer: {
          inquiries: "Inquiries",
          follow: "Follow us",
          whatsapp: "+49 151 5822 4728",
          email: "federico@1000malbecs.com",
          instagram: "@1000malbecs",
          twitter: "@1000malbecs"
        }
      },
      de: {
        navbar: {
          categories: "Kategorien",
          provinces: "Provinzen",
          wineries: "Weingüter",
          events: "Veranstaltungen",
          info: "Info",
          offers: "Angebote",
          home: "Zurück zur Startseite",
          blog: "1000 Geschichten - Blog",
          provinces_list: {
            la_rioja: "La Rioja",
            mendoza: "Mendoza",
            neuquen: "Neuquén",
            salta: "Salta",
            san_juan: "San Juan"
          },
          events_list: {
            view_events: "Veranstaltungen ansehen",
            sign_up: "Anmelden"
          },
          info_list: {
            about_us: "About us",
            faq: "FAQ",
            impressum: "Impressum",
            agb: "AGB"
          }
        },
        footer: {
          inquiries: "Anfragen",
          follow: "Folge uns",
          whatsapp: "+49 151 5822 4728",
          email: "federico@1000malbecs.com",
          instagram: "@1000malbecs",
          twitter: "@1000malbecs"
        }
      }
    };

    let provincias = [];
    let bodegas = [];
    try {
      const navResponse = await fetch(`https://1000malbecs.com/data/navigation.json?ts=${Date.now()}`);
      if (navResponse.ok) {
        const navData = await navResponse.json();
        provincias = navData.provincias || [];
        bodegas = navData.bodegas || [];
      }
    } catch (e) { }

    if (provincias.length === 0) {
      provincias = ["La Rioja", "Mendoza", "Neuquén", "Salta", "San Juan"];
    }
    if (bodegas.length === 0) {
      console.warn("Falling back to hardcoded bodegas");
      bodegas = [
        { name: "A Corazón Abierto", slug: "a-corazon-abierto" },
        { name: "Agustín Lanús", slug: "agustin-lanus" },
        { name: "Alamos", slug: "alamos" },
        { name: "Andeluna", slug: "andeluna" },
        { name: "Bemberg Estate Wines", slug: "bemberg-estate-wines" },
        { name: "Bodega Bressia", slug: "bodega-bressia" },
        { name: "Bodega Chañarmuyo", slug: "bodega-chanarmuyo" },
        { name: "Escorihuela Gascón", slug: "escorihuela gascon" },
        { name: "Bodega Estancia Mendoza", slug: "bodega-estancia-mendoza" },
        { name: "Bodega Foster Lorca", slug: "bodega-foster-lorca" },
        { name: "Bodega Goyenechea", slug: "bodega-goyenechea" },
        { name: "Bodega Malma", slug: "bodega-malma" },
        { name: "Bodega Noemía Patagonia", slug: "bodega-noemia-patagonia" },
        { name: "Bodega Séptima", slug: "bodegas-septima" },
        { name: "Bodega Tukma", slug: "bodega-tukma" },
        { name: "Bodegas Bianchi", slug: "bodegas-bianchi" },
        { name: "Casa Araujo", slug: "casa-araujo" },
        { name: "Catena Zapata", slug: "catena-zapata" },
        { name: "Chakana", slug: "chakana" },
        { name: "Cicchitti", slug: "cicchitti" },
        { name: "Dieter Meier & Family Wines", slug: "dieter-meier-and-family-wines" },
        { name: "El Esteco", slug: "el-esteco" },
        { name: "Eral Bravo", slug: "eral-bravo" },
        { name: "Falasco Wines", slug: "falasco-wines" },
        { name: "Familia Schroeder", slug: "familia-schroeder" },
        { name: "Finca La Anita", slug: "finca-la-anita" },
        { name: "Finca & Bodega Arca Yaco", slug: "finca-bodega-arca-yaco" },
        { name: "Finca y Bodega Vistalba", slug: "finca-y-bodega-vistalba" },
        { name: "Finca Las Moras", slug: "finca-las-moras" },
        { name: "Finca Las Nubes", slug: "finca-las-nubes" },
        { name: "Humberto Canale", slug: "humberto-canale" },
        { name: "Jasmine Monet", slug: "jasmine-monet" },
        { name: "Jorge Rubio", slug: "jorge-rubio" },
        { name: "Kaiken", slug: "kaiken" },
        { name: "La Rural", slug: "la-rural" },
        { name: "Los Haroldos", slug: "los-haroldos" },
        { name: "Luigi Bosca", slug: "luigi-bosca" },
        { name: "Mascota Vineyards", slug: "mascota-vineyards" },
        { name: "Vignes des Andes", slug: "vignes des andes" },
        { name: "Piattelli Vineyards", slug: "piattelli-vineyards" },
        { name: "Rutini Wines", slug: "rutini-wines" },
        { name: "San Telmo", slug: "san-telmo" },
        { name: "Susana Balbo", slug: "susana-balbo" },
        { name: "Trapiche", slug: "trapiche" },
        { name: "Viña Alicia", slug: "vina-alicia" },
        { name: "Viña Cobos", slug: "vina-cobos" },
        { name: "Weinert Bodega y Cavas", slug: "weinert-bodega-y-cavas" }
      ];
    }

    const provinciaLinks = provincias.map((prov) => {
      const slug = prov.toLowerCase().replace(/[^a-z0-9\s-]/g, "").replace(/[\s-]+/g, "-").replace(/^-+|-+$/g, "") || "unnamed";
      const displayName = translations[lang].navbar.provinces_list[slug.replace(/-/g, "_")] || prov;
      const isActive = path === `/${lang}/provincias/${slug}.html` ? " active" : "";
      return `<li><a href="/${lang}/provincias/${slug}.html" class="nav-link${isActive}">${displayName}</a></li>`;
    }).join("");

    const bodegaLinks = bodegas.map((bodega) => {
      const isActive = path === `/${lang}/bodegas/${bodega.slug}.html` ? " active" : "";
      return `<li><a href="/${lang}/bodegas/${bodega.slug}.html" class="nav-link${isActive}">${bodega.name}</a></li>`;
    }).join("");

    const eventLinks = [
      { href: `/eventos/eventos.html`, text: translations[lang].navbar.events_list.view_events },
      { href: `/eventos/anotate.html`, text: translations[lang].navbar.events_list.sign_up }
    ].map((link) => {
      const isActive = path === `/${lang}${link.href}` ? " active" : "";
      return `<li><a href="/${lang}${link.href}" class="nav-link${isActive}">${link.text}</a></li>`;
    }).join("");
    
    const infoLinks = [
      { href: `/about-us.html`, text: translations[lang].navbar.info_list.about_us },
      { href: `/faq.html`, text: translations[lang].navbar.info_list.faq },
      { href: `/impressum.html`, text: translations[lang].navbar.info_list.impressum },
      { href: `/agb.html`, text: translations[lang].navbar.info_list.agb },
      { href: `/datenschutz.html`,  text: lang === "de" ? "Datenschutz" : 
                                 lang === "es" ? "Política de Privacidad" : 
                                 "Privacy Policy" },
      { href: `/devoluciones.html`, text: lang === "es" ? "Política de Devoluciones" : lang === "en" ? "Return Policy" : "Widerrufsbelehrung" }
    ].map((link) => {
      const isActive = path === `/${lang}${link.href}` ? " active" : "";
      return `<li><a href="/${lang}${link.href}" class="nav-link${isActive}">${link.text}</a></li>`;
    }).join("");

        const navbarHtml = `
      <!-- SIDEBAR (siempre se inyecta) -->
      <nav id="sidebar">
        <div class="logo-container">
          <a href="/${lang}/">
            <img src="/images/1000-malbecs-logo.png" alt="1000malbecs Logo" class="logo">
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
          <ul>${eventLinks}</ul>
        </details>
        <a href="/${lang}/ofertas.html" class="nav-link${path === `/${lang}/ofertas.html` ? " active" : ""}">
          <i class="fas fa-tag"></i> ${translations[lang].navbar.offers}
        </a>
        ${b2bLink}
        <a href="/${lang}/blog/index.html" class="nav-link${path === `/${lang}/blog/index.html` ? " active" : ""}">
          <i class="fas fa-book"></i> ${translations[lang].navbar.blog}
        </a>
        <details open>
          <summary><i class="fas fa-wine-glass-alt"></i> ${translations[lang].navbar.info}</summary>
          <ul>${infoLinks}</ul>
        </details>
      </nav>

      <!-- HEADER MOBILE + CARRITO -->
      <header class="mobile-header">
        <button class="hamburger" aria-label="Menu" aria-expanded="false">
          <svg class="hamburger-icon" viewBox="0 0 100 100" width="30" height="30">
            <rect class="line top" x="15" y="25" width="70" height="10" rx="5" fill="var(--primary)"/>
            <rect class="line mid" x="15" y="45" width="70" height="10" rx="5" fill="var(--primary)"/>
            <rect class="line bot" x="15" y="65" width="70" height="10" rx="5" fill="var(--primary)"/>
          </svg>
        </button>
        
        <a href="/${lang}/" class="logo-link">
          <img src="/images/1000-malbecs-logo.png" alt="1000 Malbecs" class="logo">
        </a>

        <!-- CARRITO -->
        <a href="/${lang}/carrito.html" style="position: relative; text-decoration: none; color: #4A2C59; font-size: 1.65em; margin-left: auto; padding-right: 15px;">
          🛒
          <span id="cart-count" style="position:absolute; top:-7px; right:-6px; background:#e74c3c; color:white; font-size:11px; font-weight:bold; min-width:18px; height:18px; border-radius:50%; display:flex; align-items:center; justify-content:center; line-height:1;">0</span>
        </a>
      </header>
    `;

    // ==================== LÓGICA DE INYECCIÓN ====================
    let pageHtml = await pageResponse.text();

    // Detectar si la página ya tiene header propio
    const hasOwnHeader = pageHtml.includes('class="mobile-header"') || 
                        pageHtml.includes('class="topbar"') ||
                        pageHtml.includes('class="header"');

    const finalHtml = `
      <!DOCTYPE html>
      <html lang="${lang}">
      <head>
        ... (tu head actual)
      </head>
      <body>
        ${navbarHtml}                    <!-- Siempre inyectamos el sidebar + mobile header -->
        
        <div class="main-content">
          ${pageHtml.match(/<body[^>]*>([\s\S]*?)<\/body>/i)?.[1] || pageHtml}
        </div>
        ${footerHtml}
      </body>
      </html>
     `;
      return new Response(html, {
        headers: { "Content-Type": "text/html; charset=utf-8" },
        status: pageResponse.status
      });
    } catch (error) {
      console.error(`Worker error: ${error.message} for URL: ${request.url}`);
      return new Response("Internal Server Error", {
        status: 500,
        headers: { "Content-Type": "text/plain" }
      });
    }
  }
};

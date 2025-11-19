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
  // === B2B LINK CON TRADUCCIÓN E ICONO ===
    const b2bText = lang === "es" ? "Bares y Restaurants" :
                    lang === "en" ? "Bars & Restaurants" :
                    lang === "de" ? "Bars & Restaurants";

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
          offers: "Ofertas", // Added
          home: "Volver al inicio",
          blog: "1000 Historias - Blog",
          B2B: "Bares y Restaurants"
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
            agb: "AGB"
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
          offers: "Offers", // Added
          home: "Back to home",
          blog: "1000 Stories - Blog",
          B2B: "Bares y Restaurants" 
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
          offers: "Angebote", // Added
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
      console.log("navigation.json status:", navResponse.status, "URL:", navResponse.url);
      if (navResponse.ok) {
        const navData = await navResponse.json();
        provincias = navData.provincias || [];
        bodegas = navData.bodegas || [];
        console.log("Provincias loaded:", provincias);
        console.log("Bodegas loaded:", bodegas.map(b => b.name));
      } else {
        console.error("Error fetching navigation.json:", navResponse.status);
      }
    } catch (error) {
      console.error("Error loading navigation data:", error.message);
    }

    if (provincias.length === 0) {
      console.warn("Falling back to hardcoded provincias");
      provincias = ["La Rioja", "Mendoza", "Neuquén", "Salta", "San Juan"];
    }
    if (bodegas.length === 0) {
      console.warn("Falling back to hardcoded bodegas");
      bodegas = [
        { name: "A Corazón Abierto", slug: "a-corazon-abierto" },
        { name: "Agustín Lanús", slug: "agustin-lanus" },
        { name: "Alamos", slug: "alamos" },
        { name: "Bemberg Estate Wines", slug: "bemberg-estate-wines" },
        { name: "Bodega Bressia", slug: "bodega-bressia" },
        { name: "Bodega Chañarmuyo", slug: "bodega-chanarmuyo" },
        { name: "Bodega Estancia Mendoza", slug: "bodega-estancia-mendoza" },
        { name: "Bodega Foster Lorca", slug: "bodega-foster-lorca" },
        { name: "Bodega Goyenechea", slug: "bodega-goyenechea" },
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
        { name: "Piattelli Vineyards", slug: "piattelli-vineyards" },
        { name: "Rutini Wines", slug: "rutini-wines" },
        { name: "San Telmo", slug: "san-telmo" },
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
      { href: `/agb.html`, text: translations[lang].navbar.info_list.agb }
      ].map((link) => {
      const isActive = path === `/${lang}${link.href}` ? " active" : "";
      return `<li><a href="/${lang}${link.href}" class="nav-link${isActive}">${link.text}</a></li>`;
      }).join("");

    const navbarHtml = `
      <nav id="sidebar">
        <div class="logo-container">
          <a href="/${lang}/" title="Volver al inicio">
            <img src="/images/1000-malbecs-logo.png" alt="1000malbecs Logo" class="logo">
          </a>
        </div>

        <!-- NUEVA SECCIÓN B2B -->
        ${b2bLink}
        
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
            ${eventLinks}
          </ul>
        </details>
        <a href="/${lang}/ofertas.html" class="nav-link${path === `/${lang}/ofertas.html` ? ' active' : ''}"><i class="fas fa-tag"></i> ${translations[lang].navbar.offers}</a>
        <a href="/${lang}/blog/index.html" class="nav-link${path === `/${lang}/blog/index.html` ? ' active' : ''}"><i class="fas fa-book"></i> ${translations[lang].navbar.blog}</a>
        <details open>
          <summary><i class="fas fa-wine-glass"></i> ${translations[lang].navbar.info}</summary>
          <ul>
            ${infoLinks}
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

    try {
      console.log("Fetching page:", request.url, "Redirected to:", request.url.replace("https://footer-injector.federico-augspach.workers.dev", "https://1000malbecs.com"));
      const pageResponse = await fetch(request.url.replace("https://footer-injector.federico-augspach.workers.dev", "https://1000malbecs.com"), {
        headers: request.headers
      });
      console.log("Page response status:", pageResponse.status, "URL:", pageResponse.url);
      if (!pageResponse.ok) {
        console.error(`Failed to fetch page: ${pageResponse.status} for URL: ${request.url}`);
        if (pageResponse.status === 404) {
          const custom404Response = await fetch(`https://1000malbecs.com/${lang}/404.html`);
          if (custom404Response.ok) {
            let custom404Html = await custom404Response.text();
            const html = `
              <!DOCTYPE html>
              <html lang="${lang}">
              <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <link rel="stylesheet" href="/css/styles.css">
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css" integrity="sha512-Kc323vGBEqzTmouAECnVceyQqyqdsSiqLQISBL29aUW4U/M7pSPA/gEUZQqv1cwx4OnYxTxve5UMg5GT6L4JJg==" crossorigin="anonymous" referrerpolicy="no-referrer">
                <style>
                  #sidebar .nav-link { padding-left: 20px; }
                  #sidebar details > summary { padding-left: 20px; cursor: pointer; }
                  #sidebar .nav-link:hover, #sidebar details > summary:hover { color: #5A1D39; background-color: #f5f5f5; }
                  #sidebar > a.nav-link { margin-bottom: 10px; }
                </style>
                ${custom404Html.match(/<head[^>]*>([\s\S]*?)<\/head>/i)?.[1] || ""}
              </head>
              <body>
                ${navbarHtml}
                <div class="main-content">
                  ${custom404Html.match(/<body[^>]*>([\s\S]*?)<\/body>/i)?.[1] || custom404Html}
                </div>
                ${footerHtml}
              </body>
              </html>
            `;
            return new Response(html, {
              headers: { "Content-Type": "text/html; charset=utf-8" },
              status: 404
            });
          }
          return new Response("Page not found", {
            status: 404,
            headers: { "Content-Type": "text/plain" }
          });
        }
        return pageResponse;
      }

      const contentType = pageResponse.headers.get("content-type") || "";
      if (!contentType.includes("text/html")) {
        return pageResponse;
      }

      let pageHtml = await pageResponse.text();
      const html = `
        <!DOCTYPE html>
        <html lang="${lang}">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <link rel="stylesheet" href="/css/styles.css">
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css" integrity="sha512-Kc323vGBEqzTmouAECnVceyQqyqdsSiqLQISBL29aUW4U/M7pSPA/gEUZQqv1cwx4OnYxTxve5UMg5GT6L4JJg==" crossorigin="anonymous" referrerpolicy="no-referrer">
          <style>
            #sidebar .nav-link { padding-left: 20px; }
            #sidebar details > summary { padding-left: 20px; cursor: pointer; }
            #sidebar .nav-link:hover, #sidebar details > summary:hover { color: #5A1D39; background-color: #f5f5f5; }
            #sidebar > a.nav-link { margin-bottom: 10px; }
          </style>
          ${pageHtml.match(/<head[^>]*>([\s\S]*?)<\/head>/i)?.[1] || ""}
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

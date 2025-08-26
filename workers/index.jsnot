var index_default = {
  async fetch(request) {
    const url = new URL(request.url);
    const path = url.pathname;
    const excludedPaths = ["/footer.html", "/anotate.html", "/gracias.html", "/data/navigation.json"];
    if (excludedPaths.some((excluded) => path.includes(excluded))) {
      console.log("Bypassing Worker for path:", path);
      return fetch(request.url.replace("https://footer-injector.federico-augspach.workers.dev", "https://1000malbecs.com"), {
        headers: request.headers
      });
    }
    let lang = "es";
    if (path.startsWith("/en/")) lang = "en";
    else if (path.startsWith("/de/")) lang = "de";
    else if (path.startsWith("/es/")) lang = "es";
    const langParam = url.searchParams.get("lang");
    if (langParam && ["es", "en", "de"].includes(langParam)) {
      lang = langParam;
    }
    const translations = {
      es: {
        navbar: { /* ... (mismo contenido que antes) */ },
        footer: { /* ... (mismo contenido que antes) */ }
      },
      en: {
        navbar: { /* ... (mismo contenido que antes) */ },
        footer: { /* ... (mismo contenido que antes) */ }
      },
      de: {
        navbar: { /* ... (mismo contenido que antes) */ },
        footer: { /* ... (mismo contenido que antes) */ }
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
        console.log("Bodegas loaded:", bodegas.map((b) => b.name));
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
        /* ... (resto de bodegas como antes) ... */
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
      { href: `/impressum.html`, text: translations[lang].navbar.info_list.impressum }
    ].map((link) => {
      const isActive = path === `/${lang}${link.href}` ? " active" : "";
      return `<li><a href="/${lang}${link.href}" class="nav-link${isActive}">${link.text}</a></li>`;
    }).join("");
    const navbarHtml = `
      <nav id="sidebar">
        <div class="logo-container">
          <a href="/${lang}/" title="${translations[lang].navbar.home}">
            <img src="/images/1000-malbecs-logo.png" alt="1000malbecs Logo" class="logo">
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
            ${eventLinks}
          </ul>
        </details>
        <details>
          <summary><i class="fas fa-wine-glass"></i> ${translations[lang].navbar.info}</summary>
          <ul>
            ${infoLinks}
          </ul>
        </details>
      </nav>
    `;
    const sidebarHtml = `
      <div id="sidebar">
        <div class="logo-container">
          <img src="/images/l000-malbecs-logo.png" alt="1000malbecs Logo" class="logo">
        </div>
        <h2>Menú</h2>
        <details>
          <summary><i class="fas fa-home"></i> Inicio</summary>
          <ul>
            <li><a href="/${lang}/" class="nav-link">Home</a></li>
          </ul>
        </details>
        <details>
          <summary><i class="fas fa-wine-bottle"></i> Buscador</summary>
          <ul>
            <li><a href="/${lang}/buscador.html" class="nav-link">Buscador de Vinos</a></li>
          </ul>
        </details>
        <div class="language-selector">
          <a href="?lang=es" data-lang="es" class="nav-link ${lang === 'es' ? 'active' : ''}">ES</a> |
          <a href="?lang=en" data-lang="en" class="nav-link ${lang === 'en' ? 'active' : ''}">EN</a> |
          <a href="?lang=de" data-lang="de" class="nav-link ${lang === 'de' ? 'active' : ''}">DE</a>
        </div>
      </div>
      <script>
        // Forzar inicialización de wineSearch tras inyección
        function initWineSearch() {
          console.log('Worker: Checking for wineSearch initialization');
          const wineSearchElement = document.querySelector('body[x-data="wineSearch()"]');
          if (wineSearchElement && window.Alpine && wineSearchElement.__x) {
            console.log('Worker: wineSearch element found, forcing init');
            wineSearchElement.__x.$data.init();
          } else {
            console.warn('Worker: wineSearch element not found or Alpine not ready, retrying...');
            setTimeout(initWineSearch, 100); // Reintento cada 100ms
          }
        }
        document.addEventListener('DOMContentLoaded', initWineSearch);
      </script>
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
            const html2 = `
              <!DOCTYPE html>
              <html lang="${lang}">
              <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <link rel="stylesheet" href="/css/styles.css">
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css" integrity="sha512-Kc323vGBEqzTmouAECnVceyQqyqdsSiqLQISBL29aUW4U/M7pSPA/gEUZQqv1cwx4OnYxTxve5UMg5GT6L4JJg==" crossorigin="anonymous" referrerpolicy="no-referrer">
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
            return new Response(html2, {
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
          ${pageHtml.match(/<head[^>]*>([\s\S]*?)<\/head>/i)?.[1] || ""}
        </head>
        <body>
          ${sidebarHtml}
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
export {
  index_default as default
};

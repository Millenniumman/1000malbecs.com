<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Descubre los mejores Malbecs de Argentina, desde la Patagonia hasta la Puna.">
    <title>1000malbecs - Los 1000 Mejores Malbecs</title>

    <!-- Open Graph Meta Tags -->
    <meta property="og:title" content="1000 Malbecs - Los 1000 mejores Malbecs Argentinos">
    <meta property="og:description" content="Descubre nuestra selección de Malbecs argentinos, desde la Patagonia hasta la Puna.">
    <meta property="og:image" content="https://www.1000malbecs.com/images/l000-malbecs-logo.png">
    <meta property="og:image:type" content="image/png">
    <meta property="og:image:width" content="1200">
    <meta property="og:image:height" content="630">
    <meta property="og:url" content="https://www.1000malbecs.com/">
    <meta property="og:type" content="website">

    <!-- Twitter Card Meta Tags -->
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="1000 Malbecs - Catálogo de Vinos">
    <meta name="twitter:description" content="Descubre nuestra selección de Malbecs argentinos, desde la Patagonia hasta la Puna.">
    <meta name="twitter:image" content="https://www.1000malbecs.com/images/l000-malbecs-logo.png">

  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiQ==" crossorigin="anonymous" referrerpolicy="no-referrer" />
  <style>
     <style>
    /* Estilos para la barra de navegación */
    body {
      margin: 0;
      font-family: Arial, sans-serif;
    }

    .navbar {
      background-color: #2c1b2a; /* Color burdeos oscuro, inspirado en el vino */
      color: #fff;
      padding: 15px 20px;
      position: sticky;
      top: 0;
      z-index: 1000;
      box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
    }

    .navbar .container {
      max-width: 1200px;
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .navbar .logo {
      font-size: 24px;
      font-weight: bold;
      text-decoration: none;
      color: #fff;
    }

    .navbar .logo i {
      margin-right: 8px;
    }

    .navbar .nav-links {
      list-style: none;
      margin: 0;
      padding: 0;
      display: flex;
      align-items: center;
    }

    .navbar .nav-links li {
      margin-left: 20px;
    }

    .navbar .nav-links a {
      color: #fff;
      text-decoration: none;
      font-size: 16px;
      transition: color 0.3s;
    }

    .navbar .nav-links a:hover {
      color: #d4a373; /* Color dorado para hover */
    }

    .navbar .dropdown {
      position: relative;
    }

    .navbar .dropdown-content {
      display: none;
      position: absolute;
      background-color: #2c1b2a;
      min-width: 160px;
      box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
      z-index: 1;
      top: 100%;
      left: 0;
    }

    .navbar .dropdown-content a {
      color: #fff;
      padding: 12px 16px;
      display: block;
      text-decoration: none;
    }

    .navbar .dropdown-content a:hover {
      background-color: #3f2a44; /* Color ligeramente más claro */
    }

    .navbar .dropdown:hover .dropdown-content {
      display: block;
    }

    .navbar .menu-icon {
      display: none;
      font-size: 24px;
      cursor: pointer;
    }

    /* Estilos responsive */
    @media (max-width: 768px) {
      .navbar .nav-links {
        display: none;
        flex-direction: column;
        width: 100%;
        position: absolute;
        top: 60px;
        left: 0;
        background-color: #2c1b2a;
      }

      .navbar .nav-links.active {
        display: flex;
      }

      .navbar .nav-links li {
        margin: 10px 0;
        text-align: center;
      }

      .navbar .dropdown-content {
        position: static;
        box-shadow: none;
      }

      .navbar .menu-icon {
        display: block;
      }
    }
  </style>
</head>
<body>
  <nav class="navbar">
    <div class="container">
      <a href="/" class="logo"><i class="fas fa-wine-glass-alt"></i>1000malbecs</a>
      <ul class="nav-links">
        <li><a href="/">Inicio</a></li>
        <li class="dropdown">
          <a href="/vinos">Vinos <i class="fas fa-chevron-down"></i></a>
          <div class="dropdown-content">
            <!-- Filtros basados en las product cards -->
            <a href="/vinos?provincia=mendoza">Mendoza</a>
            <a href="/vinos?provincia=salta">Salta</a>
            <a href="/vinos?tipo=malbec">Malbec</a>
            <a href="/vinos?tipo=cabernet-sauvignon">Cabernet Sauvignon</a>
            <a href="/vinos?a%C3%B1ada=2022">2022</a>
            <a href="/vinos?a%C3%B1ada=2021">2021</a>
          </div>
        </li>
        <li><a href="/bodegas">Bodegas</a></li>
        <li><a href="/contacto">Contacto</a></li>
        <li><a href="/carrito"><i class="fas fa-shopping-cart"></i></a></li>
      </ul>
      <div class="menu-icon"><i class="fas fa-bars"></i></div>
    </div>
  </nav>
  <div class="main-content">
    <h2 class="welcome-title">Bienvenidos a 1000 Malbecs, el sitio de los 1000 mejores malbecs argentinos, desde la Patagonia hasta la Puna</h2>
    <button id="reset-filters">Limpiar Filtros</button>
    <div class="featured-products">
      <!-- Example product card -->
         <div class="product-card" 
                 data-provincia="Mendoza" 
                 data-region="San Rafael" 
                 data-bodega="Casa Araujo" 
                 data-tipo="Malbec" 
                 data-anada="2023" 
                 data-precio="9.49" 
                 data-precio-rango="0-10 EUR" 
                 data-altura="500-1000 msnm">
                <img src="/images/small/casa-araujo-roble-2023.jpg" alt="Botella de Casa Araujo Roble 2023">
                <span class="info-icon">🍷</span>
                <div class="overlay">
                    <p><strong>Bodega:</strong> Casa Araujo</p>
                    <p><strong>Provincia:</strong> Mendoza</p>
                    <p><strong>Región:</strong> San Rafael</p>
                    <p><strong>Altura:</strong> 520</p>
                </div>
         <h3>Casa Araujo Cask - Malbec - 2023</h3>
        <p>€9,49</p>
        <a href="/vinos/casa-araujo-roble-2023.html">Comprar</a>
      </div>   
            <div class="product-card" 
                 data-provincia="Mendoza" 
                 data-region="San Rafael" 
                 data-bodega="Casa Araujo" 
                 data-tipo="Malbec Bivarietal" 
                 data-anada="2023" 
                 data-precio="10.9" 
                 data-precio-rango="10-20 EUR" 
                 data-altura="500-1000 msnm">
                <img src="/images/small/casa-araujo-mimi-2023.jpg" alt="Botella de Casa Araujo Mimi 2023">
                <span class="info-icon">🍷</span>
                <div class="overlay">
                    <p><strong>Bodega:</strong> Casa Araujo</p>
                    <p><strong>Provincia:</strong> Mendoza</p>
                    <p><strong>Región:</strong> San Rafael</p>
                    <p><strong>Altura:</strong> 520</p>
                </div>
        <h3>Mimi - Malbec Bivarietal - 2023</h3>
        <p>€12</p>
        <a href="/vinos/casa-araujo-mimi-2023.html">Comprar</a>
      </div>
            <div class="product-card" 
                 data-provincia="Mendoza" 
                 data-region="San Rafael" 
                 data-bodega="Casa Araujo" 
                 data-tipo="Malbec" 
                 data-anada="2023" 
                 data-precio="12.49" 
                 data-precio-rango="10-20 EUR" 
                 data-altura="500-1000 msnm">
                <img src="/images/small/nucha-2023.jpg" alt="Botella de Nucha 2023">
                <span class="info-icon">🍷</span>
                <div class="overlay">
                    <p><strong>Bodega:</strong> Casa Araujo</p>
                    <p><strong>Provincia:</strong> Mendoza</p>
                    <p><strong>Región:</strong> San Rafael</p>
                    <p><strong>Altura:</strong> 520</p>
</div>
        <h3>Nucha Malbec Orgánico - 2023</h3>
        <p>€12.49</p>
        <a href="/vinos/nucha-2023.html">Comprar</a>
      </div>
            <div class="product-card" 
                 data-provincia="Mendoza" 
                 data-region="San Rafael" 
                 data-bodega="Casa Araujo" 
                 data-tipo="Reserva Malbec" 
                 data-anada="2023" 
                 data-precio="12.99" 
                 data-precio-rango="10-20 EUR" 
                 data-altura="500-1000 msnm">
                <img src="/images/small/graciano-reserva-blend-2023.jpg" alt="Botella de Graciano Reserva Blend 2023">
                <span class="info-icon">🍷</span>
                <div class="overlay">
                    <p><strong>Bodega:</strong> Casa Araujo</p>
                    <p><strong>Provincia:</strong> Mendoza</p>
                    <p><strong>Región:</strong> San Rafael</p>
                    <p><strong>Altura:</strong> 520</p>
                </div>
        <h3>Graciano Reserva Blend - Malbec - 2023</h3>
        <p>€12.99</p>
        <a href="vinos/graciano-reserva-blend-2023.html">Comprar</a>
      </div>
        
      <div class="product-card"
           data-provincia="Mendoza"
           data-region="San Rafael"
           data-bodega="Bodega Goyenechea"
           data-tipo="Malbec"
           data-anada="2022"
           data-precio="19.99"
           data-precio-rango="10-20 EUR"
           data-altura="500-1000 msnm">
        <img src="/images/small/quinta-generacin-malbec-2022.jpg" alt="Botella de Quinta Generación Malbec 2022"
             onerror="this.src='https://via.placeholder.com/200x200?text=Imagen+No+Disponible'; console.error('Image failed to load:', this.src);">
        <span class="info-icon">🍷</span>
        <div class="overlay">
          <p><strong>Bodega:</strong> Bodega Goyenechea</p>
          <p><strong>Provincia:</strong> Mendoza</p>
          <p><strong>Región:</strong> San Rafael</p>
          <p><strong>Altura:</strong> 520</p>
          <p><strong>Código:</strong> BG-QuintaGene-2022</p>
        </div>
        <h3>Quinta Generación - Malbec - 2022</h3>
        <p class="price">€19.99</p>
        <a href="/vinos/quinta-generacin-malbec-2022.html" class="buy-button">Comprar</a>
      </div>
     
      <div class="product-card"
           data-provincia="Mendoza"
           data-region="San Rafael"
           data-bodega="Bodega Goyenechea"
           data-tipo="Malbec"
           data-anada="2022"
           data-precio="9.49"
           data-precio-rango="0-10 EUR"
           data-altura="500-1000 msnm">
        <img src="/images/small/goye-malbec-2022.jpg" alt="Botella de Goye Malbec 2022"
             onerror="this.src='https://via.placeholder.com/200x200?text=Imagen+No+Disponible'; console.error('Image failed to load:', this.src);">
        <span class="info-icon">🍷</span>
        <div class="overlay">
          <p><strong>Bodega:</strong> Bodega Goyenechea</p>
          <p><strong>Provincia:</strong> Mendoza</p>
          <p><strong>Región:</strong> San Rafael</p>
          <p><strong>Altura:</strong> 520</p>
          <p><strong>Código:</strong> BG-GoyeMalbec-2022</p>
        </div>
        <h3>Goye - Malbec - 2022</h3>
        <p class="price">€9.49</p>
        <a href="/vinos/goye-malbec-2022.html" class="buy-button">Comprar</a>
      </div>
     
      <div class="product-card"
           data-provincia="Mendoza"
           data-region="San Rafael"
           data-bodega="Bodega Goyenechea"
           data-tipo="Malbec"
           data-anada="2022"
           data-precio="39.99"
           data-precio-rango="20-50 EUR"
           data-altura="500-1000 msnm">
        <img src="/images/small/135-aniversario-2022.jpg" alt="Botella de 135 Aniversario 2022"
             onerror="this.src='https://via.placeholder.com/200x200?text=Imagen+No+Disponible'; console.error('Image failed to load:', this.src);">
        <span class="info-icon">🍷</span>
        <div class="overlay">
          <p><strong>Bodega:</strong> Bodega Goyenechea</p>
          <p><strong>Provincia:</strong> Mendoza</p>
          <p><strong>Región:</strong> San Rafael</p>
          <p><strong>Altura:</strong> 520</p>
          <p><strong>Código:</strong> BG-135Anivers-2022</p>
        </div>
        <h3>135 Aniversario - Malbec -- 2022</h3>
        <p class="price">€39.99</p>
        <a href="/vinos/135-aniversario-2022.html" class="buy-button">Comprar</a>
      </div>
            <!-- Mauricio Lorca Bodega y Viñedos -->
      <div class="product-card" data-provincia="Mendoza" data-region="Valle de Uco" data-bodega="Mauricio Lorca Bodega y Viñedos" data-tipo="Estándar" data-anada="2023" data-precio="9" data-precio-rango="Económico" data-altura="1000m - 2000m">
        <img src="/images/small/temtico--malbec-2023-2023.jpg" alt="Temático - Malbec 2023">
        <span class="info-icon">🍷</span>
        <div class="overlay">
          <p><strong>Bodega:</strong> Mauricio Lorca Bodega y Viñedos</p>
          <p><strong>Provincia:</strong> Mendoza</p>
          <p><strong>Región:</strong> Valle de Uco</p>
          <p><strong>Altura:</strong> 1100 msnm</p>
        </div>
        <h3>Temático - Malbec 2023</h3>
        <p>€9</p>
        <a href="vinos/temtico--malbec-2023-2023.html">Comprar</a>
      </div>
      <div class="product-card" data-provincia="Mendoza" data-region="Valle de Uco" data-bodega="Mauricio Lorca Bodega y Viñedos" data-tipo="Estándar" data-anada="2023" data-precio="11" data-precio-rango="Medio" data-altura="1000m - 2000m">
        <img src="/images/small/fantasa--malbec-2023-2023.jpg" alt="Fantasía - Malbec 2023">
        <span class="info-icon">🍷</span>
        <div class="overlay">
          <p><strong>Bodega:</strong> Mauricio Lorca Bodega y Viñedos</p>
          <p><strong>Provincia:</strong> Mendoza</p>
          <p><strong>Región:</strong> Valle de Uco</p>
          <p><strong>Altura:</strong> 1100 msnm</p>
        </div>
        <h3>Fantasía - Malbec 2023</h3>
        <p>€11</p>
        <a href="vinos/fantasa--malbec-2023-2023.html">Comprar</a>
      </div>
      <div class="product-card" data-provincia="Mendoza" data-region="Valle de Uco" data-bodega="Mauricio Lorca Bodega y Viñedos" data-tipo="Orgánico" data-anada="2022" data-precio="13" data-precio-rango="Medio" data-altura="1000m - 2000m">
        <img src="/images/small/zapam-zucum-organic-malbec-2022.jpg" alt="Zapam Zucum - Organic Malbec 2022">
        <span class="info-icon">🍷</span>
        <div class="overlay">
          <p><strong>Bodega:</strong> Mauricio Lorca Bodega y Viñedos</p>
          <p><strong>Provincia:</strong> Mendoza</p>
          <p><strong>Región:</strong> Valle de Uco</p>
          <p><strong>Altura:</strong> 1100 msnm</p>
        </div>
        <h3>Zapam Zucum - Organic Malbec - 2022</h3>
        <p>€13</p>
        <a href="vinos/zapam-zucum--organic-malbec-2022-2022.html">Comprar</a>
      </div>
      <!-- Enrique Foster Bodega -->
      <div class="product-card" data-provincia="Mendoza" data-region="Luján de Cuyo" data-bodega="Enrique Foster Bodega" data-tipo="Espumante" data-anada="2021" data-precio="15" data-precio-rango="Medio" data-altura="< 1000m">
        <img src="/images/small/lois--sparkling-malbec-2021-2021.jpg" alt="Lois - Sparkling Malbec 2021">
        <span class="info-icon">🍷</span>
        <div class="overlay">
          <p><strong>Bodega:</strong> Enrique Foster Bodega</p>
          <p><strong>Provincia:</strong> Mendoza</p>
          <p><strong>Región:</strong> Luján de Cuyo</p>
          <p><strong>Altura:</strong> 900 msnm</p>
        </div>
        <h3>Lois - Sparkling Malbec 2021</h3>
        <p>€15</p>
        <a href="vinos/lois--sparkling-malbec-2021-2021.html">Comprar</a>
      </div>
      <div class="product-card" data-provincia="Mendoza" data-region="Luján de Cuyo" data-bodega="Enrique Foster Bodega" data-tipo="Rosado" data-anada="2023" data-precio="11" data-precio-rango="Medio" data-altura="< 1000m">
        <img src="/images/small/pink--malbec-rosado-2023-2023.jpg" alt="Pink - Malbec Rosado 2023">
        <span class="info-icon">🍷</span>
        <div class="overlay">
          <p><strong>Bodega:</strong> Enrique Foster Bodega</p>
          <p><strong>Provincia:</strong> Mendoza</p>
          <p><strong>Región:</strong> Luján de Cuyo</p>
          <p><strong>Altura:</strong> 900 msnm</p>
        </div>
        <h3>Pink - Malbec Rosado 2023</h3>
        <p>€11</p>
        <a href="/vinos/pink--malbec-rosado-2023-2023.html">Comprar</a>
      </div>
      <div class="product-card" data-provincia="Mendoza" data-region="Luján de Cuyo" data-bodega="Enrique Foster Bodega" data-tipo="Tinto" data-anada="2023" data-precio="11" data-precio-rango="Medio" data-altura="< 1000m">
        <img src="/images/small/ique--malbec-2023-2021.jpg" alt="Ique - Malbec 2023">
        <span class="info-icon">🍷</span>
        <div class="overlay">
          <p><strong>Bodega:</strong> Enrique Foster Bodega</p>
          <p><strong>Provincia:</strong> Mendoza</p>
          <p><strong>Región:</strong> Luján de Cuyo</p>
          <p><strong>Altura:</strong> 900 msnm</p>
        </div>
        <h3>Ique - Malbec 2023</h3>
        <p>€11</p>
        <a href="vinos/ique--malbec-2023-2021.html">Comprar</a>
      </div>
      <div class="product-card" data-provincia="Mendoza" data-region="Luján de Cuyo" data-bodega="Enrique Foster Bodega" data-tipo="Tinto" data-anada="2023" data-precio="21" data-precio-rango="Premium" data-altura="< 1000m">
        <img src="/images/small/foster--malbec-2023.jpg" alt="Foster - Malbec 2023">
        <span class="info-icon">🍷</span>
        <div class="overlay">
          <p><strong>Bodega:</strong> Enrique Foster Bodega</p>
          <p><strong>Provincia:</strong> Mendoza</p>
          <p><strong>Región:</strong> Luján de Cuyo</p>
          <p><strong>Altura:</strong> 900 msnm</p>
        </div>
        <h3>Foster - Malbec 2023</h3>
        <p>€21</p>
        <a href="vinos/foster--malbec-2023.html">Comprar</a>
      </div>
      <div class="product-card" data-provincia="Mendoza" data-region="Luján de Cuyo" data-bodega="Enrique Foster Bodega" data-tipo="Tinto" data-anada="2023" data-precio="23" data-precio-rango="Premium" data-altura="< 1000m">
        <img src="/images/small/foster--malbec-los-altepes-2023.jpg" alt="Foster - Malbec 'Los Altepes' 2023">
        <span class="info-icon">🍷</span>
        <div class="overlay">
          <p><strong>Bodega:</strong> Enrique Foster Bodega</p>
          <p><strong>Provincia:</strong> Mendoza</p>
          <p><strong>Región:</strong> Luján de Cuyo</p>
          <p><strong>Altura:</strong> 900 msnm</p>
        </div>
        <h3>Foster - Malbec 'Los Altepes' 2023</h3>
        <p>€23</p>
        <a href="vinos/foster--malbec-los-altepes-2023.html">Comprar</a>
      </div>
      <div class="product-card" data-provincia="Mendoza" data-region="Luján de Cuyo" data-bodega="Enrique Foster Bodega" data-tipo="Tinto" data-anada="2023" data-precio="25" data-precio-rango="Premium" data-altura="< 1000m">
        <img src="/images/small/foster--malbec-los-barrancos-2023.jpg" alt="Foster - Malbec 'Los Barrancos' 2023">
        <span class="info-icon">🍷</span>
        <div class="overlay">
          <p><strong>Bodega:</strong> Enrique Foster Bodega</p>
          <p><strong>Provincia:</strong> Mendoza</p>
          <p><strong>Región:</strong> Luján de Cuyo</p>
          <p><strong>Altura:</strong> 900 msnm</p>
        </div>
        <h3>Foster - Malbec 'Los Barrancos' 2023</h3>
        <p>€25</p>
        <a href="vinos/foster-malbec-los-barrancos-2023.html">Comprar</a>
      </div>
      <div class="product-card" data-provincia="Mendoza" data-region="Luján de Cuyo" data-bodega="Enrique Foster Bodega" data-tipo="Tinto" data-anada="2023" data-precio="44" data-precio-rango="Premium" data-altura="< 1000m">
        <img src="/images/small/foster-malbec-limited-edition-2023.jpg" alt="Foster - Malbec Limited Edition 2023">
        <span class="info-icon">🍷</span>
        <div class="overlay">
          <p><strong>Bodega:</strong> Enrique Foster Bodega</p>
          <p><strong>Provincia:</strong> Mendoza</p>
          <p><strong>Región:</strong> Luján de Cuyo</p>
          <p><strong>Altura:</strong> 900 msnm</p>
        </div>
        <h3>Foster - Malbec Limited Edition 2023</h3>
        <p>€44</p>
        <a href="vinos/foster-malbec-limited-edition-2023.html">Comprar</a>
      </div>
      <!-- Finca Las Nubes Bodega -->
      <div class="product-card" data-provincia="Salta" data-region="Cafayate" data-bodega="Finca Las Nubes" data-tipo="Tinto" data-anada="2020" data-precio="19.95" data-precio-rango="Medio" data-altura="1000m - 2000m">
        <img src="/images/small/finca-las-nubes-malbec-2020.jpg" alt="Finca Las Nubes - Malbec 2020">
        <span class="info-icon">🍷</span>
        <div class="overlay">
          <p><strong>Bodega:</strong> Finca Las Nubes</p>
          <p><strong>Provincia:</strong> Salta</p>
          <p><strong>Región:</strong> Cafayate</p>
          <p><strong>Altura:</strong> 1700 msnm</p>
        </div>
        <h3>Finca Las Nubes - Malbec 2020</h3>
        <p>€19.95</p>
        <a href="vinos/finca-las-nubes-malbec-2020.html">Comprar</a>
      </div>
      <!-- Altos del Plata - Malbec 2022 -->
      <div class="product-card" data-provincia="Mendoza" data-region="Luján de Cuyo" data-bodega="Terrazas de los Andes" data-tipo="Tinto" data-anada="2022" data-precio="12" data-precio-rango="Medio" data-altura="< 1000m">
        <img src="/images/AltosDelPlataMalbec.jpg" alt="Altos del Plata - Malbec 2022">
        <span class="info-icon">🍷</span>
        <div class="overlay">
          <p><strong>Bodega:</strong> Terrazas de los Andes</p>
          <p><strong>Provincia:</strong> Mendoza</p>
          <p><strong>Región:</strong> Luján de Cuyo</p>
          <p><strong>Altura:</strong> 980 msnm</p>
        </div>
        <h3>Altos del Plata - Malbec 2022</h3>
        <p>€12</p>
        <a href="altos-del-plata-malbec-2022.html">Comprar</a>
      </div>
        
      <!-- Colomé - Malbec 2021 -->
      <div class="product-card" data-provincia="Salta" data-region="Calchaquí" data-bodega="Bodega Colomé" data-tipo="Tinto" data-anada="2021" data-precio="18" data-precio-rango="Medio" data-altura="2000m - 3000m">
        <img src="/images/ColomeMalbec.jpg" alt="Colomé - Malbec 2021">
        <span class="info-icon">🍷</span>
        <div class="overlay">
          <p><strong>Bodega:</strong> Bodega Colomé</p>
          <p><strong>Provincia:</strong> Salta</p>
          <p><strong>Región:</strong> Calchaquí</p>
          <p><strong>Altura:</strong> 2300 msnm</p>
        </div>
        <h3>Colomé - Malbec 2021</h3>
        <p>€18</p>
        <a href="colome-malbec-2021.html">Comprar</a>
      </div>
      <!-- Catena Zapata - Malbec 2020 -->
      <div class="product-card" data-provincia="Mendoza" data-region="Valle de Uco" data-bodega="Catena Zapata" data-tipo="Tinto" data-anada="2020" data-precio="30" data-precio-rango="Premium" data-altura="1000m - 2000m">
        <img src="/images/CatenaZapataMalbec.jpg" alt="Catena Zapata - Malbec 2020">
        <span class="info-icon">🍷</span>
        <div class="overlay">
          <p><strong>Bodega:</strong> Catena Zapata</p>
          <p><strong>Provincia:</strong> Mendoza</p>
          <p><strong>Región:</strong> Valle de Uco</p>
          <p><strong>Altura:</strong> 1200 msnm</p>
        </div>
        <h3>Catena Zapata - Malbec 2020</h3>
        <p>€30</p>
        <a href="catena-zapata-malbec-2020.html">Comprar</a>
      </div>
    </div>
    <div id="no-results" style="display: none;">No se encontraron productos con los filtros seleccionados.</div>
  </div>
  <script>
    // Sidebar toggle for mobile
    document.getElementById('menu-toggle').addEventListener('click', function() {
      document.getElementById('sidebar').classList.toggle('active');
    });

    // Overlay toggle for mobile (wine glass icon)
    document.querySelectorAll('.info-icon').forEach(icon => {
      icon.addEventListener('click', function(e) {
        if (window.innerWidth <= 768) {
          const overlay = this.nextElementSibling;
          overlay.classList.toggle('active');
          e.stopPropagation();
        }
      });
    });

    // Close overlays when clicking outside
    document.addEventListener('click', function(e) {
      if (window.innerWidth <= 768) {
        document.querySelectorAll('.overlay.active').forEach(overlay => {
          if (!overlay.contains(e.target) && !e.target.matches('.info-icon')) {
            overlay.classList.remove('active');
          }
        });
      }
    });

    // Filter logic
    document.querySelectorAll('.filter').forEach(filter => {
      filter.addEventListener('click', function() {
        this.classList.toggle('active');
        applyFilters();
      });
    });

    document.getElementById('reset-filters').addEventListener('click', function() {
      document.querySelectorAll('.filter.active').forEach(filter => {
        filter.classList.remove('active');
      });
      applyFilters();
    });

    function applyFilters() {
      const products = document.querySelectorAll('.product-card');
      let hasVisible = false;

      products.forEach(product => {
        const provincia = product.dataset.provincia;
        const region = product.dataset.region;
        const altura = product.dataset.altura;

        const activeProvincia = Array.from(document.querySelectorAll('.filter[data-provincia].active')).map(f => f.dataset.provincia);
        const activeRegion = Array.from(document.querySelectorAll('.filter[data-region].active')).map(f => f.dataset.region);
        const activeAltura = Array.from(document.querySelectorAll('.filter[data-altura].active')).map(f => f.dataset.altura);

        const provinciaMatch = activeProvincia.length === 0 || activeProvincia.includes(provincia);
        const regionMatch = activeRegion.length === 0 || activeRegion.includes(region);
        const alturaMatch = activeAltura.length === 0 || activeAltura.includes(altura);

        if (provinciaMatch && regionMatch && alturaMatch) {
          product.classList.remove('hidden');
          hasVisible = true;
        } else {
          product.classList.add('hidden');
        }
      });

      document.getElementById('no-results').style.display = hasVisible ? 'none' : 'block';
    }
  </script>
</body>
</html>

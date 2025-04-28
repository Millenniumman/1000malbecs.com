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
    body {
      font-family: Arial, sans-serif;
      background-color: #fdfdfd;
      margin: 0;
      padding: 20px;
      display: flex;
      flex-direction: row;
    }
    nav {
      width: 450px;
      background-color: #4A0D29;
      color: #f5e6ff;
      height: 100vh;
      position: fixed;
      top: 0;
      left: 0;
      padding: 10px;
      overflow-y: auto;
      box-shadow: 2px 0 5px rgba(0,0,0,0.1);
      z-index: 1000;
    }
    nav .logo-container {
      text-align: center;
      margin-bottom: 10px;
    }
    nav .logo-container img {
      width: 200px;
      height: 200px;
      object-fit: contain;
    }
    nav h2 {
      margin: 0 0 8px 0;
      font-size: 1.4em;
      color: #f5e6ff;
      text-align: center;
    }
    nav details {
      margin-bottom: 4px;
    }
    nav summary {
      cursor: pointer;
      padding: 5px;
      background-color: #5A1D39;
      border-radius: 5px;
      font-weight: bold;
      display: flex;
      align-items: center;
      font-size: 0.85em;
    }
    nav summary i {
      margin-right: 6px;
    }
    nav summary:hover {
      background-color: #682A46;
    }
    nav ul {
      list-style: none;
      padding: 0 0 0 10px;
      margin: 0;
    }
    nav li {
      margin: 3px 0;
    }
    nav ul ul {
      padding-left: 12px;
    }
    nav a, nav span.filter {
      color: #f5e6ff;
      text-decoration: none;
      cursor: pointer;
      display: inline-block;
      max-width: 260px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    nav ul > li > span.filter {
      font-size: 1.2em;
      font-weight: bold;
      color: #f5e6ff;
    }
    nav ul > li > ul > li > span.filter {
      font-size: 1.1em;
      font-weight: 600;
      color: #e0c7ff;
    }
    nav ul > li > ul > li > ul > li > span.filter {
      font-size: 1em;
      font-weight: normal;
      color: #d4a5ff;
    }
    nav ul > li > ul > li > ul > li > ul > li > a {
      font-size: 0.9em;
      font-weight: normal;
      color: #f5e6ff;
    }
    nav a:hover, nav span.filter:hover {
      color: #fff;
      text-decoration: underline;
    }
    nav .filter.active {
      background-color: #682A46;
      color: #fff;
      padding: 2px 5px;
      border-radius: 3px;
    }
    .main-content {
      margin-left: 470px;
      width: calc(100% - 470px);
      z-index: 1;
    }
    .welcome-title {
      text-align: center;
      color: #4A0D29;
      font-size: 2em;
      margin: 20px 0;
      font-weight: bold;
    }
    .featured-products {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 15px;
      padding: 20px;
    }
    .product-card {
  border: 1px solid #ddd;
  border-radius: 10px;
  padding: 10px;
  text-align: center;
  background-color: #fff;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
  position: relative;
  overflow: hidden;
  width: 200px; /* Ancho fijo en escritorio */
  margin: 10px;
}
.product-card:hover {
  transform: translateY(-5px);
}
.product-card img {
  width: 100px; /* Tamaño fijo en escritorio */
  height: 150px;
  object-fit: contain; /* Muestra la botella completa */
  border-radius: 5px;
  display: block;
  margin: 0 auto;
}
.product-card h3 {
  font-size: 1em;
  margin: 8px 0;
  color: #4A0D29;
}
.product-card p {
  font-weight: bold;
  color: #4A0D29;
  margin: 5px 0;
  font-size: 0.9em;
}
.product-card a {
  display: inline-block;
  margin-top: 8px;
  padding: 6px 12px;
  background-color: #4A0D29;
  color: #f5e6ff;
  text-decoration: none;
  border-radius: 5px;
  font-size: 0.85em;
}
.product-card a:hover {
  background-color: #682A46;
}
.product-card .info-icon {
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 1.5em;
  cursor: pointer;
  z-index: 10;
  color: #4A0D29;
  display: none; /* Hidden by default, shown on mobile */
}
.product-card .overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 200px;
  background-color: rgba(74, 13, 41, 0.9);
  color: #f5e6ff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  opacity: 0;
  transition: opacity 0.3s ease;
  padding: 10px;
  font-size: 0.75em;
}
.product-card:hover .overlay {
  opacity: 1;
}
.product-card .overlay.active {
  opacity: 1;
}
.product-card .overlay p {
  margin: 3px 0;
  font-weight: normal;
  color: #f5e6ff;
  line-height: 1.2;
}
.product-card.hidden {
  display: none;
}
#no-results {
  padding: 20px;
  text-align: center;
  color: #4A0D29;
  font-size: 1.2em;
}
@media (max-width: 768px) {
  .product-card {
    width: 100%; /* Responsivo en móvil */
    max-width: 300px; /* Limita el ancho */
    margin: 10px auto; /* Centra las tarjetas */
  }
  .product-card img {
    width: 80px; /* Tamaño reducido en móvil */
    height: 120px;
    object-fit: contain;
    max-width: 100%; /* Evita estiramiento */
    margin: 0 auto;
  }
  .product-card .info-icon {
    display: block; /* Mostrar ícono en móvil */
  }
}
      #reset-filters {
      margin: 10px 20px;
      padding: 8px 16px;
      background-color: #4A0D29;
      color: #f5e6ff;
      border: none;
      border-radius: 5px;
      cursor: pointer;
    }
    #reset-filters:hover {
      background-color: #682A46;
    }
    #menu-toggle {
      display: none;
      position: fixed;
      top: 20px;
      left: 20px;
      font-size: 1.5em;
      background-color: #4A0D29;
      color: #f5e6ff;
      border: none;
      padding: 10px;
      border-radius: 5px;
      cursor: pointer;
      z-index: 1100;
    }
    #menu-toggle:hover {
      background-color: #5A1D39;
    }
    @media (max-width: 768px) {
      nav {
        width: 250px;
        left: -260px;
        transition: left 0.3s ease;
        z-index: 1000;
        background-color: rgba(74, 13, 41, 0.95);
      }
      nav.active {
        left: 0;
      }
      nav .logo-container img {
        width: 150px;
        height: 150px;
      }
      .main-content {
        margin-left: 0;
        width: 100%;
        z-index: 1;
      }
      #menu-toggle {
        display: block;
      }
      .welcome-title {
        font-size: 1.5em;
        margin: 15px 10px;
      }
      .featured-products {
        grid-template-columns: 1fr;
      }
      .product-card:hover .overlay {
        opacity: 0; /* Disable hover effect on mobile */
      }
      .product-card .info-icon {
        display: block; /* Show wine glass icon on mobile */
      }
      .product-card .overlay.active {
        opacity: 1; /* Show overlay when active on mobile */
      }
      nav ul > li > span.filter {
        font-size: 1em;
      }
      nav ul > li > ul > li > span.filter {
        font-size: 0.95em;
      }
      nav ul > li > ul > li > ul > li > span.filter {
        font-size: 0.9em;
      }
      nav ul > li > ul > li > ul > li > ul > li > a {
        font-size: 0.85em;
      }
    }
  </style>
</head>
<body>
  <button id="menu-toggle">☰</button>
  <nav id="sidebar">
    <div class="logo-container">
      <a href="/index.html" title="Volver al inicio">
        <img src="/images/l000-malbecs-logo.png" alt="Logo 1000malbecs">
      </a>
    </div>
    <h2>Categorías</h2>
       
  </nav>
  <div class="main-content">
    <h2 class="welcome-title">Bienvenidos a 1000 Malbecs, el sitio de los 1000 mejores malbecs argentinos, desde la Patagonia hasta la Puna</h2>
       <main>
    <button id="reset-filters">Limpiar Filtros</button>
    <div class="featured-products">
      <!-- Example product card -->
        <div class="product-card"
           data-provincia="Mendoza"
           data-region="San Rafael"
           data-bodega="Casa Araujo"
           data-tipo="Malbec Bivarietal"
           data-anada="2023"
           data-precio="7.99"
           data-precio-rango="0-10 EUR"
           data-altura="500-1000 msnm">
        <img src="/images/small/casa-araujo-varietal-2023.jpg" alt="Botella de Casa Araujo Varietal 2023"
             onerror="this.src='https://via.placeholder.com/200x200?text=Imagen+No+Disponible'; console.error('Image failed to load:', this.src);">
        <span class="info-icon">🍷</span>
        <div class="overlay">
          <p><strong>Bodega:</strong> Casa Araujo</p>
          <p><strong>Provincia:</strong> Mendoza</p>
          <p><strong>Región:</strong> San Rafael</p>
          <p><strong>Altura:</strong> 520</p>
        </div>
        <h3>Casa Araujo Varietal - 2023</h3>
        <p class="price">€7.99</p>
        <a href="/vinos/casa-araujo-varietal-2023.html" class="buy-button">Comprar</a>
      </div>
         <div class="product-card" 
                 data-provincia="Mendoza" 
                 data-region="San Rafael" 
                 data-bodega="Casa Araujo" 
                 data-tipo="Malbec" 
                 data-anada="2023" 
                 data-precio="10.19" 
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
        <p>€10.19</p>
        <a href="/vinos/casa-araujo-roble-2023.html">Comprar</a>
      </div>   
            <div class="product-card" 
                 data-provincia="Mendoza" 
                 data-region="San Rafael" 
                 data-bodega="Casa Araujo" 
                 data-tipo="Malbec Bivarietal" 
                 data-anada="2023" 
                 data-precio="11.79" 
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
        <p>€11.8</p>
        <a href="/vinos/casa-araujo-mimi-2023.html">Comprar</a>
      </div>
            <div class="product-card" 
                 data-provincia="Mendoza" 
                 data-region="San Rafael" 
                 data-bodega="Casa Araujo" 
                 data-tipo="Malbec" 
                 data-anada="2023" 
                 data-precio="12.99" 
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
        <p>€12.99</p>
        <a href="/vinos/nucha-2023.html">Comprar</a>
      </div>
            <div class="product-card" 
                 data-provincia="Mendoza" 
                 data-region="San Rafael" 
                 data-bodega="Casa Araujo" 
                 data-tipo="Reserva Malbec" 
                 data-anada="2023" 
                 data-precio="13.59" 
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
        <p>€13.59</p>
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
        <img src="/images/small/foster--malbec-limited-edition-2023.jpg" alt="Foster - Malbec Limited Edition 2023">
        <span class="info-icon">🍷</span>
        <div class="overlay">
          <p><strong>Bodega:</strong> Enrique Foster Bodega</p>
          <p><strong>Provincia:</strong> Mendoza</p>
          <p><strong>Región:</strong> Luján de Cuyo</p>
          <p><strong>Altura:</strong> 900 msnm</p>
        </div>
        <h3>Foster - Malbec Limited Edition 2023</h3>
        <p>€44</p>
        <a href="vinos/foster--malbec-limited-edition-2023.html">Comprar</a>
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

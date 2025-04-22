
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="Descubre los mejores Malbecs de Mendoza en 1000malbecs, desde Valle de Uco hasta Luján de Cuyo.">
  <title>1000malbecs - Los Mejores Malbecs</title>
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
      font-size: 0.85em;
      cursor: pointer;
      display: inline-block;
      max-width: 260px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    nav a:hover, nav span.filter:hover {
      color: #d4a5ff;
      text-decoration: underline;
    }
    nav .filter.active {
      background-color: #682A46;
      color: #fff;
      padding: 2px 5px;
      border-radius: 3px;
    }
    .main-content {
      margin-left: 320px;
      width: calc(100% - 320px);
      z-index: 1;
    }
    .featured-products {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
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
    }
    .product-card:hover {
      transform: translateY(-5px);
    }
    .product-card img {
      width: 100%;
      height: 200px;
      object-fit: cover;
      border-radius: 5px;
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
    .product-card .overlay {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 200px; /* Cubre solo la imagen */
      background-color: rgba(74, 13, 41, 0.9);
      color: #f5e6ff;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      opacity: 0;
      transition: opacity 0.3s ease;
      padding: 10px;
      font-size: 0.75em; /* Reducido para que el texto quepa */
    }
    .product-card:hover .overlay {
      opacity: 1;
    }
    .product-card .overlay p {
      margin: 3px 0; /* Menos espacio entre líneas */
      font-weight: normal;
      color: #f5e6ff;
      line-height: 1.2; /* Mejor legibilidad */
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
      .featured-products {
        grid-template-columns: 1fr;
      }
    }
  </style>
</head>
<body>
  <button id="menu-toggle">☰</button>
  <nav id="sidebar">
    <div class="logo-container">
      <a href="/" title="Volver al inicio">
        <img src="https://github.com/user-attachments/assets/2e1ec570-c588-4e9b-bb54-3371487cbada" alt="Logo 1000malbecs">
      </a>
    </div>
    <h2>Categorías</h2>
    <details>
      <summary><i class="fas fa-map-marker-alt"></i> Provincia</summary>
      <ul>
        <li><span class="filter" data-filter="provincia" data-value="Mendoza">Mendoza</span>
          <ul>
            <li><strong>Región</strong>
              <ul>
                <li><span class="filter" data-filter="region" data-value="Valle de Uco">Valle de Uco</span>
                  <ul>
                    <li><strong>Tipo</strong>
                      <ul>
                        <li><span class="filter" data-filter="tipo" data-value="Estándar">Estándar</span>
                          <ul>
                            <li><a href="tematico-malbec-2023.html">Temático - Malbec 2023</a></li>
                            <li><a href="fantasia-malbec-2023.html">Fantasía - Malbec 2023</a></li>
                            <li><a href="gran-poetico-malbec-2013.html">Gran Poético - Malbec 2013</a></li>
                          </ul>
                        </li>
                        <li><span class="filter" data-filter="tipo" data-value="Orgánico">Orgánico</span>
                          <ul>
                            <li><a href="zapam-zucum-organic-malbec-2022.html">Zapam Zucum - Organic Malbec 2022</a></li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li><span class="filter" data-filter="region" data-value="Luján de Cuyo">Luján de Cuyo</span>
                  <ul>
                    <li><strong>Tipo</strong>
                      <ul>
                        <li><span class="filter" data-filter="tipo" data-value="Espumante">Espumante</span>
                          <ul>
                            <li><a href="lois-sparkling-malbec-2021.html">Lois - Sparkling Malbec 2021</a></li>
                          </ul>
                        </li>
                        <li><span class="filter" data-filter="tipo" data-value="Rosado">Rosado</span>
                          <ul>
                            <li><a href="pink-malbec-rosado-2023.html">Pink - Malbec Rosado 2023</a></li>
                          </ul>
                        </li>
                        <li><span class="filter" data-filter="tipo" data-value="Tinto">Tinto</span>
                          <ul>
                            <li><span class="filter" data-filter="subtipo" data-value="Clásico">Clásico</span>
                              <ul>
                                <li><a href="ique-malbec-2023.html">Ique - Malbec 2023</a></li>
                                <li><a href="foster-malbec-2023.html">Foster - Malbec 2023</a></li>
                              </ul>
                            </li>
                            <li><span class="filter" data-filter="subtipo" data-value="Premium">Premium</span>
                              <ul>
                                <li><a href="foster-malbec-los-altepes-2023.html">Foster - Malbec 'Los Altepes' 2023</a></li>
                                <li><a href="foster-malbec-los-barrancos-2023.html">Foster - Malbec 'Los Barrancos' 2023</a></li>
                                <li><a href="foster-malbec-limited-edition-2023.html">Foster - Malbec Limited Edition 2023</a></li>
                              </ul>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
          </ul>
        </li>
      </ul>
    </details>
    <details>
      <summary><i class="fas fa-wine-bottle"></i> Bodega</summary>
      <ul>
        <li><span class="filter" data-filter="bodega" data-value="Mauricio Lorca Bodega y Viñedos">Mauricio Lorca Bodega y Viñedos</span>
          <ul>
            <li><a href="tematico-malbec-2023.html">Temático - Malbec 2023</a></li>
            <li><a href="fantasia-malbec-2023.html">Fantasía - Malbec 2023</a></li>
            <li><a href="gran-poetico-malbec-2013.html">Gran Poético - Malbec 2013</a></li>
            <li><a href="zapam-zucum-organic-malbec-2022.html">Zapam Zucum - Organic Malbec 2022</a></li>
          </ul>
        </li>
        <li><span class="filter" data-filter="bodega" data-value="Enrique Foster Bodega">Enrique Foster Bodega</span>
          <ul>
            <li><a href="lois-sparkling-malbec-2021.html">Lois - Sparkling Malbec 2021</a></li>
            <li><a href="pink-malbec-rosado-2023.html">Pink - Malbec Rosado 2023</a></li>
            <li><a href="ique-malbec-2023.html">Ique - Malbec 2023</a></li>
            <li><a href="foster-malbec-2023.html">Foster - Malbec 2023</a></li>
            <li><a href="foster-malbec-los-altepes-2023.html">Foster - Malbec 'Los Altepes' 2023</a></li>
            <li><a href="foster-malbec-los-barrancos-2023.html">Foster - Malbec 'Los Barrancos' 2023</a></li>
            <li><a href="foster-malbec-limited-edition-2023.html">Foster - Malbec Limited Edition 2023</a></li>
          </ul>
        </li>
      </ul>
    </details>
    <details>
      <summary><i class="fas fa-dollar-sign"></i> Rango de Precio</summary>
      <ul>
        <li><span class="filter" data-filter="precio-rango" data-value="Económico">Económico (< 10 €)</span>
          <ul>
            <li><a href="tematico-malbec-2023.html">Temático - Malbec 2023</a></li>
          </ul>
        </li>
        <li><span class="filter" data-filter="precio-rango" data-value="Medio">Medio (10 € - 20 €)</span>
          <ul>
            <li><a href="zapam-zucum-organic-malbec-2022.html">Zapam Zucum - Organic Malbec 2022</a></li>
            <li><a href="fantasia-malbec-2023.html">Fantasía - Malbec 2023</a></li>
            <li><a href="lois-sparkling-malbec-2021.html">Lois - Sparkling Malbec 2021</a></li>
            <li><a href="pink-malbec-rosado-2023.html">Pink - Malbec Rosado 2023</a></li>
            <li><a href="ique-malbec-2023.html">Ique - Malbec 2023</a></li>
          </ul>
        </li>
        <li><span class="filter" data-filter="precio-rango" data-value="Premium">Premium (> 20 €)</span>
          <ul>
            <li><a href="gran-poetico-malbec-2013.html">Gran Poético - Malbec 2013</a></li>
            <li><a href="foster-malbec-2023.html">Foster - Malbec 2023</a></li>
            <li><a href="foster-malbec-los-altepes-2023.html">Foster - Malbec 'Los Altepes' 2023</a></li>
            <li><a href="foster-malbec-los-barrancos-2023.html">Foster - Malbec 'Los Barrancos' 2023</a></li>
            <li><a href="foster-malbec-limited-edition-2023.html">Foster - Malbec Limited Edition 2023</a></li>
          </ul>
        </li>
      </ul>
    </details>
    <details>
      <summary><i class="fas fa-calendar-alt"></i> Añada</summary>
      <ul>
        <li><span class="filter" data-filter="anada" data-value="2023">2023</span>
          <ul>
            <li><a href="tematico-malbec-2023.html">Temático - Malbec 2023</a></li>
            <li><a href="fantasia-malbec-2023.html">Fantasía - Malbec 2023</a></li>
            <li><a href="pink-malbec-rosado-2023.html">Pink - Malbec Rosado 2023</a></li>
            <li><a href="ique-malbec-2023.html">Ique - Malbec 2023</a></li>
            <li><a href="foster-malbec-2023.html">Foster - Malbec 2023</a></li>
            <li><a href="foster-malbec-los-altepes-2023.html">Foster - Malbec 'Los Altepes' 2023</a></li>
            <li><a href="foster-malbec-los-barrancos-2023.html">Foster - Malbec 'Los Barrancos' 2023</a></li>
            <li><a href="foster-malbec-limited-edition-2023.html">Foster - Malbec Limited Edition 2023</a></li>
          </ul>
        </li>
        <li><span class="filter" data-filter="anada" data-value="2022">2022</span>
          <ul>
            <li><a href="zapam-zucum-organic-malbec-2022.html">Zapam Zucum - Organic Malbec 2022</a></li>
          </ul>
        </li>
        <li><span class="filter" data-filter="anada" data-value="2021">2021</span>
          <ul>
            <li><a href="lois-sparkling-malbec-2021.html">Lois - Sparkling Malbec 2021</a></li>
          </ul>
        </li>
        <li><span class="filter" data-filter="anada" data-value="2013">2013</span>
          <ul>
            <li><a href="gran-poetico-malbec-2013.html">Gran Poético - Malbec 2013</a></li>
          </ul>
        </li>
      </ul>
    </details>
  </nav>
  <div class="main-content">
    <h1>Bienvenidos a 1000malbecs</h1>
    <p>Explora nuestra selección de los mejores Malbecs de Mendoza. Usa los filtros a la izquierda para refinar los resultados.</p>
    <button id="reset-filters">Limpiar Filtros</button>
    <div id="no-results" style="display: none;">
      No se encontraron productos que coincidan con los filtros seleccionados.
    </div>
    <div class="featured-products">
      <!-- Mauricio Lorca Bodega y Viñedos -->
      <div class="product-card" data-provincia="Mendoza" data-region="Valle de Uco" data-bodega="Mauricio Lorca Bodega y Viñedos" data-tipo="Estándar" data-anada="2023" data-precio="9" data-precio-rango="Económico" data-altura="1100">
        <img src="/images/Tematico-Malbec.avif" alt="Temático - Malbec 2023">
        <div class="overlay">
          <p><strong>Bodega:</strong> Mauricio Lorca Bodega y Viñedos</p>
          <p><strong>Provincia:</strong> Mendoza</p>
          <p><strong>Región:</strong> Valle de Uco</p>
          <p><strong>Altura:</strong> 1100 msnm</p>
        </div>
        <h3>Temático - Malbec 2023</h3>
        <p>€9</p>
        <a href="tematico-malbec-2023.html">Comprar</a>
      </div>
      <div class="product-card" data-provincia="Mendoza" data-region="Valle de Uco" data-bodega="Mauricio Lorca Bodega y Viñedos" data-tipo="Estándar" data-anada="2023" data-precio="11" data-precio-rango="Medio" data-altura="1100">
        <img src="/images/fantasiaMalbec.jpg" alt="Fantasía - Malbec 2023">
        <div class="overlay">
          <p><strong>Bodega:</strong> Mauricio Lorca Bodega y Viñedos</p>
          <p><strong>Provincia:</strong> Mendoza</p>
          <p><strong>Región:</strong> Valle de Uco</p>
          <p><strong>Altura:</strong> 1100 msnm</p>
        </div>
        <h3>Fantasía - Malbec 2023</h3>
        <p>€11</p>
        <a href="fantasia-malbec-2023.html">Comprar</a>
      </div>
      <div class="product-card" data-provincia="Mendoza" data-region="Valle de Uco" data-bodega="Mauricio Lorca Bodega y Viñedos" data-tipo="Estándar" data-anada="2013" data-precio="25" data-precio-rango="Premium" data-altura="1100">
        <img src="/images/GranPoeticoMalbec.jpg" alt="Gran Poético - Malbec 2013">
        <div class="overlay">
          <p><strong>Bodega:</strong> Mauricio Lorca Bodega y Viñedos</p>
          <p><strong>Provincia:</strong> Mendoza</p>
          <p><strong>Región:</strong> Valle de Uco</p>
          <p><strong>Altura:</strong> 1100 msnm</p>
        </div>
        <h3>Gran Poético - Malbec 2013</h3>
        <p>€25</p>
        <a href="gran-poetico-malbec-2013.html">Comprar</a>
      </div>
      <div class="product-card" data-provincia="Mendoza" data-region="Valle de Uco" data-bodega="Mauricio Lorca Bodega y Viñedos" data-tipo="Orgánico" data-anada="2022" data-precio="13" data-precio-rango="Medio" data-altura="1100">
        <img src="/images/ZapamZucum.avif" alt="Zapam Zucum - Organic Malbec 2022">
        <div class="overlay">
          <p><strong>Bodega:</strong> Mauricio Lorca Bodega y Viñedos</p>
          <p><strong>Provincia:</strong> Mendoza</p>
          <p><strong>Región:</strong> Valle de Uco</p>
          <p><strong>Altura:</strong> 1100 msnm</p>
        </div>
        <h3>Zapam Zucum - Organic Malbec 2022</h3>
        <p>€13</p>
        <a href="zapam-zucum-organic-malbec-2022.html">Comprar</a>
      </div>
      <!-- Enrique Foster Bodega -->
      <div class="product-card" data-provincia="Mendoza" data-region="Luján de Cuyo" data-bodega="Enrique Foster Bodega" data-tipo="Espumante" data-anada="2021" data-precio="15" data-precio-rango="Medio" data-altura="900">
        <img src="/images/EF-LOIS-ROSE-BOTELLA-VICTORIA-2.avif" alt="Lois - Sparkling Malbec 2021">
        <div class="overlay">
          <p><strong>Bodega:</strong> Enrique Foster Bodega</p>
          <p><strong>Provincia:</strong> Mendoza</p>
          <p><strong>Región:</strong> Luján de Cuyo</p>
          <p><strong>Altura:</strong> 900 msnm</p>
        </div>
        <h3>Lois - Sparkling Malbec 2021</h3>
        <p>€15</p>
        <a href="lois-sparkling-malbec-2021.html">Comprar</a>
      </div>
      <div class="product-card" data-provincia="Mendoza" data-region="Luján de Cuyo" data-bodega="Enrique Foster Bodega" data-tipo="Rosado" data-anada="2023" data-precio="11" data-precio-rango="Medio" data-altura="900">
        <img src="/images/pink-malbec-rosado-2023.jpg" alt="Pink - Malbec Rosado 2023">
        <div class="overlay">
          <p><strong>Bodega:</strong> Enrique Foster Bodega</p>
          <p><strong>Provincia:</strong> Mendoza</p>
          <p><strong>Región:</strong> Luján de Cuyo</p>
          <p><strong>Altura:</strong> 900 msnm</p>
        </div>
        <h3>Pink - Malbec Rosado 2023</h3>
        <p>€11</p>
        <a href="pink-malbec-rosado-2023.html">Comprar</a>
      </div>
      <div class="product-card" data-provincia="Mendoza" data-region="Luján de Cuyo" data-bodega="Enrique Foster Bodega" data-tipo="Tinto" data-subtipo="Clásico" data-anada="2023" data-precio="11" data-precio-rango="Medio" data-altura="900">
        <img src="/images/ique-malbec-2023.jpg" alt="Ique - Malbec 2023">
        <div class="overlay">
          <p><strong>Bodega:</strong> Enrique Foster Bodega</p>
          <p><strong>Provincia:</strong> Mendoza</p>
          <p><strong>Región:</strong> Luján de Cuyo</p>
          <p><strong>Altura:</strong> 900 msnm</p>
        </div>
        <h3>Ique - Malbec 2023</h3>
        <p>€11</p>
        <a href="ique-malbec-2023.html">Comprar</a>
      </div>
      <div class="product-card" data-provincia="Mendoza" data-region="Luján de Cuyo" data-bodega="Enrique Foster Bodega" data-tipo="Tinto" data-subtipo="Clásico" data-anada="2023" data-precio="21" data-precio-rango="Premium" data-altura="900">
        <img src="/images/foster-malbec-2023.jpg" alt="Foster - Malbec 2023">
        <div class="overlay">
          <p><strong>Bodega:</strong> Enrique Foster Bodega</p>
          <p><strong>Provincia:</strong> Mendoza</p>
          <p><strong>Región:</strong> Luján de Cuyo</p>
          <p><strong>Altura:</strong> 900 msnm</p>
        </div>
        <h3>Foster - Malbec 2023</h3>
        <p>€21</p>
        <a href="foster-malbec-2023.html">Comprar</a>
      </div>
      <div class="product-card" data-provincia="Mendoza" data-region="Luján de Cuyo" data-bodega="Enrique Foster Bodega" data-tipo="Tinto" data-subtipo="Premium" data-anada="2023" data-precio="23" data-precio-rango="Premium" data-altura="900">
        <img src="/images/foster-malbec-los-altepes-2023.jpg" alt="Foster - Malbec 'Los Altepes' 2023">
        <div class="overlay">
          <p><strong>Bodega:</strong> Enrique Foster Bodega</p>
          <p><strong>Provincia:</strong> Mendoza</p>
          <p><strong>Región:</strong> Luján de Cuyo</p>
          <p><strong>Altura:</strong> 900 msnm</p>
        </div>
        <h3>Foster - Malbec 'Los Altepes' 2023</h3>
        <p>€23</p>
        <a href="foster-malbec-los-altepes-2023.html">Comprar</a>
      </div>
      <div class="product-card" data-provincia="Mendoza" data-region="Luján de Cuyo" data-bodega="Enrique Foster Bodega" data-tipo="Tinto" data-subtipo="Premium" data-anada="2023" data-precio="25" data-precio-rango="Premium" data-altura="900">
        <img src="/images/foster-malbec-los-barrancos-2023.jpg" alt="Foster - Malbec 'Los Barrancos' 2023">
        <div class="overlay">
          <p><strong>Bodega:</strong> Enrique Foster Bodega</p>
          <p><strong>Provincia:</strong> Mendoza</p>
          <p><strong>Región:</strong> Luján de Cuyo</p>
          <p><strong>Altura:</strong> 900 msnm</p>
        </div>
        <h3>Foster - Malbec 'Los Barrancos' 2023</h3>
        <p>€25</p>
        <a href="foster-malbec-los-barrancos-2023.html">Comprar</a>
      </div>
      <div class="product-card" data-provincia="Mendoza" data-region="Luján de Cuyo" data-bodega="Enrique Foster Bodega" data-tipo="Tinto" data-subtipo="Premium" data-anada="2023" data-precio="44" data-precio-rango="Premium" data-altura="900">
        <img src="/images/foster-malbec-limited-edition-2023.jpg" alt="Foster - Malbec Limited Edition 2023">
        <div class="overlay">
          <p><strong>Bodega:</strong> Enrique Foster Bodega</p>
          <p><strong>Provincia:</strong> Mendoza</p>
          <p><strong>Región:</strong> Luján de Cuyo</p>
          <p><strong>Altura:</strong> 900 msnm</p>
        </div>
        <h3>Foster - Malbec Limited Edition 2023</h3>
        <p>€44</p>
        <a href="foster-malbec-limited-edition-2023.html">Comprar</a>
      </div>
    </div>
  </div>
  <script>
    document.addEventListener('DOMContentLoaded', () => {
      const menuToggle = document.getElementById('menu-toggle');
      const sidebar = document.getElementById('sidebar');
      const noResults = document.getElementById('no-results');
      const resetFilters = document.getElementById('reset-filters');

      // Toggle sidebar on mobile
      menuToggle.addEventListener('click', () => {
        sidebar.classList.toggle('active');
      });

      // Close sidebar when clicking a filter or link on mobile
      document.querySelectorAll('nav a, nav span.filter').forEach(element => {
        element.addEventListener('click', () => {
          if (window.innerWidth <= 768) {
            sidebar.classList.remove('active');
          }
        });
      });

      // Filter functionality
      document.querySelectorAll('.filter').forEach(filter => {
        filter.addEventListener('click', () => {
          // Remove active class from all filters
          document.querySelectorAll('.filter').forEach(f => f.classList.remove('active'));
          // Add active class to clicked filter
          filter.classList.add('active');

          const filterType = filter.dataset.filter;
          const filterValue = filter.dataset.value;

          let hasVisible = false;
          document.querySelectorAll('.product-card').forEach(card => {
            // Show card if filterValue is 'all' or matches the card's data attribute
            if (filterValue === 'all' || card.dataset[filterType] === filterValue) {
              card.classList.remove('hidden');
              hasVisible = true;
            } else {
              card.classList.add('hidden');
            }
          });

          // Show/hide no-results message
          noResults.style.display = hasVisible ? 'none' : 'block';
        });
      });

      // Reset filters
      resetFilters.addEventListener('click', () => {
        document.querySelectorAll('.product-card').forEach(card => {
          card.classList.remove('hidden');
        });
        document.querySelectorAll('.filter').forEach(f => f.classList.remove('active'));
        noResults.style.display = 'none';
      });
    });
  </script>
</body>
</html>

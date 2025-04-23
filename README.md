<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="Descubre los mejores Malbecs de ARGENTINA, desde la Patagonia hasta la Puna.">
  <title>1000malbecs - Los 1000 Mejores Malbecs</title>
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
      width: 350px;
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
      z-index: 15; /* Encima del overlay */
    }
    .product-card a:hover {
      background-color: #682A46;
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
    /* Estilos para el ícono de información */
    .info-icon {
      display: none; /* Oculto por defecto en escritorio */
      position: absolute;
      top: 10px;
      right: 10px;
      background-color: rgba(74, 13, 41, 0.8);
      color: #f5e6ff;
      font-size: 1.2em;
      padding: 5px;
      border-radius: 50%;
      cursor: pointer;
      z-index: 15; /* Encima de la imagen, pero debajo del botón Comprar */
    }
    /* Ocultar el ícono cuando el overlay está visible */
    .product-card.show-overlay .info-icon {
      display: none;
    }
    /* Estilos para el tooltip */
    #mobile-tooltip {
      position: fixed;
      bottom: 20px;
      left: 50%;
      transform: translateX(-50%);
      background-color: #4A0D29;
      color: #f5e6ff;
      padding: 10px 20px;
      border-radius: 5px;
      font-size: 0.9em;
      z-index: 1200; /* Encima de todo */
      text-align: center;
      max-width: 90%;
      box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
    }
    /* Estilos para el overlay en móvil */
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
      .info-icon {
        display: block;
      }
      /* Desactivar hover en móvil y ajustar overlay */
      .product-card:hover .overlay {
        opacity: 0; /* Desactiva el hover en móvil */
      }
      .product-card.show-overlay .overlay {
        opacity: 1; /* Muestra el overlay cuando se activa con clic */
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 200px; /* Cubre solo la imagen */
        background-color: rgba(74, 13, 41, 0.95); /* Más opaco para mejor legibilidad */
        z-index: 10; /* Asegura que esté encima de la imagen */
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 10px;
      }
      .product-card.show-overlay {
        position: relative;
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
    <summary><i class="fas fa-map-marker-alt"></i> Ubicación</summary>
    <ul>
      <li><span class="filter" data-filter="provincia" data-value="Mendoza">Mendoza</span>
        <ul>
          <li><strong>Región</strong>
            <ul>
              <li><span class="filter" data-filter="region" data-value="Valle de Uco">Valle de Uco</span>
                <ul>
                  <li><a href="tematico-malbec-2023.html" data-provincia="Mendoza" data-tipo="Estándar" data-anada="2023" data-altura="1000m - 2000m">Temático - Malbec 2023</a></li>
                  <li><a href="fantasia-malbec-2023.html" data-provincia="Mendoza" data-tipo="Estándar" data-anada="2023" data-altura="1000m - 2000m">Fantasía - Malbec 2023</a></li>
                  <li><a href="gran-poetico-malbec-2013.html" data-provincia="Mendoza" data-tipo="Estándar" data-anada="2013" data-altura="1000m - 2000m">Gran Poético - Malbec 2013</a></li>
                  <li><a href="zapam-zucum-organic-malbec-2022.html" data-provincia="Mendoza" data-tipo="Orgánico" data-anada="2022" data-altura="1000m - 2000m">Zapam Zucum - Organic Malbec 2022</a></li>
                  <li><a href="catena-zapata-malbec-2020.html" data-provincia="Mendoza" data-tipo="Tinto" data-anada="2020" data-altura="1000m - 2000m">Catena Zapata - Malbec 2020</a></li>
                </ul>
              </li>
              <li><span class="filter" data-filter="region" data-value="Luján de Cuyo">Luján de Cuyo</span>
                <ul>
                  <li><a href="lois-sparkling-malbec-2021.html" data-provincia="Mendoza" data-tipo="Espumante" data-anada="2021" data-altura="< 1000m">Lois - Sparkling Malbec 2021</a></li>
                  <li><a href="pink-malbec-rosado-2023.html" data-provincia="Mendoza" data-tipo="Rosado" data-anada="2023" data-altura="< 1000m">Pink - Malbec Rosado 2023</a></li>
                  <li><a href="ique-malbec-2023.html" data-provincia="Mendoza" data-tipo="Tinto" data-anada="2023" data-altura="< 1000m">Ique - Malbec 2023</a></li>
                  <li><a href="foster-malbec-2023.html" data-provincia="Mendoza" data-tipo="Tinto" data-anada="2023" data-altura="< 1000m">Foster - Malbec 2023</a></li>
                  <li><a href="foster-malbec-los-altepes-2023.html" data-provincia="Mendoza" data-tipo="Tinto" data-anada="2023" data-altura="< 1000m">Foster - Malbec 'Los Altepes' 2023</a></li>
                  <li><a href="foster-malbec-los-barrancos-2023.html" data-provincia="Mendoza" data-tipo="Tinto" data-anada="2023" data-altura="< 1000m">Foster - Malbec 'Los Barrancos' 2023</a></li>
                  <li><a href="foster-malbec-limited-edition-2023.html" data-provincia="Mendoza" data-tipo="Tinto" data-anada="2023" data-altura="< 1000m">Foster - Malbec Limited Edition 2023</a></li>
                  <li><a href="altos-del-plata-malbec-2022.html" data-provincia="Mendoza" data-tipo="Tinto" data-anada="2022" data-altura="< 1000m">Altos del Plata - Malbec 2022</a></li>
                </ul>
              </li>
            </ul>
          </li>
          <li><strong>Altura</strong>
            <ul>
              <li><span class="filter" data-filter="altura" data-value="< 1000m">< 1000m</span>
                <ul>
                  <li><a href="lois-sparkling-malbec-2021.html" data-provincia="Mendoza" data-tipo="Espumante" data-anada="2021" data-altura="< 1000m">Lois - Sparkling Malbec 2021</a></li>
                  <li><a href="pink-malbec-rosado-2023.html" data-provincia="Mendoza" data-tipo="Rosado" data-anada="2023" data-altura="< 1000m">Pink - Malbec Rosado 2023</a></li>
                  <li><a href="ique-malbec-2023.html" data-provincia="Mendoza" data-tipo="Tinto" data-anada="2023" data-altura="< 1000m">Ique - Malbec 2023</a></li>
                  <li><a href="foster-malbec-2023.html" data-provincia="Mendoza" data-tipo="Tinto" data-anada="2023" data-altura="< 1000m">Foster - Malbec 2023</a></li>
                  <li><a href="foster-malbec-los-altepes-2023.html" data-provincia="Mendoza" data-tipo="Tinto" data-anada="2023" data-altura="< 1000m">Foster - Malbec 'Los Altepes' 2023</a></li>
                  <li><a href="foster-malbec-los-barrancos-2023.html" data-provincia="Mendoza" data-tipo="Tinto" data-anada="2023" data-altura="< 1000m">Foster - Malbec 'Los Barrancos' 2023</a></li>
                  <li><a href="foster-malbec-limited-edition-2023.html" data-provincia="Mendoza" data-tipo="Tinto" data-anada="2023" data-altura="< 1000m">Foster - Malbec Limited Edition 2023</a></li>
                  <li><a href="altos-del-plata-malbec-2022.html" data-provincia="Mendoza" data-tipo="Tinto" data-anada="2022" data-altura="< 1000m">Altos del Plata - Malbec 2022</a></li>
                </ul>
              </li>
              <li><span class="filter" data-filter="altura" data-value="1000m - 2000m">1000m - 2000m</span>
                <ul>
                  <li><a href="tematico-malbec-2023.html" data-provincia="Mendoza" data-tipo="Estándar" data-anada="2023" data-altura="1000m - 2000m">Temático - Malbec 2023</a></li>
                  <li><a href="fantasia-malbec-2023.html" data-provincia="Mendoza" data-tipo="Estándar" data-anada="2023" data-altura="1000m - 2000m">Fantasía - Malbec 2023</a></li>
                  <li><a href="gran-poetico-malbec-2013.html" data-provincia="Mendoza" data-tipo="Estándar" data-anada="2013" data-altura="1000m - 2000m">Gran Poético - Malbec 2013</a></li>
                  <li><a href="zapam-zucum-organic-malbec-2022.html" data-provincia="Mendoza" data-tipo="Orgánico" data-anada="2022" data-altura="1000m - 2000m">Zapam Zucum - Organic Malbec 2022</a></li>
                  <li><a href="catena-zapata-malbec-2020.html" data-provincia="Mendoza" data-tipo="Tinto" data-anada="2020" data-altura="1000m - 2000m">Catena Zapata - Malbec 2020</a></li>
                  <li><a href="finca-las-nubes-malbec-2020.html" data-provincia="Salta" data-tipo="Tinto" data-anada="2020" data-altura="1000m - 2000m">Finca Las Nubes - Malbec 2020</a></li>
                </ul>
              </li>
            </ul>
          </li>
        </ul>
      </li>
      <li><span class="filter" data-filter="provincia" data-value="Salta">Salta</span>
        <ul>
          <li><strong>Región</strong>
            <ul>
              <li><span class="filter" data-filter="region" data-value="Cafayate">Cafayate</span>
                <ul>
                  <li><a href="finca-las-nubes-malbec-2020.html" data-provincia="Salta" data-tipo="Tinto" data-anada="2020" data-altura="1000m - 2000m">Finca Las Nubes - Malbec 2020</a></li>
                </ul>
              </li>
              <li><span class="filter" data-filter="region" data-value="Calchaquí">Calchaquí</span>
                <ul>
                  <li><a href="colome-malbec-2021.html" data-provincia="Salta" data-tipo="Tinto" data-anada="2021" data-altura="2000m - 3000m">Colomé - Malbec 2021</a></li>
                </ul>
              </li>
            </ul>
          </li>
          <li><strong>Altura</strong>
            <ul>
              <li><span class="filter" data-filter="altura" data-value="1000m - 2000m">1000m - 2000m</span>
                <ul>
                  <li><a href="finca-las-nubes-malbec-2020.html" data-provincia="Salta" data-tipo="Tinto" data-anada="2020" data-altura="1000m - 2000m">Finca Las Nubes - Malbec 2020</a></li>
                </ul>
              </li>
              <li><span class="filter" data-filter="altura" data-value="2000m - 3000m">2000m - 3000m</span>
                <ul>
                  <li><a href="colome-malbec-2021.html" data-provincia="Salta" data-tipo="Tinto" data-anada="2021" data-altura="2000m - 3000m">Colomé - Malbec 2021</a></li>
                </ul>
              </li>
            </ul>
          </li>
        </ul>
      </li>
    </ul>
  </details>
  <details>
    <summary><i class="fas fa-wine-glass-alt"></i> Vino</summary>
    <ul>
      <li><strong>Tipo</strong>
        <ul>
          <li><span class="filter" data-filter="tipo" data-value="Tinto">Tinto</span>
            <ul>
              <li><a href="ique-malbec-2023.html" data-provincia="Mendoza" data-tipo="Tinto" data-anada="2023" data-altura="< 1000m">Ique - Malbec 2023</a></li>
              <li><a href="foster-malbec-2023.html" data-provincia="Mendoza" data-tipo="Tinto" data-anada="2023" data-altura="< 1000m">Foster - Malbec 2023</a></li>
              <li><a href="foster-malbec-los-altepes-2023.html" data-provincia="Mendoza" data-tipo="Tinto" data-anada="2023" data-altura="< 1000m">Foster - Malbec 'Los Altepes' 2023</a></li>
              <li><a href="foster-malbec-los-barrancos-2023.html" data-provincia="Mendoza" data-tipo="Tinto" data-anada="2023" data-altura="< 1000m">Foster - Malbec 'Los Barrancos' 2023</a></li>
              <li><a href="foster-malbec-limited-edition-2023.html" data-provincia="Mendoza" data-tipo="Tinto" data-anada="2023" data-altura="< 1000m">Foster - Malbec Limited Edition 2023</a></li>
              <li><a href="finca-las-nubes-malbec-2020.html" data-provincia="Salta" data-tipo="Tinto" data-anada="2020" data-altura="1000m - 2000m">Finca Las Nubes - Malbec 2020</a></li>
              <li><a href="altos-del-plata-malbec-2022.html" data-provincia="Mendoza" data-tipo="Tinto" data-anada="2022" data-altura="< 1000m">Altos del Plata - Malbec 2022</a></li>
              <li><a href="colome-malbec-2021.html" data-provincia="Salta" data-tipo="Tinto" data-anada="2021" data-altura="2000m - 3000m">Colomé - Malbec 2021</a></li>
              <li><a href="catena-zapata-malbec-2020.html" data-provincia="Mendoza" data-tipo="Tinto" data-anada="2020" data-altura="1000m - 2000m">Catena Zapata - Malbec 2020</a></li>
            </ul>
          </li>
          <li><span class="filter" data-filter="tipo" data-value="Rosado">Rosado</span>
            <ul>
              <li><a href="pink-malbec-rosado-2023.html" data-provincia="Mendoza" data-tipo="Rosado" data-anada="2023" data-altura="< 1000m">Pink - Malbec Rosado 2023</a></li>
            </ul>
          </li>
          <li><span class="filter" data-filter="tipo" data-value="Espumante">Espumante</span>
            <ul>
              <li><a href="lois-sparkling-malbec-2021.html" data-provincia="Mendoza" data-tipo="Espumante" data-anada="2021" data-altura="< 1000m">Lois - Sparkling Malbec 2021</a></li>
            </ul>
          </li>
          <li><span class="filter" data-filter="tipo" data-value="Estándar">Estándar</span>
            <ul>
              <li><a href="tematico-malbec-2023.html" data-provincia="Mendoza" data-tipo="Estándar" data-anada="2023" data-altura="1000m - 2000m">Temático - Malbec 2023</a></li>
              <li><a href="fantasia-malbec-2023.html" data-provincia="Mendoza" data-tipo="Estándar" data-anada="2023" data-altura="1000m - 2000m">Fantasía - Malbec 2023</a></li>
              <li><a href="gran-poetico-malbec-2013.html" data-provincia="Mendoza" data-tipo="Estándar" data-anada="2013" data-altura="1000m - 2000m">Gran Poético - Malbec 2013</a></li>
            </ul>
          </li>
          <li><span class="filter" data-filter="tipo" data-value="Orgánico">Orgánico</span>
            <ul>
              <li><a href="zapam-zucum-organic-malbec-2022.html" data-provincia="Mendoza" data-tipo="Orgánico" data-anada="2022" data-altura="1000m - 2000m">Zapam Zucum - Organic Malbec 2022</a></li>
            </ul>
          </li>
        </ul>
      </li>
      <li><strong>Añada</strong>
        <ul>
          <li><span class="filter" data-filter="anada" data-value="2023">2023</span>
            <ul>
              <li><a href="tematico-malbec-2023.html" data-provincia="Mendoza" data-tipo="Estándar" data-anada="2023" data-altura="1000m - 2000m">Temático - Malbec 2023</a></li>
              <li><a href="fantasia-malbec-2023.html" data-provincia="Mendoza" data-tipo="Estándar" data-anada="2023" data-altura="1000m - 2000m">Fantasía - Malbec 2023</a></li>
              <li><a href="pink-malbec-rosado-2023.html" data-provincia="Mendoza" data-tipo="Rosado" data-anada="2023" data-altura="< 1000m">Pink - Malbec Rosado 2023</a></li>
              <li><a href="ique-malbec-2023.html" data-provincia="Mendoza" data-tipo="Tinto" data-anada="2023" data-altura="< 1000m">Ique - Malbec 2023</a></li>
              <li><a href="foster-malbec-2023.html" data-provincia="Mendoza" data-tipo="Tinto" data-anada="2023" data-altura="< 1000m">Foster - Malbec 2023</a></li>
              <li><a href="foster-malbec-los-altepes-2023.html" data-provincia="Mendoza" data-tipo="Tinto" data-anada="2023" data-altura="< 1000m">Foster - Malbec 'Los Altepes' 2023</a></li>
              <li><a href="foster-malbec-los-barrancos-2023.html" data-provincia="Mendoza" data-tipo="Tinto" data-anada="2023" data-altura="< 1000m">Foster - Malbec 'Los Barrancos' 2023</a></li>
              <li><a href="foster-malbec-limited-edition-2023.html" data-provincia="Mendoza" data-tipo="Tinto" data-anada="2023" data-altura="< 1000m">Foster - Malbec Limited Edition 2023</a></li>
            </ul>
          </li>
          <li><span class="filter" data-filter="anada" data-value="2022">2022</span>
            <ul>
              <li><a href="zapam-zucum-organic-malbec-2022.html" data-provincia="Mendoza" data-tipo="Orgánico" data-anada="2022" data-altura="1000m - 2000m">Zapam Zucum - Organic Malbec 2022</a></li>
              <li><a href="altos-del-plata-malbec-2022.html" data-provincia="Mendoza" data-tipo="Tinto" data-anada="2022" data-altura="< 1000m">Altos del Plata - Malbec 2022</a></li>
            </ul>
          </li>
          <li><span class="filter" data-filter="anada" data-value="2021">2021</span>
            <ul>
              <li><a href="lois-sparkling-malbec-2021.html" data-provincia="Mendoza" data-tipo="Espumante" data-anada="2021" data-altura="< 1000m">Lois - Sparkling Malbec 2021</a></li>
              <li><a href="colome-malbec-2021.html" data-provincia="Salta" data-tipo="Tinto" data-anada="2021" data-altura="2000m - 3000m">Colomé - Malbec 2021</a></li>
            </ul>
          </li>
          <li><span class="filter" data-filter="anada" data-value="2020">2020</span>
            <ul>
              <li><a href="finca-las-nubes-malbec-2020.html" data-provincia="Salta" data-tipo="Tinto" data-anada="2020" data-altura="1000m - 2000m">Finca Las Nubes - Malbec 2020</a></li>
              <li><a href="catena-zapata-malbec-2020.html" data-provincia="Mendoza" data-tipo="Tinto" data-anada="2020" data-altura="1000m - 2000m">Catena Zapata - Malbec 2020</a></li>
            </ul>
          </li>
          <li><span class="filter" data-filter="anada" data-value="2013">2013</span>
            <ul>
              <li><a href="gran-poetico-malbec-2013.html" data-provincia="Mendoza" data-tipo="Estándar" data-anada="2013" data-altura="1000m - 2000m">Gran Poético - Malbec 2013</a></li>
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
          <li><a href="tematico-malbec-2023.html" data-provincia="Mendoza" data-tipo="Estándar" data-anada="2023" data-altura="1000m - 2000m">Temático - Malbec 2023</a></li>
          <li><a href="fantasia-malbec-2023.html" data-provincia="Mendoza" data-tipo="Estándar" data-anada="2023" data-altura="1000m - 2000m">Fantasía - Malbec 2023</a></li>
          <li><a href="gran-poetico-malbec-2013.html" data-provincia="Mendoza" data-tipo="Estándar" data-anada="2013" data-altura="1000m - 2000m">Gran Poético - Malbec 2013</a></li>
          <li><a href="zapam-zucum-organic-malbec-2022.html" data-provincia="Mendoza" data-tipo="Orgánico" data-anada="2022" data-altura="1000m - 2000m">Zapam Zucum - Organic Malbec 2022</a></li>
        </ul>
      </li>
      <li><span class="filter" data-filter="bodega" data-value="Enrique Foster Bodega">Enrique Foster Bodega</span>
        <ul>
          <li><a href="lois-sparkling-malbec-2021.html" data-provincia="Mendoza" data-tipo="Espumante" data-anada="2021" data-altura="< 1000m">Lois - Sparkling Malbec 2021</a></li>
          <li><a href="pink-malbec-rosado-2023.html" data-provincia="Mendoza" data-tipo="Rosado" data-anada="2023" data-altura="< 1000m">Pink - Malbec Rosado 2023</a></li>
          <li><a href="ique-malbec-2023.html" data-provincia="Mendoza" data-tipo="Tinto" data-anada="2023" data-altura="< 1000m">Ique - Malbec 2023</a></li>
          <li><a href="foster-malbec-2023.html" data-provincia="Mendoza" data-tipo="Tinto" data-anada="2023" data-altura="< 1000m">Foster - Malbec 2023</a></li>
          <li><a href="foster-malbec-los-altepes-2023.html" data-provincia="Mendoza" data-tipo="Tinto" data-anada="2023" data-altura="< 1000m">Foster - Malbec 'Los Altepes' 2023</a></li>
          <li><a href="foster-malbec-los-barrancos-2023.html" data-provincia="Mendoza" data-tipo="Tinto" data-anada="2023" data-altura="< 1000m">Foster - Malbec 'Los Barrancos' 2023</a></li>
          <li><a href="foster-malbec-limited-edition-2023.html" data-provincia="Mendoza" data-tipo="Tinto" data-anada="2023" data-altura="< 1000m">Foster - Malbec Limited Edition 2023</a></li>
        </ul>
      </li>
      <li><span class="filter" data-filter="bodega" data-value="Finca Las Nubes">Finca Las Nubes</span>
        <ul>
          <li><a href="finca-las-nubes-malbec-2020.html" data-provincia="Salta" data-tipo="Tinto" data-anada="2020" data-altura="1000m - 2000m">Finca Las Nubes - Malbec 2020</a></li>
        </ul>
      </li>
      <li><span class="filter" data-filter="bodega" data-value="Terrazas de los Andes">Terrazas de los Andes</span>
        <ul>
          <li><a href="altos-del-plata-malbec-2022.html" data-provincia="Mendoza" data-tipo="Tinto" data-anada="2022" data-altura="< 1000m">Altos del Plata - Malbec 2022</a></li>
        </ul>
      </li>
      <li><span class="filter" data-filter="bodega" data-value="Bodega Colomé">Bodega Colomé</span>
        <ul>
          <li><a href="colome-malbec-2021.html" data-provincia="Salta" data-tipo="Tinto" data-anada="2021" data-altura="2000m - 3000m">Colomé - Malbec 2021</a></li>
        </ul>
      </li>
      <li><span class="filter" data-filter="bodega" data-value="Catena Zapata">Catena Zapata</span>
        <ul>
          <li><a href="catena-zapata-malbec-2020.html" data-provincia="Mendoza" data-tipo="Tinto" data-anada="2020" data-altura="1000m - 2000m">Catena Zapata - Malbec 2020</a></li>
        </ul>
      </li>
    </ul>
  </details>
  <details>
    <summary><i class="fas fa-dollar-sign"></i> Rango de Precio</summary>
    <ul>
      <li><span class="filter" data-filter="precio-rango" data-value="Económico">Económico (< 10 €)</span>
        <ul>
          <li><a href="tematico-malbec-2023.html" data-provincia="Mendoza" data-tipo="Estándar" data-anada="2023" data-altura="1000m - 2000m">Temático - Malbec 2023</a></li>
        </ul>
      </li>
      <li><span class="filter" data-filter="precio-rango" data-value="Medio">Medio (10 € - 20 €)</span>
        <ul>
          <li><a href="zapam-zucum-organic-malbec-2022.html" data-provincia="Mendoza" data-tipo="Orgánico" data-anada="2022" data-altura="1000m - 2000m">Zapam Zucum - Organic Malbec 2022</a></li>
          <li><a href="fantasia-malbec-2023.html" data-provincia="Mendoza" data-tipo="Estándar" data-anada="2023" data-altura="1000m - 2000m">Fantasía - Malbec 2023</a></li>
          <li><a href="lois-sparkling-malbec-2021.html" data-provincia="Mendoza" data-tipo="Espumante" data-anada="2021" data-altura="< 1000m">Lois - Sparkling Malbec 2021</a></li>
          <li><a href="pink-malbec-rosado-2023.html" data-provincia="Mendoza" data-tipo="Rosado" data-anada="2023" data-altura="< 1000m">Pink - Malbec Rosado 2023</a></li>
          <li><a href="ique-malbec-2023.html" data-provincia="Mendoza" data-tipo="Tinto" data-anada="2023" data-altura="< 1000m">Ique - Malbec 2023</a></li>
          <li><a href="finca-las-nubes-malbec-2020.html" data-provincia="Salta" data-tipo="Tinto" data-anada="2020" data-altura="1000m - 2000m">Finca Las Nubes - Malbec 2020</a></li>
          <li><a href="altos-del-plata-malbec-2022.html" data-provincia="Mendoza" data-tipo="Tinto" data-anada="2022" data-altura="< 1000m">Altos del Plata - Malbec 2022</a></li>
          <li><a href="colome-malbec-2021.html" data-provincia="Salta" data-tipo="Tinto" data-anada="2021" data-altura="2000m - 3000m">Colomé - Malbec 2021</a></li>
        </ul>
      </li>
      <li><span class="filter" data-filter="precio-rango" data-value="Premium">Premium (> 20 €)</span>
        <ul>
          <li><a href="gran-poetico-malbec-2013.html" data-provincia="Mendoza" data-tipo="Estándar" data-anada="2013" data-altura="1000m - 2000m">Gran Poético - Malbec 2013</a></li>
          <li><a href="foster-malbec-2023.html" data-provincia="Mendoza" data-tipo="Tinto" data-anada="2023" data-altura="< 1000m">Foster - Malbec 2023</a></li>
          <li><a href="foster-malbec-los-altepes-2023.html" data-provincia="Mendoza" data-tipo="Tinto" data-anada="2023" data-altura="< 1000m">Foster - Malbec 'Los Altepes' 2023</a></li>
          <li><a href="foster-malbec-los-barrancos-2023.html" data-provincia="Mendoza" data-tipo="Tinto" data-anada="2023" data-altura="< 1000m">Foster - Malbec 'Los Barrancos' 2023</a></li>
          <li><a href="foster-malbec-limited-edition-2023.html" data-provincia="Mendoza" data-tipo="Tinto" data-anada="2023" data-altura="< 1000m">Foster - Malbec Limited Edition 2023</a></li>
          <li><a href="catena-zapata-malbec-2020.html" data-provincia="Mendoza" data-tipo="Tinto" data-anada="2020" data-altura="1000m - 2000m">Catena Zapata - Malbec 2020</a></li>
        </ul>
      </li>
    </ul>
  </details>
</nav>
   <div class="main-content">
    <h1>Bienvenidos a 1000malbecs</h1>
    <p>Explora nuestra selección de los mejores Malbecs de ARGENTINA. Desde la patagonia hasta la puna. Usa los filtros a la izquierda para refinar los resultados.</p>
    <button id="reset-filters">Limpiar Filtros</button>
    <div id="no-results" style="display: none;">
      No se encontraron productos que coincidan con los filtros seleccionados.
    </div>
    <div class="featured-products">
      <!-- Mauricio Lorca Bodega y Viñedos -->
      <div class="product-card" data-provincia="Mendoza" data-region="Valle de Uco" data-bodega="Mauricio Lorca Bodega y Viñedos" data-tipo="Estándar" data-anada="2023" data-precio="9" data-precio-rango="Económico" data-altura="1000m - 2000m">
        <img src="/images/Tematico-Malbec.avif" alt="Temático - Malbec 2023">
        <span class="info-icon">🍷</span>
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
      <div class="product-card" data-provincia="Mendoza" data-region="Valle de Uco" data-bodega="Mauricio Lorca Bodega y Viñedos" data-tipo="Estándar" data-anada="2023" data-precio="11" data-precio-rango="Medio" data-altura="1000m - 2000m">
        <img src="/images/FantasiaMalbec.jpg" alt="Fantasía - Malbec 2023">
        <span class="info-icon">🍷</span>
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
      <div class="product-card" data-provincia="Mendoza" data-region="Valle de Uco" data-bodega="Mauricio Lorca Bodega y Viñedos" data-tipo="Estándar" data-anada="2013" data-precio="25" data-precio-rango="Premium" data-altura="1000m - 2000m">
        <img src="/images/GranPoeticoMalbec.png" alt="Gran Poético - Malbec 2013">
        <span class="info-icon">🍷</span>
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
      <div class="product-card" data-provincia="Mendoza" data-region="Valle de Uco" data-bodega="Mauricio Lorca Bodega y Viñedos" data-tipo="Orgánico" data-anada="2022" data-precio="13" data-precio-rango="Medio" data-altura="1000m - 2000m">
        <img src="/images/ZapamZucum.avif" alt="Zapam Zucum - Organic Malbec 2022">
        <span class="info-icon">🍷</span>
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
      <div class="product-card" data-provincia="Mendoza" data-region="Luján de Cuyo" data-bodega="Enrique Foster Bodega" data-tipo="Espumante" data-anada="2021" data-precio="15" data-precio-rango="Medio" data-altura="< 1000m">
        <img src="/images/Lois.png" alt="Lois - Sparkling Malbec 2021">
        <span class="info-icon">🍷</span>
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
      <div class="product-card" data-provincia="Mendoza" data-region="Luján de Cuyo" data-bodega="Enrique Foster Bodega" data-tipo="Rosado" data-anada="2023" data-precio="11" data-precio-rango="Medio" data-altura="< 1000m">
        <img src="/images/Pink.jpeg" alt="Pink - Malbec Rosado 2023">
        <span class="info-icon">🍷</span>
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
      <div class="product-card" data-provincia="Mendoza" data-region="Luján de Cuyo" data-bodega="Enrique Foster Bodega" data-tipo="Tinto" data-anada="2023" data-precio="11" data-precio-rango="Medio" data-altura="< 1000m">
        <img src="/images/IqueMalbec.avif" alt="Ique - Malbec 2023">
        <span class="info-icon">🍷</span>
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
      <div class="product-card" data-provincia="Mendoza" data-region="Luján de Cuyo" data-bodega="Enrique Foster Bodega" data-tipo="Tinto" data-anada="2023" data-precio="21" data-precio-rango="Premium" data-altura="< 1000m">
        <img src="/images/ReservaMalbec.avif" alt="Foster - Malbec 2023">
        <span class="info-icon">🍷</span>
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
      <div class="product-card" data-provincia="Mendoza" data-region="Luján de Cuyo" data-bodega="Enrique Foster Bodega" data-tipo="Tinto" data-anada="2023" data-precio="23" data-precio-rango="Premium" data-altura="< 1000m">
        <img src="/images/LosAltepes.png" alt="Foster - Malbec 'Los Altepes' 2023">
        <span class="info-icon">🍷</span>
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
      <div class="product-card" data-provincia="Mendoza" data-region="Luján de Cuyo" data-bodega="Enrique Foster Bodega" data-tipo="Tinto" data-anada="2023" data-precio="25" data-precio-rango="Premium" data-altura="< 1000m">
        <img src="/images/FosterBarrancos.jpeg" alt="Foster - Malbec 'Los Barrancos' 2023">
        <span class="info-icon">🍷</span>
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
      <div class="product-card" data-provincia="Mendoza" data-region="Luján de Cuyo" data-bodega="Enrique Foster Bodega" data-tipo="Tinto" data-anada="2023" data-precio="44" data-precio-rango="Premium" data-altura="< 1000m">
        <img src="/images/FosterLimited.png" alt="Foster - Malbec Limited Edition 2023">
        <span class="info-icon">🍷</span>
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
      <!-- Finca Las Nubes Bodega -->
      <div class="product-card" data-provincia="Salta" data-region="Cafayate" data-bodega="Finca Las Nubes" data-tipo="Tinto" data-anada="2020" data-precio="19.95" data-precio-rango="Medio" data-altura="1000m - 2000m">
        <img src="/images/FincaLasNubes.png" alt="Finca Las Nubes - Malbec 2020">
        <span class="info-icon">🍷</span>
        <div class="overlay">
          <p><strong>Bodega:</strong> Finca Las Nubes</p>
          <p><strong>Provincia:</strong> Salta</p>
          <p><strong>Región:</strong> Cafayate</p>
          <p><strong>Altura:</strong> 1700 msnm</p>
        </div>
        <h3>Finca Las Nubes - Malbec 2020</h3>
        <p>€19.95</p>
        <a href="finca-las-nubes-malbec-2020.html">Comprar</a>
      </div>
        <!-- Nueva tarjeta 1: Altos del Plata - Malbec 2022 -->
<div class="product-card" data-provincia="Mendoza" data-region="Luján de Cuyo" data-bodega="Terrazas de los Andes" data-tipo="Tinto" data-anada="2022" data-precio="12" data-precio-rango="Medio" data-altura="< 1000m">
  <img src="/images/AltosDelPlataMalbec.jpg" alt="Altos del Plata - Malbec 2022">
  <span class="info-icon">+</span>
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
<!-- Nueva tarjeta 2: Colomé - Malbec 2021 -->
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
<!-- Nueva tarjeta 3: Catena Zapata - Malbec 2020 -->
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
  <div id="mobile-tooltip" style="display: none;">
    ¡Toca un producto para ver más detalles!
  </div>
  <script>
    document.addEventListener('DOMContentLoaded', () => {
      const menuToggle = document.getElementById('menu-toggle');
      const sidebar = document.getElementById('sidebar');
      const noResults = document.getElementById('no-results');
      const resetFilters = document.getElementById('reset-filters');
      const tooltip = document.getElementById('mobile-tooltip');

      // Objeto para almacenar filtros activos
      let activeFilters = {};

      // Toggle sidebar on mobile
      menuToggle.addEventListener('click', (e) => {
        e.stopPropagation(); // Evitar propagación del clic
        sidebar.classList.toggle('active');
      });

      // Close sidebar when clicking a filter or link on mobile
      document.querySelectorAll('nav a, nav span.filter').forEach(element => {
        element.addEventListener('click', (e) => {
          if (window.innerWidth <= 768) {
            sidebar.classList.remove('active');
          }
        });
      });

      // Filter functionality
      document.querySelectorAll('.filter').forEach(filter => {
        filter.addEventListener('click', (e) => {
          e.stopPropagation(); // Evitar propagación del clic
          const filterType = filter.dataset.filter;
          const filterValue = filter.dataset.value;

          // Toggle filter: si ya está activo, desactívalo; si no, actívalo
          if (activeFilters[filterType] === filterValue) {
            delete activeFilters[filterType];
            filter.classList.remove('active');
          } else {
            activeFilters[filterType] = filterValue;
            // Remove active class from other filters of the same type
            document.querySelectorAll(`.filter[data-filter="${filterType}"]`).forEach(f => f.classList.remove('active'));
            filter.classList.add('active');
          }

          // Filtrar productos
          let hasVisible = false;
          document.querySelectorAll('.product-card').forEach(card => {
            let show = true;

            // Verificar cada filtro activo
            Object.keys(activeFilters).forEach(type => {
              // Normalizar el tipo para evitar problemas con guiones
              const normalizedType = type.replace('precio-rango', 'precioRango');
              const cardValue = card.dataset[normalizedType];
              if (cardValue !== activeFilters[type]) {
                show = false;
              }
            });

            // Mostrar u ocultar la tarjeta
            if (show) {
              card.classList.remove('hidden');
              hasVisible = true;
            } else {
              card.classList.add('hidden');
            }
          });

          // Mostrar u ocultar mensaje de "no resultados"
          noResults.style.display = hasVisible ? 'none' : 'block';
        });
      });

      // Reset filters
      resetFilters.addEventListener('click', (e) => {
        e.stopPropagation(); // Evitar propagación del clic
        activeFilters = {};
        document.querySelectorAll('.product-card').forEach(card => {
          card.classList.remove('hidden');
        });
        document.querySelectorAll('.filter').forEach(f => f.classList.remove('active'));
        noResults.style.display = 'none';
      });

      // Mobile overlay toggle for product cards
      document.querySelectorAll('.product-card').forEach(card => {
        card.addEventListener('click', (e) => {
          // Solo en móvil (max-width: 768px)
          if (window.innerWidth <= 768) {
            // Evitar que el clic en el botón "Comprar" alterne el overlay
            if (e.target.tagName === 'A' || e.target.closest('a')) {
              return; // Permitir que el enlace funcione normalmente
            }

            // Evitar propagación para no interferir con otros eventos
            e.stopPropagation();

            // Si la tarjeta ya tiene el overlay visible, ocultarlo
            if (card.classList.contains('show-overlay')) {
              card.classList.remove('show-overlay');
            } else {
              // Ocultar overlays de otras tarjetas
              document.querySelectorAll('.product-card').forEach(otherCard => {
                otherCard.classList.remove('show-overlay');
              });
              // Mostrar overlay de esta tarjeta
              card.classList.add('show-overlay');
            }
          }
        });
      });

      // Ocultar overlay al hacer clic fuera de las tarjetas (en móvil)
      document.addEventListener('click', (e) => {
        if (window.innerWidth <= 768) {
          const isCard = e.target.closest('.product-card');
          if (!isCard) {
            document.querySelectorAll('.product-card').forEach(card => {
              card.classList.remove('show-overlay');
            });
          }
        }
      });

      // Mostrar tooltip en móvil solo la primera vez
      if (window.innerWidth <= 768 && !localStorage.getItem('tooltipShown')) {
        tooltip.style.display = 'block';
        // Ocultar después de 5 segundos
        setTimeout(() => {
          tooltip.style.display = 'none';
          localStorage.setItem('tooltipShown', 'true');
        }, 5000);
        // Ocultar al interactuar con la página
        document.addEventListener('click', () => {
          tooltip.style.display = 'none';
          localStorage.setItem('tooltipShown', 'true');
        }, { once: true });
      }
    });
  </script>
</body>
</html>

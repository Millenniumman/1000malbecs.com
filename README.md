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
      <a href="index.html" title="Volver al inicio">
        <img src="https://github.com/user-attachments/assets/2e1ec570-c588-4e9b-bb54-3371487cbada" alt="Logo 1000malbecs">
      </a>
    </div>
    <h2>Categorías</h2>
    <details>
      <summary><i class="fas fa-map-marker-alt"></i> Ubicación</summary>
      <ul>
       
        <li><span class="filter" data-filter="provincia" data-value="Cafayate">Cafayate</span>
          <ul>
            <li><strong>Región</strong>
              <ul>
               
                <li><span class="filter" data-filter="region" data-value="Cafayate">Cafayate</span>
                  <ul>
                    <li><strong>Altura</strong>
                      <ul>
                       
                        <li><span class="filter" data-filter="altura" data-value="1000m - 2000m">1000m - 2000m</span>
                          <ul>
                           
                            <li><a href="vinos/imaginate-malbec.html" data-provincia="Cafayate" data-tipo="Tinto" data-anada="2019" data-altura="1000m - 2000m">Imaginate Malbec</a></li>
                           
                            <li><a href="vinos/amar-vivir-malbec.html" data-provincia="Cafayate" data-tipo="Tinto" data-anada="2020" data-altura="1000m - 2000m">Amar Vivir Malbec</a></li>
                           
                            <li><a href="vinos/tukma-malbec.html" data-provincia="Cafayate" data-tipo="Tinto" data-anada="2019" data-altura="1000m - 2000m">Tukma Malbec</a></li>
                           
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
       
        <li><span class="filter" data-filter="provincia" data-value="Calchaquí">Calchaquí</span>
          <ul>
            <li><strong>Región</strong>
              <ul>
               
                <li><span class="filter" data-filter="region" data-value="Valle de Calchaquí">Valle de Calchaquí</span>
                  <ul>
                    <li><strong>Altura</strong>
                      <ul>
                       
                        <li><span class="filter" data-filter="altura" data-value="1000m - 2000m">1000m - 2000m</span>
                          <ul>
                           
                            <li><a href="vinos/bad-brothers--malbec-premium-2020.html" data-provincia="Calchaquí" data-tipo="Tinto" data-anada="2020" data-altura="1000m - 2000m">Bad Brothers - Malbec Premium 2020</a></li>
                           
                            <li><a href="vinos/sunal-ilgico--malbec-2020.html" data-provincia="Calchaquí" data-tipo="Tinto" data-anada="2020" data-altura="1000m - 2000m">Sunal Ilógico - Malbec 2020</a></li>
                           
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
       
        <li><span class="filter" data-filter="provincia" data-value="Chañar">Chañar</span>
          <ul>
            <li><strong>Región</strong>
              <ul>
               
                <li><span class="filter" data-filter="region" data-value="San Patricio del Chañar">San Patricio del Chañar</span>
                  <ul>
                    <li><strong>Altura</strong>
                      <ul>
                       
                        <li><span class="filter" data-filter="altura" data-value="< 1000m">< 1000m</span>
                          <ul>
                           
                            <li><a href="vinos/saurus--malbec-2023.html" data-provincia="Chañar" data-tipo="Tinto" data-anada="2023" data-altura="< 1000m">Saurus - Malbec 2023</a></li>
                           
                            <li><a href="vinos/saurus-patagonia-select--malbec-2022.html" data-provincia="Chañar" data-tipo="Tinto" data-anada="2022" data-altura="< 1000m">Saurus Patagonia Select - Malbec 2022</a></li>
                           
                            <li><a href="vinos/saurus-barrel-fermented--malbec-2022.html" data-provincia="Chañar" data-tipo="Tinto" data-anada="2022" data-altura="< 1000m">Saurus Barrel Fermented - Malbec 2022</a></li>
                           
                            <li><a href="vinos/familia-schroeder--malbec-2019.html" data-provincia="Chañar" data-tipo="Tinto" data-anada="2019" data-altura="< 1000m">Familia Schroeder - Malbec 2019</a></li>
                           
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
       
        <li><span class="filter" data-filter="provincia" data-value="Cuyo">Cuyo</span>
          <ul>
            <li><strong>Región</strong>
              <ul>
               
                <li><span class="filter" data-filter="region" data-value="Luján de Cuyo">Luján de Cuyo</span>
                  <ul>
                    <li><strong>Altura</strong>
                      <ul>
                       
                        <li><span class="filter" data-filter="altura" data-value="< 1000m">< 1000m</span>
                          <ul>
                           
                            <li><a href="vinos/lois--sparkling-malbec-2021.html" data-provincia="Cuyo" data-tipo="Espumante" data-anada="2021" data-altura="< 1000m">Lois - Sparkling Malbec 2021</a></li>
                           
                            <li><a href="vinos/pink--malbec-rosado-2023.html" data-provincia="Cuyo" data-tipo="Rosado" data-anada="2023" data-altura="< 1000m">Pink - Malbec Rosado 2023</a></li>
                           
                            <li><a href="vinos/ique--malbec-2023.html" data-provincia="Cuyo" data-tipo="Tinto" data-anada="2021" data-altura="< 1000m">Ique - Malbec 2023</a></li>
                           
                            <li><a href="vinos/foster--malbec.html" data-provincia="Cuyo" data-tipo="Tinto" data-anada="2023" data-altura="< 1000m">Foster - Malbec</a></li>
                           
                            <li><a href="vinos/foster--malbec-los-altepes.html" data-provincia="Cuyo" data-tipo="Tinto" data-anada="2023" data-altura="< 1000m">Foster - Malbec 'Los Altepes'</a></li>
                           
                            <li><a href="vinos/foster--malbec-los-barrancos.html" data-provincia="Cuyo" data-tipo="Tinto" data-anada="2023" data-altura="< 1000m">Foster - Malbec 'Los Barrancos'</a></li>
                           
                            <li><a href="vinos/foster--malbec-limited-edition.html" data-provincia="Cuyo" data-tipo="Tinto" data-anada="2023" data-altura="< 1000m">Foster - Malbec Limited Edition</a></li>
                           
                            <li><a href="vinos/foster--malbec.html" data-provincia="Cuyo" data-tipo="Tinto" data-anada="2023" data-altura="< 1000m">Foster - Malbec</a></li>
                           
                            <li><a href="vinos/foster--malbec-los-altepes.html" data-provincia="Cuyo" data-tipo="Tinto" data-anada="2023" data-altura="< 1000m">Foster - Malbec 'Los Altepes'</a></li>
                           
                            <li><a href="vinos/carrascal-malbec.html" data-provincia="Cuyo" data-tipo="Tinto" data-anada="2022" data-altura="< 1000m">Carrascal Malbec</a></li>
                           
                            <li><a href="vinos/weinert-malbec-2018.html" data-provincia="Cuyo" data-tipo="Tinto" data-anada="2018" data-altura="< 1000m">Weinert Malbec 2018</a></li>
                           
                            <li><a href="vinos/weinert-malbec-2010.html" data-provincia="Cuyo" data-tipo="Tinto" data-anada="2010" data-altura="< 1000m">Weinert Malbec 2010</a></li>
                           
                            <li><a href="vinos/weinert-malbec-1995.html" data-provincia="Cuyo" data-tipo="Tinto" data-anada="1995" data-altura="< 1000m">Weinert Malbec 1995</a></li>
                           
                            <li><a href="vinos/luigi-bosca-malbec.html" data-provincia="Cuyo" data-tipo="Tinto" data-anada="2022" data-altura="< 1000m">LUIGI BOSCA Malbec</a></li>
                           
                            <li><a href="vinos/luigi-bosca-de-sangre-malbec-doc.html" data-provincia="Cuyo" data-tipo="Tinto" data-anada="2021" data-altura="< 1000m">LUIGI BOSCA De SANGRE Malbec D.O.C</a></li>
                           
                          </ul>
                        </li>
                       
                        <li><span class="filter" data-filter="altura" data-value="1000m - 2000m">1000m - 2000m</span>
                          <ul>
                           
                            <li><a href="vinos/tomero--malbec-2023.html" data-provincia="Cuyo" data-tipo="Tinto" data-anada="2023" data-altura="1000m - 2000m">Tomero - Malbec 2023</a></li>
                           
                            <li><a href="vinos/tomero-single-vineyard-malbec-2021.html" data-provincia="Cuyo" data-tipo="Tinto" data-anada="2021" data-altura="1000m - 2000m">Tomero Single Vineyard Malbec 2021</a></li>
                           
                            <li><a href="vinos/tomero-single-vineyard-malbec-2020.html" data-provincia="Cuyo" data-tipo="Tinto" data-anada="2020" data-altura="1000m - 2000m">Tomero Single Vineyard Malbec 2020</a></li>
                           
                            <li><a href="vinos/tomero-single-vineyard-malbec-2019.html" data-provincia="Cuyo" data-tipo="Tinto" data-anada="2019" data-altura="1000m - 2000m">Tomero Single Vineyard Malbec 2019</a></li>
                           
                            <li><a href="vinos/vistalba--malbec-2021.html" data-provincia="Cuyo" data-tipo="Tinto" data-anada="2021" data-altura="1000m - 2000m">Vistalba - Malbec 2021</a></li>
                           
                            <li><a href="vinos/vistalba--gran-malbec-2019.html" data-provincia="Cuyo" data-tipo="Tinto" data-anada="2019" data-altura="1000m - 2000m">Vistalba - Gran Malbec 2019</a></li>
                           
                            <li><a href="vinos/tomero--cuartel-41-malbec-2019.html" data-provincia="Cuyo" data-tipo="Tinto" data-anada="2019" data-altura="1000m - 2000m">Tomero - Cuartel 41 Malbec 2019</a></li>
                           
                            <li><a href="vinos/tomero--cuartel-41-malbec-2018.html" data-provincia="Cuyo" data-tipo="Tinto" data-anada="2018" data-altura="1000m - 2000m">Tomero - Cuartel 41 Malbec 2018</a></li>
                           
                            <li><a href="vinos/tomero--cuartel-41-malbec-2016.html" data-provincia="Cuyo" data-tipo="Tinto" data-anada="2016" data-altura="1000m - 2000m">Tomero - Cuartel 41 Malbec 2016</a></li>
                           
                            <li><a href="vinos/paso-de-piedra--malbec-2019.html" data-provincia="Cuyo" data-tipo="Tinto" data-anada="2019" data-altura="1000m - 2000m">Paso de Piedra - Malbec 2019</a></li>
                           
                            <li><a href="vinos/via-alicia--malbec-2016.html" data-provincia="Cuyo" data-tipo="Tinto" data-anada="2016" data-altura="1000m - 2000m">Viña Alicia - Malbec 2016</a></li>
                           
                            <li><a href="vinos/via-alicia--malbec-2013.html" data-provincia="Cuyo" data-tipo="Tinto" data-anada="2013" data-altura="1000m - 2000m">Viña Alicia - Malbec 2013</a></li>
                           
                            <li><a href="vinos/via-alicia--malbec-2012.html" data-provincia="Cuyo" data-tipo="Tinto" data-anada="2012" data-altura="1000m - 2000m">Viña Alicia - Malbec 2012</a></li>
                           
                            <li><a href="vinos/via-alicia--malbec-2010.html" data-provincia="Cuyo" data-tipo="Tinto" data-anada="2010" data-altura="1000m - 2000m">Viña Alicia - Malbec 2010</a></li>
                           
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
       
        <li><span class="filter" data-filter="provincia" data-value="Famatina">Famatina</span>
          <ul>
            <li><strong>Región</strong>
              <ul>
               
                <li><span class="filter" data-filter="region" data-value="Valle de Famatina">Valle de Famatina</span>
                  <ul>
                    <li><strong>Altura</strong>
                      <ul>
                       
                        <li><span class="filter" data-filter="altura" data-value="1000m - 2000m">1000m - 2000m</span>
                          <ul>
                           
                            <li><a href="vinos/chanarmuyo-estate-malbec.html" data-provincia="Famatina" data-tipo="Tinto" data-anada="2021" data-altura="1000m - 2000m">CHANARMUYO Estate Malbec</a></li>
                           
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
       
        <li><span class="filter" data-filter="provincia" data-value="Luján de Cuyo">Luján de Cuyo</span>
          <ul>
            <li><strong>Región</strong>
              <ul>
               
                <li><span class="filter" data-filter="region" data-value="Agrelo">Agrelo</span>
                  <ul>
                    <li><strong>Altura</strong>
                      <ul>
                       
                        <li><span class="filter" data-filter="altura" data-value="< 1000m">< 1000m</span>
                          <ul>
                           
                            <li><a href="vinos/sptima-ros-de-malbec.html" data-provincia="Luján de Cuyo" data-tipo="Tinto" data-anada="2023" data-altura="< 1000m">Séptima Rosé de Malbec</a></li>
                           
                            <li><a href="vinos/sptima-malbec.html" data-provincia="Luján de Cuyo" data-tipo="Tinto" data-anada="2022" data-altura="< 1000m">Séptima Malbec</a></li>
                           
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
       
        <li><span class="filter" data-filter="provincia" data-value="Maipú">Maipú</span>
          <ul>
            <li><strong>Región</strong>
              <ul>
               
                <li><span class="filter" data-filter="region" data-value="Maipú">Maipú</span>
                  <ul>
                    <li><strong>Altura</strong>
                      <ul>
                       
                        <li><span class="filter" data-filter="altura" data-value="< 1000m">< 1000m</span>
                          <ul>
                           
                            <li><a href="vinos/finca-gabriel-malbec.html" data-provincia="Maipú" data-tipo="Tinto" data-anada="2021" data-altura="< 1000m">FINCA GABRIEL Malbec</a></li>
                           
                            <li><a href="vinos/finca-gabriel-edicin-especial-malbec.html" data-provincia="Maipú" data-tipo="Tinto" data-anada="2022" data-altura="< 1000m">FINCA GABRIEL Edición Especial Malbec</a></li>
                           
                            <li><a href="vinos/jorge-rubio-privado-malbec.html" data-provincia="Maipú" data-tipo="Tinto" data-anada="2021" data-altura="< 1000m">JORGE RUBIO PRIVADO Malbec</a></li>
                           
                            <li><a href="vinos/jorge-rubio-gran-reserva-malbecmerlot.html" data-provincia="Maipú" data-tipo="Tinto" data-anada="2020" data-altura="< 1000m">JORGE RUBIO GRAN RESERVA Malbec/Merlot</a></li>
                           
                            <li><a href="vinos/jorge-rubio-gran-reserva-malbec.html" data-provincia="Maipú" data-tipo="Tinto" data-anada="2019" data-altura="< 1000m">JORGE RUBIO GRAN RESERVA Malbec</a></li>
                           
                            <li><a href="vinos/jorge-rubio-premiado-malbec.html" data-provincia="Maipú" data-tipo="Tinto" data-anada="2018" data-altura="< 1000m">JORGE RUBIO PREMIADO Malbec</a></li>
                           
                            <li><a href="vinos/cicchitti-primmo-malbec.html" data-provincia="Maipú" data-tipo="Tinto" data-anada="2022" data-altura="< 1000m">CICCHITTI Primmo Malbec</a></li>
                           
                            <li><a href="vinos/vos-malbec-de-malbec.html" data-provincia="Maipú" data-tipo="Tinto" data-anada="2021" data-altura="< 1000m">VOS Malbec de Malbec</a></li>
                           
                            <li><a href="vinos/cicchitti-malbec.html" data-provincia="Maipú" data-tipo="Tinto" data-anada="2021" data-altura="< 1000m">CICCHITTI Malbec</a></li>
                           
                            <li><a href="vinos/cicchitti-gran-reserva-malbec.html" data-provincia="Maipú" data-tipo="Tinto" data-anada="2018" data-altura="< 1000m">CICCHITTI Gran Reserva Malbec</a></li>
                           
                            <li><a href="vinos/cicchitti-malbec-edicin-limitada.html" data-provincia="Maipú" data-tipo="Tinto" data-anada="2016" data-altura="< 1000m">Cicchitti Malbec Edición Limitada</a></li>
                           
                            <li><a href="vinos/la-grupa-syrah-malbec-075.html" data-provincia="Maipú" data-tipo="Tinto" data-anada="2022" data-altura="< 1000m">LA Grupa Syrah Malbec 0.75</a></li>
                           
                            <li><a href="vinos/la-grupa-syrah-malbec-125.html" data-provincia="Maipú" data-tipo="Tinto" data-anada="2022" data-altura="< 1000m">LA Grupa Syrah Malbec 1.25</a></li>
                           
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
       
        <li><span class="filter" data-filter="provincia" data-value="Mendoza">Mendoza</span>
          <ul>
            <li><strong>Región</strong>
              <ul>
               
                <li><span class="filter" data-filter="region" data-value="Luján de Cuyo">Luján de Cuyo</span>
                  <ul>
                    <li><strong>Altura</strong>
                      <ul>
                       
                        <li><span class="filter" data-filter="altura" data-value="< 1000m">< 1000m</span>
                          <ul>
                           
                            <li><a href="vinos/lois--sparkling-malbec-2021.html" data-provincia="Mendoza" data-tipo="Espumante" data-anada="2021" data-altura="< 1000m">Lois - Sparkling Malbec 2021</a></li>
                           
                            <li><a href="vinos/pink--malbec-rosado-2023.html" data-provincia="Mendoza" data-tipo="Rosado" data-anada="2023" data-altura="< 1000m">Pink - Malbec Rosado 2023</a></li>
                           
                            <li><a href="vinos/ique--malbec-2023.html" data-provincia="Mendoza" data-tipo="Tinto" data-anada="2021" data-altura="< 1000m">Ique - Malbec 2023</a></li>
                           
                            <li><a href="vinos/foster--malbec.html" data-provincia="Mendoza" data-tipo="Tinto" data-anada="2023" data-altura="< 1000m">Foster - Malbec</a></li>
                           
                            <li><a href="vinos/foster--malbec-los-altepes.html" data-provincia="Mendoza" data-tipo="Tinto" data-anada="2023" data-altura="< 1000m">Foster - Malbec 'Los Altepes'</a></li>
                           
                            <li><a href="vinos/foster--malbec-los-barrancos.html" data-provincia="Mendoza" data-tipo="Tinto" data-anada="2023" data-altura="< 1000m">Foster - Malbec 'Los Barrancos'</a></li>
                           
                            <li><a href="vinos/foster--malbec-limited-edition.html" data-provincia="Mendoza" data-tipo="Tinto" data-anada="2023" data-altura="< 1000m">Foster - Malbec Limited Edition</a></li>
                           
                            <li><a href="vinos/foster--malbec.html" data-provincia="Mendoza" data-tipo="Tinto" data-anada="2023" data-altura="< 1000m">Foster - Malbec</a></li>
                           
                            <li><a href="vinos/foster--malbec-los-altepes.html" data-provincia="Mendoza" data-tipo="Tinto" data-anada="2023" data-altura="< 1000m">Foster - Malbec 'Los Altepes'</a></li>
                           
                            <li><a href="vinos/carrascal-malbec.html" data-provincia="Mendoza" data-tipo="Tinto" data-anada="2022" data-altura="< 1000m">Carrascal Malbec</a></li>
                           
                            <li><a href="vinos/weinert-malbec-2018.html" data-provincia="Mendoza" data-tipo="Tinto" data-anada="2018" data-altura="< 1000m">Weinert Malbec 2018</a></li>
                           
                            <li><a href="vinos/weinert-malbec-2010.html" data-provincia="Mendoza" data-tipo="Tinto" data-anada="2010" data-altura="< 1000m">Weinert Malbec 2010</a></li>
                           
                            <li><a href="vinos/weinert-malbec-1995.html" data-provincia="Mendoza" data-tipo="Tinto" data-anada="1995" data-altura="< 1000m">Weinert Malbec 1995</a></li>
                           
                            <li><a href="vinos/luigi-bosca-malbec.html" data-provincia="Mendoza" data-tipo="Tinto" data-anada="2022" data-altura="< 1000m">LUIGI BOSCA Malbec</a></li>
                           
                            <li><a href="vinos/luigi-bosca-de-sangre-malbec-doc.html" data-provincia="Mendoza" data-tipo="Tinto" data-anada="2021" data-altura="< 1000m">LUIGI BOSCA De SANGRE Malbec D.O.C</a></li>
                           
                          </ul>
                        </li>
                       
                        <li><span class="filter" data-filter="altura" data-value="1000m - 2000m">1000m - 2000m</span>
                          <ul>
                           
                            <li><a href="vinos/tomero--malbec-2023.html" data-provincia="Mendoza" data-tipo="Tinto" data-anada="2023" data-altura="1000m - 2000m">Tomero - Malbec 2023</a></li>
                           
                            <li><a href="vinos/tomero-single-vineyard-malbec-2021.html" data-provincia="Mendoza" data-tipo="Tinto" data-anada="2021" data-altura="1000m - 2000m">Tomero Single Vineyard Malbec 2021</a></li>
                           
                            <li><a href="vinos/tomero-single-vineyard-malbec-2020.html" data-provincia="Mendoza" data-tipo="Tinto" data-anada="2020" data-altura="1000m - 2000m">Tomero Single Vineyard Malbec 2020</a></li>
                           
                            <li><a href="vinos/tomero-single-vineyard-malbec-2019.html" data-provincia="Mendoza" data-tipo="Tinto" data-anada="2019" data-altura="1000m - 2000m">Tomero Single Vineyard Malbec 2019</a></li>
                           
                            <li><a href="vinos/vistalba--malbec-2021.html" data-provincia="Mendoza" data-tipo="Tinto" data-anada="2021" data-altura="1000m - 2000m">Vistalba - Malbec 2021</a></li>
                           
                            <li><a href="vinos/vistalba--gran-malbec-2019.html" data-provincia="Mendoza" data-tipo="Tinto" data-anada="2019" data-altura="1000m - 2000m">Vistalba - Gran Malbec 2019</a></li>
                           
                            <li><a href="vinos/tomero--cuartel-41-malbec-2019.html" data-provincia="Mendoza" data-tipo="Tinto" data-anada="2019" data-altura="1000m - 2000m">Tomero - Cuartel 41 Malbec 2019</a></li>
                           
                            <li><a href="vinos/tomero--cuartel-41-malbec-2018.html" data-provincia="Mendoza" data-tipo="Tinto" data-anada="2018" data-altura="1000m - 2000m">Tomero - Cuartel 41 Malbec 2018</a></li>
                           
                            <li><a href="vinos/tomero--cuartel-41-malbec-2016.html" data-provincia="Mendoza" data-tipo="Tinto" data-anada="2016" data-altura="1000m - 2000m">Tomero - Cuartel 41 Malbec 2016</a></li>
                           
                            <li><a href="vinos/paso-de-piedra--malbec-2019.html" data-provincia="Mendoza" data-tipo="Tinto" data-anada="2019" data-altura="1000m - 2000m">Paso de Piedra - Malbec 2019</a></li>
                           
                            <li><a href="vinos/via-alicia--malbec-2016.html" data-provincia="Mendoza" data-tipo="Tinto" data-anada="2016" data-altura="1000m - 2000m">Viña Alicia - Malbec 2016</a></li>
                           
                            <li><a href="vinos/via-alicia--malbec-2013.html" data-provincia="Mendoza" data-tipo="Tinto" data-anada="2013" data-altura="1000m - 2000m">Viña Alicia - Malbec 2013</a></li>
                           
                            <li><a href="vinos/via-alicia--malbec-2012.html" data-provincia="Mendoza" data-tipo="Tinto" data-anada="2012" data-altura="1000m - 2000m">Viña Alicia - Malbec 2012</a></li>
                           
                            <li><a href="vinos/via-alicia--malbec-2010.html" data-provincia="Mendoza" data-tipo="Tinto" data-anada="2010" data-altura="1000m - 2000m">Viña Alicia - Malbec 2010</a></li>
                           
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
       
        <li><span class="filter" data-filter="provincia" data-value="Rafael">Rafael</span>
          <ul>
            <li><strong>Región</strong>
              <ul>
               
                <li><span class="filter" data-filter="region" data-value="San Rafael">San Rafael</span>
                  <ul>
                    <li><strong>Altura</strong>
                      <ul>
                       
                        <li><span class="filter" data-filter="altura" data-value="< 1000m">< 1000m</span>
                          <ul>
                           
                            <li><a href="vinos/gran-famiglia--malbec-2017.html" data-provincia="Rafael" data-tipo="Tinto" data-anada="2017" data-altura="< 1000m">Gran Famiglia - Malbec 2017</a></li>
                           
                            <li><a href="vinos/famiglia-bianchi-malbec-2023.html" data-provincia="Rafael" data-tipo="Tinto" data-anada="2023" data-altura="< 1000m">Famiglia Bianchi Malbec 2023</a></li>
                           
                            <li><a href="vinos/famiglia-bianchi-malbec-2021.html" data-provincia="Rafael" data-tipo="Tinto" data-anada="2021" data-altura="< 1000m">Famiglia Bianchi Malbec 2021</a></li>
                           
                            <li><a href="vinos/famiglia-bianchi-malbec-2020.html" data-provincia="Rafael" data-tipo="Tinto" data-anada="2020" data-altura="< 1000m">Famiglia Bianchi Malbec 2020</a></li>
                           
                            <li><a href="vinos/famiglia-bianchi-malbec-2014.html" data-provincia="Rafael" data-tipo="Tinto" data-anada="2014" data-altura="< 1000m">Famiglia Bianchi Malbec 2014</a></li>
                           
                            <li><a href="vinos/particular-malbec-2020.html" data-provincia="Rafael" data-tipo="Tinto" data-anada="2020" data-altura="< 1000m">Particular Malbec 2020</a></li>
                           
                            <li><a href="vinos/particular-malbec-2019.html" data-provincia="Rafael" data-tipo="Tinto" data-anada="2019" data-altura="< 1000m">Particular Malbec 2019</a></li>
                           
                            <li><a href="vinos/particular-malbec-2018.html" data-provincia="Rafael" data-tipo="Tinto" data-anada="2018" data-altura="< 1000m">Particular Malbec 2018</a></li>
                           
                            <li><a href="vinos/particular-malbec-2019-magnum-15-lts.html" data-provincia="Rafael" data-tipo="Tinto" data-anada="2019" data-altura="< 1000m">Particular Malbec 2019 Magnum 1.5 Lts</a></li>
                           
                            <li><a href="vinos/enzo-bianchi--gran-malbec-2019.html" data-provincia="Rafael" data-tipo="Tinto" data-anada="2019" data-altura="< 1000m">Enzo Bianchi - Gran Malbec 2019</a></li>
                           
                            <li><a href="vinos/jorge-rubio-gran-reserva-malbec-magnum.html" data-provincia="Rafael" data-tipo="Tinto" data-anada="2019" data-altura="< 1000m">JORGE RUBIO GRAN RESERVA Malbec Magnum</a></li>
                           
                            <li><a href="vinos/casa-araujo-varietal.html" data-provincia="Rafael" data-tipo="Tinto" data-anada="2023" data-altura="< 1000m">Casa Araujo Varietal</a></li>
                           
                            <li><a href="vinos/casa-araujo-roble.html" data-provincia="Rafael" data-tipo="Tinto" data-anada="2023" data-altura="< 1000m">Casa Araujo Roble</a></li>
                           
                            <li><a href="vinos/casa-araujo-mimi.html" data-provincia="Rafael" data-tipo="Tinto" data-anada="2023" data-altura="< 1000m">Casa Araujo Mimi</a></li>
                           
                            <li><a href="vinos/nucha.html" data-provincia="Rafael" data-tipo="Tinto" data-anada="2023" data-altura="< 1000m">Nucha</a></li>
                           
                            <li><a href="vinos/graciano-reserva-blend.html" data-provincia="Rafael" data-tipo="Tinto" data-anada="2023" data-altura="< 1000m">Graciano Reserva Blend</a></li>
                           
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
       
        <li><span class="filter" data-filter="provincia" data-value="Uco">Uco</span>
          <ul>
            <li><strong>Región</strong>
              <ul>
               
                <li><span class="filter" data-filter="region" data-value="Valle de Uco">Valle de Uco</span>
                  <ul>
                    <li><strong>Altura</strong>
                      <ul>
                       
                        <li><span class="filter" data-filter="altura" data-value="1000m - 2000m">1000m - 2000m</span>
                          <ul>
                           
                            <li><a href="vinos/temtico--malbec-2023.html" data-provincia="Uco" data-tipo="Tinto" data-anada="2023" data-altura="1000m - 2000m">Temático - Malbec 2023</a></li>
                           
                            <li><a href="vinos/zapam-zucum--organic-malbec-2022.html" data-provincia="Uco" data-tipo="Orgánico" data-anada="2022" data-altura="1000m - 2000m">Zapam Zucum - Organic Malbec 2022</a></li>
                           
                            <li><a href="vinos/fantasa--malbec-2023.html" data-provincia="Uco" data-tipo="Tinto" data-anada="2023" data-altura="1000m - 2000m">Fantasía - Malbec 2023</a></li>
                           
                            <li><a href="vinos/gran-potico--malbec-2013.html" data-provincia="Uco" data-tipo="Tinto" data-anada="2013" data-altura="1000m - 2000m">Gran Poético - Malbec 2013</a></li>
                           
                            <li><a href="vinos/urano--malbec-2017.html" data-provincia="Uco" data-tipo="Tinto" data-anada="2017" data-altura="1000m - 2000m">Urano - Malbec 2017</a></li>
                           
                            <li><a href="vinos/eral-bravo--malbec-2017.html" data-provincia="Uco" data-tipo="Tinto" data-anada="2017" data-altura="1000m - 2000m">Eral Bravo - Malbec 2017</a></li>
                           
                            <li><a href="vinos/a-contramano-malbec.html" data-provincia="Uco" data-tipo="Tinto" data-anada="2021" data-altura="1000m - 2000m">A CONTRAMANO Malbec</a></li>
                           
                            <li><a href="vinos/chakana-nuna-malbec-bio.html" data-provincia="Uco" data-tipo="Tinto" data-anada="2022" data-altura="1000m - 2000m">CHAKANA Nuna Malbec Bio</a></li>
                           
                            <li><a href="vinos/dilema-day-malbec.html" data-provincia="Uco" data-tipo="Tinto" data-anada="2021" data-altura="1000m - 2000m">Dilema Day Malbec</a></li>
                           
                            <li><a href="vinos/resero-malbec.html" data-provincia="Uco" data-tipo="Tinto" data-anada="2022" data-altura="1000m - 2000m">Resero Malbec</a></li>
                           
                            <li><a href="vinos/caminante-de-los-mundos-malbec-bio.html" data-provincia="Uco" data-tipo="Tinto" data-anada="2021" data-altura="1000m - 2000m">Caminante de los Mundos Malbec Bio</a></li>
                           
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
      <summary><i class="fas fa-wine-glass-alt"></i> Vino</summary>
      <ul>
        <li><strong>Tipo</strong>
          <ul>
           
            <li><span class="filter" data-filter="tipo" data-value="Espumante">Espumante</span>
              <ul>
               
                <li><a href="vinos/lois--sparkling-malbec-2021.html" data-provincia="Cuyo" data-tipo="Espumante" data-anada="2021" data-altura="< 1000m">Lois - Sparkling Malbec 2021</a></li>
               
              </ul>
            </li>
           
            <li><span class="filter" data-filter="tipo" data-value="Orgánico">Orgánico</span>
              <ul>
               
                <li><a href="vinos/zapam-zucum--organic-malbec-2022.html" data-provincia="Uco" data-tipo="Orgánico" data-anada="2022" data-altura="1000m - 2000m">Zapam Zucum - Organic Malbec 2022</a></li>
               
              </ul>
            </li>
           
            <li><span class="filter" data-filter="tipo" data-value="Rosado">Rosado</span>
              <ul>
               
                <li><a href="vinos/pink--malbec-rosado-2023.html" data-provincia="Cuyo" data-tipo="Rosado" data-anada="2023" data-altura="< 1000m">Pink - Malbec Rosado 2023</a></li>
               
              </ul>
            </li>
           
            <li><span class="filter" data-filter="tipo" data-value="Tinto">Tinto</span>
              <ul>
               
                <li><a href="vinos/temtico--malbec-2023.html" data-provincia="Uco" data-tipo="Tinto" data-anada="2023" data-altura="1000m - 2000m">Temático - Malbec 2023</a></li>
               
                <li><a href="vinos/fantasa--malbec-2023.html" data-provincia="Uco" data-tipo="Tinto" data-anada="2023" data-altura="1000m - 2000m">Fantasía - Malbec 2023</a></li>
               
                <li><a href="vinos/gran-potico--malbec-2013.html" data-provincia="Uco" data-tipo="Tinto" data-anada="2013" data-altura="1000m - 2000m">Gran Poético - Malbec 2013</a></li>
               
                <li><a href="vinos/ique--malbec-2023.html" data-provincia="Cuyo" data-tipo="Tinto" data-anada="2021" data-altura="< 1000m">Ique - Malbec 2023</a></li>
               
                <li><a href="vinos/foster--malbec.html" data-provincia="Cuyo" data-tipo="Tinto" data-anada="2023" data-altura="< 1000m">Foster - Malbec</a></li>
               
                <li><a href="vinos/foster--malbec-los-altepes.html" data-provincia="Cuyo" data-tipo="Tinto" data-anada="2023" data-altura="< 1000m">Foster - Malbec 'Los Altepes'</a></li>
               
                <li><a href="vinos/foster--malbec-los-barrancos.html" data-provincia="Cuyo" data-tipo="Tinto" data-anada="2023" data-altura="< 1000m">Foster - Malbec 'Los Barrancos'</a></li>
               
                <li><a href="vinos/foster--malbec-limited-edition.html" data-provincia="Cuyo" data-tipo="Tinto" data-anada="2023" data-altura="< 1000m">Foster - Malbec Limited Edition</a></li>
               
                <li><a href="vinos/foster--malbec.html" data-provincia="Cuyo" data-tipo="Tinto" data-anada="2023" data-altura="< 1000m">Foster - Malbec</a></li>
               
                <li><a href="vinos/foster--malbec-los-altepes.html" data-provincia="Cuyo" data-tipo="Tinto" data-anada="2023" data-altura="< 1000m">Foster - Malbec 'Los Altepes'</a></li>
               
                <li><a href="vinos/urano--malbec-2017.html" data-provincia="Uco" data-tipo="Tinto" data-anada="2017" data-altura="1000m - 2000m">Urano - Malbec 2017</a></li>
               
                <li><a href="vinos/eral-bravo--malbec-2017.html" data-provincia="Uco" data-tipo="Tinto" data-anada="2017" data-altura="1000m - 2000m">Eral Bravo - Malbec 2017</a></li>
               
                <li><a href="vinos/tomero--malbec-2023.html" data-provincia="Cuyo" data-tipo="Tinto" data-anada="2023" data-altura="1000m - 2000m">Tomero - Malbec 2023</a></li>
               
                <li><a href="vinos/tomero-single-vineyard-malbec-2021.html" data-provincia="Cuyo" data-tipo="Tinto" data-anada="2021" data-altura="1000m - 2000m">Tomero Single Vineyard Malbec 2021</a></li>
               
                <li><a href="vinos/tomero-single-vineyard-malbec-2020.html" data-provincia="Cuyo" data-tipo="Tinto" data-anada="2020" data-altura="1000m - 2000m">Tomero Single Vineyard Malbec 2020</a></li>
               
                <li><a href="vinos/tomero-single-vineyard-malbec-2019.html" data-provincia="Cuyo" data-tipo="Tinto" data-anada="2019" data-altura="1000m - 2000m">Tomero Single Vineyard Malbec 2019</a></li>
               
                <li><a href="vinos/vistalba--malbec-2021.html" data-provincia="Cuyo" data-tipo="Tinto" data-anada="2021" data-altura="1000m - 2000m">Vistalba - Malbec 2021</a></li>
               
                <li><a href="vinos/vistalba--gran-malbec-2019.html" data-provincia="Cuyo" data-tipo="Tinto" data-anada="2019" data-altura="1000m - 2000m">Vistalba - Gran Malbec 2019</a></li>
               
                <li><a href="vinos/tomero--cuartel-41-malbec-2019.html" data-provincia="Cuyo" data-tipo="Tinto" data-anada="2019" data-altura="1000m - 2000m">Tomero - Cuartel 41 Malbec 2019</a></li>
               
                <li><a href="vinos/tomero--cuartel-41-malbec-2018.html" data-provincia="Cuyo" data-tipo="Tinto" data-anada="2018" data-altura="1000m - 2000m">Tomero - Cuartel 41 Malbec 2018</a></li>
               
                <li><a href="vinos/tomero--cuartel-41-malbec-2016.html" data-provincia="Cuyo" data-tipo="Tinto" data-anada="2016" data-altura="1000m - 2000m">Tomero - Cuartel 41 Malbec 2016</a></li>
               
                <li><a href="vinos/carrascal-malbec.html" data-provincia="Cuyo" data-tipo="Tinto" data-anada="2022" data-altura="< 1000m">Carrascal Malbec</a></li>
               
                <li><a href="vinos/weinert-malbec-2018.html" data-provincia="Cuyo" data-tipo="Tinto" data-anada="2018" data-altura="< 1000m">Weinert Malbec 2018</a></li>
               
                <li><a href="vinos/weinert-malbec-2010.html" data-provincia="Cuyo" data-tipo="Tinto" data-anada="2010" data-altura="< 1000m">Weinert Malbec 2010</a></li>
               
                <li><a href="vinos/weinert-malbec-1995.html" data-provincia="Cuyo" data-tipo="Tinto" data-anada="1995" data-altura="< 1000m">Weinert Malbec 1995</a></li>
               
                <li><a href="vinos/paso-de-piedra--malbec-2019.html" data-provincia="Mendoza" data-tipo="Tinto" data-anada="2019" data-altura="1000m - 2000m">Paso de Piedra - Malbec 2019</a></li>
               
                <li><a href="vinos/via-alicia--malbec-2016.html" data-provincia="Mendoza" data-tipo="Tinto" data-anada="2016" data-altura="1000m - 2000m">Viña Alicia - Malbec 2016</a></li>
               
                <li><a href="vinos/via-alicia--malbec-2013.html" data-provincia="Mendoza" data-tipo="Tinto" data-anada="2013" data-altura="1000m - 2000m">Viña Alicia - Malbec 2013</a></li>
               
                <li><a href="vinos/via-alicia--malbec-2012.html" data-provincia="Mendoza" data-tipo="Tinto" data-anada="2012" data-altura="1000m - 2000m">Viña Alicia - Malbec 2012</a></li>
               
                <li><a href="vinos/via-alicia--malbec-2010.html" data-provincia="Mendoza" data-tipo="Tinto" data-anada="2010" data-altura="1000m - 2000m">Viña Alicia - Malbec 2010</a></li>
               
                <li><a href="vinos/gran-famiglia--malbec-2017.html" data-provincia="Rafael" data-tipo="Tinto" data-anada="2017" data-altura="< 1000m">Gran Famiglia - Malbec 2017</a></li>
               
                <li><a href="vinos/famiglia-bianchi-malbec-2023.html" data-provincia="Rafael" data-tipo="Tinto" data-anada="2023" data-altura="< 1000m">Famiglia Bianchi Malbec 2023</a></li>
               
                <li><a href="vinos/famiglia-bianchi-malbec-2021.html" data-provincia="Rafael" data-tipo="Tinto" data-anada="2021" data-altura="< 1000m">Famiglia Bianchi Malbec 2021</a></li>
               
                <li><a href="vinos/famiglia-bianchi-malbec-2020.html" data-provincia="Rafael" data-tipo="Tinto" data-anada="2020" data-altura="< 1000m">Famiglia Bianchi Malbec 2020</a></li>
               
                <li><a href="vinos/famiglia-bianchi-malbec-2014.html" data-provincia="Rafael" data-tipo="Tinto" data-anada="2014" data-altura="< 1000m">Famiglia Bianchi Malbec 2014</a></li>
               
                <li><a href="vinos/particular-malbec-2020.html" data-provincia="Rafael" data-tipo="Tinto" data-anada="2020" data-altura="< 1000m">Particular Malbec 2020</a></li>
               
                <li><a href="vinos/particular-malbec-2019.html" data-provincia="Rafael" data-tipo="Tinto" data-anada="2019" data-altura="< 1000m">Particular Malbec 2019</a></li>
               
                <li><a href="vinos/particular-malbec-2018.html" data-provincia="Rafael" data-tipo="Tinto" data-anada="2018" data-altura="< 1000m">Particular Malbec 2018</a></li>
               
                <li><a href="vinos/particular-malbec-2019-magnum-15-lts.html" data-provincia="Rafael" data-tipo="Tinto" data-anada="2019" data-altura="< 1000m">Particular Malbec 2019 Magnum 1.5 Lts</a></li>
               
                <li><a href="vinos/enzo-bianchi--gran-malbec-2019.html" data-provincia="Rafael" data-tipo="Tinto" data-anada="2019" data-altura="< 1000m">Enzo Bianchi - Gran Malbec 2019</a></li>
               
                <li><a href="vinos/saurus--malbec-2023.html" data-provincia="Chañar" data-tipo="Tinto" data-anada="2023" data-altura="< 1000m">Saurus - Malbec 2023</a></li>
               
                <li><a href="vinos/saurus-patagonia-select--malbec-2022.html" data-provincia="Chañar" data-tipo="Tinto" data-anada="2022" data-altura="< 1000m">Saurus Patagonia Select - Malbec 2022</a></li>
               
                <li><a href="vinos/saurus-barrel-fermented--malbec-2022.html" data-provincia="Chañar" data-tipo="Tinto" data-anada="2022" data-altura="< 1000m">Saurus Barrel Fermented - Malbec 2022</a></li>
               
                <li><a href="vinos/familia-schroeder--malbec-2019.html" data-provincia="Chañar" data-tipo="Tinto" data-anada="2019" data-altura="< 1000m">Familia Schroeder - Malbec 2019</a></li>
               
                <li><a href="vinos/bad-brothers--malbec-premium-2020.html" data-provincia="Calchaquí" data-tipo="Tinto" data-anada="2020" data-altura="1000m - 2000m">Bad Brothers - Malbec Premium 2020</a></li>
               
                <li><a href="vinos/sunal-ilgico--malbec-2020.html" data-provincia="Calchaquí" data-tipo="Tinto" data-anada="2020" data-altura="1000m - 2000m">Sunal Ilógico - Malbec 2020</a></li>
               
                <li><a href="vinos/chanarmuyo-estate-malbec.html" data-provincia="Famatina" data-tipo="Tinto" data-anada="2021" data-altura="1000m - 2000m">CHANARMUYO Estate Malbec</a></li>
               
                <li><a href="vinos/finca-gabriel-malbec.html" data-provincia="Maipú" data-tipo="Tinto" data-anada="2021" data-altura="< 1000m">FINCA GABRIEL Malbec</a></li>
               
                <li><a href="vinos/finca-gabriel-edicin-especial-malbec.html" data-provincia="Maipú" data-tipo="Tinto" data-anada="2022" data-altura="< 1000m">FINCA GABRIEL Edición Especial Malbec</a></li>
               
                <li><a href="vinos/jorge-rubio-privado-malbec.html" data-provincia="Maipú" data-tipo="Tinto" data-anada="2021" data-altura="< 1000m">JORGE RUBIO PRIVADO Malbec</a></li>
               
                <li><a href="vinos/jorge-rubio-gran-reserva-malbecmerlot.html" data-provincia="Maipú" data-tipo="Tinto" data-anada="2020" data-altura="< 1000m">JORGE RUBIO GRAN RESERVA Malbec/Merlot</a></li>
               
                <li><a href="vinos/jorge-rubio-gran-reserva-malbec.html" data-provincia="Maipú" data-tipo="Tinto" data-anada="2019" data-altura="< 1000m">JORGE RUBIO GRAN RESERVA Malbec</a></li>
               
                <li><a href="vinos/jorge-rubio-premiado-malbec.html" data-provincia="Maipú" data-tipo="Tinto" data-anada="2018" data-altura="< 1000m">JORGE RUBIO PREMIADO Malbec</a></li>
               
                <li><a href="vinos/a-contramano-malbec.html" data-provincia="Uco" data-tipo="Tinto" data-anada="2021" data-altura="1000m - 2000m">A CONTRAMANO Malbec</a></li>
               
                <li><a href="vinos/chakana-nuna-malbec-bio.html" data-provincia="Uco" data-tipo="Tinto" data-anada="2022" data-altura="1000m - 2000m">CHAKANA Nuna Malbec Bio</a></li>
               
                <li><a href="vinos/luigi-bosca-malbec.html" data-provincia="Cuyo" data-tipo="Tinto" data-anada="2022" data-altura="< 1000m">LUIGI BOSCA Malbec</a></li>
               
                <li><a href="vinos/luigi-bosca-de-sangre-malbec-doc.html" data-provincia="Cuyo" data-tipo="Tinto" data-anada="2021" data-altura="< 1000m">LUIGI BOSCA De SANGRE Malbec D.O.C</a></li>
               
                <li><a href="vinos/cicchitti-primmo-malbec.html" data-provincia="Maipú" data-tipo="Tinto" data-anada="2022" data-altura="< 1000m">CICCHITTI Primmo Malbec</a></li>
               
                <li><a href="vinos/vos-malbec-de-malbec.html" data-provincia="Maipú" data-tipo="Tinto" data-anada="2021" data-altura="< 1000m">VOS Malbec de Malbec</a></li>
               
                <li><a href="vinos/cicchitti-malbec.html" data-provincia="Maipú" data-tipo="Tinto" data-anada="2021" data-altura="< 1000m">CICCHITTI Malbec</a></li>
               
                <li><a href="vinos/cicchitti-gran-reserva-malbec.html" data-provincia="Maipú" data-tipo="Tinto" data-anada="2018" data-altura="< 1000m">CICCHITTI Gran Reserva Malbec</a></li>
               
                <li><a href="vinos/cicchitti-malbec-edicin-limitada.html" data-provincia="Maipú" data-tipo="Tinto" data-anada="2016" data-altura="< 1000m">Cicchitti Malbec Edición Limitada</a></li>
               
                <li><a href="vinos/dilema-day-malbec.html" data-provincia="Uco" data-tipo="Tinto" data-anada="2021" data-altura="1000m - 2000m">Dilema Day Malbec</a></li>
               
                <li><a href="vinos/la-grupa-syrah-malbec-075.html" data-provincia="Maipú" data-tipo="Tinto" data-anada="2022" data-altura="< 1000m">LA Grupa Syrah Malbec 0.75</a></li>
               
                <li><a href="vinos/la-grupa-syrah-malbec-125.html" data-provincia="Maipú" data-tipo="Tinto" data-anada="2022" data-altura="< 1000m">LA Grupa Syrah Malbec 1.25</a></li>
               
                <li><a href="vinos/resero-malbec.html" data-provincia="Uco" data-tipo="Tinto" data-anada="2022" data-altura="1000m - 2000m">Resero Malbec</a></li>
               
                <li><a href="vinos/sptima-ros-de-malbec.html" data-provincia="Luján de Cuyo" data-tipo="Tinto" data-anada="2023" data-altura="< 1000m">Séptima Rosé de Malbec</a></li>
               
                <li><a href="vinos/sptima-malbec.html" data-provincia="Luján de Cuyo" data-tipo="Tinto" data-anada="2022" data-altura="< 1000m">Séptima Malbec</a></li>
               
                <li><a href="vinos/imaginate-malbec.html" data-provincia="Cafayate" data-tipo="Tinto" data-anada="2019" data-altura="1000m - 2000m">Imaginate Malbec</a></li>
               
                <li><a href="vinos/amar-vivir-malbec.html" data-provincia="Cafayate" data-tipo="Tinto" data-anada="2020" data-altura="1000m - 2000m">Amar Vivir Malbec</a></li>
               
                <li><a href="vinos/caminante-de-los-mundos-malbec-bio.html" data-provincia="Uco" data-tipo="Tinto" data-anada="2021" data-altura="1000m - 2000m">Caminante de los Mundos Malbec Bio</a></li>
               
                <li><a href="vinos/tukma-malbec.html" data-provincia="Cafayate" data-tipo="Tinto" data-anada="2019" data-altura="1000m - 2000m">Tukma Malbec</a></li>
               
                <li><a href="vinos/jorge-rubio-gran-reserva-malbec-magnum.html" data-provincia="Rafael" data-tipo="Tinto" data-anada="2019" data-altura="< 1000m">JORGE RUBIO GRAN RESERVA Malbec Magnum</a></li>
               
                <li><a href="vinos/casa-araujo-varietal.html" data-provincia="Rafael" data-tipo="Tinto" data-anada="2023" data-altura="< 1000m">Casa Araujo Varietal</a></li>
               
                <li><a href="vinos/casa-araujo-roble.html" data-provincia="Rafael" data-tipo="Tinto" data-anada="2023" data-altura="< 1000m">Casa Araujo Roble</a></li>
               
                <li><a href="vinos/casa-araujo-mimi.html" data-provincia="Rafael" data-tipo="Tinto" data-anada="2023" data-altura="< 1000m">Casa Araujo Mimi</a></li>
               
                <li><a href="vinos/nucha.html" data-provincia="Rafael" data-tipo="Tinto" data-anada="2023" data-altura="< 1000m">Nucha</a></li>
               
                <li><a href="vinos/graciano-reserva-blend.html" data-provincia="Rafael" data-tipo="Tinto" data-anada="2023" data-altura="< 1000m">Graciano Reserva Blend</a></li>
               
              </ul>
            </li>
           
          </ul>
        </li>
        <li><strong>Añada</strong>
          <ul>
           
            <li><span class="filter" data-filter="anada" data-value="2023">2023</span>
              <ul>
               
                <li><a href="vinos/temtico--malbec-2023.html" data-provincia="Uco" data-tipo="Tinto" data-anada="2023" data-altura="1000m - 2000m">Temático - Malbec 2023</a></li>
               
                <li><a href="vinos/fantasa--malbec-2023.html" data-provincia="Uco" data-tipo="Tinto" data-anada="2023" data-altura="1000m - 2000m">Fantasía - Malbec 2023</a></li>
               
                <li><a href="vinos/pink--malbec-rosado-2023.html" data-provincia="Cuyo" data-tipo="Rosado" data-anada="2023" data-altura="< 1000m">Pink - Malbec Rosado 2023</a></li>
               
                <li><a href="vinos/foster--malbec.html" data-provincia="Cuyo" data-tipo="Tinto" data-anada="2023" data-altura="< 1000m">Foster - Malbec</a></li>
               
                <li><a href="vinos/foster--malbec-los-altepes.html" data-provincia="Cuyo" data-tipo="Tinto" data-anada="2023" data-altura="< 1000m">Foster - Malbec 'Los Altepes'</a></li>
               
                <li><a href="vinos/foster--malbec-los-barrancos.html" data-provincia="Cuyo" data-tipo="Tinto" data-anada="2023" data-altura="< 1000m">Foster - Malbec 'Los Barrancos'</a></li>
               
                <li><a href="vinos/foster--malbec-limited-edition.html" data-provincia="Cuyo" data-tipo="Tinto" data-anada="2023" data-altura="< 1000m">Foster - Malbec Limited Edition</a></li>
               
                <li><a href="vinos/foster--malbec.html" data-provincia="Cuyo" data-tipo="Tinto" data-anada="2023" data-altura="< 1000m">Foster - Malbec</a></li>
               
                <li><a href="vinos/foster--malbec-los-altepes.html" data-provincia="Cuyo" data-tipo="Tinto" data-anada="2023" data-altura="< 1000m">Foster - Malbec 'Los Altepes'</a></li>
               
                <li><a href="vinos/tomero--malbec-2023.html" data-provincia="Cuyo" data-tipo="Tinto" data-anada="2023" data-altura="1000m - 2000m">Tomero - Malbec 2023</a></li>
               
                <li><a href="vinos/famiglia-bianchi-malbec-2023.html" data-provincia="Rafael" data-tipo="Tinto" data-anada="2023" data-altura="< 1000m">Famiglia Bianchi Malbec 2023</a></li>
               
                <li><a href="vinos/saurus--malbec-2023.html" data-provincia="Chañar" data-tipo="Tinto" data-anada="2023" data-altura="< 1000m">Saurus - Malbec 2023</a></li>
               
                <li><a href="vinos/sptima-ros-de-malbec.html" data-provincia="Luján de Cuyo" data-tipo="Tinto" data-anada="2023" data-altura="< 1000m">Séptima Rosé de Malbec</a></li>
               
                <li><a href="vinos/casa-araujo-varietal.html" data-provincia="Rafael" data-tipo="Tinto" data-anada="2023" data-altura="< 1000m">Casa Araujo Varietal</a></li>
               
                <li><a href="vinos/casa-araujo-roble.html" data-provincia="Rafael" data-tipo="Tinto" data-anada="2023" data-altura="< 1000m">Casa Araujo Roble</a></li>
               
                <li><a href="vinos/casa-araujo-mimi.html" data-provincia="Rafael" data-tipo="Tinto" data-anada="2023" data-altura="< 1000m">Casa Araujo Mimi</a></li>
               
                <li><a href="vinos/nucha.html" data-provincia="Rafael" data-tipo="Tinto" data-anada="2023" data-altura="< 1000m">Nucha</a></li>
               
                <li><a href="vinos/graciano-reserva-blend.html" data-provincia="Rafael" data-tipo="Tinto" data-anada="2023" data-altura="< 1000m">Graciano Reserva Blend</a></li>
               
              </ul>
            </li>
           
            <li><span class="filter" data-filter="anada" data-value="2022">2022</span>
              <ul>
               
                <li><a href="vinos/zapam-zucum--organic-malbec-2022.html" data-provincia="Uco" data-tipo="Orgánico" data-anada="2022" data-altura="1000m - 2000m">Zapam Zucum - Organic Malbec 2022</a></li>
               
                <li><a href="vinos/carrascal-malbec.html" data-provincia="Cuyo" data-tipo="Tinto" data-anada="2022" data-altura="< 1000m">Carrascal Malbec</a></li>
               
                <li><a href="vinos/saurus-patagonia-select--malbec-2022.html" data-provincia="Chañar" data-tipo="Tinto" data-anada="2022" data-altura="< 1000m">Saurus Patagonia Select - Malbec 2022</a></li>
               
                <li><a href="vinos/saurus-barrel-fermented--malbec-2022.html" data-provincia="Chañar" data-tipo="Tinto" data-anada="2022" data-altura="< 1000m">Saurus Barrel Fermented - Malbec 2022</a></li>
               
                <li><a href="vinos/finca-gabriel-edicin-especial-malbec.html" data-provincia="Maipú" data-tipo="Tinto" data-anada="2022" data-altura="< 1000m">FINCA GABRIEL Edición Especial Malbec</a></li>
               
                <li><a href="vinos/chakana-nuna-malbec-bio.html" data-provincia="Uco" data-tipo="Tinto" data-anada="2022" data-altura="1000m - 2000m">CHAKANA Nuna Malbec Bio</a></li>
               
                <li><a href="vinos/luigi-bosca-malbec.html" data-provincia="Cuyo" data-tipo="Tinto" data-anada="2022" data-altura="< 1000m">LUIGI BOSCA Malbec</a></li>
               
                <li><a href="vinos/cicchitti-primmo-malbec.html" data-provincia="Maipú" data-tipo="Tinto" data-anada="2022" data-altura="< 1000m">CICCHITTI Primmo Malbec</a></li>
               
                <li><a href="vinos/la-grupa-syrah-malbec-075.html" data-provincia="Maipú" data-tipo="Tinto" data-anada="2022" data-altura="< 1000m">LA Grupa Syrah Malbec 0.75</a></li>
               
                <li><a href="vinos/la-grupa-syrah-malbec-125.html" data-provincia="Maipú" data-tipo="Tinto" data-anada="2022" data-altura="< 1000m">LA Grupa Syrah Malbec 1.25</a></li>
               
                <li><a href="vinos/resero-malbec.html" data-provincia="Uco" data-tipo="Tinto" data-anada="2022" data-altura="1000m - 2000m">Resero Malbec</a></li>
               
                <li><a href="vinos/sptima-malbec.html" data-provincia="Luján de Cuyo" data-tipo="Tinto" data-anada="2022" data-altura="< 1000m">Séptima Malbec</a></li>
               
              </ul>
            </li>
           
            <li><span class="filter" data-filter="anada" data-value="2021">2021</span>
              <ul>
               
                <li><a href="vinos/lois--sparkling-malbec-2021.html" data-provincia="Cuyo" data-tipo="Espumante" data-anada="2021" data-altura="< 1000m">Lois - Sparkling Malbec 2021</a></li>
               
                <li><a href="vinos/ique--malbec-2023.html" data-provincia="Cuyo" data-tipo="Tinto" data-anada="2021" data-altura="< 1000m">Ique - Malbec 2023</a></li>
               
                <li><a href="vinos/tomero-single-vineyard-malbec-2021.html" data-provincia="Cuyo" data-tipo="Tinto" data-anada="2021" data-altura="1000m - 2000m">Tomero Single Vineyard Malbec 2021</a></li>
               
                <li><a href="vinos/vistalba--malbec-2021.html" data-provincia="Cuyo" data-tipo="Tinto" data-anada="2021" data-altura="1000m - 2000m">Vistalba - Malbec 2021</a></li>
               
                <li><a href="vinos/famiglia-bianchi-malbec-2021.html" data-provincia="Rafael" data-tipo="Tinto" data-anada="2021" data-altura="< 1000m">Famiglia Bianchi Malbec 2021</a></li>
               
                <li><a href="vinos/chanarmuyo-estate-malbec.html" data-provincia="Famatina" data-tipo="Tinto" data-anada="2021" data-altura="1000m - 2000m">CHANARMUYO Estate Malbec</a></li>
               
                <li><a href="vinos/finca-gabriel-malbec.html" data-provincia="Maipú" data-tipo="Tinto" data-anada="2021" data-altura="< 1000m">FINCA GABRIEL Malbec</a></li>
               
                <li><a href="vinos/jorge-rubio-privado-malbec.html" data-provincia="Maipú" data-tipo="Tinto" data-anada="2021" data-altura="< 1000m">JORGE RUBIO PRIVADO Malbec</a></li>
               
                <li><a href="vinos/a-contramano-malbec.html" data-provincia="Uco" data-tipo="Tinto" data-anada="2021" data-altura="1000m - 2000m">A CONTRAMANO Malbec</a></li>
               
                <li><a href="vinos/luigi-bosca-de-sangre-malbec-doc.html" data-provincia="Cuyo" data-tipo="Tinto" data-anada="2021" data-altura="< 1000m">LUIGI BOSCA De SANGRE Malbec D.O.C</a></li>
               
                <li><a href="vinos/vos-malbec-de-malbec.html" data-provincia="Maipú" data-tipo="Tinto" data-anada="2021" data-altura="< 1000m">VOS Malbec de Malbec</a></li>
               
                <li><a href="vinos/cicchitti-malbec.html" data-provincia="Maipú" data-tipo="Tinto" data-anada="2021" data-altura="< 1000m">CICCHITTI Malbec</a></li>
               
                <li><a href="vinos/dilema-day-malbec.html" data-provincia="Uco" data-tipo="Tinto" data-anada="2021" data-altura="1000m - 2000m">Dilema Day Malbec</a></li>
               
                <li><a href="vinos/caminante-de-los-mundos-malbec-bio.html" data-provincia="Uco" data-tipo="Tinto" data-anada="2021" data-altura="1000m - 2000m">Caminante de los Mundos Malbec Bio</a></li>
               
              </ul>
            </li>
           
            <li><span class="filter" data-filter="anada" data-value="2020">2020</span>
              <ul>
               
                <li><a href="vinos/tomero-single-vineyard-malbec-2020.html" data-provincia="Cuyo" data-tipo="Tinto" data-anada="2020" data-altura="1000m - 2000m">Tomero Single Vineyard Malbec 2020</a></li>
               
                <li><a href="vinos/famiglia-bianchi-malbec-2020.html" data-provincia="Rafael" data-tipo="Tinto" data-anada="2020" data-altura="< 1000m">Famiglia Bianchi Malbec 2020</a></li>
               
                <li><a href="vinos/particular-malbec-2020.html" data-provincia="Rafael" data-tipo="Tinto" data-anada="2020" data-altura="< 1000m">Particular Malbec 2020</a></li>
               
                <li><a href="vinos/bad-brothers--malbec-premium-2020.html" data-provincia="Calchaquí" data-tipo="Tinto" data-anada="2020" data-altura="1000m - 2000m">Bad Brothers - Malbec Premium 2020</a></li>
               
                <li><a href="vinos/sunal-ilgico--malbec-2020.html" data-provincia="Calchaquí" data-tipo="Tinto" data-anada="2020" data-altura="1000m - 2000m">Sunal Ilógico - Malbec 2020</a></li>
               
                <li><a href="vinos/jorge-rubio-gran-reserva-malbecmerlot.html" data-provincia="Maipú" data-tipo="Tinto" data-anada="2020" data-altura="< 1000m">JORGE RUBIO GRAN RESERVA Malbec/Merlot</a></li>
               
                <li><a href="vinos/amar-vivir-malbec.html" data-provincia="Cafayate" data-tipo="Tinto" data-anada="2020" data-altura="1000m - 2000m">Amar Vivir Malbec</a></li>
               
              </ul>
            </li>
           
            <li><span class="filter" data-filter="anada" data-value="2019">2019</span>
              <ul>
               
                <li><a href="vinos/tomero-single-vineyard-malbec-2019.html" data-provincia="Cuyo" data-tipo="Tinto" data-anada="2019" data-altura="1000m - 2000m">Tomero Single Vineyard Malbec 2019</a></li>
               
                <li><a href="vinos/vistalba--gran-malbec-2019.html" data-provincia="Cuyo" data-tipo="Tinto" data-anada="2019" data-altura="1000m - 2000m">Vistalba - Gran Malbec 2019</a></li>
               
                <li><a href="vinos/tomero--cuartel-41-malbec-2019.html" data-provincia="Cuyo" data-tipo="Tinto" data-anada="2019" data-altura="1000m - 2000m">Tomero - Cuartel 41 Malbec 2019</a></li>
               
                <li><a href="vinos/paso-de-piedra--malbec-2019.html" data-provincia="Mendoza" data-tipo="Tinto" data-anada="2019" data-altura="1000m - 2000m">Paso de Piedra - Malbec 2019</a></li>
               
                <li><a href="vinos/particular-malbec-2019.html" data-provincia="Rafael" data-tipo="Tinto" data-anada="2019" data-altura="< 1000m">Particular Malbec 2019</a></li>
               
                <li><a href="vinos/particular-malbec-2019-magnum-15-lts.html" data-provincia="Rafael" data-tipo="Tinto" data-anada="2019" data-altura="< 1000m">Particular Malbec 2019 Magnum 1.5 Lts</a></li>
               
                <li><a href="vinos/enzo-bianchi--gran-malbec-2019.html" data-provincia="Rafael" data-tipo="Tinto" data-anada="2019" data-altura="< 1000m">Enzo Bianchi - Gran Malbec 2019</a></li>
               
                <li><a href="vinos/familia-schroeder--malbec-2019.html" data-provincia="Chañar" data-tipo="Tinto" data-anada="2019" data-altura="< 1000m">Familia Schroeder - Malbec 2019</a></li>
               
                <li><a href="vinos/jorge-rubio-gran-reserva-malbec.html" data-provincia="Maipú" data-tipo="Tinto" data-anada="2019" data-altura="< 1000m">JORGE RUBIO GRAN RESERVA Malbec</a></li>
               
                <li><a href="vinos/imaginate-malbec.html" data-provincia="Cafayate" data-tipo="Tinto" data-anada="2019" data-altura="1000m - 2000m">Imaginate Malbec</a></li>
               
                <li><a href="vinos/tukma-malbec.html" data-provincia="Cafayate" data-tipo="Tinto" data-anada="2019" data-altura="1000m - 2000m">Tukma Malbec</a></li>
               
                <li><a href="vinos/jorge-rubio-gran-reserva-malbec-magnum.html" data-provincia="Rafael" data-tipo="Tinto" data-anada="2019" data-altura="< 1000m">JORGE RUBIO GRAN RESERVA Malbec Magnum</a></li>
               
              </ul>
            </li>
           
            <li><span class="filter" data-filter="anada" data-value="2018">2018</span>
              <ul>
               
                <li><a href="vinos/tomero--cuartel-41-malbec-2018.html" data-provincia="Cuyo" data-tipo="Tinto" data-anada="2018" data-altura="1000m - 2000m">Tomero - Cuartel 41 Malbec 2018</a></li>
               
                <li><a href="vinos/weinert-malbec-2018.html" data-provincia="Cuyo" data-tipo="Tinto" data-anada="2018" data-altura="< 1000m">Weinert Malbec 2018</a></li>
               
                <li><a href="vinos/particular-malbec-2018.html" data-provincia="Rafael" data-tipo="Tinto" data-anada="2018" data-altura="< 1000m">Particular Malbec 2018</a></li>
               
                <li><a href="vinos/jorge-rubio-premiado-malbec.html" data-provincia="Maipú" data-tipo="Tinto" data-anada="2018" data-altura="< 1000m">JORGE RUBIO PREMIADO Malbec</a></li>
               
                <li><a href="vinos/cicchitti-gran-reserva-malbec.html" data-provincia="Maipú" data-tipo="Tinto" data-anada="2018" data-altura="< 1000m">CICCHITTI Gran Reserva Malbec</a></li>
               
              </ul>
            </li>
           
            <li><span class="filter" data-filter="anada" data-value="2017">2017</span>
              <ul>
               
                <li><a href="vinos/urano--malbec-2017.html" data-provincia="Uco" data-tipo="Tinto" data-anada="2017" data-altura="1000m - 2000m">Urano - Malbec 2017</a></li>
               
                <li><a href="vinos/eral-bravo--malbec-2017.html" data-provincia="Uco" data-tipo="Tinto" data-anada="2017" data-altura="1000m - 2000m">Eral Bravo - Malbec 2017</a></li>
               
                <li><a href="vinos/gran-famiglia--malbec-2017.html" data-provincia="Rafael" data-tipo="Tinto" data-anada="2017" data-altura="< 1000m">Gran Famiglia - Malbec 2017</a></li>
               
              </ul>
            </li>
           
            <li><span class="filter" data-filter="anada" data-value="2016">2016</span>
              <ul>
               
                <li><a href="vinos/tomero--cuartel-41-malbec-2016.html" data-provincia="Cuyo" data-tipo="Tinto" data-anada="2016" data-altura="1000m - 2000m">Tomero - Cuartel 41 Malbec 2016</a></li>
               
                <li><a href="vinos/via-alicia--malbec-2016.html" data-provincia="Mendoza" data-tipo="Tinto" data-anada="2016" data-altura="1000m - 2000m">Viña Alicia - Malbec 2016</a></li>
               
                <li><a href="vinos/cicchitti-malbec-edicin-limitada.html" data-provincia="Maipú" data-tipo="Tinto" data-anada="2016" data-altura="< 1000m">Cicchitti Malbec Edición Limitada</a></li>
               
              </ul>
            </li>
           
            <li><span class="filter" data-filter="anada" data-value="2014">2014</span>
              <ul>
               
                <li><a href="vinos/famiglia-bianchi-malbec-2014.html" data-provincia="Rafael" data-tipo="Tinto" data-anada="2014" data-altura="< 1000m">Famiglia Bianchi Malbec 2014</a></li>
               
              </ul>
            </li>
           
            <li><span class="filter" data-filter="anada" data-value="2013">2013</span>
              <ul>
               
                <li><a href="vinos/gran-potico--malbec-2013.html" data-provincia="Uco" data-tipo="Tinto" data-anada="2013" data-altura="1000m - 2000m">Gran Poético - Malbec 2013</a></li>
               
                <li><a href="vinos/via-alicia--malbec-2013.html" data-provincia="Mendoza" data-tipo="Tinto" data-anada="2013" data-altura="1000m - 2000m">Viña Alicia - Malbec 2013</a></li>
               
              </ul>
            </li>
           
            <li><span class="filter" data-filter="anada" data-value="2012">2012</span>
              <ul>
               
                <li><a href="vinos/via-alicia--malbec-2012.html" data-provincia="Mendoza" data-tipo="Tinto" data-anada="2012" data-altura="1000m - 2000m">Viña Alicia - Malbec 2012</a></li>
               
              </ul>
            </li>
           
            <li><span class="filter" data-filter="anada" data-value="2010">2010</span>
              <ul>
               
                <li><a href="vinos/weinert-malbec-2010.html" data-provincia="Cuyo" data-tipo="Tinto" data-anada="2010" data-altura="< 1000m">Weinert Malbec 2010</a></li>
               
                <li><a href="vinos/via-alicia--malbec-2010.html" data-provincia="Mendoza" data-tipo="Tinto" data-anada="2010" data-altura="1000m - 2000m">Viña Alicia - Malbec 2010</a></li>
               
              </ul>
            </li>
           
            <li><span class="filter" data-filter="anada" data-value="1995">1995</span>
              <ul>
               
                <li><a href="vinos/weinert-malbec-1995.html" data-provincia="Cuyo" data-tipo="Tinto" data-anada="1995" data-altura="< 1000m">Weinert Malbec 1995</a></li>
               
              </ul>
            </li>
           
          </ul>
        </li>
      </ul>
    </details>
    <details>
      <summary><i class="fas fa-wine-bottle"></i> Bodega</summary>
      <ul>
       
        <li><span class="filter" data-filter="bodega" data-value="Agustín Lanús">Agustín Lanús</span>
          <ul>
           
            <li><a href="vinos/bad-brothers--malbec-premium-2020.html" data-provincia="Calchaquí" data-tipo="Tinto" data-anada="2020" data-altura="1000m - 2000m">Bad Brothers - Malbec Premium 2020</a></li>
           
            <li><a href="vinos/sunal-ilgico--malbec-2020.html" data-provincia="Calchaquí" data-tipo="Tinto" data-anada="2020" data-altura="1000m - 2000m">Sunal Ilógico - Malbec 2020</a></li>
           
          </ul>
        </li>
       
        <li><span class="filter" data-filter="bodega" data-value="Bodega Chanarmuyo">Bodega Chanarmuyo</span>
          <ul>
           
            <li><a href="vinos/chanarmuyo-estate-malbec.html" data-provincia="Famatina" data-tipo="Tinto" data-anada="2021" data-altura="1000m - 2000m">CHANARMUYO Estate Malbec</a></li>
           
          </ul>
        </li>
       
        <li><span class="filter" data-filter="bodega" data-value="Bodega Finca Gabriel">Bodega Finca Gabriel</span>
          <ul>
           
            <li><a href="vinos/finca-gabriel-malbec.html" data-provincia="Maipú" data-tipo="Tinto" data-anada="2021" data-altura="< 1000m">FINCA GABRIEL Malbec</a></li>
           
            <li><a href="vinos/finca-gabriel-edicin-especial-malbec.html" data-provincia="Maipú" data-tipo="Tinto" data-anada="2022" data-altura="< 1000m">FINCA GABRIEL Edición Especial Malbec</a></li>
           
          </ul>
        </li>
       
        <li><span class="filter" data-filter="bodega" data-value="Bodega Resero">Bodega Resero</span>
          <ul>
           
            <li><a href="vinos/resero-malbec.html" data-provincia="Uco" data-tipo="Tinto" data-anada="2022" data-altura="1000m - 2000m">Resero Malbec</a></li>
           
          </ul>
        </li>
       
        <li><span class="filter" data-filter="bodega" data-value="Bodega Séptima">Bodega Séptima</span>
          <ul>
           
            <li><a href="vinos/sptima-ros-de-malbec.html" data-provincia="Luján de Cuyo" data-tipo="Tinto" data-anada="2023" data-altura="< 1000m">Séptima Rosé de Malbec</a></li>
           
            <li><a href="vinos/sptima-malbec.html" data-provincia="Luján de Cuyo" data-tipo="Tinto" data-anada="2022" data-altura="< 1000m">Séptima Malbec</a></li>
           
          </ul>
        </li>
       
        <li><span class="filter" data-filter="bodega" data-value="Bodega Tukma">Bodega Tukma</span>
          <ul>
           
            <li><a href="vinos/tukma-malbec.html" data-provincia="Cafayate" data-tipo="Tinto" data-anada="2019" data-altura="1000m - 2000m">Tukma Malbec</a></li>
           
          </ul>
        </li>
       
        <li><span class="filter" data-filter="bodega" data-value="Bodegas Bianchi">Bodegas Bianchi</span>
          <ul>
           
            <li><a href="vinos/gran-famiglia--malbec-2017.html" data-provincia="Rafael" data-tipo="Tinto" data-anada="2017" data-altura="< 1000m">Gran Famiglia - Malbec 2017</a></li>
           
            <li><a href="vinos/famiglia-bianchi-malbec-2023.html" data-provincia="Rafael" data-tipo="Tinto" data-anada="2023" data-altura="< 1000m">Famiglia Bianchi Malbec 2023</a></li>
           
            <li><a href="vinos/famiglia-bianchi-malbec-2021.html" data-provincia="Rafael" data-tipo="Tinto" data-anada="2021" data-altura="< 1000m">Famiglia Bianchi Malbec 2021</a></li>
           
            <li><a href="vinos/famiglia-bianchi-malbec-2020.html" data-provincia="Rafael" data-tipo="Tinto" data-anada="2020" data-altura="< 1000m">Famiglia Bianchi Malbec 2020</a></li>
           
            <li><a href="vinos/famiglia-bianchi-malbec-2014.html" data-provincia="Rafael" data-tipo="Tinto" data-anada="2014" data-altura="< 1000m">Famiglia Bianchi Malbec 2014</a></li>
           
            <li><a href="vinos/particular-malbec-2020.html" data-provincia="Rafael" data-tipo="Tinto" data-anada="2020" data-altura="< 1000m">Particular Malbec 2020</a></li>
           
            <li><a href="vinos/particular-malbec-2019.html" data-provincia="Rafael" data-tipo="Tinto" data-anada="2019" data-altura="< 1000m">Particular Malbec 2019</a></li>
           
            <li><a href="vinos/particular-malbec-2018.html" data-provincia="Rafael" data-tipo="Tinto" data-anada="2018" data-altura="< 1000m">Particular Malbec 2018</a></li>
           
            <li><a href="vinos/particular-malbec-2019-magnum-15-lts.html" data-provincia="Rafael" data-tipo="Tinto" data-anada="2019" data-altura="< 1000m">Particular Malbec 2019 Magnum 1.5 Lts</a></li>
           
            <li><a href="vinos/enzo-bianchi--gran-malbec-2019.html" data-provincia="Rafael" data-tipo="Tinto" data-anada="2019" data-altura="< 1000m">Enzo Bianchi - Gran Malbec 2019</a></li>
           
          </ul>
        </li>
       
        <li><span class="filter" data-filter="bodega" data-value="Bodegas Etchart">Bodegas Etchart</span>
          <ul>
           
            <li><a href="vinos/imaginate-malbec.html" data-provincia="Cafayate" data-tipo="Tinto" data-anada="2019" data-altura="1000m - 2000m">Imaginate Malbec</a></li>
           
            <li><a href="vinos/amar-vivir-malbec.html" data-provincia="Cafayate" data-tipo="Tinto" data-anada="2020" data-altura="1000m - 2000m">Amar Vivir Malbec</a></li>
           
          </ul>
        </li>
       
        <li><span class="filter" data-filter="bodega" data-value="Casa Araujo">Casa Araujo</span>
          <ul>
           
            <li><a href="vinos/casa-araujo-varietal.html" data-provincia="Rafael" data-tipo="Tinto" data-anada="2023" data-altura="< 1000m">Casa Araujo Varietal</a></li>
           
            <li><a href="vinos/casa-araujo-roble.html" data-provincia="Rafael" data-tipo="Tinto" data-anada="2023" data-altura="< 1000m">Casa Araujo Roble</a></li>
           
            <li><a href="vinos/casa-araujo-mimi.html" data-provincia="Rafael" data-tipo="Tinto" data-anada="2023" data-altura="< 1000m">Casa Araujo Mimi</a></li>
           
            <li><a href="vinos/nucha.html" data-provincia="Rafael" data-tipo="Tinto" data-anada="2023" data-altura="< 1000m">Nucha</a></li>
           
            <li><a href="vinos/graciano-reserva-blend.html" data-provincia="Rafael" data-tipo="Tinto" data-anada="2023" data-altura="< 1000m">Graciano Reserva Blend</a></li>
           
          </ul>
        </li>
       
        <li><span class="filter" data-filter="bodega" data-value="Chakana">Chakana</span>
          <ul>
           
            <li><a href="vinos/a-contramano-malbec.html" data-provincia="Uco" data-tipo="Tinto" data-anada="2021" data-altura="1000m - 2000m">A CONTRAMANO Malbec</a></li>
           
            <li><a href="vinos/chakana-nuna-malbec-bio.html" data-provincia="Uco" data-tipo="Tinto" data-anada="2022" data-altura="1000m - 2000m">CHAKANA Nuna Malbec Bio</a></li>
           
          </ul>
        </li>
       
        <li><span class="filter" data-filter="bodega" data-value="Cicchitti">Cicchitti</span>
          <ul>
           
            <li><a href="vinos/cicchitti-primmo-malbec.html" data-provincia="Maipú" data-tipo="Tinto" data-anada="2022" data-altura="< 1000m">CICCHITTI Primmo Malbec</a></li>
           
            <li><a href="vinos/vos-malbec-de-malbec.html" data-provincia="Maipú" data-tipo="Tinto" data-anada="2021" data-altura="< 1000m">VOS Malbec de Malbec</a></li>
           
            <li><a href="vinos/cicchitti-malbec.html" data-provincia="Maipú" data-tipo="Tinto" data-anada="2021" data-altura="< 1000m">CICCHITTI Malbec</a></li>
           
            <li><a href="vinos/cicchitti-gran-reserva-malbec.html" data-provincia="Maipú" data-tipo="Tinto" data-anada="2018" data-altura="< 1000m">CICCHITTI Gran Reserva Malbec</a></li>
           
            <li><a href="vinos/cicchitti-malbec-edicin-limitada.html" data-provincia="Maipú" data-tipo="Tinto" data-anada="2016" data-altura="< 1000m">Cicchitti Malbec Edición Limitada</a></li>
           
          </ul>
        </li>
       
        <li><span class="filter" data-filter="bodega" data-value="Dilema Wines">Dilema Wines</span>
          <ul>
           
            <li><a href="vinos/dilema-day-malbec.html" data-provincia="Uco" data-tipo="Tinto" data-anada="2021" data-altura="1000m - 2000m">Dilema Day Malbec</a></li>
           
          </ul>
        </li>
       
        <li><span class="filter" data-filter="bodega" data-value="Enrique Foster Bodega">Enrique Foster Bodega</span>
          <ul>
           
            <li><a href="vinos/lois--sparkling-malbec-2021.html" data-provincia="Cuyo" data-tipo="Espumante" data-anada="2021" data-altura="< 1000m">Lois - Sparkling Malbec 2021</a></li>
           
            <li><a href="vinos/pink--malbec-rosado-2023.html" data-provincia="Cuyo" data-tipo="Rosado" data-anada="2023" data-altura="< 1000m">Pink - Malbec Rosado 2023</a></li>
           
            <li><a href="vinos/ique--malbec-2023.html" data-provincia="Cuyo" data-tipo="Tinto" data-anada="2021" data-altura="< 1000m">Ique - Malbec 2023</a></li>
           
            <li><a href="vinos/foster--malbec.html" data-provincia="Cuyo" data-tipo="Tinto" data-anada="2023" data-altura="< 1000m">Foster - Malbec</a></li>
           
            <li><a href="vinos/foster--malbec-los-altepes.html" data-provincia="Cuyo" data-tipo="Tinto" data-anada="2023" data-altura="< 1000m">Foster - Malbec 'Los Altepes'</a></li>
           
            <li><a href="vinos/foster--malbec-los-barrancos.html" data-provincia="Cuyo" data-tipo="Tinto" data-anada="2023" data-altura="< 1000m">Foster - Malbec 'Los Barrancos'</a></li>
           
            <li><a href="vinos/foster--malbec-limited-edition.html" data-provincia="Cuyo" data-tipo="Tinto" data-anada="2023" data-altura="< 1000m">Foster - Malbec Limited Edition</a></li>
           
            <li><a href="vinos/foster--malbec.html" data-provincia="Cuyo" data-tipo="Tinto" data-anada="2023" data-altura="< 1000m">Foster - Malbec</a></li>
           
            <li><a href="vinos/foster--malbec-los-altepes.html" data-provincia="Cuyo" data-tipo="Tinto" data-anada="2023" data-altura="< 1000m">Foster - Malbec 'Los Altepes'</a></li>
           
          </ul>
        </li>
       
        <li><span class="filter" data-filter="bodega" data-value="Eral Bravo">Eral Bravo</span>
          <ul>
           
            <li><a href="vinos/urano--malbec-2017.html" data-provincia="Uco" data-tipo="Tinto" data-anada="2017" data-altura="1000m - 2000m">Urano - Malbec 2017</a></li>
           
            <li><a href="vinos/eral-bravo--malbec-2017.html" data-provincia="Uco" data-tipo="Tinto" data-anada="2017" data-altura="1000m - 2000m">Eral Bravo - Malbec 2017</a></li>
           
          </ul>
        </li>
       
        <li><span class="filter" data-filter="bodega" data-value="Familia Schroeder">Familia Schroeder</span>
          <ul>
           
            <li><a href="vinos/saurus--malbec-2023.html" data-provincia="Chañar" data-tipo="Tinto" data-anada="2023" data-altura="< 1000m">Saurus - Malbec 2023</a></li>
           
            <li><a href="vinos/saurus-patagonia-select--malbec-2022.html" data-provincia="Chañar" data-tipo="Tinto" data-anada="2022" data-altura="< 1000m">Saurus Patagonia Select - Malbec 2022</a></li>
           
            <li><a href="vinos/saurus-barrel-fermented--malbec-2022.html" data-provincia="Chañar" data-tipo="Tinto" data-anada="2022" data-altura="< 1000m">Saurus Barrel Fermented - Malbec 2022</a></li>
           
            <li><a href="vinos/familia-schroeder--malbec-2019.html" data-provincia="Chañar" data-tipo="Tinto" data-anada="2019" data-altura="< 1000m">Familia Schroeder - Malbec 2019</a></li>
           
          </ul>
        </li>
       
        <li><span class="filter" data-filter="bodega" data-value="Finca y Bodega Vistalba">Finca y Bodega Vistalba</span>
          <ul>
           
            <li><a href="vinos/tomero--malbec-2023.html" data-provincia="Cuyo" data-tipo="Tinto" data-anada="2023" data-altura="1000m - 2000m">Tomero - Malbec 2023</a></li>
           
            <li><a href="vinos/tomero-single-vineyard-malbec-2021.html" data-provincia="Cuyo" data-tipo="Tinto" data-anada="2021" data-altura="1000m - 2000m">Tomero Single Vineyard Malbec 2021</a></li>
           
            <li><a href="vinos/tomero-single-vineyard-malbec-2020.html" data-provincia="Cuyo" data-tipo="Tinto" data-anada="2020" data-altura="1000m - 2000m">Tomero Single Vineyard Malbec 2020</a></li>
           
            <li><a href="vinos/tomero-single-vineyard-malbec-2019.html" data-provincia="Cuyo" data-tipo="Tinto" data-anada="2019" data-altura="1000m - 2000m">Tomero Single Vineyard Malbec 2019</a></li>
           
            <li><a href="vinos/vistalba--malbec-2021.html" data-provincia="Cuyo" data-tipo="Tinto" data-anada="2021" data-altura="1000m - 2000m">Vistalba - Malbec 2021</a></li>
           
            <li><a href="vinos/vistalba--gran-malbec-2019.html" data-provincia="Cuyo" data-tipo="Tinto" data-anada="2019" data-altura="1000m - 2000m">Vistalba - Gran Malbec 2019</a></li>
           
            <li><a href="vinos/tomero--cuartel-41-malbec-2019.html" data-provincia="Cuyo" data-tipo="Tinto" data-anada="2019" data-altura="1000m - 2000m">Tomero - Cuartel 41 Malbec 2019</a></li>
           
            <li><a href="vinos/tomero--cuartel-41-malbec-2018.html" data-provincia="Cuyo" data-tipo="Tinto" data-anada="2018" data-altura="1000m - 2000m">Tomero - Cuartel 41 Malbec 2018</a></li>
           
            <li><a href="vinos/tomero--cuartel-41-malbec-2016.html" data-provincia="Cuyo" data-tipo="Tinto" data-anada="2016" data-altura="1000m - 2000m">Tomero - Cuartel 41 Malbec 2016</a></li>
           
          </ul>
        </li>
       
        <li><span class="filter" data-filter="bodega" data-value="Jasmine Monet">Jasmine Monet</span>
          <ul>
           
            <li><a href="vinos/caminante-de-los-mundos-malbec-bio.html" data-provincia="Uco" data-tipo="Tinto" data-anada="2021" data-altura="1000m - 2000m">Caminante de los Mundos Malbec Bio</a></li>
           
          </ul>
        </li>
       
        <li><span class="filter" data-filter="bodega" data-value="Jorge Rubio">Jorge Rubio</span>
          <ul>
           
            <li><a href="vinos/jorge-rubio-privado-malbec.html" data-provincia="Maipú" data-tipo="Tinto" data-anada="2021" data-altura="< 1000m">JORGE RUBIO PRIVADO Malbec</a></li>
           
            <li><a href="vinos/jorge-rubio-gran-reserva-malbecmerlot.html" data-provincia="Maipú" data-tipo="Tinto" data-anada="2020" data-altura="< 1000m">JORGE RUBIO GRAN RESERVA Malbec/Merlot</a></li>
           
            <li><a href="vinos/jorge-rubio-gran-reserva-malbec.html" data-provincia="Maipú" data-tipo="Tinto" data-anada="2019" data-altura="< 1000m">JORGE RUBIO GRAN RESERVA Malbec</a></li>
           
            <li><a href="vinos/jorge-rubio-premiado-malbec.html" data-provincia="Maipú" data-tipo="Tinto" data-anada="2018" data-altura="< 1000m">JORGE RUBIO PREMIADO Malbec</a></li>
           
            <li><a href="vinos/jorge-rubio-gran-reserva-malbec-magnum.html" data-provincia="Rafael" data-tipo="Tinto" data-anada="2019" data-altura="< 1000m">JORGE RUBIO GRAN RESERVA Malbec Magnum</a></li>
           
          </ul>
        </li>
       
        <li><span class="filter" data-filter="bodega" data-value="La Grupa Wines">La Grupa Wines</span>
          <ul>
           
            <li><a href="vinos/la-grupa-syrah-malbec-075.html" data-provincia="Maipú" data-tipo="Tinto" data-anada="2022" data-altura="< 1000m">LA Grupa Syrah Malbec 0.75</a></li>
           
            <li><a href="vinos/la-grupa-syrah-malbec-125.html" data-provincia="Maipú" data-tipo="Tinto" data-anada="2022" data-altura="< 1000m">LA Grupa Syrah Malbec 1.25</a></li>
           
          </ul>
        </li>
       
        <li><span class="filter" data-filter="bodega" data-value="Luigi Bosca">Luigi Bosca</span>
          <ul>
           
            <li><a href="vinos/luigi-bosca-malbec.html" data-provincia="Cuyo" data-tipo="Tinto" data-anada="2022" data-altura="< 1000m">LUIGI BOSCA Malbec</a></li>
           
            <li><a href="vinos/luigi-bosca-de-sangre-malbec-doc.html" data-provincia="Cuyo" data-tipo="Tinto" data-anada="2021" data-altura="< 1000m">LUIGI BOSCA De SANGRE Malbec D.O.C</a></li>
           
          </ul>
        </li>
       
        <li><span class="filter" data-filter="bodega" data-value="Mauricio Lorca Bodega y Viñedos">Mauricio Lorca Bodega y Viñedos</span>
          <ul>
           
            <li><a href="vinos/temtico--malbec-2023.html" data-provincia="Uco" data-tipo="Tinto" data-anada="2023" data-altura="1000m - 2000m">Temático - Malbec 2023</a></li>
           
            <li><a href="vinos/zapam-zucum--organic-malbec-2022.html" data-provincia="Uco" data-tipo="Orgánico" data-anada="2022" data-altura="1000m - 2000m">Zapam Zucum - Organic Malbec 2022</a></li>
           
            <li><a href="vinos/fantasa--malbec-2023.html" data-provincia="Uco" data-tipo="Tinto" data-anada="2023" data-altura="1000m - 2000m">Fantasía - Malbec 2023</a></li>
           
            <li><a href="vinos/gran-potico--malbec-2013.html" data-provincia="Uco" data-tipo="Tinto" data-anada="2013" data-altura="1000m - 2000m">Gran Poético - Malbec 2013</a></li>
           
          </ul>
        </li>
       
        <li><span class="filter" data-filter="bodega" data-value="Viña Alicia">Viña Alicia</span>
          <ul>
           
            <li><a href="vinos/paso-de-piedra--malbec-2019.html" data-provincia="Mendoza" data-tipo="Tinto" data-anada="2019" data-altura="1000m - 2000m">Paso de Piedra - Malbec 2019</a></li>
           
            <li><a href="vinos/via-alicia--malbec-2016.html" data-provincia="Mendoza" data-tipo="Tinto" data-anada="2016" data-altura="1000m - 2000m">Viña Alicia - Malbec 2016</a></li>
           
            <li><a href="vinos/via-alicia--malbec-2013.html" data-provincia="Mendoza" data-tipo="Tinto" data-anada="2013" data-altura="1000m - 2000m">Viña Alicia - Malbec 2013</a></li>
           
            <li><a href="vinos/via-alicia--malbec-2012.html" data-provincia="Mendoza" data-tipo="Tinto" data-anada="2012" data-altura="1000m - 2000m">Viña Alicia - Malbec 2012</a></li>
           
            <li><a href="vinos/via-alicia--malbec-2010.html" data-provincia="Mendoza" data-tipo="Tinto" data-anada="2010" data-altura="1000m - 2000m">Viña Alicia - Malbec 2010</a></li>
           
          </ul>
        </li>
       
        <li><span class="filter" data-filter="bodega" data-value="Weinert Bodega y Cavas">Weinert Bodega y Cavas</span>
          <ul>
           
            <li><a href="vinos/carrascal-malbec.html" data-provincia="Cuyo" data-tipo="Tinto" data-anada="2022" data-altura="< 1000m">Carrascal Malbec</a></li>
           
            <li><a href="vinos/weinert-malbec-2018.html" data-provincia="Cuyo" data-tipo="Tinto" data-anada="2018" data-altura="< 1000m">Weinert Malbec 2018</a></li>
           
            <li><a href="vinos/weinert-malbec-2010.html" data-provincia="Cuyo" data-tipo="Tinto" data-anada="2010" data-altura="< 1000m">Weinert Malbec 2010</a></li>
           
            <li><a href="vinos/weinert-malbec-1995.html" data-provincia="Cuyo" data-tipo="Tinto" data-anada="1995" data-altura="< 1000m">Weinert Malbec 1995</a></li>
           
          </ul>
        </li>
       
      </ul>
    </details>
    <details>
      <summary><i class="fas fa-dollar-sign"></i> Rango de Precio</summary>
      <ul>
       
        <li><span class="filter" data-filter="precio-rango" data-value="Económico">Económico</span>
          <ul>
           
            <li><a href="vinos/temtico--malbec-2023.html" data-provincia="Uco" data-tipo="Tinto" data-anada="2023" data-altura="1000m - 2000m">Temático - Malbec 2023</a></li>
           
            <li><a href="vinos/jorge-rubio-gran-reserva-malbecmerlot.html" data-provincia="Maipú" data-tipo="Tinto" data-anada="2020" data-altura="< 1000m">JORGE RUBIO GRAN RESERVA Malbec/Merlot</a></li>
           
            <li><a href="vinos/casa-araujo-varietal.html" data-provincia="Rafael" data-tipo="Tinto" data-anada="2023" data-altura="< 1000m">Casa Araujo Varietal</a></li>
           
            <li><a href="vinos/casa-araujo-roble.html" data-provincia="Rafael" data-tipo="Tinto" data-anada="2023" data-altura="< 1000m">Casa Araujo Roble</a></li>
           
          </ul>
        </li>
       
        <li><span class="filter" data-filter="precio-rango" data-value="Medio">Medio</span>
          <ul>
           
            <li><a href="vinos/zapam-zucum--organic-malbec-2022.html" data-provincia="Uco" data-tipo="Orgánico" data-anada="2022" data-altura="1000m - 2000m">Zapam Zucum - Organic Malbec 2022</a></li>
           
            <li><a href="vinos/fantasa--malbec-2023.html" data-provincia="Uco" data-tipo="Tinto" data-anada="2023" data-altura="1000m - 2000m">Fantasía - Malbec 2023</a></li>
           
            <li><a href="vinos/lois--sparkling-malbec-2021.html" data-provincia="Cuyo" data-tipo="Espumante" data-anada="2021" data-altura="< 1000m">Lois - Sparkling Malbec 2021</a></li>
           
            <li><a href="vinos/pink--malbec-rosado-2023.html" data-provincia="Cuyo" data-tipo="Rosado" data-anada="2023" data-altura="< 1000m">Pink - Malbec Rosado 2023</a></li>
           
            <li><a href="vinos/ique--malbec-2023.html" data-provincia="Cuyo" data-tipo="Tinto" data-anada="2021" data-altura="< 1000m">Ique - Malbec 2023</a></li>
           
            <li><a href="vinos/urano--malbec-2017.html" data-provincia="Uco" data-tipo="Tinto" data-anada="2017" data-altura="1000m - 2000m">Urano - Malbec 2017</a></li>
           
            <li><a href="vinos/tomero--malbec-2023.html" data-provincia="Cuyo" data-tipo="Tinto" data-anada="2023" data-altura="1000m - 2000m">Tomero - Malbec 2023</a></li>
           
            <li><a href="vinos/vistalba--malbec-2021.html" data-provincia="Cuyo" data-tipo="Tinto" data-anada="2021" data-altura="1000m - 2000m">Vistalba - Malbec 2021</a></li>
           
            <li><a href="vinos/carrascal-malbec.html" data-provincia="Cuyo" data-tipo="Tinto" data-anada="2022" data-altura="< 1000m">Carrascal Malbec</a></li>
           
            <li><a href="vinos/famiglia-bianchi-malbec-2023.html" data-provincia="Rafael" data-tipo="Tinto" data-anada="2023" data-altura="< 1000m">Famiglia Bianchi Malbec 2023</a></li>
           
            <li><a href="vinos/famiglia-bianchi-malbec-2021.html" data-provincia="Rafael" data-tipo="Tinto" data-anada="2021" data-altura="< 1000m">Famiglia Bianchi Malbec 2021</a></li>
           
            <li><a href="vinos/famiglia-bianchi-malbec-2020.html" data-provincia="Rafael" data-tipo="Tinto" data-anada="2020" data-altura="< 1000m">Famiglia Bianchi Malbec 2020</a></li>
           
            <li><a href="vinos/famiglia-bianchi-malbec-2014.html" data-provincia="Rafael" data-tipo="Tinto" data-anada="2014" data-altura="< 1000m">Famiglia Bianchi Malbec 2014</a></li>
           
            <li><a href="vinos/saurus--malbec-2023.html" data-provincia="Chañar" data-tipo="Tinto" data-anada="2023" data-altura="< 1000m">Saurus - Malbec 2023</a></li>
           
            <li><a href="vinos/saurus-patagonia-select--malbec-2022.html" data-provincia="Chañar" data-tipo="Tinto" data-anada="2022" data-altura="< 1000m">Saurus Patagonia Select - Malbec 2022</a></li>
           
            <li><a href="vinos/bad-brothers--malbec-premium-2020.html" data-provincia="Calchaquí" data-tipo="Tinto" data-anada="2020" data-altura="1000m - 2000m">Bad Brothers - Malbec Premium 2020</a></li>
           
            <li><a href="vinos/cicchitti-primmo-malbec.html" data-provincia="Maipú" data-tipo="Tinto" data-anada="2022" data-altura="< 1000m">CICCHITTI Primmo Malbec</a></li>
           
            <li><a href="vinos/dilema-day-malbec.html" data-provincia="Uco" data-tipo="Tinto" data-anada="2021" data-altura="1000m - 2000m">Dilema Day Malbec</a></li>
           
            <li><a href="vinos/la-grupa-syrah-malbec-075.html" data-provincia="Maipú" data-tipo="Tinto" data-anada="2022" data-altura="< 1000m">LA Grupa Syrah Malbec 0.75</a></li>
           
            <li><a href="vinos/resero-malbec.html" data-provincia="Uco" data-tipo="Tinto" data-anada="2022" data-altura="1000m - 2000m">Resero Malbec</a></li>
           
            <li><a href="vinos/sptima-ros-de-malbec.html" data-provincia="Luján de Cuyo" data-tipo="Tinto" data-anada="2023" data-altura="< 1000m">Séptima Rosé de Malbec</a></li>
           
            <li><a href="vinos/sptima-malbec.html" data-provincia="Luján de Cuyo" data-tipo="Tinto" data-anada="2022" data-altura="< 1000m">Séptima Malbec</a></li>
           
            <li><a href="vinos/casa-araujo-mimi.html" data-provincia="Rafael" data-tipo="Tinto" data-anada="2023" data-altura="< 1000m">Casa Araujo Mimi</a></li>
           
            <li><a href="vinos/nucha.html" data-provincia="Rafael" data-tipo="Tinto" data-anada="2023" data-altura="< 1000m">Nucha</a></li>
           
            <li><a href="vinos/graciano-reserva-blend.html" data-provincia="Rafael" data-tipo="Tinto" data-anada="2023" data-altura="< 1000m">Graciano Reserva Blend</a></li>
           
          </ul>
        </li>
       
        <li><span class="filter" data-filter="precio-rango" data-value="Premium">Premium</span>
          <ul>
           
            <li><a href="vinos/gran-potico--malbec-2013.html" data-provincia="Uco" data-tipo="Tinto" data-anada="2013" data-altura="1000m - 2000m">Gran Poético - Malbec 2013</a></li>
           
            <li><a href="vinos/foster--malbec.html" data-provincia="Cuyo" data-tipo="Tinto" data-anada="2023" data-altura="< 1000m">Foster - Malbec</a></li>
           
            <li><a href="vinos/foster--malbec-los-altepes.html" data-provincia="Cuyo" data-tipo="Tinto" data-anada="2023" data-altura="< 1000m">Foster - Malbec 'Los Altepes'</a></li>
           
            <li><a href="vinos/foster--malbec-los-barrancos.html" data-provincia="Cuyo" data-tipo="Tinto" data-anada="2023" data-altura="< 1000m">Foster - Malbec 'Los Barrancos'</a></li>
           
            <li><a href="vinos/foster--malbec-limited-edition.html" data-provincia="Cuyo" data-tipo="Tinto" data-anada="2023" data-altura="< 1000m">Foster - Malbec Limited Edition</a></li>
           
            <li><a href="vinos/foster--malbec.html" data-provincia="Cuyo" data-tipo="Tinto" data-anada="2023" data-altura="< 1000m">Foster - Malbec</a></li>
           
            <li><a href="vinos/foster--malbec-los-altepes.html" data-provincia="Cuyo" data-tipo="Tinto" data-anada="2023" data-altura="< 1000m">Foster - Malbec 'Los Altepes'</a></li>
           
            <li><a href="vinos/eral-bravo--malbec-2017.html" data-provincia="Uco" data-tipo="Tinto" data-anada="2017" data-altura="1000m - 2000m">Eral Bravo - Malbec 2017</a></li>
           
            <li><a href="vinos/tomero-single-vineyard-malbec-2021.html" data-provincia="Cuyo" data-tipo="Tinto" data-anada="2021" data-altura="1000m - 2000m">Tomero Single Vineyard Malbec 2021</a></li>
           
            <li><a href="vinos/tomero-single-vineyard-malbec-2020.html" data-provincia="Cuyo" data-tipo="Tinto" data-anada="2020" data-altura="1000m - 2000m">Tomero Single Vineyard Malbec 2020</a></li>
           
            <li><a href="vinos/tomero-single-vineyard-malbec-2019.html" data-provincia="Cuyo" data-tipo="Tinto" data-anada="2019" data-altura="1000m - 2000m">Tomero Single Vineyard Malbec 2019</a></li>
           
            <li><a href="vinos/vistalba--gran-malbec-2019.html" data-provincia="Cuyo" data-tipo="Tinto" data-anada="2019" data-altura="1000m - 2000m">Vistalba - Gran Malbec 2019</a></li>
           
            <li><a href="vinos/tomero--cuartel-41-malbec-2019.html" data-provincia="Cuyo" data-tipo="Tinto" data-anada="2019" data-altura="1000m - 2000m">Tomero - Cuartel 41 Malbec 2019</a></li>
           
            <li><a href="vinos/tomero--cuartel-41-malbec-2018.html" data-provincia="Cuyo" data-tipo="Tinto" data-anada="2018" data-altura="1000m - 2000m">Tomero - Cuartel 41 Malbec 2018</a></li>
           
            <li><a href="vinos/tomero--cuartel-41-malbec-2016.html" data-provincia="Cuyo" data-tipo="Tinto" data-anada="2016" data-altura="1000m - 2000m">Tomero - Cuartel 41 Malbec 2016</a></li>
           
            <li><a href="vinos/weinert-malbec-2018.html" data-provincia="Cuyo" data-tipo="Tinto" data-anada="2018" data-altura="< 1000m">Weinert Malbec 2018</a></li>
           
            <li><a href="vinos/weinert-malbec-2010.html" data-provincia="Cuyo" data-tipo="Tinto" data-anada="2010" data-altura="< 1000m">Weinert Malbec 2010</a></li>
           
            <li><a href="vinos/weinert-malbec-1995.html" data-provincia="Cuyo" data-tipo="Tinto" data-anada="1995" data-altura="< 1000m">Weinert Malbec 1995</a></li>
           
            <li><a href="vinos/paso-de-piedra--malbec-2019.html" data-provincia="Mendoza" data-tipo="Tinto" data-anada="2019" data-altura="1000m - 2000m">Paso de Piedra - Malbec 2019</a></li>
           
            <li><a href="vinos/via-alicia--malbec-2016.html" data-provincia="Mendoza" data-tipo="Tinto" data-anada="2016" data-altura="1000m - 2000m">Viña Alicia - Malbec 2016</a></li>
           
            <li><a href="vinos/via-alicia--malbec-2013.html" data-provincia="Mendoza" data-tipo="Tinto" data-anada="2013" data-altura="1000m - 2000m">Viña Alicia - Malbec 2013</a></li>
           
            <li><a href="vinos/via-alicia--malbec-2012.html" data-provincia="Mendoza" data-tipo="Tinto" data-anada="2012" data-altura="1000m - 2000m">Viña Alicia - Malbec 2012</a></li>
           
            <li><a href="vinos/via-alicia--malbec-2010.html" data-provincia="Mendoza" data-tipo="Tinto" data-anada="2010" data-altura="1000m - 2000m">Viña Alicia - Malbec 2010</a></li>
           
            <li><a href="vinos/gran-famiglia--malbec-2017.html" data-provincia="Rafael" data-tipo="Tinto" data-anada="2017" data-altura="< 1000m">Gran Famiglia - Malbec 2017</a></li>
           
            <li><a href="vinos/particular-malbec-2020.html" data-provincia="Rafael" data-tipo="Tinto" data-anada="2020" data-altura="< 1000m">Particular Malbec 2020</a></li>
           
            <li><a href="vinos/particular-malbec-2019.html" data-provincia="Rafael" data-tipo="Tinto" data-anada="2019" data-altura="< 1000m">Particular Malbec 2019</a></li>
           
            <li><a href="vinos/particular-malbec-2018.html" data-provincia="Rafael" data-tipo="Tinto" data-anada="2018" data-altura="< 1000m">Particular Malbec 2018</a></li>
           
            <li><a href="vinos/particular-malbec-2019-magnum-15-lts.html" data-provincia="Rafael" data-tipo="Tinto" data-anada="2019" data-altura="< 1000m">Particular Malbec 2019 Magnum 1.5 Lts</a></li>
           
            <li><a href="vinos/enzo-bianchi--gran-malbec-2019.html" data-provincia="Rafael" data-tipo="Tinto" data-anada="2019" data-altura="< 1000m">Enzo Bianchi - Gran Malbec 2019</a></li>
           
            <li><a href="vinos/saurus-barrel-fermented--malbec-2022.html" data-provincia="Chañar" data-tipo="Tinto" data-anada="2022" data-altura="< 1000m">Saurus Barrel Fermented - Malbec 2022</a></li>
           
            <li><a href="vinos/familia-schroeder--malbec-2019.html" data-provincia="Chañar" data-tipo="Tinto" data-anada="2019" data-altura="< 1000m">Familia Schroeder - Malbec 2019</a></li>
           
            <li><a href="vinos/sunal-ilgico--malbec-2020.html" data-provincia="Calchaquí" data-tipo="Tinto" data-anada="2020" data-altura="1000m - 2000m">Sunal Ilógico - Malbec 2020</a></li>
           
            <li><a href="vinos/chanarmuyo-estate-malbec.html" data-provincia="Famatina" data-tipo="Tinto" data-anada="2021" data-altura="1000m - 2000m">CHANARMUYO Estate Malbec</a></li>
           
            <li><a href="vinos/finca-gabriel-malbec.html" data-provincia="Maipú" data-tipo="Tinto" data-anada="2021" data-altura="< 1000m">FINCA GABRIEL Malbec</a></li>
           
            <li><a href="vinos/finca-gabriel-edicin-especial-malbec.html" data-provincia="Maipú" data-tipo="Tinto" data-anada="2022" data-altura="< 1000m">FINCA GABRIEL Edición Especial Malbec</a></li>
           
            <li><a href="vinos/jorge-rubio-privado-malbec.html" data-provincia="Maipú" data-tipo="Tinto" data-anada="2021" data-altura="< 1000m">JORGE RUBIO PRIVADO Malbec</a></li>
           
            <li><a href="vinos/jorge-rubio-gran-reserva-malbec.html" data-provincia="Maipú" data-tipo="Tinto" data-anada="2019" data-altura="< 1000m">JORGE RUBIO GRAN RESERVA Malbec</a></li>
           
            <li><a href="vinos/jorge-rubio-premiado-malbec.html" data-provincia="Maipú" data-tipo="Tinto" data-anada="2018" data-altura="< 1000m">JORGE RUBIO PREMIADO Malbec</a></li>
           
            <li><a href="vinos/a-contramano-malbec.html" data-provincia="Uco" data-tipo="Tinto" data-anada="2021" data-altura="1000m - 2000m">A CONTRAMANO Malbec</a></li>
           
            <li><a href="vinos/chakana-nuna-malbec-bio.html" data-provincia="Uco" data-tipo="Tinto" data-anada="2022" data-altura="1000m - 2000m">CHAKANA Nuna Malbec Bio</a></li>
           
            <li><a href="vinos/luigi-bosca-malbec.html" data-provincia="Cuyo" data-tipo="Tinto" data-anada="2022" data-altura="< 1000m">LUIGI BOSCA Malbec</a></li>
           
            <li><a href="vinos/luigi-bosca-de-sangre-malbec-doc.html" data-provincia="Cuyo" data-tipo="Tinto" data-anada="2021" data-altura="< 1000m">LUIGI BOSCA De SANGRE Malbec D.O.C</a></li>
           
            <li><a href="vinos/vos-malbec-de-malbec.html" data-provincia="Maipú" data-tipo="Tinto" data-anada="2021" data-altura="< 1000m">VOS Malbec de Malbec</a></li>
           
            <li><a href="vinos/cicchitti-malbec.html" data-provincia="Maipú" data-tipo="Tinto" data-anada="2021" data-altura="< 1000m">CICCHITTI Malbec</a></li>
           
            <li><a href="vinos/cicchitti-gran-reserva-malbec.html" data-provincia="Maipú" data-tipo="Tinto" data-anada="2018" data-altura="< 1000m">CICCHITTI Gran Reserva Malbec</a></li>
           
            <li><a href="vinos/cicchitti-malbec-edicin-limitada.html" data-provincia="Maipú" data-tipo="Tinto" data-anada="2016" data-altura="< 1000m">Cicchitti Malbec Edición Limitada</a></li>
           
            <li><a href="vinos/la-grupa-syrah-malbec-125.html" data-provincia="Maipú" data-tipo="Tinto" data-anada="2022" data-altura="< 1000m">LA Grupa Syrah Malbec 1.25</a></li>
           
            <li><a href="vinos/imaginate-malbec.html" data-provincia="Cafayate" data-tipo="Tinto" data-anada="2019" data-altura="1000m - 2000m">Imaginate Malbec</a></li>
           
            <li><a href="vinos/amar-vivir-malbec.html" data-provincia="Cafayate" data-tipo="Tinto" data-anada="2020" data-altura="1000m - 2000m">Amar Vivir Malbec</a></li>
           
            <li><a href="vinos/caminante-de-los-mundos-malbec-bio.html" data-provincia="Uco" data-tipo="Tinto" data-anada="2021" data-altura="1000m - 2000m">Caminante de los Mundos Malbec Bio</a></li>
           
            <li><a href="vinos/tukma-malbec.html" data-provincia="Cafayate" data-tipo="Tinto" data-anada="2019" data-altura="1000m - 2000m">Tukma Malbec</a></li>
           
            <li><a href="vinos/jorge-rubio-gran-reserva-malbec-magnum.html" data-provincia="Rafael" data-tipo="Tinto" data-anada="2019" data-altura="< 1000m">JORGE RUBIO GRAN RESERVA Malbec Magnum</a></li>
           
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
      <a href="/pink--malbec-rosado-2023.html">Comprar</a>
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
  </div> <!-- Cierre de featured-products -->
</div> <!-- Cierre de main-content -->
<script>
  document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menu-toggle');
    const sidebar = document.getElementById('sidebar');
    const noResults = document.getElementById('no-results');
    const resetFilters = document.getElementById('reset-filters');
    const tooltip = document.getElementById('mobile-tooltip');

    let activeFilters = {};

    menuToggle.addEventListener('click', (e) => {
      e.stopPropagation();
      sidebar.classList.toggle('active');
    });

    document.querySelectorAll('nav a, nav span.filter').forEach(element => {
      element.addEventListener('click', (e) => {
        if (window.innerWidth <= 768) {
          sidebar.classList.remove('active');
        }
      });
    });

    document.querySelectorAll('.filter').forEach(filter => {
      filter.addEventListener('click', (e) => {
        e.stopPropagation();
        const filterType = filter.dataset.filter;
        const filterValue = filter.dataset.value;

        if (activeFilters[filterType] === filterValue) {
          delete activeFilters[filterType];
          filter.classList.remove('active');
        } else {
          activeFilters[filterType] = filterValue;
          document.querySelectorAll(`.filter[data-filter="${filterType}"]`).forEach(f => f.classList.remove('active'));
          filter.classList.add('active');
        }

        let hasVisible = false;
        document.querySelectorAll('.product-card').forEach(card => {
          let show = true;
          Object.keys(activeFilters).forEach(type => {
            const normalizedType = type.replace('precio-rango', 'precioRango');
            const cardValue = card.dataset[normalizedType];
            if (cardValue !== activeFilters[type]) {
              show = false;
            }
          });
          if (show) {
            card.classList.remove('hidden');
            hasVisible = true;
          } else {
            card.classList.add('hidden');
          }
        });
        noResults.style.display = hasVisible ? 'none' : 'block';
      });
    });

    resetFilters.addEventListener('click', (e) => {
      e.stopPropagation();
      activeFilters = {};
      document.querySelectorAll('.product-card').forEach(card => {
        card.classList.remove('hidden');
      });
      document.querySelectorAll('.filter').forEach(f => f.classList.remove('active'));
      noResults.style.display = 'none';
    });

    document.querySelectorAll('.product-card').forEach(card => {
      card.addEventListener('click', (e) => {
        if (window.innerWidth <= 768) {
          if (e.target.tagName === 'A' || e.target.closest('a')) {
            return;
          }
          e.stopPropagation();
          if (card.classList.contains('show-overlay')) {
            card.classList.remove('show-overlay');
          } else {
            document.querySelectorAll('.product-card').forEach(otherCard => {
              otherCard.classList.remove('show-overlay');
            });
            card.classList.add('show-overlay');
          }
        }
      });
    });

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

    if (window.innerWidth <= 768 && !localStorage.getItem('tooltipShown')) {
      tooltip.style.display = 'block';
      setTimeout(() => {
        tooltip.style.display = 'none';
        localStorage.setItem('tooltipShown', 'true');
      }, 5000);
      document.addEventListener('click', () => {
        tooltip.style.display = 'none';
        localStorage.setItem('tooltipShown', 'true');
      }, { once: true });
    }
  });
</script>
</body>
</html>

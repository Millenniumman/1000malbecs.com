<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Vinos Malbec - 1000malbecs</title>
  <!-- Incluir FontAwesome para los íconos -->
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

    /* Estilos de la barra de navegación vertical */
    nav {
      width: 300px;
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

    /* Contenedor principal para la lista de productos */
    .main-content {
      margin-left: 320px;
      width: calc(100% - 320px);
      z-index: 1;
    }

    /* Estilos para la lista de productos */
    .product-list {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 20px;
      padding: 20px 0;
    }
    .product-item {
      border: 1px solid #ddd;
      border-radius: 10px;
      background-color: #fff;
      box-shadow: 0 2px 5px rgba(0,0,0,0.1);
      padding: 15px;
      text-align: center;
      position: relative;
      transition: transform 0.2s;
    }
    .product-item:hover {
      transform: scale(1.05);
    }
    .product-item.hidden {
      display: none;
    }
    .product-item a {
      text-decoration: none;
      color: inherit;
      display: block;
    }
    .product-item img {
      width: 100px;
      height: auto;
      object-fit: contain;
      margin-bottom: 10px;
    }
    .product-item h3 {
      font-size: 1.2em;
      margin: 0 0 10px 0;
      color: #333;
    }
    .product-item p.price {
      font-weight: bold;
      color: #4A0D29;
      margin: 0;
    }
    /* Tooltip para la descripción */
    .product-item .description {
      display: none;
      position: absolute;
      top: 100%;
      left: 50%;
      transform: translateX(-50%);
      background-color: #333;
      color: #fff;
      padding: 10px;
      border-radius: 5px;
      width: 200px;
      z-index: 10;
      font-size: 0.9em;
      box-shadow: 0 2px 5px rgba(0,0,0,0.2);
    }
    .product-item:hover .description {
      display: block;
    }

    /* Estilos para el botón de hamburguesa */
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

    /* Media query para pantallas pequeñas */
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
      .product-list {
        grid-template-columns: 1fr;
        gap: 15px;
      }
      .product-item img {
        width: 80px;
      }
      .product-item h3 {
        font-size: 1em;
      }
      .product-item .description {
        display: none; /* Ocultar tooltip en móvil */
      }
    }
  </style>
</head>
<body>

  <!-- Botón de hamburguesa para pantallas pequeñas -->
  <button id="menu-toggle">☰</button>

  <!-- Barra de navegación vertical -->
  <nav id="sidebar">
    <div class="logo-container">
      <a href="/" title="Volver al inicio">
        <img src="https://github.com/user-attachments/assets/2e1ec570-c588-4e9b-bb54-3371487cbada" alt="Logo 1000malbecs">
      </a>
    </div>
    <h2>Categorías</h2>
    <details>
      <summary><i class="fas fa-map-marker-alt"></i> Región</summary>
      <ul>
        <li><span class="filter" data-filter="region" data-value="Valle de Uco, Mendoza">Valle de Uco, Mendoza</span>
          <ul>
            <li><strong>Bodega</strong>
              <ul>
                <li><span class="filter" data-filter="bodega" data-value="Mauricio Lorca Bodega y Viñedos">Mauricio Lorca Bodega</span>
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
                            <li><a href="zapam-zucum-organic-malbec-2022.html">Zapam Zucum - Organic 2022</a></li>
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
        <li><span class="filter" data-filter="region" data-value="Luján de Cuyo, Mendoza">Luján de Cuyo, Mendoza</span>
          <ul>
            <li><strong>Bodega</strong>
              <ul>
                <li><span class="filter" data-filter="bodega" data-value="Enrique Foster Bodega">Enrique Foster Bodega</span>
                  <ul>
                    <li><strong>Tipo</strong>
                      <ul>
                        <li><span class="filter" data-filter="tipo" data-value="Espumante">Espumante</span>
                          <ul>
                            <li><a href="lois-sparkling-malbec-2021.html">Lois - Sparkling Malbec 2021</a></li>
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
      <summary><i class="fas fa-dollar-sign"></i> Rango de Precio</summary>
      <ul>
        <li><span class="filter" data-filter="precio-rango" data-value="Económico">Económico (< 10 €)</span>
          <ul>
            <li><a href="tematico-malbec-2023.html">Temático - Malbec 2023</a></li>
          </ul>
        </li>
        <li><span class="filter" data-filter="precio-rango" data-value="Medio">Medio (10 € - 20 €)</span>
          <ul>
            <li><a href="zapam-zucum-organic-malbec-2022.html">Zapam Zucum - Organic 2022</a></li>
            <li><a href="fantasia-malbec-2023.html">Fantasía - Malbec 2023</a></li>
            <li><a href="lois-sparkling-malbec-2021.html">Lois - Sparkling Malbec 2021</a></li>
          </ul>
        </li>
        <li><span class="filter" data-filter="precio-rango" data-value="Premium">Premium (> 20 €)</span>
          <ul>
            <li><a href="gran-poetico-malbec-2013.html">Gran Poético - Malbec 2013</a></li>
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
          </ul>
        </li>
        <li><span class="filter" data-filter="anada" data-value="2022">2022</span>
          <ul>
            <li><a href="zapam-zucum-organic-malbec-2022.html">Zapam Zucum - Organic 2022</a></li>
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

  <!-- Contenido principal (home con lista de productos) -->
  <div class="main-content">
    <h1 style="font-size: 1.8em; color: #333; margin-bottom: 20px;">Nuestros Vinos Malbec</h1>
    <div class="product-list">
      <!-- Temático - Malbec 2023 -->
      <div class="product-item" id="tematico-malbec-2023" data-region="Valle de Uco, Mendoza" data-bodega="Mauricio Lorca Bodega y Viñedos" data-tipo="Estándar" data-anada="2023" data-precio="8.5" data-precio-rango="Económico">
        <a href="tematico-malbec-2023.html">
          <img src="https://www.vino-argentino.de/storage/images/image?remote=https%3A%2F%2Fwww.vino-argentino.de%2FWebRoot%2FStore12%2FShops%2F242730%2F5F95%2FF129%2FB710%2FDC62%2F6489%2F0A0C%2F6D0F%2F0CFA%2FTematico-Malbec.jpg&shop=242730&width=512&height=2560" alt="Temático - Malbec 2023" onerror="this.src='https://via.placeholder.com/100x300?text=Imagen+No+Disponible';">
          <h3>Temático - Malbec 2023</h3>
          <p class="price">8.5 €</p>
          <span class="description">Un Malbec joven de expresión frutal y fresca, ideal para consumo diario.</span>
        </a>
      </div>
      <!-- Zapam Zucum - Organic Malbec 2022 -->
      <div class="product-item" id="zapam-zucum-organic-malbec-2022" data-region="Valle de Uco, Mendoza" data-bodega="Mauricio Lorca Bodega y Viñedos" data-tipo="Orgánico" data-anada="2022" data-precio="11" data-precio-rango="Medio">
        <a href="zapam-zucum-organic-malbec-2022.html">
          <img src="https://www.vino-argentino.de/storage/images/image?remote=https%3A%2F%2Fwww.vino-argentino.de%2FWebRoot%2FStore12%2FShops%2F242730%2F659A%2FA014%2F056E%2F240B%2FBAD1%2F0A0C%2F6D0D%2F68F1%2FZapamZucum.png&shop=242730" alt="Zapam Zucum - Organic Malbec 2022" onerror="this.src='https://via.placeholder.com/100x300?text=Imagen+No+Disponible';">
          <h3>Zapam Zucum - Organic Malbec 2022</h3>
          <p class="price">11 €</p>
          <span class="description">Malbec orgánico que refleja el terruño con pureza y elegancia.</span>
        </a>
      </div>
      <!-- Fantasía - Malbec 2023 -->
      <div class="product-item" id="fantasia-malbec-2023" data-region="Valle de Uco, Mendoza" data-bodega="Mauricio Lorca Bodega y Viñedos" data-tipo="Estándar" data-anada="2023" data-precio="11" data-precio-rango="Medio">
        <a href="fantasia-malbec-2023.html">
          <img src="https://www.vino-argentino.de/storage/images/image?remote=https%3A%2F%2Fwww.vino-argentino.de%2FWebRoot%2FStore12%2FShops%2F242730%2FProducts%2Ffanmal%2FML-FantasiaMalbec.png&shop=242730&width=304&height=2560" alt="Fantasía - Malbec 2023" onerror="this.src='https://via.placeholder.com/100x300?text=Imagen+No+Disponible';">
          <h3>Fantasía - Malbec 2023</h3>
          <p class="price">11 €</p>
          <span class="description">Vino de corte artístico, con carácter vivaz y aromas expresivos.</span>
        </a>
      </div>
      <!-- Gran Poético - Malbec 2013 -->
      <div class="product-item" id="gran-poetico-malbec-2013" data-region="Valle de Uco, Mendoza" data-bodega="Mauricio Lorca Bodega y Viñedos" data-tipo="Estándar" data-anada="2013" data-precio="39" data-precio-rango="Premium">
        <a href="gran-poetico-malbec-2013.html">
          <img src="https://images.vivino.com/thumbs/rpBQXFJoQA6blGvfxBUCvA_pb_600x600.png" alt="Gran Poético - Malbec 2013" onerror="this.src='https://via.placeholder.com/100x300?text=Imagen+No+Disponible';">
          <h3>Gran Poético - Malbec 2013</h3>
          <p class="price">39 €</p>
          <span class="description">Vino ícono de autor, con paso por barrica y evolución en botella.</span>
        </a>
      </div>
      <!-- Lois - Sparkling Malbec 2021 -->
      <div class="product-item" id="lois-sparkling-malbec-2021" data-region="Luján de Cuyo, Mendoza" data-bodega="Enrique Foster Bodega" data-tipo="Espumante" data-anada="2021" data-precio="15" data-precio-rango="Medio">
        <a href="lois-sparkling-malbec-2021.html">
          <img src="https://www.vino-argentino.de/storage/images/image?remote=https%3A%2F%2Fwww.vino-argentino.de%2FWebRoot%2FStore12%2FShops%2F242730%2F50A5%2FFAC5%2F6F7E%2F6D14%2F85F8%2FC0A8%2F2936%2F8970%2FEF-LOIS-ROSE-BOTELLA-VICTORIA.png&shop=242730" alt="Lois - Sparkling Malbec 2021" onerror="this.src='https://via.placeholder.com/100x300?text=Imagen+No+Disponible';">
          <h3>Lois - Sparkling Malbec 2021</h3>
          <p class="price">15 €</p>
          <span class="description">Malbec rosado espumante de método charmat, vibrante y aromático.</span>
        </a>
      </div>
    </div>
  </div>

  <!-- JavaScript para las funcionalidades -->
  <script>
    // Botón de hamburguesa para pantallas pequeñas
    const menuToggle = document.getElementById('menu-toggle');
    const sidebar = document.getElementById('sidebar');

    menuToggle.addEventListener('click', () => {
      sidebar.classList.toggle('active');
    });

    // Cerrar el menú al hacer clic en un enlace o filtro (en móviles)
    document.querySelectorAll('nav a, nav span.filter').forEach(element => {
      element.addEventListener('click', () => {
        if (window.innerWidth <= 768) {
          sidebar.classList.remove('active');
        }
      });
    });

    // Filtrado dinámico
    const filters = {
      region: null,
      bodega: null,
      tipo: null,
      anada: null,
      'precio-rango': null
    };

    document.querySelectorAll('nav span.filter').forEach(filterElement => {
      filterElement.addEventListener('click', function() {
        const filterType = this.getAttribute('data-filter');
        const filterValue = this.getAttribute('data-value');

        // Actualizar el filtro seleccionado
        filters[filterType] = filterValue;

        // Filtrar los productos
        document.querySelectorAll('.product-item').forEach(item => {
          let matches = true;

          // Verificar cada criterio de filtro
          for (const [type, value] of Object.entries(filters)) {
            if (value && item.getAttribute(`data-${type}`) !== value) {
              matches = false;
              break;
            }
          }

          // Mostrar u ocultar el producto según los filtros
          item.classList.toggle('hidden', !matches);
        });
      });
    });

    // Resetear filtros al hacer clic en una categoría principal
    document.querySelectorAll('nav summary').forEach(summary => {
      summary.addEventListener('click', () => {
        Object.keys(filters).forEach(key => filters[key] = null);
        document.querySelectorAll('.product-item').forEach(item => {
          item.classList.remove('hidden');
        });
      });
    });
  </script>
</body>
</html>

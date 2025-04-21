
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
      width: 250px;
      background-color: #4a2c5e; /* Color morado oscuro para combinar con el tema de vinos */
      color: #f5e6ff; /* Texto en un tono claro para contraste */
      height: 100vh;
      position: fixed;
      top: 0;
      left: 0;
      padding: 20px;
      overflow-y: auto;
      box-shadow: 2px 0 5px rgba(0,0,0,0.1);
    }
    nav h2 {
      margin: 0 0 20px 0;
      font-size: 1.5em;
      color: #f5e6ff;
      text-align: center;
    }
    nav details {
      margin-bottom: 10px;
    }
    nav summary {
      cursor: pointer;
      padding: 10px;
      background-color: #5d3a76; /* Tono más claro para el fondo de las categorías */
      border-radius: 5px;
      font-weight: bold;
      display: flex;
      align-items: center;
    }
    nav summary i {
      margin-right: 8px;
    }
    nav summary:hover {
      background-color: #6b4685; /* Efecto hover más claro */
    }
    nav ul {
      list-style: none;
      padding: 0 0 0 10px;
      margin: 0;
    }
    nav li {
      margin: 5px 0;
    }
    nav ul ul {
      padding-left: 15px;
    }
    nav a, nav span.filter {
      color: #f5e6ff;
      text-decoration: none;
      font-size: 0.95em;
      cursor: pointer;
    }
    nav a:hover, nav span.filter:hover {
      color: #d4a5ff; /* Color más claro para el hover */
      text-decoration: underline;
    }

    /* Contenedor principal para las tarjetas */
    .main-content {
      margin-left: 270px;
      width: calc(100% - 270px);
    }

    /* Estilos de las tarjetas */
    .card {
      border: 1px solid #ddd;
      border-radius: 10px;
      box-shadow: 0 2px 5px rgba(0,0,0,0.1);
      margin-bottom: 30px;
      background-color: #fff;
      position: relative;
      padding: 20px;
      display: block; /* Por defecto visible */
    }
    .card.hidden {
      display: none; /* Para el filtrado dinámico */
    }
    .logo {
      position: absolute;
      top: 10px;
      left: 10px;
      width: 100px;
      height: auto;
    }
    .card-content {
      display: flex;
      align-items: flex-start;
      margin-top: 60px;
    }
    .bottle-cell {
      flex: 0 0 auto;
      padding: 10px;
      text-align: center;
    }
    .text-cell {
      flex: 1;
      padding: 10px;
    }
    .bottle {
      width: 200px;
      height: auto;
      max-width: 100%;
      object-fit: contain;
    }
    .vino {
      font-size: 1.5em;
      margin: 0 0 10px 0;
    }
    .bodega, .precio, .region, .altura, .anada {
      font-weight: bold;
      margin: 5px 0;
    }
    .descripcion, .notas {
      margin: 10px 0;
    }

    /* Estilos para el botón de hamburguesa (pantallas pequeñas) */
    #menu-toggle {
      display: none;
      position: fixed;
      top: 20px;
      left: 20px;
      font-size: 1.5em;
      background-color: #4a2c5e;
      color: #f5e6ff;
      border: none;
      padding: 10px;
      border-radius: 5px;
      cursor: pointer;
      z-index: 1000;
    }
    #menu-toggle:hover {
      background-color: #5d3a76;
    }

    /* Media query para pantallas pequeñas */
    @media (max-width: 768px) {
      nav {
        width: 200px;
        left: -220px;
        transition: left 0.3s ease;
      }
      nav.active {
        left: 0;
      }
      .main-content {
        margin-left: 0;
        width: 100%;
      }
      #menu-toggle {
        display: block;
      }
      .card-content {
        flex-direction: column;
        margin-top: 80px;
      }
      .bottle-cell, .text-cell {
        width: 100%;
        padding: 5px;
      }
      .bottle {
        width: 150px;
        margin: 0 auto;
        display: block;
      }
      .logo {
        width: 80px;
      }
    }
  </style>
</head>
<body>

  <!-- Botón de hamburguesa para pantallas pequeñas -->
  <button id="menu-toggle">☰</button>

  <!-- Barra de navegación vertical -->
  <nav id="sidebar">
    <h2>Categorías</h2>
    <details open>
      <summary><i class="fas fa-map-marker-alt"></i> Región</summary>
      <ul>
        <li><span class="filter" data-filter="region" data-value="Valle de Uco, Mendoza">Valle de Uco, Mendoza</span>
          <ul>
            <li><strong>Bodega</strong>
              <ul>
                <li><span class="filter" data-filter="bodega" data-value="Mauricio Lorca Bodega y Viñedos">Mauricio Lorca Bodega y Viñedos</span>
                  <ul>
                    <li><strong>Tipo</strong>
                      <ul>
                        <li><span class="filter" data-filter="tipo" data-value="Estándar">Estándar</span>
                          <ul>
                            <li><a href="#tematico-malbec-2023">Temático - Malbec 2023</a> (8.5 €)</li>
                            <li><a href="#fantasia-malbec-2023">Fantasía - Malbec 2023</a> (11 €)</li>
                            <li><a href="#gran-poetico-malbec-2013">Gran Poético - Malbec 2013</a> (39 €)</li>
                          </ul>
                        </li>
                        <li><span class="filter" data-filter="tipo" data-value="Orgánico">Orgánico</span>
                          <ul>
                            <li><a href="#zapam-zucum-organic-malbec-2022">Zapam Zucum - Organic Malbec 2022</a> (11 €)</li>
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
                            <li><a href="#lois-sparkling-malbec-2021">Lois - Sparkling Malbec 2021</a> (15 €)</li>
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
            <li><a href="#tematico-malbec-2023">Temático - Malbec 2023</a> (8.5 €)</li>
          </ul>
        </li>
        <li><span class="filter" data-filter="precio-rango" data-value="Medio">Medio (10 € - 20 €)</span>
          <ul>
            <li><a href="#zapam-zucum-organic-malbec-2022">Zapam Zucum - Organic Malbec 2022</a> (11 €)</li>
            <li><a href="#fantasia-malbec-2023">Fantasía - Malbec 2023</a> (11 €)</li>
            <li><a href="#lois-sparkling-malbec-2021">Lois - Sparkling Malbec 2021</a> (15 €)</li>
          </ul>
        </li>
        <li><span class="filter" data-filter="precio-rango" data-value="Premium">Premium (> 20 €)</span>
          <ul>
            <li><a href="#gran-poetico-malbec-2013">Gran Poético - Malbec 2013</a> (39 €)</li>
          </ul>
        </li>
      </ul>
    </details>
    <details>
      <summary><i class="fas fa-calendar-alt"></i> Añada</summary>
      <ul>
        <li><span class="filter" data-filter="anada" data-value="2023">2023</span>
          <ul>
            <li><a href="#tematico-malbec-2023">Temático - Malbec 2023</a></li>
            <li><a href="#fantasia-malbec-2023">Fantasía - Malbec 2023</a></li>
          </ul>
        </li>
        <li><span class="filter" data-filter="anada" data-value="2022">2022</span>
          <ul>
            <li><a href="#zapam-zucum-organic-malbec-2022">Zapam Zucum - Organic Malbec 2022</a></li>
          </ul>
        </li>
        <li><span class="filter" data-filter="anada" data-value="2021">2021</span>
          <ul>
            <li><a href="#lois-sparkling-malbec-2021">Lois - Sparkling Malbec 2021</a></li>
          </ul>
        </li>
        <li><span class="filter" data-filter="anada" data-value="2013">2013</span>
          <ul>
            <li><a href="#gran-poetico-malbec-2013">Gran Poético - Malbec 2013</a></li>
          </ul>
        </li>
      </ul>
    </details>
  </nav>

  <!-- Contenido principal (tarjetas de vinos) -->
  <div class="main-content">
    <div class="card" id="tematico-malbec-2023" data-region="Valle de Uco, Mendoza" data-bodega="Mauricio Lorca Bodega y Viñedos" data-tipo="Estándar" data-anada="2023" data-precio="8.5" data-precio-rango="Económico">
      <img class="logo" src="https://github.com/user-attachments/assets/2e1ec570-c588-4e9b-bb54-3371487cbada" alt="Logo 1000malbecs">
      <div class="card-content">
        <div class="bottle-cell">
          <img class="bottle" src="https://www.vino-argentino.de/storage/images/image?remote=https%3A%2F%2Fwww.vino-argentino.de%2FWebRoot%2FStore12%2FShops%2F242730%2F5F95%2FF129%2FB710%2FDC62%2F6489%2F0A0C%2F6D0F%2F0CFA%2FTematico-Malbec.jpg&shop=242730&width=512&height=2560" alt="Botella de Temático - Malbec 2023" onerror="this.src='https://via.placeholder.com/200x600?text=Imagen+No+Disponible';">
        </div>
        <div class="text-cell">
          <h2 class="vino">Temático - Malbec 2023</h2>
          <p class="bodega">Mauricio Lorca Bodega y Viñedos</p>
          <p class="anada">Añada: 2023</p>
          <p class="precio">Precio UVP: 8.5 €</p>
          <p class="region">Región: Valle de Uco, Mendoza</p>
          <p class="altura">Altura: 1100 msnm</p>
          <p class="descripcion">Un Malbec joven de expresión frutal y fresca, ideal para consumo diario.</p>
          <p class="notas">Notas de cata: Fruta roja madura, ciruela, taninos suaves. Ideal con pastas y carnes blancas.</p>
        </div>
      </div>
    </div>

    <div class="card" id="zapam-zucum-organic-malbec-2022" data-region="Valle de Uco, Mendoza" data-bodega="Mauricio Lorca Bodega y Viñedos" data-tipo="Orgánico" data-anada="2022" data-precio="11" data-precio-rango="Medio">
      <img class="logo" src="https://github.com/user-attachments/assets/2e1ec570-c588-4e9b-bb54-3371487cbada" alt="Logo 1000malbecs">
      <div class="card-content">
        <div class="bottle-cell">
          <img class="bottle" src="https://www.vino-argentino.de/storage/images/image?remote=https%3A%2F%2Fwww.vino-argentino.de%2FWebRoot%2FStore12%2FShops%2F242730%2F659A%2FA014%2F056E%2F240B%2FBAD1%2F0A0C%2F6D0D%2F68F1%2FZapamZucum.png&shop=242730" alt="Botella de Zapam Zucum - Organic Malbec 2022" onerror="this.src='https://via.placeholder.com/200x600?text=Imagen+No+Disponible';">
        </div>
        <div class="text-cell">
          <h2 class="vino">Zapam Zucum - Organic Malbec 2022</h2>
          <p class="bodega">Mauricio Lorca Bodega y Viñedos</p>
          <p class="anada">Añada: 2022</p>
          <p class="precio">Precio UVP: 11 €</p>
          <p class="region">Región: Valle de Uco, Mendoza</p>
          <p class="altura">Altura: 1100 msnm</p>
          <p class="descripcion">Malbec orgánico que refleja el terruño con pureza y elegancia.</p>
          <p class="notas">Notas de cata: Aromas de mora y cassis, con notas minerales. Perfecto con vegetales grillados o carnes.</p>
        </div>
      </div>
    </div>

    <div class="card" id="fantasia-malbec-2023" data-region="Valle de Uco, Mendoza" data-bodega="Mauricio Lorca Bodega y Viñedos" data-tipo="Estándar" data-anada="2023" data-precio="11" data-precio-rango="Medio">
      <img class="logo" src="https://github.com/user-attachments/assets/2e1ec570-c588-4e9b-bb54-3371487cbada" alt="Logo 1000malbecs">
      <div class="card-content">
        <div class="bottle-cell">
          <img class="bottle" src="https://www.vino-argentino.de/storage/images/image?remote=https%3A%2F%2Fwww.vino-argentino.de%2FWebRoot%2FStore12%2FShops%2F242730%2FProducts%2Ffanmal%2FML-FantasiaMalbec.png&shop=242730&width=304&height=2560" alt="Botella de Fantasía - Malbec 2023" onerror="this.src='https://via.placeholder.com/200x600?text=Imagen+No+Disponible';">
        </div>
        <div class="text-cell">
          <h2 class="vino">Fantasía - Malbec 2023</h2>
          <p class="bodega">Mauricio Lorca Bodega y Viñedos</p>
          <p class="anada">Añada: 2023</p>
          <p class="precio">Precio UVP: 11 €</p>
          <p class="region">Región: Valle de Uco, Mendoza</p>
          <p class="altura">Altura: 1100 msnm</p>
          <p class="descripcion">Vino de corte artístico, con carácter vivaz y aromas expresivos.</p>
          <p class="notas">Notas de cata: Aromas a frutos negros, taninos redondos. Va bien con empanadas o quesos semiduros.</p>
        </div>
      </div>
    </div>

    <div class="card" id="gran-poetico-malbec-2013" data-region="Valle de Uco, Mendoza" data-bodega="Mauricio Lorca Bodega y Viñedos" data-tipo="Estándar" data-anada="2013" data-precio="39" data-precio-rango="Premium">
      <img class="logo" src="https://github.com/user-attachments/assets/2e1ec570-c588-4e9b-bb54-3371487cbada" alt="Logo 1000malbecs">
      <div class="card-content">
        <div class="bottle-cell">
          <img class="bottle" src="https://images.vivino.com/thumbs/rpBQXFJoQA6blGvfxBUCvA_pb_600x600.png" alt="Botella de Gran Poético - Malbec 2013" onerror="this.src='https://via.placeholder.com/200x600?text=Imagen+No+Disponible';">
        </div>
        <div class="text-cell">
          <h2 class="vino">Gran Poético - Malbec 2013</h2>
          <p class="bodega">Mauricio Lorca Bodega y Viñedos</p>
          <p class="anada">Añada: 2013</p>
          <p class="precio">Precio UVP: 39 €</p>
          <p class="region">Región: Valle de Uco, Mendoza</p>
          <p class="altura">Altura: 1100 msnm</p>
          <p class="descripcion">Vino ícono de autor, con paso por barrica y evolución en botella.</p>
          <p class="notas">Notas de cata: Notas a cuero, ciruela pasa y especias. Acompaña carnes asadas, cordero o pastas con salsas intensas.</p>
        </div>
      </div>
    </div>

    <div class="card" id="lois-sparkling-malbec-2021" data-region="Luján de Cuyo, Mendoza" data-bodega="Enrique Foster Bodega" data-tipo="Espumante" data-anada="2021" data-precio="15" data-precio-rango="Medio">
      <img class="logo" src="https://github.com/user-attachments/assets/2e1ec570-c588-4e9b-bb54-3371487cbada" alt="Logo 1000malbecs">
      <div class="card-content">
        <div class="bottle-cell">
          <img class="bottle" src="https://www.vino-argentino.de/storage/images/image?remote=https%3A%2F%2Fwww.vino-argentino.de%2FWebRoot%2FStore12%2FShops%2F242730%2F50A5%2FFAC5%2F6F7E%2F6D14%2F85F8%2FC0A8%2F2936%2F8970%2FEF-LOIS-ROSE-BOTELLA-VICTORIA.png&shop=242730" alt="Botella de Lois - Sparkling Malbec 2021" onerror="this.src='https://via.placeholder.com/200x600?text=Imagen+No+Disponible';">
        </div>
        <div class="text-cell">
          <h2 class="vino">Lois - Sparkling Malbec 2021</h2>
          <p class="bodega">Enrique Foster Bodega</p>
          <p class="anada">Añada: 2021</p>
          <p class="precio">Precio UVP: 15 €</p>
          <p class="region">Región: Luján de Cuyo, Mendoza</p>
          <p class="altura">Altura: 950 msnm</p>
          <p class="descripcion">Malbec rosado espumante de método charmat, vibrante y aromático.</p>
          <p class="notas">Notas de cata: Refrescante, con notas de frutilla y cereza. Ideal como aperitivo o con sushi y ensaladas.</p>
        </div>
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

    // Scroll suave para los enlaces
    document.querySelectorAll('nav a').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: 'smooth' });
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

        // Filtrar las tarjetas
        document.querySelectorAll('.card').forEach(card => {
          let matches = true;

          // Verificar cada criterio de filtro
          for (const [type, value] of Object.entries(filters)) {
            if (value && card.getAttribute(`data-${type}`) !== value) {
              matches = false;
              break;
            }
          }

          // Mostrar u ocultar la tarjeta según los filtros
          card.classList.toggle('hidden', !matches);
        });
      });
    });

    // Resetear filtros al hacer clic en una categoría principal (opcional)
    document.querySelectorAll('nav summary').forEach(summary => {
      summary.addEventListener('click', () => {
        // Resetear filtros (opcional, puedes quitar esto si no quieres resetear)
        Object.keys(filters).forEach(key => filters[key] = null);
        document.querySelectorAll('.card').forEach(card => {
          card.classList.remove('hidden');
        });
      });
    });
  </script>
</body>
</html>

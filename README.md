<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Vinos Malbec - 1000malbecs</title>
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
      background-color: #2c3e50;
      color: #ecf0f1;
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
      color: #ecf0f1;
      text-align: center;
    }
    nav details {
      margin-bottom: 10px;
    }
    nav summary {
      cursor: pointer;
      padding: 10px;
      background-color: #34495e;
      border-radius: 5px;
      font-weight: bold;
    }
    nav summary:hover {
      background-color: #3e5c76;
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
    nav a {
      color: #ecf0f1;
      text-decoration: none;
      font-size: 0.95em;
    }
    nav a:hover {
      color: #3498db;
      text-decoration: underline;
    }

    /* Contenedor principal para las tarjetas */
    .main-content {
      margin-left: 270px; /* Espacio para la barra de navegación */
      width: calc(100% - 270px);
    }

    /* Estilos de las tarjetas (como en el código anterior) */
    .card {
      border: 1px solid #ddd;
      border-radius: 10px;
      box-shadow: 0 2px 5px rgba(0,0,0,0.1);
      margin-bottom: 30px;
      background-color: #fff;
      position: relative;
      padding: 20px;
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
      background-color: #2c3e50;
      color: #ecf0f1;
      border: none;
      padding: 10px;
      border-radius: 5px;
      cursor: pointer;
      z-index: 1000;
    }
    #menu-toggle:hover {
      background-color: #34495e;
    }

    /* Media query para pantallas pequeñas */
    @media (max-width: 768px) {
      nav {
        width: 200px;
        left: -220px; /* Escondido por defecto */
        transition: left 0.3s ease;
      }
      nav.active {
        left: 0; /* Mostrar cuando está activo */
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
      <summary>Región</summary>
      <ul>
        <li>Valle de Uco, Mendoza
          <ul>
            <li><strong>Bodega</strong>
              <ul>
                <li>Mauricio Lorca Bodega y Viñedos
                  <ul>
                    <li><strong>Tipo</strong>
                      <ul>
                        <li>Estándar
                          <ul>
                            <li><a href="#tematico-malbec-2023">Temático - Malbec 2023</a> (8.5 €)</li>
                            <li><a href="#fantasia-malbec-2023">Fantasía - Malbec 2023</a> (11 €)</li>
                            <li><a href="#gran-poetico-malbec-2013">Gran Poético - Malbec 2013</a> (39 €)</li>
                          </ul>
                        </li>
                        <li>Orgánico
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
        <li>Luján de Cuyo, Mendoza
          <ul>
            <li><strong>Bodega</strong>
              <ul>
                <li>Enrique Foster Bodega
                  <ul>
                    <li><strong>Tipo</strong>
                      <ul>
                        <li>Espumante
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
      <summary>Rango de Precio</summary>
      <ul>
        <li>Económico (< 10 €)
          <ul>
            <li><a href="#tematico-malbec-2023">Temático - Malbec 2023</a> (8.5 €)</li>
          </ul>
        </li>
        <li>Medio (10 € - 20 €)
          <ul>
            <li><a href="#zapam-zucum-organic-malbec-2022">Zapam Zucum - Organic Malbec 2022</a> (11 €)</li>
            <li><a href="#fantasia-malbec-2023">Fantasía - Malbec 2023</a> (11 €)</li>
            <li><a href="#lois-sparkling-malbec-2021">Lois - Sparkling Malbec 2021</a> (15 €)</li>
          </ul>
        </li>
        <li>Premium (> 20 €)
          <ul>
            <li><a href="#gran-poetico-malbec-2013">Gran Poético - Malbec 2013</a> (39 €)</li>
          </ul>
        </li>
      </ul>
    </details>
    <details>
      <summary>Añada</summary>
      <ul>
        <li>2023
          <ul>
            <li><a href="#tematico-malbec-2023">Temático - Malbec 2023</a></li>
            <li><a href="#fantasia-malbec-2023">Fantasía - Malbec 2023</a></li>
          </ul>
        </li>
        <li>2022
          <ul>
            <li><a href="#zapam-zucum-organic-malbec-2022">Zapam Zucum - Organic Malbec 2022</a></li>
          </ul>
        </li>
        <li>2021
          <ul>
            <li><a href="#lois-sparkling-malbec-2021">Lois - Sparkling Malbec 2021</a></li>
          </ul>
        </li>
        <li>2013
          <ul>
            <li><a href="#gran-poetico-malbec-2013">Gran Poético - Malbec 2013</a></li>
          </ul>
        </li>
      </ul>
    </details>
  </nav>

  <!-- Contenido principal (tarjetas de vinos) -->
  <div class="main-content">
    <div class="card" id="tematico-malbec-2023">
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

    <div class="card" id="zapam-zucum-organic-malbec-2022">
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

    <div class="card" id="fantasia-malbec-2023">
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

    <div class="card" id="gran-poetico-malbec-2013">
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

    <div class="card" id="lois-sparkling-malbec-2021">
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

  <!-- JavaScript para el botón de hamburguesa -->
  <script>
    const menuToggle = document.getElementById('menu-toggle');
    const sidebar = document.getElementById('sidebar');

    menuToggle.addEventListener('click', () => {
      sidebar.classList.toggle('active');
    });

    // Cerrar el menú al hacer clic en un enlace (en móviles)
    document.querySelectorAll('nav a').forEach(link => {
      link.addEventListener('click', () => {
        if (window.innerWidth <= 768) {
          sidebar.classList.remove('active');
        }
      });
    });
  </script>
</body>
</html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Vinos Malbec - 1000malbecs</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      background-color: #fdfdfd;
      margin: 0;
      padding: 20px;
    }
    .card {
      border: 1px solid #ddd;
      border-radius: 10px;
      box-shadow: 0 2px 5px rgba(0,0,0,0.1);
      margin-bottom: 30px;
      background-color: #fff;
      position: relative;
      padding: 20px;
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
      margin-top: 60px; /* Reducido para que el logo no interfiera */
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
      width: 200px; /* Tamaño uniforme */
      height: auto; /* Mantiene la proporción */
      max-width: 50%;
      object-fit: contain; /* Evita deformaciones */
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

    /* Media query para pantallas pequeñas */
    @media (max-width: 600px) {
      .card-content {
        flex-direction: column;
        margin-top: 80px; /* Ajustado para móviles */
      }
      .bottle-cell, .text-cell {
        width: 100%;
        padding: 5px;
      }
      .bottle {
        width: 150px; /* Tamaño más pequeño en móviles */
        margin: 0 auto;
        display: block;
      }
      .logo {
        width: 80px; /* Logo más pequeño en móviles */
      }
    }
  </style>
</head>
<body>

  <!-- Vino 1 -->
  <div class="card">
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

  <!-- Vino 2 -->
  <div class="card">
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

  <!-- Vino 3 -->
  <div class="card">
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

  <!-- Vino 4 -->
  <div class="card">
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

  <!-- Vino 5 -->
  <div class="card">
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

</body>
</html>
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Vinos Malbec - 1000malbecs</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      background-color: #fdfdfd;
      margin: 0;
      padding: 20px;
    }
    /* Estilos para el árbol de categorías */
    .categories {
      margin-bottom: 40px;
      padding: 20px;
      background-color: #f9f9f9;
      border-radius: 8px;
      box-shadow: 0 1px 3px rgba(0,0,0,0.1);
    }
    .categories h2 {
      margin-top: 0;
      font-size: 1.8em;
      color: #333;
    }
    .categories ul {
      list-style: none;
      padding-left: 20px;
    }
    .categories li {
      margin: 5px 0;
      color: #555;
    }
    .categories ul ul {
      padding-left: 30px;
    }
    .categories a {
      color: #007bff;
      text-decoration: none;
    }
    .categories a:hover {
      text-decoration: underline;
    }

    /* Estilos de las tarjetas (como en el código corregido) */
    .card {
      border: 1px solid #ddd;
      border-radius: 10px;
      box-shadow: 0 2px 5px rgba(0,0,0,0.1);
      margin-bottom: 30px;
      background-color: #fff;
      position: relative;
      padding: 20px;
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
    @media (max-width: 600px) {
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

  <!-- Árbol de categorías -->
  <div class="categories">
    <h2>Categorías de Vinos Malbec</h2>
    <ul>
      <li><strong>Región</strong>
        <ul>
          <li>Valle de Uco, Mendoza
            <ul>
              <li><strong>Bodega</strong>
                <ul>
                  <li>Mauricio Lorca Bodega y Viñedos
                    <ul>
                      <li><strong>Tipo</strong>
                        <ul>
                          <li>Estándar
                            <ul>
                              <li><a href="#tematico-malbec-2023">Temático - Malbec 2023</a> (Añada: 2023, Precio: 8.5 €)</li>
                              <li><a href="#fantasia-malbec-2023">Fantasía - Malbec 2023</a> (Añada: 2023, Precio: 11 €)</li>
                              <li><a href="#gran-poetico-malbec-2013">Gran Poético - Malbec 2013</a> (Añada: 2013, Precio: 39 €)</li>
                            </ul>
                          </li>
                          <li>Orgánico
                            <ul>
                              <li><a href="#zapam-zucum-organic-malbec-2022">Zapam Zucum - Organic Malbec 2022</a> (Añada: 2022, Precio: 11 €)</li>
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
          <li>Luján de Cuyo, Mendoza
            <ul>
              <li><strong>Bodega</strong>
                <ul>
                  <li>Enrique Foster Bodega
                    <ul>
                      <li><strong>Tipo</strong>
                        <ul>
                          <li>Espumante
                            <ul>
                              <li><a href="#lois-sparkling-malbec-2021">Lois - Sparkling Malbec 2021</a> (Añada: 2021, Precio: 15 €)</li>
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
      <li><strong>Rango de Precio</strong>
        <ul>
          <li>Económico (&lt; 10 €)
            <ul>
              <li><a href="#tematico-malbec-2023">Temático - Malbec 2023</a> (8.5 €)</li>
            </ul>
          </li>
          <li>Medio (10 € - 20 €)
            <ul>
              <li><a href="#zapam-zucum-organic-malbec-2022">Zapam Zucum - Organic Malbec 2022</a> (11 €)</li>
              <li><a href="#fantasia-malbec-2023">Fantasía - Malbec 2023</a> (11 €)</li>
              <li><a href="#lois-sparkling-malbec-2021">Lois - Sparkling Malbec 2021</a> (15 €)</li>
            </ul>
          </li>
          <li>Premium (&gt; 20 €)
            <ul>
              <li><a href="#gran-poetico-malbec-2013">Gran Poético - Malbec 2013</a> (39 €)</li>
            </ul>
          </li>
        </ul>
      </li>
      <li><strong>Añada</strong>
        <ul>
          <li>2023
            <ul>
              <li><a href="#tematico-malbec-2023">Temático - Malbec 2023</a></li>
              <li><a href="#fantasia-malbec-2023">Fantasía - Malbec 2023</a></li>
            </ul>
          </li>
          <li>2022
            <ul>
              <li><a href="#zapam-zucum-organic-malbec-2022">Zapam Zucum - Organic Malbec 2022</a></li>
            </ul>
          </li>
          <li>2021
            <ul>
              <li><a href="#lois-sparkling-malbec-2021">Lois - Sparkling Malbec 2021</a></li>
            </ul>
          </li>
          <li>2013
            <ul>
              <li><a href="#gran-poetico-malbec-2013">Gran Poético - Malbec 2013</a></li>
            </ul>
          </li>
        </ul>
      </li>
    </ul>
  </div>

  <!-- Tarjetas de vinos con IDs para los enlaces -->
  <div class="card" id="tematico-malbec-2023">
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

  <div class="card" id="zapam-zucum-organic-malbec-2022">
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

  <div class="card" id="fantasia-malbec-2023">
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

  <div class="card" id="gran-poetico-malbec-2013">
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

  <div class="card" id="lois-sparkling-malbec-2021">
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

</body>
</html>

<!DOCTYPE html>
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
      opacity: 1; /* Show overlay on hover for desktop */
    }
    .product-card .overlay.active {
      opacity: 1; /* Show overlay when active (mobile click) */
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
      <a href="index.html" title="Volver al inicio">
        <img src="https://github.com/user-attachments/assets/2e1ec570-c588-4e9b-bb54-3371487cbada" alt="Logo 1000malbecs">
      </a>
    </div>
    <h2>Filtros</h2>
    <details>
      <summary><i class="fas fa-map-marker-alt"></i> Provincia</summary>
      <ul>
        <li><span class="filter" data-provincia="Mendoza">Mendoza</span></li>
        <li><span class="filter" data-provincia="Salta">Salta</span></li>
        <li><span class="filter" data-provincia="Patagonia">Patagonia</span></li>
      </ul>
    </details>
    <details>
      <summary><i class="fas fa-wine-bottle"></i> Región</summary>
      <ul>
        <li><span class="filter" data-region="Luján de Cuyo">Luján de Cuyo</span></li>
        <li><span class="filter" data-region="Valle de Uco">Valle de Uco</span></li>
        <li><span class="filter" data-region="Cafayate">Cafayate</span></li>
      </ul>
    </details>
    <details>
      <summary><i class="fas fa-mountain"></i> Altura</summary>
      <ul>
        <li><span class="filter" data-altura="1000-1200">1000-1200 m</span></li>
        <li><span class="filter" data-altura="1200-1500">1200-1500 m</span></li>
        <li><span class="filter" data-altura=">1500">>1500 m</span></li>
      </ul>
    </details>
  </nav>
  <div class="main-content">
    <h1 class="welcome-title">Bienvenidos a 1000 Malbecs, el sitio de todos los malbecs de Argentina desde la Patagonia hasta la Puna</h1>
    <button id="reset-filters">Limpiar Filtros</button>
    <div class="featured-products">
      <!-- Example product card -->
      <div class="product-card" data-provincia="Mendoza" data-region="Luján de Cuyo" data-altura="1000-1200">
        <img src="https://via.placeholder.com/150" alt="Producto 1">
        <i class="fas fa-wine-glass-alt info-icon"></i>
        <div class="overlay">
          <p>Nombre: Malbec Reserva</p>
          <p>Bodega: Catena Zapata</p>
          <p>Provincia: Mendoza</p>
          <p>Región: Luján de Cuyo</p>
          <p>Precio: $2500</p>
        </div>
        <h3>Malbec Reserva</h3>
        <p>$2500</p>
        <a href="#">Comprar</a>
      </div>
      <div class="product-card" data-provincia="Salta" data-region="Cafayate" data-altura=">1500">
        <img src="https://via.placeholder.com/150" alt="Producto 2">
        <i class="fas fa-wine-glass-alt info-icon"></i>
        <div class="overlay">
          <p>Nombre: Malbec Alto</p>
          <p>Bodega: Colomé</p>
          <p>Provincia: Salta</p>
          <p>Región: Cafayate</p>
          <p>Precio: $3200</p>
        </div>
        <h3>Malbec Alto</h3>
        <p>$3200</p>
        <a href="#">Comprar</a>
      </div>
      <div class="product-card" data-provincia="Patagonia" data-region="Río Negro" data-altura="1000-1200">
        <img src="https://via.placeholder.com/150" alt="Producto 3">
        <i class="fas fa-wine-glass-alt info-icon"></i>
        <div class="overlay">
          <p>Nombre: Malbec Patagónico</p>
          <p>Bodega: Bodega del Fin del Mundo</p>
          <p>Provincia: Patagonia</p>
          <p>Región: Río Negro</p>
          <p>Precio: $2800</p>
        </div>
        <h3>Malbec Patagónico</h3>
        <p>$2800</p>
        <a href="#">Comprar</a>
      </div>
      <!-- Add more product cards as needed -->
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

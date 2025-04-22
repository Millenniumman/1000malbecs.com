
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="Explora los vinos de Luján de Cuyo, Mendoza, de Enrique Foster Bodega en 1000malbecs.">
  <title>Vinos de Luján de Cuyo - 1000malbecs</title>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiQ==" crossorigin="anonymous" referrerpolicy="no-referrer" />
  <style>
    /* Mismo CSS que index.html */
  </style>
</head>
<body>
  <button id="menu-toggle">☰</button>
  <!-- Inserta la barra de navegación aquí -->
  <div class="main-content">
    <h1>Vinos de Luján de Cuyo</h1>
    <p>Descubre los elegantes Malbecs de Enrique Foster Bodega.</p>
    <div id="no-results" style="display: none;">
      No se encontraron productos que coincidan con los filtros seleccionados.
    </div>
    <div class="featured-products">
      <div class="product-card" data-provincia="Mendoza" data-region="Luján de Cuyo" data-bodega="Enrique Foster Bodega" data-tipo="Espumante" data-anada="2021" data-precio="15" data-precio-rango="Medio">
        <img src="https://via.placeholder.com/200x600?text=Lois+Sparkling+Malbec+2021" alt="Lois - Sparkling Malbec 2021">
        <h3>Lois - Sparkling Malbec 2021</h3>
        <p>€15</p>
        <a href="lois-sparkling-malbec-2021.html">Comprar</a>
      </div>
      <div class="product-card" data-provincia="Mendoza" data-region="Luján de Cuyo" data-bodega="Enrique Foster Bodega" data-tipo="Rosado" data-anada="2023" data-precio="11" data-precio-rango="Medio">
        <img src="https://via.placeholder.com/200x600?text=Pink+Malbec+Rosado+2023" alt="Pink - Malbec Rosado 2023">
        <h3>Pink - Malbec Rosado 2023</h3>
        <p>€11</p>
        <a href="pink-malbec-rosado-2023.html">Comprar</a>
      </div>
      <div class="product-card" data-provincia="Mendoza" data-region="Luján de Cuyo" data-bodega="Enrique Foster Bodega" data-tipo="Tinto" data-subtipo="Clásico" data-anada="2023" data-precio="11" data-precio-rango="Medio">
        <img src="https://via.placeholder.com/200x600?text=Ique+Malbec+2023" alt="Ique - Malbec 2023">
        <h3>Ique - Malbec 2023</h3>
        <p>€11</p>
        <a href="ique-malbec-2023.html">Comprar</a>
      </div>
      <div class="product-card" data-provincia="Mendoza" data-region="Luján de Cuyo" data-bodega="Enrique Foster Bodega" data-tipo="Tinto" data-subtipo="Clásico" data-anada="2023" data-precio="21" data-precio-rango="Premium">
        <img src="https://via.placeholder.com/200x600?text=Foster+Malbec+2023" alt="Foster - Malbec 2023">
        <h3>Foster - Malbec 2023</h3>
        <p>€21</p>
        <a href="foster-malbec-2023.html">Comprar</a>
      </div>
      <div class="product-card" data-provincia="Mendoza" data-region="Luján de Cuyo" data-bodega="Enrique Foster Bodega" data-tipo="Tinto" data-subtipo="Premium" data-anada="2023" data-precio="23" data-precio-rango="Premium">
        <img src="https://via.placeholder.com/200x600?text=Foster+Malbec+Los+Altepes+2023" alt="Foster - Malbec 'Los Altepes' 2023">
        <h3>Foster - Malbec 'Los Altepes' 2023</h3>
        <p>€23</p>
        <a href="foster-malbec-los-altepes-2023.html">Comprar</a>
      </div>
      <div class="product-card" data-provincia="Mendoza" data-region="Luján de Cuyo" data-bodega="Enrique Foster Bodega" data-tipo="Tinto" data-subtipo="Premium" data-anada="2023" data-precio="25" data-precio-rango="Premium">
        <img src="https://via.placeholder.com/200x600?text=Foster+Malbec+Los+Barrancos+2023" alt="Foster - Malbec 'Los Barrancos' 2023">
        <h3>Foster - Malbec 'Los Barrancos' 2023</h3>
        <p>€25</p>
        <a href="foster-malbec-los-barrancos-2023.html">Comprar</a>
      </div>
      <div class="product-card" data-provincia="Mendoza" data-region="Luján de Cuyo" data-bodega="Enrique Foster Bodega" data-tipo="Tinto" data-subtipo="Premium" data-anada="2023" data-precio="44" data-precio-rango="Premium">
        <img src="https://via.placeholder.com/200x600?text=Foster+Malbec+Limited+Edition+2023" alt="Foster - Malbec Limited Edition 2023">
        <h3>Foster - Malbec Limited Edition 2023</h3>
        <p>€44</p>
        <a href="foster-malbec-limited-edition-2023.html">Comprar</a>
      </div>
    </div>
  </div>
  <script>
    const menuToggle = document.getElementById('menu-toggle');
    const sidebar = document.getElementById('sidebar');
    const noResults = document.getElementById('no-results');
    menuToggle.addEventListener('click', () => {
      sidebar.classList.toggle('active');
    });
    document.querySelectorAll('nav a, nav span.filter').forEach(element => {
      element.addEventListener('click', () => {
        if (window.innerWidth <= 768) {
          sidebar.classList.remove('active');
        }
      });
    });
    document.querySelectorAll('.filter').forEach(filter => {
      filter.addEventListener('click', () => {
        const filterType = filter.dataset.filter;
        const filterValue = filter.dataset.value;
        let hasVisible = false;
        document.querySelectorAll('.product-card').forEach(card => {
          if (filterValue === 'all' || card.dataset[filterType] === filterValue) {
            card.classList.remove('hidden');
            hasVisible = true;
          } else {
            card.classList.add('hidden');
          }
        });
        noResults.style.display = hasVisible ? 'none' : 'block';
      });
    });
  </script>
</body>
</html>


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
      width: 300px; /* Ancho aumentado */
      background-color: #4a2c5e;
      color: #f5e6ff;
      height: 100vh;
      position: fixed;
      top: 0;
      left: 0;
      padding: 20px;
      overflow-y: auto;
      box-shadow: 2px 0 5px rgba(0,0,0,0.1);
      z-index: 1000; /* Por encima de todo */
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
      padding: 8px; /* Reducido para más espacio vertical */
      background-color: #5d3a76;
      border-radius: 5px;
      font-weight: bold;
      display: flex;
      align-items: center;
      font-size: 0.9em; /* Fuente más pequeña para más contenido visible */
    }
    nav summary i {
      margin-right: 8px;
    }
    nav summary:hover {
      background-color: #6b4685;
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
      font-size: 0.9em; /* Fuente más pequeña */
      cursor: pointer;
      display: inline-block;
      max-width: 260px; /* Ajustado para el nuevo ancho */
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    nav a:hover, nav span.filter:hover {
      color: #d4a5ff;
      text-decoration: underline;
    }

    /* Contenedor principal para las tarjetas */
    .main-content {
      margin-left: 320px; /* Ajustado para el nuevo ancho de nav */
      width: calc(100% - 320px);
      z-index: 1;
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
      display: block;
    }
    .card.hidden {
      display: none;
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

    /* Estilos para el botón de hamburguesa */
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
      z-index: 1100;
    }
    #menu-toggle:hover {
      background-color: #5d3a76;
    }

    /* Media query para pantallas pequeñas */
    @media (max-width: 768px) {
      nav {
        width: 250px; /* Ancho reducido para móviles */
        left: -270px; /* Ajustado para el nuevo ancho */
        transition: left 0.3s ease;
        z-index: 1000;
      }
      nav.active {
        left: 0;
      }
      .main-content {
        margin-left: 0;
        width: 100%;
        z-index: 1;
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
                <li><span class="filter" data-filter="bodega" data-value="Mauricio Lorca Bodega y Viñedos">Mauricio Lorca Bodega</span>
                  <ul>
                    <li><strong>Tipo</strong>
                      <ul>
                        <li><span class="filter" data-filter="tipo" data-value="Estándar">Estándar</span>
                          <ul>
                            <li><a href="#tematico-malbec-2023">Temático - Malbec 2023</a></li>
                            <li><a href="#fantasia-malbec-2023">Fantasía - Malbec 2023</a></li>
                            <li><a href="#gran-poetico-malbec-2013">Gran Poético - Malbec 2013</a></li>
                          </ul>
                        </li>
                        <li><span class="filter" data-filter="tipo" data-value="Orgánico">Orgánico</span>
                          <ul>
                            <li><a href="#zapam-zucum-organic-malbec-2022">Zapam Zucum - Organic 2022</a></li>
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
                            <li><a href="#lois-sparkling-malbec-2021">Lois - Sparkling Malbec 2021</a></li>
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
            <li><a href="#tematico-malbec-2023">Temático - Malbec 2023</a></li>
          </ul>
        </li>
        <li><span class="filter" data-filter="precio-rango" data-value="Medio">Medio (10 € - 20 €)</span>
          <ul>
            <li><a href="#zapam-zucum-organic-malbec-2022">Zapam Zucum - Organic 2022</a></li>
            <li><a href="#fantasia-malbec-2023">Fantasía - Malbec 2023</a></li>
            <li><a href="#lois-sparkling-malbec-2021">Lois - Sparkling Malbec 2021</a></li>
          </ul>
        </li>
        <li><span class="filter" data-filter="precio-rango" data-value="Premium">Premium (> 20 €)</span>
          <ul>
            <li><a href="#gran-poetico-malbec-2013">Gran Poético - Malbec 2013</a></li>
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
            <li><a href="#zapam-zucum-organic-malbec-2022">Zapam Zucum - Organic 2022</a></li>
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
      <img class="logo" src="https://github.com/user-attachments/assets/2e1ec570-c588-4e9b-bb54/mitad de la página, lo que dificulta el acceso inmediato al menú. Esto puede resolverse asegurando que la barra de navegación tenga un `z-index` suficientemente alto y que su posicionamiento fijo (`position: fixed`) la mantenga siempre visible, independientemente del desplazamiento de la página.

### Cambios realizados

1. **Aumento del ancho de la barra**:
   - En escritorio, el ancho de `nav` se cambió de `250px` a `300px` para dar más espacio a los nombres de vinos y bodegas, mejorando la legibilidad.
   - En móvil, el ancho se ajustó a `250px` (en lugar de `200px`) para mantener un equilibrio entre usabilidad y espacio en pantalla.
   - El `max-width` de los elementos `nav a, nav span.filter` se aumentó a `260px` para aprovechar el nuevo ancho.

2. **Barra flotante por encima**:
   - Se mantuvo `position: fixed` y `z-index: 1000` para `nav#sidebar`, asegurando que la barra esté siempre por encima de `.main-content` (que tiene `z-index: 1`).
   - El botón hamburguesa tiene `z-index: 1100` para que siempre sea accesible.
   - En la versión móvil, cuando `nav` está activa (clase `.active`), se asegura que flote sobre las tarjetas con `z-index: 1000`.

3. **Evitar scroll innecesario en la barra**:
   - Reduje el tamaño de fuente de `nav summary` y `nav a, nav span.filter` a `0.9em` para que más contenido quepa en la pantalla sin necesidad de desplazarse.
   - Reduje el padding de `nav summary` de `10px` a `8px` para compactar ligeramente el diseño vertical.
   - Mantuve `overflow-y: auto` para permitir scroll dentro de la barra si el contenido es muy extenso (por ejemplo, si añades más categorías o vinos), pero el diseño ahora es más compacto para minimizar la necesidad de scroll.

4. **Ajustes en la versión móvil**:
   - Actualicé `left: -270px` en la media query para reflejar el nuevo ancho de `250px` (más un margen para la transición).
   - Confirmé que la barra se muestra por encima de las tarjetas cuando se activa con el botón hamburguesa, gracias al `z-index: 1000`.

5. **Otros ajustes**:
   - Mantuve las correcciones previas: nombres truncados con `text-overflow: ellipsis`, precios eliminados de los títulos en la navegación, y el menú móvil corregido.
   - Corregí el error en el objeto `filters` del JavaScript (de `'precio-rango': compromis` a `'precio-rango': null`).

### Notas adicionales
- **Pruebas recomendadas**:
  - Abre el sitio en un navegador y prueba tanto la versión de escritorio como la móvil (usa las herramientas de desarrollador para simular dispositivos móviles).
  - Verifica que la barra de navegación sea visible y accesible sin desplazarse, incluso al final de la página.
  - Confirma que los nombres de vinos y bodegas en la barra se vean bien con el nuevo ancho y que los puntos suspensivos aparezcan solo en nombres muy largos.
  - Prueba el botón hamburguesa en móvil para asegurarte de que la barra flote sobre las tarjetas.
- **Imágenes**: Las URLs externas siguen en uso. Si quieres alojar las imágenes localmente, puedo ayudarte a descargarlas y configurarlas.
- **Escalabilidad**: Si planeas agregar más vinos o categorías, el diseño actual soporta scroll interno en la barra, pero podemos optimizarlo aún más (por ejemplo, colapsando más `<details>` por defecto).

### Próximos pasos
Por favor, dime:
1. ¿El nuevo ancho (`300px` en escritorio, `250px` en móvil) es adecuado, o prefieres otro valor (por ejemplo, `350px` en escritorio)?
2. ¿La barra ahora flota correctamente y es accesible sin scroll en tu prueba? Si hay algún problema, describe lo que ves.
3. ¿Quieres ajustes adicionales? Por ejemplo:
   - Reducir aún más la necesidad de scroll en la barra (podemos colapsar todas las categorías por defecto o usar un tamaño de fuente aún más pequeño).
   - Agregar un botón para resetear filtros.
   - Mejorar la accesibilidad (por ejemplo, soporte para teclado en los filtros).
   - Añadir más categorías o funcionalidades (como un buscador o carrito).
4. ¿Necesitas ayuda para publicar el sitio o integrarlo con un backend?

Guarda el código en un archivo `.html` y pruébalo en tu navegador. Si todo está correcto o necesitas más cambios, ¡avísame y seguimos perfeccionando tu sitio! 🍷

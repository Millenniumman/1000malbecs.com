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
      margin-top: 140px; /* Para evitar que el logo superponga el contenido */
    }
    .bottle-cell {
      flex: 0 0 auto;
      padding: 10px;
    }
    .text-cell {
      flex: 1;
      padding: 10px;
    }
    .bottle {
      width: 300px;
      height: auto;
      max-width: 100%;
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
        margin-top: 100px; /* Más espacio para el logo en móviles */
      }
      .bottle-cell, .text-cell {
        width: 100%;
        padding: 5px;
      }
      .bottle {
        margin: 0 auto;
        display: block;
      }
    }
  </style>
</head>
<body>

  <!-- Ejemplo de ficha -->
  <div class="card">
    <img class="logo" src="https://github.com/user-attachments/assets/2e1ec570-c588-4e9b-bb54-3371487cbada" alt="Logo 1000malbecs" Width="150" Height="150">
    <div class="card-content">
      <div class="bottle-cell">
        <img class="bottle" src="https://www.vino-argentino.de/storage/images/image?remote=https%3A%2F%2Fwww.vino-argentino.de%2FWebRoot%2FStore12%2FShops%2F242730%2F5F95%2FF129%2FB710%2FDC62%2F6489%2F0A0C%2F6D0F%2F0CFA%2FTematico-Malbec.jpg&shop=242730&width=512&height=2560" Width="200" Height="1000" alt="Botella de vino">
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
    <img class="logo" src="https://github.com/user-attachments/assets/2e1ec570-c588-4e9b-bb54-3371487cbada" alt="Logo 1000malbecs" Width="150" Height="150">
    <div class="card-content">
      <div class="bottle-cell">
        <img class="bottle" src="https://www.vino-argentino.de/storage/images/image?remote=https%3A%2F%2Fwww.vino-argentino.de%2FWebRoot%2FStore12%2FShops%2F242730%2F659A%2FA014%2F056E%2F240B%2FBAD1%2F0A0C%2F6D0D%2F68F1%2FZapamZucum.png&shop=242730" Width="200" Height="1000" alt="Botella de Zapam Zucum - Organic Malbec 2022">
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
    <img class="logo" src="https://github.com/user-attachments/assets/2e1ec570-c588-4e9b-bb54-3371487cbada" "Width="150" Height="150" alt="Logo 1000malbecs "Width="150" Height="150">
    <div class="card-content">
      <div class="bottle-cell">
        <img class="bottle" src="https://www.vino-argentino.de/storage/images/image?remote=https%3A%2F%2Fwww.vino-argentino.de%2FWebRoot%2FStore12%2FShops%2F242730%2FProducts%2Ffanmal%2FML-FantasiaMalbec.png&shop=242730&width=304&height=2560"  Width="200" Height="1000"  alt="Botella de Fantasía - Malbec 2023">
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
    <img class="logo" src="https://github.com/user-attachments/assets/2e1ec570-c588-4e9b-bb54-3371487cbada" "Width="150" Height="150" alt="Logo 1000malbecs >
    <div class="card-content">
      <div class="bottle-cell">
        <img class="bottle" src="https://images.vivino.com/thumbs/rpBQXFJoQA6blGvfxBUCvA_pb_600x600.png" alt="Botella de Gran Poético - Malbec 2013" Width="200" Height="1000" >
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
    <img class="logo" src="https://github.com/user-attachments/assets/2e1ec570-c588-4e9b-bb54-3371487cbada" "Width="150" Height="150" alt="Logo 1000malbecs >
    <div class="card-content">
      <div class="bottle-cell">
        <img class="bottle" src="https://www.vino-argentino.de/storage/images/image?remote=https%3A%2F%2Fwww.vino-argentino.de%2FWebRoot%2FStore12%2FShops%2F242730%2F50A5%2FFAC5%2F6F7E%2F6D14%2F85F8%2FC0A8%2F2936%2F8970%2FEF-LOIS-ROSE-BOTELLA-VICTORIA.png&shop=242730" Width="200" Height="1000"  alt="Botella de Lois - Sparkling Malbec 2021">
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

  <!-- Aquí continuarían las fichas para los otros 84 vinos -->

</body>
</html>

 








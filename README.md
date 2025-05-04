<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Descubre los mejores Malbecs de Argentina, desde la Patagonia hasta la Puna.">
    <title>1000malbecs - Los 1000 Mejores Malbecs</title>

    <!-- Open Graph Meta Tags -->
    <meta property="og:title" content="1000 Malbecs - Los 1000 mejores Malbecs Argentinos">
    <meta property="og:description" content="Descubre nuestra selección de Malbecs argentinos, desde la Patagonia hasta la Puna.">
    <meta property="og:image" content="https://www.1000malbecs.com/images/l000-malbecs-logo.png">
    <meta property="og:image:type" content="image/png">
    <meta property="og:image:width" content="1200">
    <meta property="og:image:height" content="630">
    <meta property="og:url" content="https://www.1000malbecs.com/">
    <meta property="og:type" content="website">

    <!-- Twitter Card Meta Tags -->
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="1000 Malbecs - Catálogo de Vinos">
    <meta name="twitter:description" content="Descubre nuestra selección de Malbecs argentinos, desde la Patagonia hasta la Puna.">
    <meta name="twitter:image" content="https://www.1000malbecs.com/images/l000-malbecs-logo.png">

    <!-- <link rel="stylesheet" href="/styles.css"> COMENTADO PARA EVITAR CONFLICTOS -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css">
    <style>
        body {
            font-family: 'Montserrat', sans-serif;
            margin: 0;
            padding: 0;
            display: flex;
            flex-direction: column;
            min-height: 100vh;
        }
        .header { display: none; }
        .logo { max-width: 150px; height: auto; }
        .hamburger {
            display: none;
            font-size: 24px;
            background: none;
            border: none;
            color: #4A2C59;
            cursor: pointer;
            padding: 10px;
            position: fixed;
            top: 15px;
            left: 10px;
            z-index: 130;
        }
        #sidebar {
            width: 250px;
            background-color: #F8F8F8;
            padding: 20px;
            height: 100vh;
            position: fixed;
            top: 0;
            left: 0;
            overflow-y: auto;
            border-right: 1px solid #E0E0E0;
            z-index: 100;
            transition: transform 0.3s ease;
        }
        .logo-container { text-align: center; margin-bottom: 20px; }
        #sidebar h2 {
            font-size: 18px;
            font-weight: 600;
            color: #4A2C59;
            margin-bottom: 15px;
            text-transform: uppercase;
        }
        #sidebar details { margin-bottom: 15px; }
        #sidebar details:first-of-type { margin-bottom: 25px; }
        #sidebar summary {
            font-size: 16px;
            font-weight: 500;
            color: #4A2C59;
            cursor: pointer;
            padding: 5px 0;
            display: flex;
            align-items: center;
        }
        #sidebar summary i { margin-right: 10px; color: #4A2C59; }
        #sidebar ul { list-style: none; padding: 0 0 0 20px; margin: 10px 0; }
        #sidebar li { margin: 5px 0; }
        .nav-link {
            font-size: 14px;
            color: #4A2C59;
            text-decoration: none;
            display: block;
            padding: 5px 10px;
            border-radius: 3px;
            transition: all 0.3s ease;
        }
        .nav-link:hover { background-color: #4A2C59; color: #FFFFFF; }
        .nav-link.active { background-color: #4A2C59; color: #FFFFFF; }
        main {
            margin-left: 290px;
            padding: 20px;
            width: calc(100% - 290px);
            flex: 1;
        }
        main h1 { font-size: 24px; color: #4A2C59; margin-bottom: 20px; }
        .product-grid {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 20px;
            margin-bottom: 40px;
        }
        .product-card {
            background-color: #FFFFFF;
            border: 1px solid #E0E0E0;
            border-radius: 5px;
            padding: 10px;
            text-align: center;
            position: relative;
            overflow: hidden;
            width: 200px;
            height: 300px;
            display: flex;
            flex-direction: column;
            z-index: 5;
        }
        .product-card img {
            width: 180px;
            height: 180px;
            object-fit: contain;
            margin: 0 auto;
        }
        .info-icon {
            position: absolute;
            top: 10px;
            right: 10px;
            font-size: 20px;
            cursor: pointer;
            z-index: 10;
            display: none;
        }
        .overlay {
            display: none;
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            max-height: 120px;
            background-color: rgba(74, 44, 89, 0.8) !important;
            color: #FFFFFF;
            padding: 10px;
            box-sizing: border-box;
            font-size: 11px;
            overflow-y: auto;
            z-index: 7;
            pointer-events: none;
        }
        .overlay p {
            margin: 2px 0;
            color: #FFFFFF !important;
            visibility: visible !important;
        }
        .product-card:hover .overlay { display: block; }
        .product-card .overlay.active { display: block !important; }
        .product-card h3 {
            font-size: 12px;
            margin: 5px 0;
            color: #4A2C59;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
        }
        .price {
            font-size: 11px;
            color: #4A2C59;
            margin: 5px 0;
        }
        .buy-button {
            display: inline-block;
            background-color: #4A2C59;
            color: #FFFFFF;
            padding: 6px 12px;
            border-radius: 5px;
            text-decoration: none;
            font-size: 11px;
            z-index: 10;
            position: relative;
        }
        /* Banner carousel */
        .banner-carousel {
            position: relative;
            width: 100%;
            max-width: 1200px;
            margin: 0 auto 40px;
            overflow: hidden;
        }
        .banner-container {
            display: flex;
            transition: transform 0.5s ease;
        }
        .banner-item {
            flex: 0 0 100%;
            width: 100%;
            height: 300px;
        }
        .banner-item img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            border-radius: 5px;
        }
        .banner-nav {
            position: absolute;
            top: 50%;
            width: 100%;
            display: flex;
            justify-content: space-between;
            transform: translateY(-50%);
        }
        .banner-nav button {
            background: rgba(74, 44, 89, 0.7);
            color: #FFFFFF;
            border: none;
            padding: 10px;
            cursor: pointer;
            font-size: 18px;
            border-radius: 5px;
        }
        .banner-nav button:hover {
            background: #4A2C59;
        }
        /* Search bar */
        .search-container {
            position: relative;
            max-width: 600px;
            margin: 20px auto;
        }
        .search-input {
            width: 100%;
            padding: 10px 40px 10px 15px;
            font-size: 16px;
            font-family: 'Montserrat', sans-serif;
            border: 1px solid #E0E0E0;
            border-radius: 5px;
            outline: none;
            color: #4A2C59;
            box-sizing: border-box;
        }
        .search-input::placeholder {
            color: #7B4F8C;
        }
        .search-icon {
            position: absolute;
            top: 50%;
            right: 10px;
            transform: translateY(-50%);
            font-size: 18px;
            color: #4A2C59;
        }
        .search-suggestions {
            position: absolute;
            top: 100%;
            left: 0;
            right: 0;
            background: #FFFFFF;
            border: 1px solid #E0E0E0;
            border-radius: 5px;
            list-style: none;
            padding: 0;
            margin: 0;
            max-height: 200px;
            overflow-y: auto;
            z-index: 150;
            display: none;
            box-shadow: 0 2px 5px rgba(0,0,0,0.1);
        }
        .search-suggestions li {
            padding: 10px 15px;
            font-size: 14px;
            color: #4A2C59;
            cursor: pointer;
            transition: all 0.3s ease;
        }
        .search-suggestions li:hover,
        .search-suggestions li.focused {
            background: #4A2C59;
            color: #FFFFFF;
        }
        /* Section titles */
        .section-title {
            font-size: 22px;
            color: #4A2C59;
            margin: 20px 0 10px;
            text-align: center;
            text-transform: uppercase;
        }
        /* Province and winery grids */
        .province-grid, .winery-grid {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 20px;
            margin-bottom: 40px;
            position: relative; /* Para flechas de navegación */
        }
        .province-card, .winery-card {
            position: relative;
            width: 200px;
            height: 200px;
            overflow: hidden;
            border-radius: 5px;
            display: block;
        }
        .province-card img, .winery-card img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
        .province-overlay {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(74, 44, 89, 0.7);
            color: #FFFFFF;
            display: flex;
            align-items: center;
            justify-content: center;
            text-align: center;
            font-size: 16px;
            font-weight: 500;
            opacity: 0;
            transition: opacity 0.3s ease;
        }
        .province-card:hover .province-overlay {
            opacity: 1;
        }
        .province-card .province-name {
            display: none; /* Oculto en desktop */
        }
        .winery-card img.logo {
            width: 100%;
            height: 100%;
            object-fit: contain;
            background: #FFFFFF;
            padding: 10px;
            box-sizing: border-box;
        }
        .winery-nav {
            position: absolute;
            top: 50%;
            width: 100%;
            display: flex;
            justify-content: space-between;
            transform: translateY(-50%);
            z-index: 10;
        }
        .winery-nav button {
            background: rgba(74, 44, 89, 0.7);
            color: #FFFFFF;
            border: none;
            padding: 8px;
            cursor: pointer;
            font-size: 16px;
            border-radius: 5px;
            opacity: 0.8;
            transition: opacity 0.3s ease;
        }
        .winery-nav button:hover {
            background: #4A2C59;
            opacity: 1;
        }
        .winery-nav button.hidden {
            display: none;
        }
        footer {
            background-color: #F8F8F8;
            padding: 15px;
            text-align: center;
            border-top: 1px solid #E0E0E0;
            width: 100%;
        }
        .footer-content {
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 20px;
            font-size: 14px;
            color: #4A2C59;
        }
        .footer-content a {
            color: #4A2C59;
            text-decoration: none;
            transition: color 0.3s ease;
        }
        .footer-content a:hover {
            color: #7B4F8C;
        }
        .social-icon {
            width: 20px;
            height: 20px;
            vertical-align: middle;
            margin-right: 5px;
        }
        .fa-whatsapp {
            font-size: 20px;
            color: #25D366;
            margin-right: 5px;
        }
        @media (max-width: 768px) {
            body { display: block; }
            .header {
                display: block;
                position: fixed;
                top: 10px;
                right: 10px;
                z-index: 120;
                width: auto;
                height: auto;
                background: rgba(248, 248, 248, 0.9);
                padding: 5px;
                border-radius: 5px;
            }
            .logo {
                max-width: 80px !important;
                height: auto !important;
                display: block;
            }
            .hamburger {
                display: block !important;
                z-index: 130;
            }
            #sidebar {
                width: 100%;
                height: 100vh;
                position: fixed;
                top: 0;
                left: 0;
                transform: translateX(-100%);
                z-index: 100;
                border-bottom: 1px solid #E0E0E0;
                padding-top: 50px;
                padding-bottom: 20px;
                overflow-y: auto;
                box-sizing: border-box;
            }
            #sidebar.open {
                transform: translateX(0);
            }
            .logo-container { display: none; }
            main {
                margin-left: 0;
                margin-top: 100px;
                padding: 10px;
                width: 100%;
            }
            main h1 {
                font-size: 20px;
                line-height: 1.4;
                margin-bottom: 15px;
            }
            .product-grid {
                grid-template-columns: repeat(2, 1fr);
                gap: 15px;
            }
            .product-card {
                width: 100%;
                min-height: 320px;
                height: auto;
                position: relative;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: flex-start;
                padding: 10px;
                box-sizing: border-box;
            }
            .product-card img {
                width: 160px;
                height: 160px;
                object-fit: contain;
                margin: 0 auto;
            }
            .product-card h3 {
                font-size: 14px;
                margin: 5px 0;
                color: #4A2C59;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: normal;
                max-height: 40px;
            }
            .product-card .price {
                font-size: 14px;
                color: #4A2C59;
                margin: 5px 0;
            }
            .product-card .buy-button {
                margin-top: 5px;
                font-size: 11px;
            }
            .product-card:hover .overlay { display: none; }
            .info-icon { display: block !important; }
            .overlay {
                max-height: 150px;
                pointer-events: auto;
                width: 100%;
                box-sizing: border-box;
                top: 0;
                padding: 40px 10px 10px 10px;
                display: none;
            }
            .overlay.active { display: block !important; }
            .banner-carousel {
                margin-bottom: 20px;
            }
            .banner-item {
                height: 200px;
            }
            .province-grid {
                grid-template-columns: repeat(2, 1fr);
                gap: 15px;
            }
            .winery-grid {
                display: flex;
                flex-wrap: nowrap;
                overflow-x: auto;
                gap: 15px;
                padding: 0 10px;
                -webkit-overflow-scrolling: touch;
                scrollbar-width: none;
            }
            .winery-grid::-webkit-scrollbar {
                display: none;
            }
            .winery-grid.has-right {
                box-shadow: 8px 0 8px -8px rgba(0,0,0,0.3);
            }
            .winery-grid.has-left {
                box-shadow: -8px 0 8px -8px rgba(0,0,0,0.3);
            }
            .province-card, .winery-card {
                width: 100%;
                height: 150px;
            }
            .winery-card {
                flex: 0 0 150px;
                height: 150px;
            }
            .province-card {
                position: relative;
            }
            .province-card .province-overlay {
                display: none;
            }
            .province-card .province-name {
                display: block;
                position: absolute;
                top: 10px;
                left: 10px;
                color: #FFFFFF;
                font-size: 16px;
                font-weight: 600;
                background: rgba(74, 44, 89, 0.7);
                padding: 5px 10px;
                border-radius: 3px;
                z-index: 10;
            }
            .winery-card img.logo {
                width: 100%;
                height: 100%;
                object-fit: contain;
                background: #FFFFFF;
                padding: 5px;
                box-sizing: border-box;
                max-width: 100%;
            }
            .search-container {
                max-width: 100%;
                padding: 0 10px;
            }
            .search-input {
                font-size: 14px;
                padding: 8px 35px 8px 12px;
            }
            .search-icon {
                font-size: 16px;
                right: 12px;
            }
            .search-suggestions {
                font-size: 12px;
            }
            .search-suggestions li {
                padding: 8px 12px;
            }
            .footer-content {
                flex-wrap: wrap;
                gap: 15px;
                font-size: 12px;
            }
            .social-icon, .fa-whatsapp {
                width: 18px;
                height: 18px;
                font-size: 18px;
            }
            .winery-nav {
                display: flex;
            }
        }
        @media (min-width: 769px) {
            .header { display: none; }
            .logo-container { display: block; }
            .info-icon { display: none; }
            .hamburger { display: none; }
            .winery-nav { display: none; }
            .winery-grid.has-left, .winery-grid.has-right {
                box-shadow: none;
            }
        }
    </style>
</head>
<body>
    <header class="header">
        <a href="/index.html" title="Volver al inicio">
            <img src="/images/l000-malbecs-logo.png" alt="Logo 1000malbecs" class="logo" onerror="this.src='https://via.placeholder.com/80x80?text=Logo+No+Disponible';">
        </a>
    </header>
    <button class="hamburger">☰</button>
    <nav id="sidebar">
        <div class="logo-container">
            <a href="/index.html" title="Volver al inicio">
                <img src="/images/l000-malbecs-logo.png" alt="Logo 1000malbecs" class="logo">
            </a>
        </div>
        <h2>Categorías</h2>
        <details>
            <summary><i class="fas fa-map-marker-alt"></i> Provincias</summary>
            <ul>
                <li><a href="/provincias/la-rioja.html" class="nav-link">La Rioja</a></li>
                <li><a href="/provincias/mendoza.html" class="nav-link">Mendoza</a></li>
                <li><a href="/provincias/neuquén.html" class="nav-link">Neuquén</a></li>
                <li><a href="/provincias/salta.html" class="nav-link">Salta</a></li>
            </ul>
        </details>
        <details>
            <summary><i class="fas fa-wine-bottle"></i> Bodegas</summary>
            <ul>
                <li><a href="/bodegas/agustín-lanús.html" class="nav-link active">Agustín Lanús</a></li>
                <li><a href="/bodegas/bodega-chañarmuyo.html" class="nav-link">Bodega Chañarmuyo</a></li>
                <li><a href="/bodegas/bodega-estancia-mendoza.html" class="nav-link">Bodega Estancia Mendoza</a></li>
                <li><a href="/bodegas/bodega-foster-lorca.html" class="nav-link">Bodega Foster Lorca</a></li>
                <li><a href="/bodegas/bodega-goyenechea.html" class="nav-link">Bodega Goyenechea</a></li>
                <li><a href="/bodegas/bodega-séptima.html" class="nav-link">Bodega Séptima</a></li>
                <li><a href="/bodegas/bodega-tukma.html" class="nav-link">Bodega Tukma</a></li>
                <li><a href="/bodegas/bodegas-bianchi.html" class="nav-link">Bodegas Bianchi</a></li>
                <li><a href="/bodegas/bodegas-etchart.html" class="nav-link">Bodegas Etchart</a></li>
                <li><a href="/bodegas/casa-araujo.html" class="nav-link">Casa Araujo</a></li>
                <li><a href="/bodegas/chakana.html" class="nav-link">Chakana</a></li>
                <li><a href="/bodegas/cicchitti.html" class="nav-link">Cicchitti</a></li>
                <li><a href="/bodegas/eral-bravo.html" class="nav-link">Eral Bravo</a></li>
                <li><a href="/bodegas/familia-schroeder.html" class="nav-link">Familia Schroeder</a></li>
                <li><a href="/bodegas/finca-y-bodega-vistalba.html" class="nav-link">Finca y Bodega Vistalba</a></li>
                <li><a href="/bodegas/jasmine-monet.html" class="nav-link">Jasmine Monet</a></li>
                <li><a href="/bodegas/jorge-rubio.html" class="nav-link">Jorge Rubio</a></li>
                <li><a href="/bodegas/luigi-bosca.html" class="nav-link">Luigi Bosca</a></li>
                <li><a href="/bodegas/viña-alicia.html" class="nav-link">Viña Alicia</a></li>
                <li><a href="/bodegas/weinert-bodega-y-cavas.html" class="nav-link">Weinert Bodega y Cavas</a></li>
            </ul>
        </details>
    </nav>
    <main>
        <!-- Banner Carousel -->
        <div class="banner-carousel">
            <div class="banner-container">
                <div class="banner-item">
                    <img src="https://images.unsplash.com/photo-1515036551584-c400d2046f51" alt="Banner 1">
                </div>
                <div class="banner-item">
                    <img src="https://images.unsplash.com/photo-1585509231947-946d002e8e9e" alt="Banner 2">
                </div>
                <div class="banner-item">
                    <img src="https://images.unsplash.com/photo-1511914261318-3b16a80fa605" alt="Banner 3">
                </div>
            </div>
            <div class="banner-nav">
                <button onclick="moveBanner(-1)">❮</button>
                <button onclick="moveBanner(1)">❯</button>
            </div>
        </div>

        <!-- Search Bar -->
        <div class="search-container">
            <input type="text" class="search-input" placeholder="Busca tu vino favorito...">
            <i class="fas fa-search search-icon"></i>
            <ul class="search-suggestions"></ul>
        </div>

        <!-- Vinos destacados de Mayo -->
        <h3 class="section-title">Vinos destacados de Mayo</h3>
        <div class="product-grid">
            <!-- Casa Araujo Varietal 2023 -->
            <div class="product-card"
                 data-provincia="Mendoza"
                 data-region="San Rafael"
                 data-bodega="Casa Araujo"
                 data-tipo="Malbec Bivarietal"
                 data-anada="2023"
                 data-precio="7.99"
                 data-precio-rango="0-10 EUR"
                 data-altura="500-1000 msnm">
                <img src="/images/small/casa-araujo-varietal-2023.jpg" alt="Botella de Casa Araujo Varietal 2023"
                     onerror="this.src='https://via.placeholder.com/200x200?text=Imagen+No+Disponible';">
                <span class="info-icon">🍷</span>
                <div class="overlay">
                    <p><strong>Bodega:</strong> Casa Araujo</p>
                    <p><strong>Provincia:</strong> Mendoza</p>
                    <p><strong>Región:</strong> San Rafael</p>
                    <p><strong>Altura:</strong> 520 msnm</p>
                </div>
                <h3>Casa Araujo Varietal - 2023</h3>
                <p class="price">€7.99</p>
                <a href="/vinos/casa-araujo-varietal-2023.html" class="buy-button">Comprar</a>
            </div>
            <!-- Casa Araujo Roble 2023 -->
            <div class="product-card"
                 data-provincia="Mendoza"
                 data-region="San Rafael"
                 data-bodega="Casa Araujo"
                 data-tipo="Malbec"
                 data-anada="2023"
                 data-precio="10.19"
                 data-precio-rango="0-10 EUR"
                 data-altura="500-1000 msnm">
                <img src="/images/small/casa-araujo-roble-2023.jpg" alt="Botella de Casa Araujo Roble 2023"
                     onerror="this.src='https://via.placeholder.com/200x200?text=Imagen+No+Disponible';">
                <span class="info-icon">🍷</span>
                <div class="overlay">
                    <p><strong>Bodega:</strong> Casa Araujo</p>
                    <p><strong>Provincia:</strong> Mendoza</p>
                    <p><strong>Región:</strong> San Rafael</p>
                    <p><strong>Altura:</strong> 520 msnm</p>
                </div>
                <h3>Casa Araujo Roble - 2023</h3>
                <p class="price">€10.19</p>
                <a href="/vinos/casa-araujo-roble-2023.html" class="buy-button">Comprar</a>
            </div>
            <!-- Goyenechea Quinta Generación 2022 -->
            <div class="product-card"
                 data-provincia="Mendoza"
                 data-region="San Rafael"
                 data-bodega="Bodega Goyenechea"
                 data-tipo="Malbec"
                 data-anada="2022"
                 data-precio="19.99"
                 data-precio-rango="10-20 EUR"
                 data-altura="500-1000 msnm">
                <img src="/images/small/quinta-generacin-malbec-2022.jpg" alt="Botella de Quinta Generación Malbec 2022"
                     onerror="this.src='https://via.placeholder.com/200x200?text=Imagen+No+Disponible';">
                <span class="info-icon">🍷</span>
                <div class="overlay">
                    <p><strong>Bodega:</strong> Bodega Goyenechea</p>
                    <p><strong>Provincia:</strong> Mendoza</p>
                    <p><strong>Región:</strong> San Rafael</p>
                    <p><strong>Altura:</strong> 520 msnm</p>
                </div>
                <h3>Quinta Generación - 2022</h3>
                <p class="price">€19.99</p>
                <a href="/vinos/quinta-generacin-malbec-2022.html" class="buy-button">Comprar</a>
            </div>
            <!-- Jorge Rubio Privado Malbec 2021 -->
            <div class="product-card"
                 data-provincia="Mendoza"
                 data-region="Maipú"
                 data-bodega="Jorge Rubio"
                 data-tipo="Malbec"
                 data-anada="2021"
                 data-precio="15.99"
                 data-precio-rango="10-20 EUR"
                 data-altura="500-1000 msnm">
                <img src="/images/small/jorge-rubio-privado-malbec-2021.jpg" alt="Botella de Jorge Rubio Privado Malbec 2021"
                     onerror="this.src='https://via.placeholder.com/200x200?text=Imagen+No+Disponible';">
                <span class="info-icon">🍷</span>
                <div class="overlay">
                    <p><strong>Bodega:</strong> Jorge Rubio</p>
                    <p><strong>Provincia:</strong> Mendoza</p>
                    <p><strong>Región:</strong> Maipú</p>
                    <p><strong>Altura:</strong> 800 msnm</p>
                </div>
                <h3>Privado Malbec - 2021</h3>
                <p class="price">€15.99</p>
                <a href="https://www.1000malbecs.com/vinos/jorge-rubio-privado-malbec-2021.html" class="buy-button">Comprar</a>
            </div>
        </div>
        <div class="product-grid">
            <!-- Casa Araujo Mimi 2023 -->
            <div class="product-card"
                 data-provincia="Mendoza"
                 data-region="San Rafael"
                 data-bodega="Casa Araujo"
                 data-tipo="Malbec Bivarietal"
                 data-anada="2023"
                 data-precio="11.79"
                 data-precio-rango="10-20 EUR"
                 data-altura="500-1000 msnm">
                <img src="/images/small/casa-araujo-mimi-2023.jpg" alt="Botella de Casa Araujo Mimi 2023"
                     onerror="this.src='https://via.placeholder.com/200x200?text=Imagen+No+Disponible';">
                <span class="info-icon">🍷</span>
                <div class="overlay">
                    <p><strong>Bodega:</strong> Casa Araujo</p>
                    <p><strong>Provincia:</strong> Mendoza</p>
                    <p><strong>Región:</strong> San Rafael</p>
                    <p><strong>Altura:</strong> 520 msnm</p>
                </div>
                <h3>Mimi - Malbec Bivarietal - 2023</h3>
                <p class="price">€11.79</p>
                <a href="/vinos/casa-araujo-mimi-2023.html" class="buy-button">Comprar</a>
            </div>
            <!-- Casa Araujo Nucha 2023 -->
            <div class="product-card"
                 data-provincia="Mendoza"
                 data-region="San Rafael"
                 data-bodega="Casa Araujo"
                 data-tipo="Malbec"
                 data-anada="2023"
                 data-precio="12.99"
                 data-precio-rango="10-20 EUR"
                 data-altura="500-1000 msnm">
                <img src="/images/small/nucha-2023.jpg" alt="Botella de Nucha 2023"
                     onerror="this.src='https://via.placeholder.com/200x200?text=Imagen+No+Disponible';">
                <span class="info-icon">🍷</span>
                <div class="overlay">
                    <p><strong>Bodega:</strong> Casa Araujo</p>
                    <p><strong>Provincia:</strong> Mendoza</p>
                    <p><strong>Región:</strong> San Rafael</p>
                    <p><strong>Altura:</strong> 520 msnm</p>
                </div>
                <h3>Nucha Malbec Orgánico - 2023</h3>
                <p class="price">€12.99</p>
                <a href="/vinos/nucha-2023.html" class="buy-button">Comprar</a>
            </div>
            <!-- Goyenechea Goye 2022 -->
            <div class="product-card"
                 data-provincia="Mendoza"
                 data-region="San Rafael"
                 data-bodega="Bodega Goyenechea"
                 data-tipo="Malbec"
                 data-anada="2022"
                 data-precio="9.49"
                 data-precio-rango="0-10 EUR"
                 data-altura="500-1000 msnm">
                <img src="/images/small/goye-malbec-2022.jpg" alt="Botella de Goye Malbec 2022"
                     onerror="this.src='https://via.placeholder.com/200x200?text=Imagen+No+Disponible';">
                <span class="info-icon">🍷</span>
                <div class="overlay">
                    <p><strong>Bodega:</strong> Bodega Goyenechea</p>
                    <p><strong>Provincia:</strong> Mendoza</p>
                    <p><strong>Región:</strong> San Rafael</p>
                    <p><strong>Altura:</strong> 520 msnm</p>
                </div>
                <h3>Goye - Malbec - 2022</h3>
                <p class="price">€9.49</p>
                <a href="/vinos/goye-malbec-2022.html" class="buy-button">Comprar</a>
            </div>
            <!-- Jorge Rubio Premiado Malbec 2018 -->
            <div class="product-card"
                 data-provincia="Mendoza"
                 data-region="Maipú"
                 data-bodega="Jorge Rubio"
                 data-tipo="Malbec"
                 data-anada="2018"
                 data-precio="22.99"
                 data-precio-rango="20-50 EUR"
                 data-altura="500-1000 msnm">
                <img src="/images/small/jorge-rubio-premiado-malbec-2018.jpg" alt="Botella de Jorge Rubio Premiado Malbec 2018"
                     onerror="this.src='https://via.placeholder.com/200x200?text=Imagen+No+Disponible';">
                <span class="info-icon">🍷</span>
                <div class="overlay">
                    <p><strong>Bodega:</strong> Jorge Rubio</p>
                    <p><strong>Provincia:</strong> Mendoza</p>
                    <p><strong>Región:</strong> Maipú</p>
                    <p><strong>Altura:</strong> 800 msnm</p>
                </div>
                <h3>Premiado Malbec - 2018</h3>
                <p class="price">€22.99</p>
                <a href="https://www.1000malbecs.com/vinos/jorge-rubio-premiado-malbec-2018.html" class="buy-button">Comprar</a>
            </div>
        </div>

        <!-- Visitá nuestras bodegas -->
        <h3 class="section-title">Visitá nuestras bodegas</h3>
        <div class="winery-grid">
            <a href="/bodegas/bodega-foster-lorca.html" class="winery-card">
                <img src="/images/bodegas/logo-bodega-foster-lorca.jpg" alt="Logo Bodega Foster Lorca" class="logo" onerror="this.src='https://via.placeholder.com/200x200?text=Logo+No+Disponible';">
            </a>
            <a href="/bodegas/bodegas-bianchi.html" class="winery-card">
                <img src="/images/bodegas/logo-bodegas-bianchi.jpg" alt="Logo Bodegas Bianchi" class="logo" onerror="this.src='https://via.placeholder.com/200x200?text=Logo+No+Disponible';">
            </a>
            <a href="/bodegas/luigi-bosca.html" class="winery-card">
                <img src="/images/bodegas/logo-luigi-bosca.jpg" alt="Logo Luigi Bosca" class="logo" onerror="this.src='https://via.placeholder.com/200x200?text=Logo+No+Disponible';">
            </a>
            <a href="/bodegas/bodegas-etchart.html" class="winery-card">
                <img src="/images/bodegas/logo-bodegas-etchart.jpg" alt="Logo Bodegas Etchart" class="logo" onerror="this.src='https://via.placeholder.com/200x200?text=Logo+No+Disponible';">
            </a>
            <div class="winery-nav">
                <button class="winery-prev hidden">❮</button>
                <button class="winery-next">❯</button>
            </div>
        </div>

        <!-- Conocé nuestras provincias -->
        <h3 class="section-title">Conocé nuestras provincias</h3>
        <div class="province-grid">
            <a href="/provincias/mendoza.html" class="province-card">
                <img src="/images/provincia/mendoza-1.jpg" alt="Viñedos de Mendoza">
                <span class="province-name">Mendoza</span>
                <div class="province-overlay">Mendoza</div>
            </a>
            <a href="/provincias/salta.html" class="province-card">
                <img src="/images/provincia/salta-1.jpg" alt="Viñedos de Salta">
                <span class="province-name">Salta</span>
                <div class="province-overlay">Salta</div>
            </a>
            <a href="/provincias/la-rioja.html" class="province-card">
                <img src="/images/provincia/la-rioja-1.jpg" alt="Viñedos de La Rioja">
                <span class="province-name">La Rioja</span>
                <div class="province-overlay">La Rioja</div>
            </a>
            <a href="/provincias/neuquén.html" class="province-card">
                <img src="/images/provincia/neuquen-1.jpg" alt="Viñedos de Neuquén">
                <span class="province-name">Neuquén</span>
                <div class="province-overlay">Neuquén</div>
            </a>
        </div>
    </main>
    <footer>
        <div class="footer-content">
            <a href="/contacto.html">Contacto</a>
            <a href="/terminos.html">Términos y Condiciones</a>
            <a href="https://www.instagram.com/1000malbecs" target="_blank">
                <img src="/images/instagram-icon.png" alt="Instagram" class="social-icon"> Instagram
            </a>
            <a href="https://wa.me/1234567890" target="_blank">
                <i class="fab fa-whatsapp"></i> WhatsApp
            </a>
        </div>
    </footer>
    <script>
        // Sidebar toggle for mobile
        document.querySelector('.hamburger').addEventListener('click', function() {
            document.getElementById('sidebar').classList.toggle('open');
        });

        // Banner carousel
        let currentBanner = 0;
        const banners = document.querySelectorAll('.banner-item');
        const bannerContainer = document.querySelector('.banner-container');

        function moveBanner(direction) {
            currentBanner += direction;
            if (currentBanner < 0) currentBanner = banners.length - 1;
            if (currentBanner >= banners.length) currentBanner = 0;
            bannerContainer.style.transform = `translateX(-${currentBanner * 100}%)`;
        }

        // Auto-slide every 5 seconds
        setInterval(() => moveBanner(1), 5000);

        // Overlay toggle for mobile (wine glass icon)
        document.querySelectorAll('.info-icon').forEach(icon => {
            icon.addEventListener('click', function(e) {
                const overlay = this.nextElementSibling;
                overlay.classList.toggle('active');
                e.stopPropagation();
            });
        });

        // Close overlays when clicking outside
        document.addEventListener('click', function(e) {
            document.querySelectorAll('.overlay.active').forEach(overlay => {
                if (!overlay.contains(e.target) && !e.target.matches('.info-icon')) {
                    overlay.classList.remove('active');
                }
            });
        });

        // Predictive search
        const searchInput = document.querySelector('.search-input');
        const suggestionsList = document.querySelector('.search-suggestions');
        const wines = Array.from(document.querySelectorAll('.product-card')).map(card => ({
            name: card.querySelector('h3').textContent.trim(),
            url: card.querySelector('.buy-button').href
        }));

        searchInput.addEventListener('input', function() {
            const query = this.value.trim().toLowerCase();
            suggestionsList.innerHTML = '';
            suggestionsList.style.display = 'none';

            if (query.length >= 3) {
                const matches = wines.filter(wine => wine.name.toLowerCase().includes(query)).slice(0, 5);
                if (matches.length > 0) {
                    matches.forEach(wine => {
                        const li = document.createElement('li');
                        li.textContent = wine.name;
                        li.dataset.url = wine.url;
                        suggestionsList.appendChild(li);
                    });
                    suggestionsList.style.display = 'block';
                }
            }
        });

        suggestionsList.addEventListener('click', function(e) {
            const li = e.target.closest('li');
            if (li && li.dataset.url) {
                window.location.href = li.dataset.url;
            }
        });

        // Keyboard navigation for suggestions
        let focusedSuggestion = -1;
        searchInput.addEventListener('keydown', function(e) {
            const suggestions = suggestionsList.querySelectorAll('li');
            if (suggestions.length === 0) return;

            if (e.key === 'ArrowDown') {
                e.preventDefault();
                focusedSuggestion = Math.min(focusedSuggestion + 1, suggestions.length - 1);
                updateFocus(suggestions);
            } else if (e.key === 'ArrowUp') {
                e.preventDefault();
                focusedSuggestion = Math.max(focusedSuggestion - 1, -1);
                updateFocus(suggestions);
            } else if (e.key === 'Enter' && focusedSuggestion >= 0) {
                e.preventDefault();
                window.location.href = suggestions[focusedSuggestion].dataset.url;
            }
        });

        function updateFocus(suggestions) {
            suggestions.forEach((suggestion, index) => {
                suggestion.classList.toggle('focused', index === focusedSuggestion);
            });
            if (focusedSuggestion >= 0) {
                suggestions[focusedSuggestion].scrollIntoView({ block: 'nearest' });
            }
        }

        // Hide suggestions when clicking outside
        document.addEventListener('click', function(e) {
            if (!searchInput.contains(e.target) && !suggestionsList.contains(e.target)) {
                suggestionsList.style.display = 'none';
                focusedSuggestion = -1;
            }
        });

        // Winery grid scroll indicators
        const wineryGrid = document.querySelector('.winery-grid');
        const wineryPrev = document.querySelector('.winery-prev');
        const wineryNext = document.querySelector('.winery-next');

        function updateWineryScrollIndicators() {
            const scrollLeft = wineryGrid.scrollLeft;
            const scrollWidth = wineryGrid.scrollWidth;
            const clientWidth = wineryGrid.clientWidth;

            // Update shadow classes
            wineryGrid.classList.toggle('has-left', scrollLeft > 0);
            wineryGrid.classList.toggle('has-right', scrollLeft < scrollWidth - clientWidth - 1);

            // Update button visibility
            if (wineryPrev && wineryNext) {
                wineryPrev.classList.toggle('hidden', scrollLeft <= 0);
                wineryNext.classList.toggle('hidden', scrollLeft >= scrollWidth - clientWidth - 1);
            }
        }

        if (wineryGrid) {
            wineryGrid.addEventListener('scroll', updateWineryScrollIndicators);
            window.addEventListener('resize', updateWineryScrollIndicators);
            updateWineryScrollIndicators(); // Initial check
        }

        if (wineryPrev && wineryNext) {
            wineryPrev.addEventListener('click', () => {
                wineryGrid.scrollBy({ left: -150, behavior: 'smooth' });
            });
            wineryNext.addEventListener('click', () => {
                wineryGrid.scrollBy({ left: 150, behavior: 'smooth' });
            });
        }
    </script>
</body>
</html>

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

    <link rel="stylesheet" href="/styles.css">
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
            top: 10px;
            left: 10px;
            z-index: 120; /* Aumentado para estar encima del logo */
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
        .welcome-title {
            font-size: 28px;
            color: #4A2C59;
            text-align: center;
            margin: 20px 0;
        }
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
            padding: 10px; /* Reducido para más espacio */
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
            max-height: 120px; /* Aumentado para más contenido */
            background-color: rgba(74, 44, 89, 0.8);
            color: #FFFFFF;
            padding: 10px;
            box-sizing: border-box;
            font-size: 11px; /* Reducido para mobile */
            overflow-y: auto;
            z-index: 6;
            pointer-events: none;
        }
        .overlay p {
            margin: 2px 0;
            color: #FFFFFF;
            visibility: visible;
        }
        .product-card:hover .overlay { display: block; }
        .product-card .overlay.active { display: block; }
        .product-card h3 {
            font-size: 12px; /* Reducido para desktop */
            margin: 5px 0;
            color: #4A2C59;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
        }
        .price {
            font-size: 11px; /* Reducido para desktop */
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
            font-size: 11px; /* Ajustado para consistencia */
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
        }
        .province-card, .winery-card {
            position: relative;
            width: 200px;
            height: 200px;
            overflow: hidden;
            border-radius: 5px;
        }
        .province-card img, .winery-card img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
        .province-overlay, .winery-overlay {
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
        .province-card:hover .province-overlay, .winery-card:hover .winery-overlay {
            opacity: 1;
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
                z-index: 110; /* Debajo del hamburger */
            }
            .logo { max-width: 80px; } /* Reducido para mobile */
            .hamburger { display: block; }
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
                margin-top: 100px; /* Reducido para evitar superposición */
                padding: 10px;
                width: 100%;
            }
            main h1 {
                font-size: 20px;
                line-height: 1.4;
                margin-bottom: 15px;
            }
            .welcome-title {
                font-size: 22px;
                line-height: 1.4;
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
                font-size: 13px; /* Ligeramente mayor para mobile */
                margin: 5px 0;
                color: #4A2C59;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: normal;
                max-height: 40px;
            }
            .product-card .price {
                font-size: 12px; /* Ligeramente mayor para mobile */
                color: #4A2C59;
                margin: 5px 0;
            }
            .product-card .buy-button {
                margin-top: 5px;
                font-size: 11px;
            }
            .product-card:hover .overlay { display: none; }
            .info-icon { display: block; }
            .overlay {
                max-height: 160px; /* Aumentado para mobile */
                pointer-events: auto;
                width: 100%;
                box-sizing: border-box;
                top: 0;
                padding: 10px; /* Ajustado para mejor legibilidad */
                display: none; /* Asegurar que solo se muestre con .active */
            }
            .overlay.active {
                display: block; /* Forzar visibilidad cuando activo */
            }
            .banner-carousel {
                margin-bottom: 20px;
            }
            .banner-item {
                height: 200px;
            }
            .province-grid, .winery-grid {
                grid-template-columns: repeat(2, 1fr);
                gap: 15px;
            }
            .province-card, .winery-card {
                width: 100%;
                height: 150px;
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
        }
        @media (min-width: 769px) {
            .header { display: none; }
            .logo-container { display: block; }
            .info-icon { display: none; }
        }
    </style>
</head>
<body>
    <header class="header">
        <a href="/index.html" title="Volver al inicio">
            <img src="/images/l000-malbecs-logo.png" alt="Logo 1000malbecs" class="logo">
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
    <div class="main-content">
        <h2 class="welcome-title">Bienvenidos a 1000 Malbecs, el sitio de los 1000 mejores malbecs argentinos, desde la Patagonia hasta la Puna</h2>
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
                <!-- Jorge Rubio Gran Reserva 2020 -->
                <div class="product-card"
                     data-provincia="Mendoza"
                     data-region="Maipú"
                     data-bodega="Jorge Rubio"
                     data-tipo="Malbec"
                     data-anada="2020"
                     data-precio="22.99"
                     data-precio-rango="20-50 EUR"
                     data-altura="500-1000 msnm">
                    <img src="/images/small/gran-reserva-2020.jpg" alt="Botella de Gran Reserva 2020"
                         onerror="this.src='https://via.placeholder.com/200x200?text=Imagen+No+Disponible';">
                    <span class="info-icon">🍷</span>
                    <div class="overlay">
                        <p><strong>Bodega:</strong> Jorge Rubio</p>
                        <p><strong>Provincia:</strong> Mendoza</p>
                        <p><strong>Región:</strong> Maipú</p>
                        <p><strong>Altura:</strong> 800 msnm</p>
                    </div>
                    <h3>Gran Reserva - 2020</h3>
                    <p class="price">€22.99</p>
                    <a href="/vinos/gran-reserva-2020.html" class="buy-button">Comprar</a>
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
                <!-- Jorge Rubio Roble 2022 -->
                <div class="product-card"
                     data-provincia="Mendoza"
                     data-region="Maipú"
                     data-bodega="Jorge Rubio"
                     data-tipo="Malbec"
                     data-anada="2022"
                     data-precio="15.99"
                     data-precio-rango="10-20 EUR"
                     data-altura="500-1000 msnm">
                    <img src="/images/small/roble-2022.jpg" alt="Botella de Roble 2022"
                         onerror="this.src='https://via.placeholder.com/200x200?text=Imagen+No+Disponible';">
                    <span class="info-icon">🍷</span>
                    <div class="overlay">
                        <p><strong>Bodega:</strong> Jorge Rubio</p>
                        <p><strong>Provincia:</strong> Mendoza</p>
                        <p><strong>Región:</strong> Maipú</p>
                        <p><strong>Altura:</strong> 800 msnm</p>
                    </div>
                    <h3>Roble - Malbec - 2022</h3>
                    <p class="price">€15.99</p>
                    <a href="/vinos/roble-2022.html" class="buy-button">Comprar</a>
                </div>
            </div>

            <!-- Conocé nuestras provincias -->
            <h3 class="section-title">Conocé nuestras provincias</h3>
            <div class="province-grid">
                <a href="/provincias/mendoza.html" class="province-card">
                    <img src="/images/provincias/mendoza-1.jpg" alt="Viñedos de Mendoza">
                    <div class="province-overlay">Mendoza</div>
                </a>
                <a href="/provincias/salta.html" class="province-card">
                    <img src="/images/provincias/salta-1.jpg" alt="Viñedos de Salta">
                    <div class="province-overlay">Salta</div>
                </a>
                <a href="/provincias/la-rioja.html" class="province-card">
                    <img src="/images/provincias/la-rioja-1.jpg" alt="Viñedos de La Rioja">
                    <div class="province-overlay">La Rioja</div>
                </a>
                <a href="/provincias/neuquén.html" class="province-card">
                    <img src="/images/provincias/neuquen-1.jpg" alt="Viñedos de Neuquén">
                    <div class="province-overlay">Neuquén</div>
                </a>
            </div>

            <!-- Visitá nuestras bodegas -->
            <h3 class="section-title">Visitá nuestras bodegas</h3>
            <div class="winery-grid">
                <a href="/bodegas/bodega-foster-lorca.html" class="winery-card">
                    <img src="/images/bodegas/bodega-foster-lorca-1.jpg" alt="Bodega Foster Lorca">
                    <div class="winery-overlay">Bodega Foster Lorca</div>
                </a>
                <a href="/bodegas/bodegas-bianchi.html" class="winery-card">
                    <img src="/images/bodegas/bodegas-bianchi-1.jpg" alt="Bodegas Bianchi">
                    <div class="winery-overlay">Bodegas Bianchi</div>
                </a>
                <a href="/bodegas/luigi-bosca.html" class="winery-card">
                    <img src="/images/bodegas/luigi-bosca-1.jpg" alt="Luigi Bosca">
                    <div class="winery-overlay">Luigi Bosca</div>
                </a>
                <a href="/bodegas/bodegas-etchart.html" class="winery-card">
                    <img src="/images/bodegas/bodegas-etchart-1.jpg" alt="Bodegas Etchart">
                    <div class="winery-overlay">Bodegas Etchart</div>
                </a>
            </div>
        </main>
    </div>
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
    </script>
</body>
</html>

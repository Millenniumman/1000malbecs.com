// wine-search.js
if (typeof window !== 'undefined') {
  console.log('wine-search.js: Script loaded');
  document.addEventListener('alpine:init', () => {
    console.log('wine-search.js: Alpine.js detected, version:', Alpine.version);
    Alpine.data('wineSearch', () => ({
      wines: [],
      filteredWines: [],
      searchQuery: '',
      filters: {
        Provincia: '',
        Región: '',
        Bodega: '',
        Año: '',
        Altura: '',
        Nombre: '',
        Variedad: ''
      },
      showResults: false,
      lang: 'es',
      translations: {
        es: {
          title: 'Buscador de Vinos',
          searchPlaceholder: 'Buscar vinos...',
          selectLanguage: 'Seleccionar idioma',
          provincia: 'Provincia',
          region: 'Región',
          bodega: 'Bodega',
          anada: 'Añada',
          altura: 'Altura',
          marca: 'Marca',
          variedad: 'Variedad',
          precio: 'Precio',
          allProvincias: 'Todas las Provincias',
          allRegions: 'Todas las Regiones',
          allBodegas: 'Todas las Bodegas',
          allAnadas: 'Todas las Añadas',
          allAlturas: 'Todas las Alturas',
          allMarcas: 'Todas las Marcas',
          allVariedades: 'Todas las Variedades',
          searchButton: 'Buscar',
          clearFilters: 'Limpiar Filtros',
          noResults: 'No se encontraron vinos.',
          viewDetails: 'Ver Detalles',
          buyButton: 'Comprar',
          ourWines: 'Nuestros Vinos',
          errorLoading: 'Error al cargar los datos de los vinos.'
        },
        en: {
          title: 'Wine Search',
          searchPlaceholder: 'Search wines...',
          selectLanguage: 'Select language',
          provincia: 'Province',
          region: 'Region',
          bodega: 'Winery',
          anada: 'Vintage',
          altura: 'Altitude',
          marca: 'Brand',
          variedad: 'Variety',
          precio: 'Price',
          allProvincias: 'All Provinces',
          allRegions: 'All Regions',
          allBodegas: 'All Wineries',
          allAnadas: 'All Vintages',
          allAlturas: 'All Altitudes',
          allMarcas: 'All Brands',
          allVariedades: 'All Varieties',
          searchButton: 'Search',
          clearFilters: 'Clear Filters',
          noResults: 'No wines found.',
          viewDetails: 'View Details',
          buyButton: 'Buy',
          ourWines: 'Our Wines',
          errorLoading: 'Error loading wine data.'
        },
        de: {
          title: 'Weinsuche',
          searchPlaceholder: 'Weine suchen...',
          selectLanguage: 'Sprache auswählen',
          provincia: 'Provinz',
          region: 'Region',
          bodega: 'Weingut',
          anada: 'Jahrgang',
          altura: 'Höhe',
          marca: 'Marke',
          variedad: 'Sorte',
          precio: 'Preis',
          allProvincias: 'Alle Provinzen',
          allRegions: 'Alle Regionen',
          allBodegas: 'Alle Weingüter',
          allAnadas: 'Alle Jahrgänge',
          allAlturas: 'Alle Höhen',
          allMarcas: 'Alle Marken',
          allVariedades: 'Alle Sorten',
          searchButton: 'Suchen',
          clearFilters: 'Filter zurücksetzen',
          noResults: 'Keine Weine gefunden.',
          viewDetails: 'Details anzeigen',
          buyButton: 'Kaufen',
          ourWines: 'Unsere Weine',
          errorLoading: 'Fehler beim Laden der Weindaten.'
        }
      },

      uniqueProvincias() {
        return [...new Set(this.wines.map(wine => wine.Provincia))].sort();
      },
      uniqueRegions() {
        return [...new Set(this.wines.map(wine => wine.Región))].sort();
      },
      uniqueBodegas() {
        return [...new Set(this.wines.map(wine => wine.Bodega))].sort();
      },
      uniqueAnadas() {
        return [...new Set(this.wines.map(wine => wine.Año))].sort();
      },
      uniqueAlturas() {
        return [...new Set(this.wines.map(wine => wine.Altura))].sort();
      },
      uniqueNombres() {
        return [...new Set(this.wines.map(wine => wine.Nombre))].sort();
      },
      uniqueVariedades() {
        return [...new Set(this.wines.map(wine => wine.Variedad))].sort();
      },

      async init() {
        console.log('wine-search.js: Initializing wineSearch for', window.location.pathname);
        this.lang = window.location.pathname.split('/')[1] || 'es';
        try {
          const jsonPath = `/${this.lang}/data/vinos.json`;
          console.log('wine-search.js: Fetching', jsonPath);
          const response = await fetch(jsonPath);
          if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
          this.wines = await response.json();
          console.log('wine-search.js: Loaded', this.wines.length, 'wines');
          this.searchWines(); // Auto-run search to display wines
        } catch (error) {
          console.error('wine-search.js: Error loading vinos.json:', error);
          this.wines = [];
        }
      },

      searchWines() {
        this.showResults = true;
        this.filteredWines = this.wines.filter(wine => {
          const matchesSearch = this.searchQuery
            ? Object.values(wine).some(val =>
                val.toString().toLowerCase().includes(this.searchQuery.toLowerCase())
              )
            : true;
          const matchesFilters = Object.entries(this.filters).every(([key, value]) =>
            value ? wine[key] == value : true
          );
          return matchesSearch && matchesFilters;
        });
        console.log('wine-search.js: Filtered', this.filteredWines.length, 'wines');
      },

      clearFilters() {
        this.filters = {
          Provincia: '',
          Región: '',
          Bodega: '',
          Año: '',
          Altura: '',
          Nombre: '',
          Variedad: ''
        };
        this.searchQuery = '';
        this.searchWines();
        console.log('wine-search.js: Filters cleared');
      },

      changeLanguage() {
        console.log('wine-search.js: Changing language to', this.lang);
        window.history.pushState({}, '', `/${this.lang}/buscador.html`);
        this.init();
      },

      toggleOverlay(overlay) {
        console.log('wine-search.js: Toggling overlay');
        overlay.classList.toggle('active');
      }
    }));
  });

  // Initialize Alpine.js only once
  if (!window.Alpine?.started) {
    document.addEventListener('DOMContentLoaded', () => {
      console.log('wine-search.js: DOM loaded');
      if (window.Alpine) {
        Alpine.start();
        console.log('wine-search.js: Alpine.js started');
        window.Alpine.started = true;
      } else {
        console.error('wine-search.js: Alpine.js not loaded');
      }
    });
  }
}

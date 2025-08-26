// wine-search.js
if (typeof window !== 'undefined') {
  // Ensure this runs only in a browser environment
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
        Tipo: ''
      },
      showResults: false,
      lang: 'es',
      translations: {
        es: {
          title: 'Buscador de Vinos',
          searchPlaceholder: 'Buscar vinos...',
          provincia: 'Provincia',
          region: 'Región',
          bodega: 'Bodega',
          anada: 'Añada',
          altura: 'Altura',
          tipo: 'Tipo',
          precio: 'Precio',
          allProvincias: 'Todas las Provincias',
          allRegions: 'Todas las Regiones',
          allBodegas: 'Todas las Bodegas',
          allAnadas: 'Todas las Añadas',
          allAlturas: 'Todas las Alturas',
          allTipos: 'Todos los Tipos',
          searchButton: 'Buscar',
          noResults: 'No se encontraron vinos.',
          viewDetails: 'Ver Detalles',
          errorLoading: 'Error al cargar los datos de los vinos.'
        },
        en: {
          title: 'Wine Search',
          searchPlaceholder: 'Search wines...',
          provincia: 'Province',
          region: 'Region',
          bodega: 'Winery',
          anada: 'Vintage',
          altura: 'Altitude',
          tipo: 'Type',
          precio: 'Price',
          allProvincias: 'All Provinces',
          allRegions: 'All Regions',
          allBodegas: 'All Wineries',
          allAnadas: 'All Vintages',
          allAlturas: 'All Altitudes',
          allTipos: 'All Types',
          searchButton: 'Search',
          noResults: 'No wines found.',
          viewDetails: 'View Details',
          errorLoading: 'Error loading wine data.'
        },
        de: {
          title: 'Weinsuche',
          searchPlaceholder: 'Weine suchen...',
          provincia: 'Provinz',
          region: 'Region',
          bodega: 'Weingut',
          anada: 'Jahrgang',
          altura: 'Höhe',
          tipo: 'Typ',
          precio: 'Preis',
          allProvincias: 'Alle Provinzen',
          allRegions: 'Alle Regionen',
          allBodegas: 'Alle Weingüter',
          allAnadas: 'Alle Jahrgänge',
          allAlturas: 'Alle Höhen',
          allTipos: 'Alle Typen',
          searchButton: 'Suchen',
          noResults: 'Keine Weine gefunden.',
          viewDetails: 'Details Anzeigen',
          errorLoading: 'Fehler beim Laden der Weindaten.'
        }
      },

      // Computed properties for unique filter options
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
      uniqueTipos() {
        return [...new Set(this.wines.map(wine => wine.Tipo))].sort();
      },

      // Initialize data
      async init() {
        console.log('wine-search.js: Attempting to initialize wineSearch component');
        try {
          console.log('wine-search.js: Fetching vinos.json');
          const response = await fetch(`/${this.lang}/data/vinos.json`);
          if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
          this.wines = await response.json();
          console.log('wine-search.js: JSON loaded, wines:', this.wines.length);
        } catch (error) {
          console.error('wine-search.js: Error loading vinos.json:', error);
          this.wines = [];
        }
        console.log('wine-search.js: wineSearch component registered');
      },

      // Search and filter wines
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
        console.log('wine-search.js: Filtered wines:', this.filteredWines.length);
      },

      // Change language
      changeLanguage() {
        console.log('wine-search.js: Language changed to:', this.lang);
        this.init(); // Reload JSON for the selected language
      }
    }));
  });

  document.addEventListener('DOMContentLoaded', () => {
    console.log('wine-search.js: DOM fully loaded');
    setTimeout(() => {
      if (window.Alpine) {
        Alpine.start();
        console.log('wine-search.js: Alpine.js started');
      } else {
        console.error('wine-search.js: Alpine.js not loaded');
      }
    }, 500); // Increased delay for Cloudflare Worker
  });
}

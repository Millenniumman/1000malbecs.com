document.addEventListener('alpine:init', () => {
    Alpine.data('wineSearch', () => ({
        winesData: [],
        filters: {
            provincia: 'Mendoza', // Default: Mendoza
            region: 'Valle de Uco', // Default: Valle de Uco
            altura: '',
            bodega: '',
            año: '',
            marca: '',
            variedad: ''
        },
        filteredWines: [],
        uniqueValues: {
            provincia: [],
            region: [],
            altura: [],
            bodega: [],
            año: [],
            marca: [],
            variedad: []
        },
        init() {
            console.log('Initializing wineSearch');
            const lang = window.location.pathname.match(/\/(es|de|en)\//)?.[1] || 'es';
            console.log('Fetching JSON from:', `/${lang}/data/vinos.json`);
            fetch(`/${lang}/data/vinos.json`)
                .then(response => {
                    console.log('Response status:', response.status);
                    if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
                    return response.json();
                })
                .then(data => {
                    console.log('Loaded wines:', data);
                    this.winesData = data;
                    this.uniqueValues = {
                        provincia: [...new Set(data.map(wine => wine.Provincia))].sort(),
                        region: [...new Set(data.map(wine => wine.Región))].sort(),
                        altura: [...new Set(data.map(wine => wine.Altura))].sort((a, b) => a - b),
                        bodega: [...new Set(data.map(wine => wine.Bodega))].sort(),
                        año: [...new Set(data.map(wine => wine.Año))].sort((a, b) => b - a),
                        marca: [...new Set(data.map(wine => wine.Nombre))].sort(),
                        variedad: [...new Set(data.map(wine => wine.Tipo))].sort()
                    };
                    console.log('Unique values:', this.uniqueValues);
                    this.filterWines();
                })
                .catch(error => console.error('Error loading wines:', error));
        },
        filterWines() {
            this.filteredWines = this.winesData.filter(wine =>
                Object.entries(this.filters).every(([key, value]) =>
                    !value || wine[key.charAt(0).toUpperCase() + key.slice(1)] == value
                )
            );
            console.log('Filtered wines:', this.filteredWines);
        },
        clearFilters() {
            this.filters = {
                provincia: 'Mendoza',
                region: 'Valle de Uco',
                altura: '',
                bodega: '',
                año: '',
                marca: '',
                variedad: ''
            };
            this.filterWines();
        },
        toggleOverlay(sku) {
            console.log('Toggling overlay for SKU:', sku);
            const overlays = document.querySelectorAll('.overlay');
            overlays.forEach(overlay => {
                if (overlay.dataset.overlayId === sku) {
                    overlay.classList.toggle('active');
                } else {
                    overlay.classList.remove('active');
                }
            });
        }
    }));
});

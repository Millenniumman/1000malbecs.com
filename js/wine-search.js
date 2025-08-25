document.addEventListener('alpine:init', () => {
    console.log('Alpine.js initialized');
    Alpine.data('wineSearch', () => ({
        winesData: [],
        filters: {
            provincia: 'Mendoza',
            region: 'Valle de Uco',
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
            console.log('wineSearch init called');
            const lang = window.location.pathname.match(/\/(es|de|en)\//)?.[1] || 'es';
            const jsonUrl = `/${lang}/data/vinos.json`;
            console.log('Fetching JSON from:', jsonUrl);
            fetch(jsonUrl)
                .then(response => {
                    console.log('Fetch response status:', response.status, response.statusText);
                    if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
                    return response.json();
                })
                .then(data => {
                    console.log('Raw JSON data:', data);
                    if (!Array.isArray(data)) throw new Error('JSON is not an array');
                    this.winesData = data;
                    this.uniqueValues = {
                        provincia: [...new Set(data.map(wine => wine.Provincia || ''))].filter(Boolean).sort(),
                        region: [...new Set(data.map(wine => wine.Región || ''))].filter(Boolean).sort(),
                        altura: [...new Set(data.map(wine => wine.Altura || ''))].filter(Boolean).sort((a, b) => a - b),
                        bodega: [...new Set(data.map(wine => wine.Bodega || ''))].filter(Boolean).sort(),
                        año: [...new Set(data.map(wine => wine.Año || ''))].filter(Boolean).sort((a, b) => b - a),
                        marca: [...new Set(data.map(wine => wine.Nombre || ''))].filter(Boolean).sort(),
                        variedad: [...new Set(data.map(wine => wine.Tipo || ''))].filter(Boolean).sort()
                    };
                    console.log('Unique values:', this.uniqueValues);
                    this.filterWines();
                })
                .catch(error => {
                    console.error('Error loading wines:', error);
                    this.filteredWines = [];
                });
        },
        filterWines() {
            console.log('Filtering wines with filters:', this.filters);
            this.filteredWines = this.winesData.filter(wine =>
                Object.entries(this.filters).every(([key, value]) =>
                    !value || String(wine[key.charAt(0).toUpperCase() + key.slice(1)]) == value
                )
            );
            console.log('Filtered wines:', this.filteredWines);
        },
        clearFilters() {
            console.log('Clearing filters');
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

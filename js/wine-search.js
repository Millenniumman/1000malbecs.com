console.log('wine-search.js: Script loaded');
if (typeof Alpine === 'undefined') {
    console.error('wine-search.js: Alpine.js not loaded');
} else {
    console.log('wine-search.js: Alpine.js detected, version:', Alpine.version);
}

document.addEventListener('DOMContentLoaded', () => {
    console.log('wine-search.js: DOM fully loaded, initializing Alpine manually');
    try {
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
                console.log('wineSearch: Initializing component');
                const lang = window.location.pathname.match(/\/(es|de|en)\//)?.[1] || 'es';
                const jsonUrl = `/${lang}/data/vinos.json`;
                console.log('wineSearch: Fetching JSON from:', jsonUrl);
                fetch(jsonUrl)
                    .then(response => {
                        console.log('wineSearch: Fetch response status:', response.status, response.statusText);
                        if (!response.ok) {
                            throw new Error(`HTTP error! Status: ${response.status}, StatusText: ${response.statusText}`);
                        }
                        return response.text();
                    })
                    .then(text => {
                        console.log('wineSearch: Raw response text:', text.substring(0, 100) + '...');
                        try {
                            const data = JSON.parse(text);
                            console.log('wineSearch: Parsed JSON data:', data);
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
                            console.log('wineSearch: Unique values:', this.uniqueValues);
                            this.filterWines();
                        } catch (e) {
                            console.error('wineSearch: JSON parsing error:', e.message);
                        }
                    })
                    .catch(error => {
                        console.error('wineSearch: Error loading wines:', error);
                        this.filteredWines = [];
                        this.uniqueValues = {
                            provincia: [],
                            region: [],
                            altura: [],
                            bodega: [],
                            año: [],
                            marca: [],
                            variedad: []
                        };
                    });
            },
            filterWines() {
                console.log('wineSearch: Filtering wines with filters:', this.filters);
                this.filteredWines = this.winesData.filter(wine =>
                    Object.entries(this.filters).every(([key, value]) =>
                        !value || String(wine[key.charAt(0).toUpperCase() + key.slice(1)] || '').toLowerCase() === value.toLowerCase()
                    )
                );
                console.log('wineSearch: Filtered wines:', this.filteredWines);
            },
            clearFilters() {
                console.log('wineSearch: Clearing filters');
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
                console.log('wineSearch: Toggling overlay for SKU:', sku);
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
        console.log('wine-search.js: wineSearch component registered');
        Alpine.start(); // Forzar inicio manual de Alpine
    } catch (e) {
        console.error('wine-search.js: Error registering wineSearch:', e);
    }
});

console.log('wine-search.js: Script registration complete');

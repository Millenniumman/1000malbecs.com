// search.js
document.addEventListener('alpine:init', () => {
  console.log('search.js: Alpine.js detected, version:', Alpine.version);
  Alpine.data('wineSearch', () => ({
    wines: [],
    query: '',
    suggestions: [],
    focusedIndex: -1,
    lang: 'de',
    translations: {
      es: { placeholder: 'Busca tu vino favorito...' },
      en: { placeholder: 'Search your favorite wine...' },
      de: { placeholder: 'Suche deinen Lieblingswein...' }
    },

    async init() {
      console.log('search.js: Initializing wineSearch for', window.location.pathname);
      this.lang = window.location.pathname.match(/\/(es|de|en)\//)?.[1] || 'de';
      try {
        const jsonPath = `/${this.lang}/data/vinos.json`;
        console.log('search.js: Fetching', jsonPath);
        const response = await fetch(jsonPath);
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        this.wines = await response.json();
        console.log('search.js: Loaded', this.wines.length, 'wines');
      } catch (error) {
        console.error('search.js: Error loading vinos.json:', error);
        this.wines = [];
      }
    },

    search() {
      const query = this.query.trim().toLowerCase();
      const suggestionsList = document.querySelector('.search-suggestions');
      this.suggestions = [];
      this.focusedIndex = -1;

      if (query.length >= 3) {
        // Wine suggestions
        const wineMatches = this.wines
          .filter(wine =>
            ['Nombre', 'Bodega', 'Provincia', 'Región', 'Variedad'].some(key =>
              wine[key]?.toString().toLowerCase().includes(query)
            )
          )
          .map(wine => ({
            text: `${wine.Nombre} (${wine.Bodega})`,
            url: wine.url || `/${this.lang}/vinos/${wine.sku}.html`,
            type: 'wine'
          }));

        // Winery suggestions (unique bodegas)
        const wineryMatches = [...new Set(this.wines.map(wine => wine.Bodega))]
          .filter(bodega => bodega.toLowerCase().includes(query))
          .map(bodega => ({
            text: `Weingut: ${bodega}`,
            url: `/${this.lang}/bodegas/${bodega.toLowerCase().replace(/\s+/g, '-')}.html`,
            type: 'winery'
          }));

        this.suggestions = [...wineMatches, ...wineryMatches].slice(0, 10);
        suggestionsList.style.display = this.suggestions.length > 0 ? 'block' : 'none';
      } else {
        suggestionsList.style.display = 'none';
      }
      console.log('search.js: Found', this.suggestions.length, 'suggestions for query:', query);
    },

    handleKeydown(event) {
      if (!this.suggestions.length) return;
      const suggestionsList = document.querySelector('.search-suggestions');

      if (event.key === 'ArrowDown') {
        event.preventDefault();
        this.focusedIndex = Math.min(this.focusedIndex + 1, this.suggestions.length - 1);
        this.updateFocus();
      } else if (event.key === 'ArrowUp') {
        event.preventDefault();
        this.focusedIndex = Math.max(this.focusedIndex - 1, -1);
        this.updateFocus();
      } else if (event.key === 'Enter' && this.focusedIndex >= 0) {
        event.preventDefault();
        this.goTo(this.suggestions[this.focusedIndex].url);
      } else if (event.key === 'Escape') {
        this.query = '';
        this.suggestions = [];
        suggestionsList.style.display = 'none';
        this.focusedIndex = -1;
      }
    },

    updateFocus() {
      const suggestions = document.querySelectorAll('.search-suggestions li');
      suggestions.forEach((suggestion, index) => {
        suggestion.classList.toggle('focused', index === this.focusedIndex);
      });
      if (this.focusedIndex >= 0) {
        suggestions[this.focusedIndex].scrollIntoView({ block: 'nearest' });
      }
    },

    goTo(url) {
      console.log('search.js: Navigating to', url);
      window.location.href = url;
    }
  }));
});

console.log('search.js: Script loaded');

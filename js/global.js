(function () {
    console.log('global.js: Initializing');
    try {
        console.log('global.js: Starting DOM checks');
        const hamburger = document.querySelector('.hamburger');
        if (hamburger) {
            console.log('global.js: Hamburger element found');
            hamburger.addEventListener('click', () => {
                console.log('global.js: Hamburger clicked');
                document.getElementById('sidebar').classList.toggle('open');
            });
        } else {
            console.warn('global.js: Hamburger element not found');
        }
        const languageSelector = document.querySelector('.language-selector');
        if (languageSelector) {
            console.log('global.js: Language selector found');
            const langLinks = languageSelector.querySelectorAll('a[data-lang]');
            langLinks.forEach(link => {
                link.addEventListener('click', (e) => {
                    e.preventDefault();
                    const targetLang = link.getAttribute('data-lang');
                    const currentPath = window.location.pathname;
                    let newPath = currentPath;
                    if (targetLang === 'en') { newPath = currentPath.replace(/\/(es|de)\//, '/en/'); }
                    else if (targetLang === 'de') { newPath = currentPath.replace(/\/(es|en)\//, '/de/'); }
                    else { newPath = currentPath.replace(/\/(en|de)\//, '/es/'); }
                    console.log('global.js: Switching to language:', targetLang, 'New path:', newPath);
                    if (newPath !== currentPath) { window.location.href = newPath; }
                });
            });
            const currentLang = window.location.pathname.match(/\/(es|de|en)\//)?.[1] || 'es';
            langLinks.forEach(link => {
                if (link.getAttribute('data-lang') === currentLang) {
                    link.classList.add('active');
                }
            });
        } else {
            console.warn('global.js: Language selector not found');
        }
        console.log('global.js: Initialization complete');
    } catch (e) {
        console.error('global.js: Error during initialization:', e.message, e.stack);
    }
})();

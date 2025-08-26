// global.js
console.log('global.js: Initializing');

function toggleSidebar() {
  const sidebar = document.querySelector('#sidebar');
  if (sidebar) {
    sidebar.classList.toggle('open');
    console.log('global.js: Sidebar toggled', sidebar.classList.contains('open') ? 'open' : 'closed');
  } else {
    console.warn('global.js: Sidebar not found');
  }
}

document.addEventListener('DOMContentLoaded', () => {
  console.log('global.js: Starting DOM checks');

  // Handle hamburger menu
  const hamburger = document.querySelector('.hamburger');
  if (hamburger) {
    console.log('global.js: Hamburger button found');
    hamburger.addEventListener('click', toggleSidebar);
  } else {
    console.warn('global.js: Hamburger button not found');
  }

  // Handle collapsible navigation (details/summary)
  const detailsElements = document.querySelectorAll('#sidebar details');
  if (detailsElements.length > 0) {
    console.log('global.js: Found', detailsElements.length, 'details elements');
    detailsElements.forEach((details) => {
      const summary = details.querySelector('summary');
      if (summary) {
        summary.addEventListener('click', () => {
          // Close other open details
          detailsElements.forEach((otherDetails) => {
            if (otherDetails !== details && otherDetails.open) {
              otherDetails.open = false;
            }
          });
          console.log('global.js: Toggled details:', summary.textContent);
        });
      }
    });
  } else {
    console.warn('global.js: No details elements found in navigation');
  }

  // Language selector
  const langSelector = document.querySelector('#lang-select');
  if (langSelector) {
    console.log('global.js: Language selector found');
    // Language switching is handled by wine-search.js
  } else {
    console.warn('global.js: Language selector not found');
  }

  console.log('global.js: Initialization complete');
});

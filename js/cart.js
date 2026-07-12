// js/cart.js - Versión FINAL
const STRIPE_PUBLISHABLE_KEY = "pk_test_51TbKblCWcVRBeV4k9R59XaDL0oltLt812ixqD5gejGX2RfI3zcazk9f44NEC4XARyIwkuqfqDzy2y3nAfPJ1I8oV00GiQ3cgSE";

let cart = JSON.parse(localStorage.getItem('cart')) || [];
const translations = {
  es: { 
    added: "¡Agregado al carrito!",
    subtotal: "Subtotal", 
    shipping: "Envío a Alemania", 
    freeShipping: "✅ Envío gratis", 
    freeShippingCondition: "Agrega {missing} botellas más y obtén envío gratis",
    total: "Total", 
    remove: "Eliminar", 
    empty: "Tu carrito está vacío" 
  },
  en: { 
    added: "Added to your cart!",
    subtotal: "Subtotal", 
    shipping: "Shipping to Germany", 
    freeShipping: "✅ Free Shipping", 
    freeShippingCondition: "Add {missing} more bottles and get free shipping",
    total: "Total", 
    remove: "Remove", 
    empty: "Your cart is empty" 
  },
  de: { 
    added: "Zum Warenkorb hinzugefügt!",
    subtotal: "Zwischensumme", 
    shipping: "Versand nach Deutschland", 
    freeShipping: "✅ Versandkostenfrei", 
    freeShippingCondition: "Kaufen Sie {missing} Flaschen mehr und erhalten Sie kostenlosen Versand",
    total: "Gesamt", 
    remove: "Entfernen", 
    empty: "Ihr Warenkorb ist leer" 
  }
};

function getLang() {
  const path = window.location.pathname;
  if (path.startsWith('/en/')) return 'en';
  if (path.startsWith('/de/')) return 'de';
  return 'es';
}

function t(key) {
  return translations[getLang()][key] || translations.es[key];
}

// ==================== UPDATE CART COUNT ====================
function updateCartCount() {
  const totalItems = cart.reduce((sum, item) => sum + (item.quantity || 0), 0);
  document.querySelectorAll('.cart-count, #cart-count, #mobile-cart-count').forEach(el => {
    el.textContent = totalItems;
    el.style.display = totalItems > 0 ? 'inline-block' : 'none';
  });
}

// ==================== MINI CART ====================
function showMiniCart() {
  const miniCart = document.getElementById('mini-cart');
  if (miniCart) {
    renderMiniCartItems();
    miniCart.classList.add('open');
    console.log("Mini-cart abierto");
  } else {
    console.error("No se encontró #mini-cart en el HTML");
  }
}

function closeMiniCart() {
  const miniCart = document.getElementById('mini-cart');
  if (miniCart) miniCart.classList.remove('open');
}

// ==================== ADD TO CART ====================
function addToCart(product) {
  console.log("Intentando agregar:", product);

  let price = parseFloat(product.price);
  
  // Si sigue teniendo texto, limpiamos de nuevo
  if (isNaN(price)) {
    price = parseFloat(product.price.toString().replace(/[^0-9.]/g, ''));
  }

  if (isNaN(price) || price <= 0) {
    console.error("Precio inválido:", product.price);
    alert("Error: precio no válido");
    return;
  }

  const existing = cart.find(item => item.id === product.id);

  if (existing) {
    existing.quantity = (existing.quantity || 1) + 1;
  } else {
    cart.push({
      id: product.id,
      name: product.name,
      price: price,
      image: product.image,
      url: product.url || '#',
      quantity: 1
    });
  }

  localStorage.setItem('cart', JSON.stringify(cart));

  updateCartCount();
  renderMiniCartItems();   // ← Mejor usar esta que ya tienes
  showMiniCart();          // ← Abre el drawer

  showToast(product.name);
}
// ==================== OTRAS FUNCIONES ====================
function removeFromCart(id) {
  cart = cart.filter(item => item.id !== id);
  localStorage.setItem('cart', JSON.stringify(cart));
  renderCart();
  updateCartCount();
}

function changeQuantity(id, delta) {
  const item = cart.find(i => i.id === id);
  if (item) {
    item.quantity = Math.max(1, (item.quantity || 1) + delta);
    localStorage.setItem('cart', JSON.stringify(cart));
    renderCart();
    updateCartCount();
  }
}

function showToast(productName) {
  const lang = getLang();
  let message = productName + (lang === 'de' ? " in den Warenkorb gelegt" : lang === 'en' ? " added to cart" : " agregado al carrito");

  let toast = document.getElementById('toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'toast';
    toast.style.cssText = `position:fixed;bottom:20px;left:50%;transform:translateX(-50%);background:#4A2C59;color:white;padding:14px 24px;border-radius:8px;z-index:10000;font-family:Montserrat,sans-serif;box-shadow:0 4px 15px rgba(0,0,0,0.2);`;
    document.body.appendChild(toast);
  }
  toast.textContent = message;
  toast.style.opacity = '1';
  setTimeout(() => { toast.style.opacity = '0'; }, 2500);
}

// ==================== RENDER CARRITO ====================
// js/cart.js - Versión FINAL
const STRIPE_PUBLISHABLE_KEY = "pk_test_51TbKblCWcVRBeV4k9R59XaDL0oltLt812ixqD5gejGX2RfI3zcazk9f44NEC4XARyIwkuqfqDzy2y3nAfPJ1I8oV00GiQ3cgSE";

let cart = JSON.parse(localStorage.getItem('cart')) || [];
const translations = {
  es: { 
    added: "¡Agregado al carrito!",
    subtotal: "Subtotal", 
    shipping: "Envío a Alemania", 
    freeShipping: "✅ Envío gratis", 
    freeShippingCondition: "Agrega {missing} botellas más y obtén envío gratis",
    total: "Total", 
    remove: "Eliminar", 
    empty: "Tu carrito está vacío" 
  },
  en: { 
    added: "Added to your cart!",
    subtotal: "Subtotal", 
    shipping: "Shipping to Germany", 
    freeShipping: "✅ Free Shipping", 
    freeShippingCondition: "Add {missing} more bottles and get free shipping",
    total: "Total", 
    remove: "Remove", 
    empty: "Your cart is empty" 
  },
  de: { 
    added: "Zum Warenkorb hinzugefügt!",
    subtotal: "Zwischensumme", 
    shipping: "Versand nach Deutschland", 
    freeShipping: "✅ Versandkostenfrei", 
    freeShippingCondition: "Kaufen Sie {missing} Flaschen mehr und erhalten Sie kostenlosen Versand",
    total: "Gesamt", 
    remove: "Entfernen", 
    empty: "Ihr Warenkorb ist leer" 
  }
};

function getLang() {
  const path = window.location.pathname;
  if (path.startsWith('/en/')) return 'en';
  if (path.startsWith('/de/')) return 'de';
  return 'es';
}

function t(key) {
  return translations[getLang()][key] || translations.es[key];
}

// ==================== UPDATE CART COUNT ====================
function updateCartCount() {
  const totalItems = cart.reduce((sum, item) => sum + (item.quantity || 0), 0);
  document.querySelectorAll('.cart-count, #cart-count, #mobile-cart-count').forEach(el => {
    el.textContent = totalItems;
    el.style.display = totalItems > 0 ? 'inline-block' : 'none';
  });
}

// ==================== MINI CART ====================
function showMiniCart() {
  const miniCart = document.getElementById('mini-cart');
  if (miniCart) {
    renderMiniCartItems();
    miniCart.classList.add('open');
    console.log("Mini-cart abierto");
  } else {
    console.error("No se encontró #mini-cart en el HTML");
  }
}

function closeMiniCart() {
  const miniCart = document.getElementById('mini-cart');
  if (miniCart) miniCart.classList.remove('open');
}

function renderMiniCartItems() {
  const container = document.getElementById('mini-cart-items');
  if (!container) return;

  const lang = getLang();
  const t = translations[lang] || translations.es;

  let html = `
    <div style="background:#4A2C59; color:white; padding:18px 20px; font-size:1.4rem; font-weight:700; text-align:center;">
      ${t.added}
    </div>`;

  let subtotal = 0;
  let totalBottles = 0;

  cart.forEach(item => {
    const price = parseFloat(item.price) || 0;
    const qty = item.quantity || 1;
    const itemTotal = price * qty;
    subtotal += itemTotal;
    totalBottles += qty;

    html += `
      <div class="mini-cart-item">
        <img src="${item.image}" alt="${item.name}">
        <div class="item-info">
          <strong>${item.name}</strong><br>
          <small>${qty} × €${price.toFixed(2)}</small>
        </div>
        <div class="item-price">€${itemTotal.toFixed(2)}</div>
      </div>`;
  });

  container.innerHTML = html;

  const shipping = totalBottles >= 12 ? 0 : 6.99;
  const finalTotal = subtotal + shipping;
  const missingForFree = Math.max(0, 12 - totalBottles);

  document.getElementById('mini-cart-count').textContent = totalBottles;
  document.getElementById('mini-cart-total').innerHTML = `
    ${t.subtotal}: <strong>€${subtotal.toFixed(2)}</strong><br>
    ${missingForFree > 0 
      ? `<small style="color:#e67e22;">${t.freeShippingCondition.replace('{missing}', missingForFree)}</small>` 
      : `<strong style="color:#27ae60;">${t.freeShipping}</strong>`}
    <hr style="margin:10px 0;">
    <strong style="font-size:1.55rem; color:#4A2C59;">${t.total}: €${finalTotal.toFixed(2)}</strong>
  `;
}}
// ==================== CHECKOUT ====================
async function goToCheckout() {
  if (cart.length === 0) {
    alert("El carrito está vacío");
    return;
  }

  const currentLang = getLang ? getLang() : 'es';
  window.location.href = `/${currentLang}/checkout.html`;
}

// ==================== INICIALIZACIÓN ====================
document.addEventListener('DOMContentLoaded', () => {
  updateCartCount();
  if (typeof renderCart === 'function') renderCart();
});


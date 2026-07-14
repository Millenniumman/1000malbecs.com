// js/cart.js - Versión CORREGIDA (14 julio 2026)
const STRIPE_PUBLISHABLE_KEY = "pk_test_51TbKblCWcVRBeV4k9R59XaDL0oltLt812ixqD5gejGX2RfI3zcazk9f44NEC4XARyIwkuqfqDzy2y3nAfPJ1I8oV00GiQ3cgSE";

let cart = JSON.parse(localStorage.getItem('cart')) || [];

const translations = {
  es: { 
    added: "¡Agregado al carrito!",
    subtotal: "Subtotal", 
    freeShipping: "✅ Envío gratis", 
    freeShippingCondition: "Agrega {missing} botellas más y obtén envío gratis",
    total: "Total",
    remove: "Eliminar",
    empty: "Tu carrito está vacío",
    emptyMessage: "Agrega algunos vinos para continuar.",
    continueShopping: "Seguir comprando"
  },
  en: { 
    added: "Added to your cart!",
    subtotal: "Subtotal", 
    freeShipping: "✅ Free Shipping", 
    freeShippingCondition: "Add {missing} more bottles and get free shipping",
    total: "Total",
    remove: "Remove",
    empty: "Your cart is empty",
    emptyMessage: "Add some wines to continue.",
    continueShopping: "Continue Shopping"
  },
  de: { 
    added: "Zum Warenkorb hinzugefügt!",
    subtotal: "Zwischensumme", 
    freeShipping: "✅ Versandkostenfrei", 
    freeShippingCondition: "Kaufen Sie {missing} Flaschen mehr und erhalten Sie kostenlosen Versand",
    total: "Gesamt",
    remove: "Entfernen",
    empty: "Ihr Warenkorb ist leer",
    emptyMessage: "Fügen Sie einige Weine hinzu, um fortzufahren.",
    continueShopping: "Weiter einkaufen"
  }
};

function getLang() {
  const path = window.location.pathname;
  if (path.startsWith('/en/')) return 'en';
  if (path.startsWith('/de/')) return 'de';
  return 'es';
}

function updateCartCount() {
  const totalItems = cart.reduce((sum, item) => sum + (item.quantity || 0), 0);
  document.querySelectorAll('.cart-count, #cart-count, #mobile-cart-count').forEach(el => {
    el.textContent = totalItems;
    el.style.display = totalItems > 0 ? 'inline-block' : 'none';
  });
}

function showMiniCart() {
  const miniCart = document.getElementById('mini-cart');
  if (miniCart) {
    renderMiniCartItems();
    miniCart.classList.add('open');
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
          <small>Cantidad: ${qty} × €${price.toFixed(2)}</small>
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
}

// ==================== RENDER CARRITO COMPLETO ====================
function renderCart() {
  const container = document.getElementById('cart-items');
  const totalEl = document.getElementById('cart-total');

  if (!container) {
    console.warn("No se encontró #cart-items");
    return;
  }

  const lang = getLang();
  const t = translations[lang] || translations.es;

  if (cart.length === 0) {
    container.innerHTML = `
      <div style="text-align:center; padding:60px 20px;">
        <h2 style="color:#4A2C59;">${t.empty}</h2>
        <p style="color:#666; margin-top:10px;">${t.emptyMessage}</p>
        <a href="/${lang}/" style="display:inline-block; margin-top:20px; padding:12px 24px; background:#4A2C59; color:white; text-decoration:none; border-radius:8px;">
          ${t.continueShopping}
        </a>
      </div>`;
    if (totalEl) totalEl.innerHTML = '';
    return;
  }

  let html = '';
  let subtotal = 0;
  let totalBottles = 0;

  cart.forEach(item => {
    const price = parseFloat(item.price) || 0;
    const qty = item.quantity || 1;
    const itemTotal = price * qty;
    subtotal += itemTotal;
    totalBottles += qty;

    html += `
      <div class="cart-item">
        <img src="${item.image}" alt="${item.name}">
        <div class="item-info">
          <h4>${item.name}</h4>
          <p>€${price.toFixed(2)}</p>
        </div>
        <div class="quantity-controls">
          <button onclick="changeQuantity('${item.id}', -1)">–</button>
          <strong>${qty}</strong>
          <button onclick="changeQuantity('${item.id}', 1)">+</button>
        </div>
        <div class="price-column">
          <strong>€${itemTotal.toFixed(2)}</strong><br>
          <small onclick="removeFromCart('${item.id}')" style="color:#e74c3c;cursor:pointer;">${t.remove}</small>
        </div>
      </div>`;
  });

  const shippingCost = totalBottles >= 12 ? 0 : 6.99;
  const finalTotal = subtotal + shippingCost;

  container.innerHTML = html;

  if (totalEl) {
    totalEl.innerHTML = `
      <div style="font-size:1.05em; color:#555;">${t.subtotal}: <strong>€${subtotal.toFixed(2)}</strong></div>
      <div style="margin:8px 0;">
        ${shippingCost === 0 ? `<strong style="color:#27ae60;">${t.freeShipping}</strong>` : `Envío a Alemania: <strong>€6.99</strong>`}
      </div>
      ${totalBottles < 12 ? `<p style="color:#e67e22; font-size:0.95em;">${t.freeShippingCondition.replace('{missing}', 12 - totalBottles)}</p>` : ''}
      <hr>
      <div style="font-size:1.65em; font-weight:700;">
        ${t.total}: <strong>€${finalTotal.toFixed(2)}</strong>
      </div>
    `;
  }
}

function addToCart(product) {
  console.log("Intentando agregar:", product);

  let price = parseFloat(product.price);
  if (isNaN(price)) {
    price = parseFloat(String(product.price).replace(/[^0-9.,]/g, '').replace(',', '.'));
  }

  if (isNaN(price) || price <= 0) {
    console.error("Precio inválido para el producto:", product);
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
  renderMiniCartItems();
  showMiniCart();
}

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

// ==================== FUNCIONES PARA CHECKOUT ====================
function showPaymentButtons() {
  console.log("%cshowPaymentButtons ejecutada", "color: #27ae60; font-weight: bold");
  // Aquí pondrás tu código de Stripe más adelante
  const container = document.getElementById('payment-container') || document.getElementById('payment-buttons');
  if (container) {
    container.style.display = 'block';
  }
}
// ==================== IR AL CHECKOUT ====================
function goToCheckout() {
  if (cart.length === 0) {
    const lang = getLang();
    alert(lang === 'es' ? "El carrito está vacío" : 
          lang === 'de' ? "Ihr Warenkorb ist leer" : 
          "Your cart is empty");
    return;
  }

  const currentLang = getLang();
  window.location.href = `/${currentLang}/checkout.html`;
}

// ==================== RENDER PARA CHECKOUT ====================
function renderCheckoutCart() {
  const container = document.getElementById('checkout-cart-items');
  const subtotalEl = document.getElementById('checkout-subtotal');
  const shippingEl = document.getElementById('checkout-shipping');
  const totalEl = document.getElementById('checkout-total');
  const totalBottlesEl = document.getElementById('checkout-total-bottles');

  if (!container) {
    console.warn("No se encontró #checkout-cart-items");
    return;
  }

  const lang = getLang();
  const t = translations[lang] || translations.es;

  if (cart.length === 0) {
    container.innerHTML = `<p style="text-align:center; padding:40px;">${t.empty}</p>`;
    if (subtotalEl) subtotalEl.textContent = '€0.00';
    if (totalEl) totalEl.textContent = '€0.00';
    return;
  }

  let html = '';
  let subtotal = 0;
  let totalBottles = 0;

  cart.forEach(item => {
    const price = parseFloat(item.price) || 0;
    const qty = item.quantity || 1;
    const itemTotal = price * qty;
    subtotal += itemTotal;
    totalBottles += qty;

    html += `
      <div class="checkout-item">
        <img src="${item.image}" alt="${item.name}" style="width:60px; height:80px; object-fit:cover;">
        <div style="flex:1;">
          <strong>${item.name}</strong><br>
          <small>${qty} × €${price.toFixed(2)}</small>
        </div>
        <div style="text-align:right;">
          <strong>€${itemTotal.toFixed(2)}</strong>
        </div>
      </div>`;
  });

  const shippingCost = totalBottles >= 12 ? 0 : 6.99;
  const finalTotal = subtotal + shippingCost;

  container.innerHTML = html;

  if (subtotalEl) subtotalEl.textContent = `€${subtotal.toFixed(2)}`;
  if (shippingEl) {
    shippingEl.innerHTML = shippingCost === 0 
      ? `<strong style="color:#27ae60;">${t.freeShipping}</strong>` 
      : `Envío: <strong>€${shippingCost.toFixed(2)}</strong>`;
  }
  if (totalEl) totalEl.textContent = `€${finalTotal.toFixed(2)}`;
  if (totalBottlesEl) totalBottlesEl.textContent = totalBottles;
}

// Hacerla global

// Hacer funciones globales
window.addToCart = addToCart;
window.removeFromCart = removeFromCart;
window.changeQuantity = changeQuantity;
window.showPaymentButtons = showPaymentButtons;
window.showMiniCart = showMiniCart;
window.closeMiniCart = closeMiniCart;
window.goToCheckout = goToCheckout;
window.renderCheckoutCart = renderCheckoutCart;

// Inicialización
document.addEventListener('DOMContentLoaded', () => {
  updateCartCount();
  console.log("✅ Carrito cargado correctamente");
});

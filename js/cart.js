// js/cart.js - Versión Multilingüe
let cart = JSON.parse(localStorage.getItem('cart')) || [];

const translations = {
  es: {
    title: "Tu Carrito",
    subtotal: "Subtotal",
    shipping: "Envío a Alemania",
    freeShipping: "✅ Envío gratis",
    freeShippingCondition: "Envío gratis comprando 12 botellas o más",
    total: "Total",
    checkout: "Ir a Pagar",
    continue: "← Seguir comprando",
    remove: "Eliminar",
    empty: "Tu carrito está vacío"
  },
  en: {
    title: "Your Cart",
    subtotal: "Subtotal",
    shipping: "Shipping to Germany",
    freeShipping: "✅ Free Shipping",
    freeShippingCondition: "Free shipping on 12 bottles or more",
    total: "Total",
    checkout: "Proceed to Checkout",
    continue: "← Continue Shopping",
    remove: "Remove",
    empty: "Your cart is empty"
  },
  de: {
    title: "Ihr Warenkorb",
    subtotal: "Zwischensumme",
    shipping: "Versand nach Deutschland",
    freeShipping: "✅ Versandkostenfrei",
    freeShippingCondition: "Versandkostenfrei ab 12 Flaschen",
    total: "Gesamt",
    checkout: "Zur Kasse gehen",
    continue: "← Weiter einkaufen",
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
  const lang = getLang();
  return translations[lang][key] || translations.es[key];
}

// js/cart.js - Versión estable con cantidades funcionales
let cart = JSON.parse(localStorage.getItem('cart')) || [];

function updateCartCount() {
  const countEl = document.getElementById('cart-count');
  if (countEl) {
    const total = cart.reduce((sum, item) => sum + (item.quantity || 1), 0);
    countEl.textContent = total;
  }
}

function addToCart(product) {
  const price = parseFloat(product.price);
  if (isNaN(price)) return;

  const existing = cart.find(item => item.id === product.id);

  if (existing) {
    existing.quantity = (existing.quantity || 1) + 1;
  } else {
    cart.push({
      id: product.id,
      name: product.name,
      price: price,
      image: product.image,
      url: product.url,
      quantity: 1
    });
  }

  localStorage.setItem('cart', JSON.stringify(cart));
  updateCartCount();
  showToast(product.name + " agregado al carrito");

  // Si estamos en la página del carrito, actualizamos
  if (typeof renderCart === 'function') renderCart();
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

function showToast(message) {
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
function renderCart() {
  const container = document.getElementById('cart-items');
  const totalEl = document.getElementById('cart-total');
  let cartData = JSON.parse(localStorage.getItem('cart')) || [];

  if (cartData.length === 0) {
    container.innerHTML = `<div class="empty"><h2>${t('empty')}</h2><p>Agrega algunos vinos para continuar.</p></div>`;
    totalEl.innerHTML = '';
    return;
  }

  let html = '';
  let subtotal = 0;
  let totalBottles = 0;

  cartData.forEach(item => {
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
        <div style="text-align:right; min-width:100px;">
          <strong>€${itemTotal.toFixed(2)}</strong><br>
          <small onclick="removeFromCart('${item.id}')" style="color:#e74c3c;cursor:pointer;">${t('remove')}</small>
        </div>
      </div>`;
  });

  const shippingCost = totalBottles >= 12 ? 0 : 6.99;
  const finalTotal = subtotal + shippingCost;

  container.innerHTML = html;

  totalEl.innerHTML = `
    <div style="font-size:1.05em; color:#555;">${t('subtotal')}: <strong>€${subtotal.toFixed(2)}</strong></div>
    <div style="margin:8px 0;">
      ${shippingCost === 0 
        ? `<strong style="color:#27ae60;">${t('freeShipping')}</strong>` 
        : `${t('shipping')}: <strong>€6.99</strong>`}
    </div>
    ${totalBottles < 12 ? `<p style="color:#e67e22; font-size:0.95em;">${t('freeShippingCondition')}</p>` : ''}
    <hr>
    <div style="font-size:1.65em; font-weight:700;">
      ${t('total')}: <strong>€${finalTotal.toFixed(2)}</strong>
    </div>
  `;
}
// Inicializar
document.addEventListener('DOMContentLoaded', () => {
  updateCartCount();
  if (typeof renderCart === 'function' && document.getElementById('cart-items')) {
    renderCart();
  }
});

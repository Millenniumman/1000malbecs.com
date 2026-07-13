// js/cart.js - Versión FINAL
const STRIPE_PUBLISHABLE_KEY = "pk_test_51TbKblCWcVRBeV4k9R59XaDL0oltLt812ixqD5gejGX2RfI3zcazk9f44NEC4XARyIwkuqfqDzy2y3nAfPJ1I8oV00GiQ3cgSE";

let cart = JSON.parse(localStorage.getItem('cart')) || [];

const translations = {
  es: { 
    added: "¡Agregado al carrito!",
    subtotal: "Subtotal", 
    freeShipping: "✅ Envío gratis", 
    freeShippingCondition: "Agrega {missing} botellas más y obtén envío gratis",
    total: "Total" 
  },
  en: { 
    added: "Added to your cart!",
    subtotal: "Subtotal", 
    freeShipping: "✅ Free Shipping", 
    freeShippingCondition: "Add {missing} more bottles and get free shipping",
    total: "Total" 
  },
  de: { 
    added: "Zum Warenkorb hinzugefügt!",
    subtotal: "Zwischensumme", 
    freeShipping: "✅ Versandkostenfrei", 
    freeShippingCondition: "Kaufen Sie {missing} Flaschen mehr und erhalten Sie kostenlosen Versand",
    total: "Gesamt" 
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
// ==================== RENDER CARRITO COMPLETO (página carrito.html) ====================
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
    container.innerHTML = `<div class="empty" style="text-align:center; padding:40px;">
      <h2>${t.empty}</h2>
      <p>Agrega algunos vinos para continuar.</p>
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
        ${shippingCost === 0 ? `<strong style="color:#27ae60;">${t.freeShipping}</strong>` : `${t.shipping}: <strong>€6.99</strong>`}
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
    price = parseFloat(product.price.toString().replace(/[^0-9.]/g, ''));
  }

  if (isNaN(price) || price <= 0) {
    console.error("Precio inválido");
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

// Inicialización
document.addEventListener('DOMContentLoaded', () => {
  updateCartCount();
});

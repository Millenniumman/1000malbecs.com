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
  
  let cart = JSON.parse(localStorage.getItem('cart')) || [];

  if (cart.length === 0) {
    container.innerHTML = `<div class="empty"><h2>Tu carrito está vacío</h2><p>Agrega algunos vinos para continuar.</p></div>`;
    totalEl.innerHTML = '';
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
        <div style="text-align:right; min-width:100px;">
          <strong>€${itemTotal.toFixed(2)}</strong><br>
          <small onclick="removeFromCart('${item.id}')" style="color:#e74c3c;cursor:pointer;">Eliminar</small>
        </div>
      </div>`;
  });

  const shippingCost = (totalBottles >= 12) ? 0 : 6.99;
  const finalTotal = subtotal + shippingCost;

  container.innerHTML = html;

  let shippingHTML = '';
  if (totalBottles >= 12) {
    shippingHTML = `<strong style="color:#27ae60;">✅ Envío gratis</strong>`;
  } else {
    shippingHTML = `
      Envío a Alemania: <strong>€6.99</strong><br>
      <span style="color:#e67e22; font-size:0.95em;">Envío gratis comprando 12 botellas o más</span>
    `;
  }

  totalEl.innerHTML = `
    <div style="font-size:1.05em; color:#555;">Subtotal: <strong>€${subtotal.toFixed(2)}</strong></div>
    <div style="margin:8px 0;">${shippingHTML}</div>
    <hr style="margin:12px 0 8px 0;">
    <div style="font-size:1.65em; font-weight:700;">
      Total: <strong>€${finalTotal.toFixed(2)}</strong>
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

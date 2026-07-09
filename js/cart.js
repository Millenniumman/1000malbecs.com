// js/cart.js - Versión FINAL Multilingüe + Envío
// ==================== STRIPE ====================
const STRIPE_PUBLISHABLE_KEY = "pk_test_51TbKblCWcVRBeV4k9R59XaDL0oltLt812ixqD5gejGX2RfI3zcazk9f44NEC4XARyIwkuqfqDzy2y3nAfPJ1I8oV00GiQ3cgSE";   // ← Cambia por tu clave de test
let cart = JSON.parse(localStorage.getItem('cart')) || [];

const translations = {
  es: {
    subtotal: "Subtotal",
    shipping: "Envío a Alemania",
    freeShipping: "✅ Envío gratis",
    freeShippingCondition: "Envío gratis comprando 12 botellas o más",
    total: "Total",
    remove: "Eliminar",
    empty: "Tu carrito está vacío"
  },
  en: {
    subtotal: "Subtotal",
    shipping: "Shipping to Germany",
    freeShipping: "✅ Free Shipping",
    freeShippingCondition: "Free shipping on 12 bottles or more",
    total: "Total",
    remove: "Remove",
    empty: "Your cart is empty"
  },
  de: {
    subtotal: "Zwischensumme",
    shipping: "Versand nach Deutschland",
    freeShipping: "✅ Versandkostenfrei",
    freeShippingCondition: "Versandkostenfrei ab 12 Flaschen",
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

// ==================== FUNCIONES BÁSICAS ====================
function updateCartCount() {
  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  const totalItems = cart.reduce((sum, item) => sum + (item.quantity || 0), 0);
  
  // Actualiza todos los posibles contadores
  const countElements = document.querySelectorAll('.cart-count, #cart-count, #mobile-cart-count');
  countElements.forEach(el => {
    el.textContent = totalItems;
    if (totalItems > 0) {
      el.style.display = 'inline-block';
    } else {
      el.style.display = 'none';
    }
  });
}

// Llamar en varios momentos
document.addEventListener('DOMContentLoaded', updateCartCount);
window.addEventListener('storage', updateCartCount);

// Si usas botones de agregar al carrito
function addToCart(item) {
  // ... tu código actual de agregar
  updateCartCount();   // ← Asegúrate de llamar esto después de agregar
}

function addToCart(product) {
  console.log("Intentando agregar:", product);

  const price = parseFloat(product.price);
  if (isNaN(price)) {
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
      url: product.url,
      quantity: 1
    });
  }

  localStorage.setItem('cart', JSON.stringify(cart));

  // Actualizaciones importantes
  updateCartCount();
  renderCart();           // Si estás en la página del carrito
  showMiniCart();         // ← Abre el mini-cart

  showToast(product.name);
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

function showToast(productName) {
  const lang = getLang();
  let message = "";

  if (lang === 'es') {
    message = productName + " agregado al carrito";
  } else if (lang === 'en') {
    message = productName + " added to cart";
  } else if (lang === 'de') {
    message = productName + " in den Warenkorb gelegt";
  }

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
function renderCart() {
  const container = document.getElementById('cart-items');
  const totalEl = document.getElementById('cart-total');

  if (!container) return;

  if (cart.length === 0) {
    container.innerHTML = `<div class="empty"><h2>${t('empty')}</h2><p>Agrega algunos vinos para continuar.</p></div>`;
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
async function goToCheckout() {
  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  const customerEmail = document.getElementById('customer-email')?.value.trim();

  if (cart.length === 0) {
    alert("El carrito está vacío");
    return;
  }

  try {
    const response = await fetch('https://1000malbecs-pago.federico-augspach.workers.dev', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        cart: cart,
        language: document.documentElement.lang || 'de',
        isSubscription: false,
        customer_email: customerEmail || null   // ← Enviamos el email
      })
    });

    const data = await response.json();

    if (data.error) throw new Error(data.error);

    if (data.url) {
      window.location.href = data.url;
    }

  } catch (error) {
    alert("Error: " + error.message);
  }
}
function showMiniCart() {
  const miniCart = document.getElementById('mini-cart');
  renderMiniCartItems();
  miniCart.classList.add('open');
}

function closeMiniCart() {
  document.getElementById('mini-cart').classList.remove('open');
}

function renderMiniCartItems() {
  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  const container = document.getElementById('mini-cart-items');
  let html = '';

  if (cart.length === 0) {
    html = '<p>Tu carrito está vacío</p>';
  } else {
    cart.forEach(item => {
      html += `
        <div style="display:flex; margin-bottom:15px; border-bottom:1px solid #eee; padding-bottom:10px;">
          <div style="flex:1;">
            <strong>${item.name}</strong><br>
            Cantidad: ${item.quantity} × €${item.price}
          </div>
          <div style="text-align:right;">
            €${(item.price * item.quantity).toFixed(2)}
          </div>
        </div>
      `;
    });
  }

  container.innerHTML = html;
  document.getElementById('mini-cart-count').textContent = cart.reduce((sum, item) => sum + (item.quantity || 0), 0);
  document.getElementById('mini-cart-total').textContent = '€' + cart.reduce((sum, item) => sum + (item.price * item.quantity), 0).toFixed(2);
}

// Llamar cuando se agrega algo al carrito
function addToCart(item) {
  // Tu código actual para agregar al carrito...

  // Después de agregar:
  showMiniCart();
}
// Inicializar
document.addEventListener('DOMContentLoaded', () => {
  updateCartCount();
  renderCart();
});

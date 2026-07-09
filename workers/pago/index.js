export default {
  async fetch(request, env) {
        const corsHeaders = {
      'Access-Control-Allow-Origin': 'https://www.1000malbecs.com',
      'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization',
      'Access-Control-Allow-Credentials': 'true'
    };

    if (request.method === 'OPTIONS') {
      return new Response(null, { headers: corsHeaders });
    }
async function retrieveSession() {
  const urlParams = new URLSearchParams(window.location.search);
  const sessionId = urlParams.get('session_id');

  console.log("Session ID recibido:", sessionId);

  if (!sessionId) {
    document.getElementById('order-number').textContent = "ERROR";
    document.getElementById('order-summary').innerHTML = "<p style='color:red;'>No se encontró el ID de la sesión.</p>";
    return;
  }

  try {
    console.log("Llamando a /get-session...");

    const response = await fetch('https://1000malbecs-pago.federico-augspach.workers.dev/get-session', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ session_id: sessionId })
    });

    console.log("Respuesta del Worker:", response.status);

    const data = await response.json();
    console.log("Datos recibidos:", data);

    // Número de pedido
    document.getElementById('order-number').textContent = data.id?.slice(-8) || sessionId.slice(-8);

    // Resumen
    let html = `<h3>Resumen del pedido</h3>`;
    if (data.items && data.items.length > 0) {
      data.items.forEach(item => {
        html += `<p>${item.quantity} × ${item.description || 'Producto'} — €${(item.amount/100).toFixed(2)}</p>`;
      });
    }
    html += `<hr><p><strong>Total: €${(data.total || 0).toFixed(2)}</strong></p>`;
    document.getElementById('order-summary').innerHTML = html;

    // Dirección de envío
    if (data.shipping_details) {
      const sd = data.shipping_details;
      document.getElementById('shipping-info').innerHTML = `
        <strong>Dirección de envío:</strong><br>
        ${sd.name || 'Sin nombre'}<br>
        ${sd.address?.line1 || ''}<br>
        ${sd.address?.city || ''}, ${sd.address?.postal_code || ''}<br>
        ${sd.address?.country || ''}
      `;
    } else {
      document.getElementById('shipping-info').innerHTML = `<p>No se encontró dirección de envío.</p>`;
    }

    // Vaciar carrito
    localStorage.removeItem('cart');

  } catch (e) {
    console.error("Error completo:", e);
    document.getElementById('order-summary').innerHTML = `<p style='color:red;'>Error al cargar los detalles.<br>${e.message}</p>`;
  }
}

document.addEventListener('DOMContentLoaded', retrieveSession);
    // ====================== CREATE CHECKOUT SESSION ======================
    if (request.method === 'POST') {
      try {
        const { cart, language = 'de', isSubscription = false } = await request.json();

        if (!cart || !Array.isArray(cart) || cart.length === 0) {
          throw new Error("El carrito está vacío");
        }

        const baseUrl = 'https://www.1000malbecs.com';
        const successUrl = `${baseUrl}/${language}/thank-you.html?session_id={CHECKOUT_SESSION_ID}`;
        const cancelUrl = `${baseUrl}/${language}/carrito.html`;

        const formData = new URLSearchParams();
        formData.append('mode', isSubscription ? 'subscription' : 'payment');
        formData.append('success_url', successUrl);
        formData.append('cancel_url', cancelUrl);

        // Line items
        cart.forEach((item, index) => {
          if (isSubscription) {
            formData.append(`line_items[${index}][price]`, item.priceId);
          } else {
            formData.append(`line_items[${index}][price_data][currency]`, 'eur');
            formData.append(`line_items[${index}][price_data][product_data][name]`, item.name || 'Producto');
            formData.append(`line_items[${index}][price_data][unit_amount]`, Math.round((item.price || 0) * 100));
          }
          formData.append(`line_items[${index}][quantity]`, item.quantity || 1);
        });

        // Envío
        const totalBottles = cart.reduce((sum, item) => sum + (item.quantity || 0), 0);
        const shippingCost = totalBottles >= 12 ? 0 : 699;

        formData.append('shipping_address_collection[allowed_countries][0]', 'ES');
        formData.append('shipping_address_collection[allowed_countries][1]', 'DE');
        formData.append('shipping_options[0][shipping_rate_data][type]', 'fixed_amount');
        formData.append('shipping_options[0][shipping_rate_data][fixed_amount][amount]', shippingCost);
        formData.append('shipping_options[0][shipping_rate_data][fixed_amount][currency]', 'eur');
        formData.append('shipping_options[0][shipping_rate_data][display_name]', shippingCost === 0 ? 'Envío Gratis' : 'Envío Estándar (6,99€)');

        formData.append('payment_intent_data[description]', 'Compra en 1000 Malbecs');
        formData.append('payment_intent_data[statement_descriptor]', '1000MALBECS');

        console.log(`Total botellas: ${totalBottles} | Envío: ${shippingCost/100}€`);

        const stripeResponse = await fetch('https://api.stripe.com/v1/checkout/sessions', {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${env.STRIPE_SECRET_KEY}`,
            'Content-Type': 'application/x-www-form-urlencoded',
          },
          body: formData,
        });

        const session = await stripeResponse.json();

        if (session.error) {
          throw new Error(session.error.message);
        }

        return new Response(JSON.stringify({ url: session.url }), {
          headers: { 
            'Content-Type': 'application/json',
            ...corsHeaders 
          }
        });

      } catch (error) {
        console.error("Error en Worker:", error);
        return new Response(JSON.stringify({ error: error.message }), { 
          status: 400,
          headers: corsHeaders 
        });
      }
    }

    return new Response('Method not allowed', { status: 405, headers: corsHeaders });
  }
};

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
       // ==================== CREATE PAYMENT INTENT (sin librería) ====================
    if (request.url.endsWith('/create-payment-intent') && request.method === 'POST') {
      try {
        const { amount } = await request.json();

        if (!amount || amount < 100) {
          throw new Error("Monto inválido");
        }

        const formData = new URLSearchParams();
        formData.append('amount', Math.round(amount));
        formData.append('currency', 'eur');
        formData.append('automatic_payment_methods[enabled]', 'true');

        const stripeResponse = await fetch('https://api.stripe.com/v1/payment_intents', {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${env.STRIPE_SECRET_KEY}`,
            'Content-Type': 'application/x-www-form-urlencoded',
          },
          body: formData
        });

        const paymentIntent = await stripeResponse.json();

        if (paymentIntent.error) {
          throw new Error(paymentIntent.error.message);
        }

        return new Response(JSON.stringify({ 
          clientSecret: paymentIntent.client_secret 
        }), {
          headers: { 'Content-Type': 'application/json', ...corsHeaders }
        });

      } catch (error) {
        console.error("Error creando PaymentIntent:", error);
        return new Response(JSON.stringify({ error: error.message }), { 
          status: 400, 
          headers: corsHeaders 
        });
      }
    }   
        // ==================== SEND ORDER EMAILS ====================
    if (request.url.endsWith('/send-order-emails') && request.method === 'POST') {
      try {
        const order = await request.json();

        const orderNumber = order.orderId || "SIN-ID";
        const totalAmount = order.total || "0.00";
        const shippingCost = order.shippingCost || 0;
        const isFreeShipping = shippingCost === 0;

        let productsHTML = (order.items || []).map(item => `
          <li>${item.quantity || 1} × ${item.name} 
              ${item.sku ? `(SKU: ${item.sku})` : ''} 
              — €${(item.price * (item.quantity || 1)).toFixed(2)}</li>
        `).join('');

        const emailHTMLClient = `
          <div style="max-width: 600px; margin: 0 auto; font-family: Arial, sans-serif;">
            <img src="https://www.1000malbecs.com/images/1000-malbecs-logo.png" alt="1000 Malbecs" style="width: 180px; margin: 20px 0;">
            
            <h2 style="color: #4A2C59;">¡Gracias por tu compra!</h2>
            <p>Tu pedido ha sido confirmado correctamente.</p>
            
            <div style="background: #f8f8f8; padding: 20px; border-radius: 8px; margin: 25px 0;">
              <p><strong>Nº de Pedido:</strong> ${orderNumber}</p>
              <p><strong>Total pagado:</strong> ${totalAmount}</p>
              
            </div>

            <h3>Productos comprados:</h3>
            <ul style="padding-left: 20px;">${productsHTML}</ul>
${isFreeShipping 
                ? `<p style="color: #27ae60; font-weight: bold;">✅ Envío GRATIS</p>` 
                : `<p><strong>Envío:</strong> €${shippingCost.toFixed(2)}</p>`}
            <p>Te avisaremos cuando enviemos tu pedido.</p>
            <p style="color: #666;">Cualquier duda, contáctanos.</p>
          </div>
        `;

                 // Email para el cliente
        if (order.customer.email) {
          const shippingCost = order.shippingCost || 0;
          const isFreeShipping = shippingCost === 0;
          const subtotal = order.items.reduce((sum, item) => {
            return sum + (parseFloat(item.price) || 0) * (item.quantity || 1);
          }, 0);

          // Productos con monto alineado a la derecha
          let productsHTML = (order.items || []).map(item => {
            const qty = item.quantity || 1;
            const price = parseFloat(item.price) || 0;
            const itemTotal = price * qty;
            return `
              <div style="display: flex; justify-content: space-between; padding: 8px 0; border-bottom: 1px solid #eee;">
                <span>${qty} × ${item.name}</span>
                <span style="font-weight: 500;">€${itemTotal.toFixed(2)}</span>
              </div>`;
          }).join('');

          await fetch('https://api.resend.com/emails', {
            method: 'POST',
            headers: {
              'Authorization': `Bearer ${env.RESEND_API_KEY}`,
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              from: '1000 Malbecs <no-reply@1000malbecs.com>',
              to: [order.customer.email],
              subject: `Confirmación de tu pedido #${orderNumber}`,
              html: `
                <div style="max-width: 600px; margin: 0 auto; font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
                  <img src="https://www.1000malbecs.com/iamges/1000-malbecs-logo.png" alt="1000 Malbecs" style="width: 180px; margin: 30px 0 20px;">

                  <h2 style="color: #4A2C59;">¡Gracias por tu compra!</h2>
                  <p>Tu pedido ha sido confirmado correctamente.</p>

                  <div style="background: #f8f8f8; padding: 25px; border-radius: 8px; margin: 25px 0;">

                    <p><strong>Nº de Pedido:</strong> ${orderNumber}</p>
                    <p><strong>Fecha:</strong> ${new Date().toLocaleDateString('es-ES')}</p>

                    <h3 style="margin: 25px 0 15px;">Productos comprados:</h3>
                    ${productsHTML}

                    <div style="border-top: 2px solid #ddd; padding-top: 15px; margin-top: 15px;">
                      <div style="display: flex; justify-content: space-between; padding: 6px 0;">
                        <span>Subtotal</span>
                        <span>€${subtotal.toFixed(2)}</span>
                      </div>
                      <div style="display: flex; justify-content: space-between; padding: 6px 0;">
                        <span>Envío</span>
                        <span>${isFreeShipping ? 'GRATIS' : '€' + shippingCost.toFixed(2)}</span>
                      </div>
                      <div style="display: flex; justify-content: space-between; padding: 12px 0; font-size: 1.25em; font-weight: bold; border-top: 2px solid #4A2C59; margin-top: 10px;">
                        <span>Total pagado</span>
                        <span>€${(subtotal + shippingCost).toFixed(2)}</span>
                      </div>
                    </div>
                  </div>

                  <p style="text-align: center; margin-top: 30px;">
                    Te avisaremos cuando enviemos tu pedido.<br>
                    Cualquier duda, contáctanos a <a href="mailto:ventas@1000malbecs.com">ventas@1000malbecs.com</a>
                  </p>

                  <hr style="margin: 30px 0;">
                  <p style="text-align: center; color: #666; font-size: 0.95em;">
                    Gracias por elegir 1000 Malbecs<br>
                    <strong>Argentina, un click away</strong>
                  </p>
                </div>
              `
            })
          });
        }        
        // Email para ventas (con teléfono)
        const emailHTMLSeller = `
          <h2>Nuevo Pedido Recibido</h2>
          <p><strong>Nº Pedido:</strong> ${orderNumber}</p>
          <p><strong>Total:</strong> ${totalAmount}</p>
          <p><strong>Envío:</strong> ${isFreeShipping ? 'GRATIS' : '€' + shippingCost.toFixed(2)}</p>
          <hr>
          <p><strong>Cliente:</strong> ${order.customer.name}</p>
          <p><strong>Email:</strong> ${order.customer.email}</p>
          <p><strong>Teléfono:</strong> ${order.customer.phone || 'No proporcionado'}</p>
          <p><strong>Dirección:</strong> ${order.customer.address}, ${order.customer.city} ${order.customer.postalCode}</p>
          <hr>
          <h3>Productos:</h3>
          <ul>${productsHTML}</ul>
        `;

        await fetch('https://api.resend.com/emails', {
          method: 'POST',
          headers: { 'Authorization': `Bearer ${env.RESEND_API_KEY}`, 'Content-Type': 'application/json' },
          body: JSON.stringify({
            from: '1000 Malbecs <no-reply@1000malbecs.com>',
            to: ['ventas@1000malbecs.com'],
            subject: `Nuevo Pedido #${orderNumber}`,
            html: emailHTMLSeller
          })
        });

        return new Response(JSON.stringify({ success: true }), { headers: corsHeaders });

      } catch (error) {
        console.error("Error enviando emails:", error);
        return new Response(JSON.stringify({ error: error.message }), { status: 500, headers: corsHeaders });
      }
    }
    

    // GET SESSION
    if (request.url.endsWith('/get-session') && request.method === 'POST') {
      try {
        const { session_id } = await request.json();
        const stripeResponse = await fetch(`https://api.stripe.com/v1/checkout/sessions/${session_id}?expand[]=line_items`, {
          headers: { 'Authorization': `Bearer ${env.STRIPE_SECRET_KEY}` },
        });
        const session = await stripeResponse.json();

        return new Response(JSON.stringify({
          id: session.id,
          total: session.amount_total || 0,
          currency: session.currency,
          customer_email: session.customer_details?.email,
          shipping_details: session.shipping_details,
          items: session.line_items?.data ? session.line_items.data.map(item => ({
            quantity: item.quantity,
            description: item.description,
            amount: item.amount_total
          })) : []
        }), {
          headers: { 'Content-Type': 'application/json', ...corsHeaders }
        });
      } catch (e) {
        return new Response(JSON.stringify({ error: e.message }), { status: 400, headers: corsHeaders });
      }
    }

    // CREATE CHECKOUT
    if (request.method === 'POST') {
      try {
        const { cart, language = 'de', isSubscription = false } = await request.json();

        if (!cart || cart.length === 0) throw new Error("Carrito vacío");

        const baseUrl = 'https://www.1000malbecs.com';
        const successUrl = `${baseUrl}/${language}/thank-you.html?session_id={CHECKOUT_SESSION_ID}`;
        const cancelUrl = `${baseUrl}/${language}/carrito.html`;

        const formData = new URLSearchParams();
        formData.append('mode', isSubscription ? 'subscription' : 'payment');
        formData.append('success_url', successUrl);
        formData.append('cancel_url', cancelUrl);

        cart.forEach((item, index) => {
          formData.append(`line_items[${index}][price_data][currency]`, 'eur');
          formData.append(`line_items[${index}][price_data][product_data][name]`, item.name);
          formData.append(`line_items[${index}][price_data][unit_amount]`, Math.round(item.price * 100));
          formData.append(`line_items[${index}][quantity]`, item.quantity || 1);
        });

        const totalBottles = cart.reduce((sum, item) => sum + (item.quantity || 0), 0);
        const shippingCost = totalBottles >= 12 ? 0 : 699;

        formData.append('shipping_address_collection[allowed_countries][0]', 'ES');
        formData.append('shipping_address_collection[allowed_countries][1]', 'DE');
        formData.append('shipping_options[0][shipping_rate_data][type]', 'fixed_amount');
        formData.append('shipping_options[0][shipping_rate_data][fixed_amount][amount]', shippingCost);
        formData.append('shipping_options[0][shipping_rate_data][fixed_amount][currency]', 'eur');
        formData.append('shipping_options[0][shipping_rate_data][display_name]', shippingCost === 0 ? 'Envío Gratis' : 'Envío Estándar (6,99€)');
        if (customer_email) {
          formData.append('customer_email', customer_email);
        }
        const stripeResponse = await fetch('https://api.stripe.com/v1/checkout/sessions', {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${env.STRIPE_SECRET_KEY}`,
            'Content-Type': 'application/x-www-form-urlencoded',
          },
          body: formData,
        });

        const session = await stripeResponse.json();

        if (session.error) throw new Error(session.error.message);

        
        return new Response(JSON.stringify({ url: session.url }), {
          headers: { 'Content-Type': 'application/json', ...corsHeaders }
        });

      } catch (error) {
        console.error("Error:", error);
        return new Response(JSON.stringify({ error: error.message }), { status: 400, headers: corsHeaders });
      }
    }

    return new Response('Method not allowed', { status: 405, headers: corsHeaders });
  }
};

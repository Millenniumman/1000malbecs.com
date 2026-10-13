export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const corsHeaders = {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
    };

    if (request.method === "OPTIONS") {
      return new Response(null, { headers: corsHeaders });
    }

    try {
      // GET /reviews?wine=slug
      if (url.pathname === "/reviews" && request.method === "GET") {
        const wine = url.searchParams.get("wine");
        if (!wine) {
          return Response.json({ error: "Falta el parámetro wine" }, { status: 400, headers: corsHeaders });
        }

        const { results } = await env.DB.prepare(
          "SELECT id, rating, comment, author_name, created_at FROM reviews WHERE wine_slug = ? AND approved = 1 ORDER BY created_at DESC"
        ).bind(wine).all();

        return Response.json({ reviews: results }, { headers: corsHeaders });
      }

      // POST /reviews
      if (url.pathname === "/reviews" && request.method === "POST") {
        const body = await request.json();
        const { wine_slug, rating, comment, author_name } = body;

        if (!wine_slug || !rating || !author_name || !comment) {
          return Response.json({ error: "Faltan campos obligatorios" }, { status: 400, headers: corsHeaders });
        }

        if (rating < 1 || rating > 5) {
          return Response.json({ error: "Rating inválido" }, { status: 400, headers: corsHeaders });
        }

        await env.DB.prepare(
          "INSERT INTO reviews (wine_slug, rating, comment, author_name, approved) VALUES (?, ?, ?, ?, 0)"
        ).bind(wine_slug, rating, comment, author_name).run();

        return Response.json({ success: true, message: "Reseña enviada (pendiente de moderación)" }, { headers: corsHeaders });
      }

      return new Response("Not found", { status: 404, headers: corsHeaders });
    } catch (err) {
      return Response.json({ error: err.message }, { status: 500, headers: corsHeaders });
    }
  },
};

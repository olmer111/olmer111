# 🐻 Bumo Landing Page · lep.ai

Landing page de producto estilo Shopify para vender posters de **Bumo**, un osito
kawaii menta/crema. Marca: **lep.ai**. Copy en español, tono cálido y emocional.

Tomada como referencia la estructura de una página de producto de un tema Shopify
(estilo "LOST"), adaptada a una estética pastel menta/crema en vez de neón.

## Archivos
- `index.html` — Landing completa, funcional, responsive (selector de tamaño que
  actualiza el precio, swatches de color, cantidad, añadir al carrito con toast).
- `COPY.md` — Todo el copy organizado por sección, listo para pegar en Shopify.
- `../assets/bumo-poster.jpg` — Arte del personaje Bumo.

## Estructura
1. **Header** — logo lep.ai + nav (Posters/Bestsellers/Bundles/Nosotros/Reseñas) + barra de envío gratis.
2. **Hero/Producto** — badge Best Seller, contador social, imagen ambientada, título emocional,
   subtítulo de nicho, rating, selector de tamaño (6), swatches (5), precio + CTA + PayPal, 3 trust badges.
3. **Beneficios** — 5 iconos enfocados en emoción.
4. **Prueba social** — reseñas reales con foto, nombre, estrellas y producto en el espacio del cliente.

## Ver localmente
Abre `index.html` en el navegador, o sirve la carpeta raíz del repo:
```bash
python3 -m http.server 8000
# luego visita http://localhost:8000/bumo-landing/
```

> Nota: la página usa `../assets/bumo-poster.jpg`, por eso debe servirse desde la
> raíz del repositorio (no solo desde la carpeta `bumo-landing/`).

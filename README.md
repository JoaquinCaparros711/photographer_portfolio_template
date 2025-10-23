# Plantilla de Portafolio Fotográfico

Plantilla moderna y minimalista creada con React y Vite para fotógrafos que buscan una presencia digital elegante. El diseño utiliza fondo negro, tipografías limpias y animaciones suaves con GSAP ScrollTrigger.

## Características

- Hero inmersivo con video full-screen y métricas clave.
- Capa de precarga animada basada en progreso real de las imágenes.
- Secciones horizontales animadas con GSAP ScrollTrigger.
- Bloques de “Sobre mí”, servicios, testimonios, journal y formulario de contacto.
- Galerías que utilizan imágenes locales (`public/images`, tamaño sugerido 1240x874).

## Scripts

- `npm run dev` – inicia el servidor de desarrollo (http://localhost:5173).
- `npm run build` – compila la aplicación para producción.
- `npm run preview` – sirve la build de producción.

## Tecnologías

- React 18 + Vite 5
- GSAP + ScrollTrigger
- imagesLoaded para controlar la carga de las galerías

## Uso

1. Instala dependencias: `npm install`
2. Lanza el entorno local: `npm run dev`
3. Personaliza textos, enlaces de contacto, datos del journal y servicios en `src/App.jsx`. Las imágenes y video locales se leen desde `public/images/`.

¡Listo para adaptar a tu estilo fotográfico!

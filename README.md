# Landing Page - Consultorio de Kinesiología LN

Bienvenido al repositorio de la landing page para el Consultorio de Kinesiología LN. Este proyecto está desarrollado con **Astro** para garantizar un sitio web rápido, eficiente y optimizado para SEO, con una UI/UX moderna y completamente responsiva.

## 🚀 Descripción

Este sitio web sirve como punto de contacto digital para el consultorio, permitiendo a los pacientes conocer las especialidades ofrecidas, visualizar las instalaciones médicas y facilitar el contacto o reserva de turnos mediante una agenda virtual.

## 🛠️ Tecnologías Utilizadas

- **[Astro](https://astro.build):** Framework principal para la generación veloz del sitio estático.
- **[Tailwind CSS v3](https://tailwindcss.com):** Framework de utilidad CSS para estilos modernos (Downgrade a v3 por estabilidad en Windows/Node.js).
- **Vanilla JavaScript:** Funcionalidad interactiva del lado del cliente (Navegación móvil, pestañas de servicios, scroll espía).
- **NPM:** Gestor de paquetes de Node.

## ✨ Secciones Principales

1.  **Hero:** Presentación rápida con llamado a la acción.
2.  **Obras Sociales (Carousel):** Listado infinito visual de las principales coberturas médicas aceptadas.
3.  **Servicios (Tabs):** Diferenciación dinámica entre áreas (Kinesiología / Estética) sin recargar la página.
4.  **Galería de Rehabilitación:** Grilla de imágenes con scroll/stack optimizado según dispositivo.
5.  **Agenda Turnos:** Guía de 3 simples pasos para tomar turnos online.
6.  **Contacto:** Formulario y listado de horarios, dirección y mapa (Google Maps Embed).

## 🧞 Comandos de Desarrollo

Todos los comandos se ejecutan desde la raíz del proyecto en la terminal:

| Comando           | Acción                                                                           |
| :---------------- | :------------------------------------------------------------------------------- |
| `npm install`     | Instala todas las dependencias del proyecto.                                     |
| `npm run dev`     | Inicia el servidor de desarrollo local, usualmente en `localhost:4321`.          |
| `npm run build`   | Compila el sitio estático para producción en la carpeta `./dist/`.               |
| `npm run preview` | Inicia un servidor local para previsualizar los archivos compilados en `/dist/`. |

## 📂 Estructura del Proyecto

```text
/
├── public/                # Archivos estáticos
├── src/
│   ├── assets/            # Imágenes, iconos y recursos visuales (.svg, .png, etc.)
│   ├── components/
│   │   ├── islands/       # Componentes interactivos (antiguos)
│   │   └── static/        # Componentes base en Astro puro (Header, Hero, Services, Contact...)
│   ├── layouts/           # Plantillas estructuradas del documento HTML
│   ├── styles/            # Archivos CSS globales y variables de Tailwind
│   └── pages/             # Rutas (ej. index.astro)
├── astro.config.mjs       # Configuración de Astro e integraciones
├── tailwind.config.mjs    # Tokens y configuración de colores de la UI
└── package.json           # Dependencias y scripts
```

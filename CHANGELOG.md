# Changelog

All notable changes to this project will be documented in this file.

The format is based on Keep a Changelog, and this project adheres to Semantic Versioning.

## [Unreleased]

- Mejoras planificadas:
  - Añadir reproductor de música integrado.
  - Conectar con API externa (por ejemplo, Spotify).
  - Añadir animaciones con Framer Motion.

## [0.1.0] - 2025-09-17
### Añadido
- Estructura inicial del proyecto creada con Create React App.
- Componentes base:
  - `Header`, `Siderbar`, `MusicPlayer` (layout).
  - `ArtistsSection`, `GenresSection`, `RecommendedSection`, `WelcomeBanner` (secciones).
  - Componentes comunes: `Avatar`, `Button`, `Card`, `SearchBar`.
- Contexto de reproducción: `PlayerContext`.
- Rutas y páginas: `Home`, `Artists`, `Genres`, `Explore`, `Playlists`.
- Estilos globales y variables en `src/Styles`.
- Datos de ejemplo en `src/utils/mockData.js`.

### Cambios
- Configuración inicial en `package.json` con dependencias principales (React, react-router-dom, react-icons).

### Corregido
- N/A (versión inicial)


## Cómo usar
- Instalar dependencias: `npm install`
- Ejecutar en desarrollo: `npm start`
- Crear build de producción: `npm run build`


## Notas
- Fecha basada en la última modificación detectada en el repositorio durante la generación del changelog.
- Este archivo será actualizado para cada nueva versión; por favor, mover los puntos relevantes de "Unreleased" a una nueva versión y fijar la fecha cuando se publique.

# Frontend Bizly

Aplicación React 18 + Vite. La información operativa se obtiene desde la API REST; ya no se usa `localStorage` como base de datos. `localStorage` solo conserva los tokens de sesión y la información mínima del usuario autenticado.

## Desarrollo

```bash
cp .env.example .env
npm install
npm run dev
```

Configure `VITE_API_URL` si la API no está en `http://localhost:3001`.

La interfaz incluye diseño responsive, navegación activa, breadcrumbs, paginación, filtros, ordenamiento, mensajes de estado, control por rol, gestión de cuenta y carga CSV de inventario.

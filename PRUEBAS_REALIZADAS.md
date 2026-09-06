# Pruebas realizadas — Bizly 1.1

## Validaciones completadas

- Backend: todos los archivos JavaScript propios pasan `node --check`.
- Frontend: 25 archivos `.js/.jsx` analizados sin errores de sintaxis.
- Frontend: todos los imports relativos resuelven a archivos existentes.
- CSS: `src/index.css` se analiza correctamente y contiene breakpoints responsive.
- Seguridad de archivos: no se entrega ningún `.env` real ni carpetas `node_modules`.
- Base de datos: se dejó un único script SQL oficial: `BizlyDB.sql`.
- Inicio del backend: `package.json` apunta a `server.js`, coincidiendo exactamente con el archivo existente.

## Validación pendiente en un equipo con dependencias y MySQL

No fue posible completar `npm ci` + `npm run build` dentro del entorno de revisión porque la instalación de dependencias agotó el tiempo disponible y la caché offline no contenía todos los paquetes. No se añadieron dependencias nuevas respecto a las ya declaradas, y las comprobaciones estáticas anteriores sí finalizaron correctamente.

Antes de entregar o desplegar, se recomienda ejecutar:

```bash
# Backend
cd bizly-vite/bizly/Backend
npm ci
npm run check
npm start

# Frontend
cd ..
npm ci
npm run build
npm run dev
```

También debe importarse `BizlyDB.sql`, crear los `.env` a partir de los `.env.example` y probar los flujos de registro, verificación, inicio de sesión, CRUD, venta, anulación, reportes y cierre de sesión contra una instancia MySQL real.

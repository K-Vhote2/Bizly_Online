# Correcciones realizadas — Bizly 1.1

## Corregido directamente

1. Se eliminó la duplicidad de modelos SQL y `BizlyDB.sql` quedó como esquema oficial.
2. Se sustituyó `Server.js` por `server.js` y `package.json` apunta al archivo correcto.
3. Las credenciales de MySQL dejaron de estar escritas en el código.
4. Se eliminó el `.env` entregado y se agregó `.gitignore` + `.env.example`.
5. Se retiraron del SQL usuarios, correos personales, tokens y contraseñas de prueba.
6. El primer administrador se crea con `npm run create-admin` y bcrypt.
7. Se implementó middleware JWT real en rutas protegidas.
8. Se implementó control de rol admin en auditoría, configuración y usuarios.
9. Se agregaron access token, refresh token, rotación y sesiones revocables.
10. Se implementó cierre de sesión actual y cierre en todos los dispositivos.
11. Se agregó bloqueo temporal por intentos fallidos y rate limiting básico.
12. Se agregó verificación de correo para registro.
13. Los códigos de recuperación/verificación se almacenan hasheados y expiran.
14. Se elevó la política de contraseña a mínimo 8 caracteres con letras y números.
15. La API ya no devuelve hashes de contraseña mediante `/usuarios`.
16. La auditoría se genera desde el backend y obtiene el usuario desde el JWT.
17. Se agregó IP y user-agent a auditoría.
18. Se corrigió el bug de doble anulación de venta.
19. Se corrigió la venta sin stock suficiente.
20. El cálculo de precios, total e IVA se realiza del lado del servidor.
21. Venta, descuento de stock, detalle y actualización de cliente se ejecutan con transacciones MySQL.
22. La anulación restaura inventario y corrige las compras del cliente.
23. Se implementó CRUD completo de clientes con borrado lógico.
24. Productos y clientes usan borrado lógico para conservar históricos.
25. Se agregaron restricciones únicas e índices relevantes en MySQL.
26. Se implementó configuración persistente en base de datos.
27. Se agregó reporte parametrizado por fechas en el backend.
28. Se agregó carga masiva de inventario mediante CSV.
29. Se agregó gestión administrativa de usuarios y roles.
30. El frontend envía el token en cada petición y renueva la sesión automáticamente.
31. La sesión guardada se valida con `/auth/me` al abrir la aplicación.
32. Se reemplazaron errores operativos principales por notificaciones visuales tipo toast.
33. Se agregó paginación a ventas, clientes, inventario y auditoría.
34. Se agregó ordenamiento de ventas y se conservaron filtros/búsquedas.
35. Se agregaron breadcrumbs.
36. Se agregó diseño responsive con menú móvil y grids adaptativos.
37. El dashboard ahora muestra métricas diferentes según admin/empleado.
38. Se agregó página “Mi cuenta”.
39. Se agregó cierre de todas las sesiones desde la interfaz.
40. Se agregó eliminación/desactivación de cuenta con doble confirmación.
41. Se agregaron términos y política de privacidad visibles desde el registro.
42. El consentimiento se registra con fecha y versión de política.
43. Se actualizó la documentación de instalación y API.
44. Se añadieron cabeceras básicas de seguridad, CORS configurable y HSTS en producción.
45. La API devuelve errores controlados sin exponer mensajes internos de MySQL.
46. Se impide desactivar o degradar al último administrador activo y se protege el cambio de rol propio.

## Aspectos que dependen del entorno o del equipo

Estos elementos no se pueden “corregir” únicamente editando el ZIP:

- HTTPS real: requiere desplegar en un dominio/hosting con certificado TLS.
- Historial Git, commits y ramas: el ZIP no contiene el historial del repositorio original.
- Evidencia de Trello/Jira/GitHub Projects: debe provenir de la herramienta utilizada por el equipo.
- Asistencia, autoría y participación de aprendices: son evidencias de seguimiento humano.
- Envío real de correo: requiere credenciales SMTP válidas en `.env`.

La aplicación deja preparado el soporte técnico para HTTPS, correo y seguridad de producción, pero esas credenciales/infraestructura no deben incluirse dentro del proyecto entregado.

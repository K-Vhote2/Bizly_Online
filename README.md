# Bizly — Sistema Integral de Gestión Comercial

Bizly es una plataforma web desarrollada para apoyar la transformación digital de microempresas, emprendimientos y pequeños negocios mediante la automatización y centralización de sus procesos administrativos y comerciales.

La aplicación permite gestionar productos, inventario, ventas, clientes, usuarios, reportes, estadísticas y auditoría desde una única plataforma web.

La versión actual incorpora una arquitectura cliente-servidor compuesta por un frontend desarrollado con React, una API REST desarrollada con Node.js y Express, y una base de datos MySQL.

---

## Problemática

Muchos pequeños negocios administran sus operaciones mediante registros manuales, hojas de cálculo o herramientas que no se encuentran integradas entre sí.

Esta situación puede ocasionar:

* Errores en el control de inventario.
* Pérdidas económicas.
* Duplicidad de información.
* Falta de trazabilidad de las operaciones.
* Dificultades para realizar seguimiento a las ventas.
* Problemas para administrar clientes y productos.
* Falta de información consolidada para la toma de decisiones.

Bizly surge como una solución tecnológica orientada a facilitar la administración de estos negocios mediante una plataforma centralizada, segura y de fácil utilización.

---

# Objetivo General

Desarrollar una plataforma web integral para la gestión comercial y administrativa de microempresas, permitiendo automatizar procesos relacionados con inventario, ventas, clientes, usuarios y generación de reportes.

---

# Funcionalidades Principales

Bizly cuenta actualmente con los siguientes módulos y funcionalidades:

* Gestión de productos.
* Control de inventario.
* Registro y seguimiento de ventas.
* Anulación controlada de ventas.
* Administración de clientes.
* Dashboard estadístico.
* Generación de reportes.
* Auditoría de operaciones.
* Configuración del sistema.
* Gestión de usuarios.
* Gestión de roles y permisos.
* Alertas de inventario.
* Importación masiva de productos mediante CSV.
* Inicio y cierre de sesión.
* Recuperación de contraseña.
* Verificación de correo electrónico.
* Cierre de sesión en todos los dispositivos.
* Gestión de sesiones.
* Registro del consentimiento de términos y política de privacidad.

---

# Arquitectura del Sistema

Bizly utiliza una arquitectura **Cliente-Servidor**.

```text
┌──────────────────────────┐
│        FRONTEND          │
│     React + Vite         │
│                          │
│ Interfaz de usuario      │
└────────────┬─────────────┘
             │
             │ HTTP / REST
             │ JSON
             ▼
┌──────────────────────────┐
│         BACKEND          │
│  Node.js + Express.js    │
│                          │
│ API REST                 │
│ Autenticación            │
│ Reglas de negocio        │
│ Validaciones             │
└────────────┬─────────────┘
             │
             │ SQL
             ▼
┌──────────────────────────┐
│      BASE DE DATOS       │
│          MySQL           │
│                          │
│ Usuarios                 │
│ Productos                │
│ Clientes                 │
│ Ventas                   │
│ Auditoría                │
│ Configuración            │
└──────────────────────────┘
```

El frontend no accede directamente a la base de datos.

Todas las operaciones se realizan mediante peticiones a la API REST del backend.

---

# Tecnologías Utilizadas

## Frontend

* React
* JavaScript
* CSS3
* Vite
* Context API
* Chart.js
* Tabler Icons

## Backend

* Node.js
* React 
* API REST
* JavaScript
* JWT
* bcrypt
* mysql2
* dotenv
* Nodemailer

## Base de Datos

* MySQL 8 o superior

## Herramientas de Desarrollo

* Git
* GitHub
* Figma
* Visual Studio Code
* MySQL Workbench
* npm

---

# Requisitos

Para ejecutar Bizly localmente se requiere:

* Node.js 18 o superior.
* npm.
* MySQL 8 o superior.
* MySQL Workbench recomendado.
* Navegador web moderno.

Para comprobar las versiones instaladas:

```bash
node -v
npm -v
```

---

# Estructura General del Proyecto

```text
Bizly-project-main/
│
├── BizlyDB.sql
│
├── README.md
├── CORRECCIONES_REALIZADAS.md
├── PRUEBAS_REALIZADAS.md
│
├── database/
│
├── Documentación Bizly 1.0/
│
└── bizly-vite/
    └── bizly/
        │
        ├── index.html
        ├── vite.config.js
        ├── package.json
        ├── .env.example
        │
        ├── public/
        │   ├── privacidad.html
        │   └── terminos.html
        │
        ├── src/
        │   ├── main.jsx
        │   ├── App.jsx
        │   ├── index.css
        │   │
        │   ├── context/
        │   │   └── AppContext.jsx
        │   │
        │   ├── components/
        │   │   ├── Sidebar.jsx
        │   │   ├── Modal.jsx
        │   │   ├── Badge.jsx
        │   │   ├── BarChart.jsx
        │   │   └── DoughnutChart.jsx
        │   │
        │   └── pages/
        │       ├── Dashboard.jsx
        │       ├── Ventas.jsx
        │       ├── Inventario.jsx
        │       ├── Clientes.jsx
        │       ├── Reportes.jsx
        │       ├── Auditoria.jsx
        │       └── Configuracion.jsx
        │
        └── Backend/
            ├── server.js
            ├── package.json
            ├── .env.example
            ├── API.md
            │
            ├── config/
            ├── middleware/
            ├── scripts/
            ├── services/
            └── utils/
```

---

# Instalación

La aplicación necesita ejecutar tres componentes:

1. Base de datos MySQL.
2. Backend Node.js/Express.
3. Frontend React/Vite.

---

# 1. Configuración de la Base de Datos

El archivo oficial de base de datos del proyecto es:

```text
BizlyDB.sql
```

Este es el único esquema que debe utilizarse.

## Importar desde MySQL Workbench

1. Abrir MySQL Workbench.
2. Conectarse al servidor MySQL.
3. Seleccionar:

```text
File → Open SQL Script
```

4. Abrir:

```text
BizlyDB.sql
```

5. Ejecutar todo el script.

La base utilizada por el sistema es:

```text
bizly_db
```

El archivo SQL no debe contener contraseñas reales, tokens de sesión ni credenciales privadas.

---

# 2. Instalación del Backend

Abrir una terminal desde la raíz del proyecto y ejecutar:

```bash
cd bizly-vite/bizly/Backend
```

Instalar las dependencias:

```bash
npm install
```

Crear el archivo de configuración local:

```bash
cp .env.example .env
```

En Windows también puede copiarse manualmente `.env.example` y cambiar el nombre de la copia a:

```text
.env
```

---

# Configuración del Backend

Editar el archivo:

```text
Backend/.env
```

Ejemplo de configuración:

```env
NODE_ENV=development

PORT=3001

CORS_ORIGIN=http://localhost:5173

FORCE_HTTPS=false

DB_HOST=127.0.0.1
DB_PORT=3306
DB_USER=root
DB_PASSWORD=TU_CONTRASEÑA_MYSQL
DB_NAME=bizly_db

JWT_SECRET=CAMBIAR_POR_UN_SECRETO_LARGO
JWT_REFRESH_SECRET=CAMBIAR_POR_OTRO_SECRETO_LARGO

ADMIN_NAME=Administrador
ADMIN_LASTNAME=Bizly
ADMIN_EMAIL=admin@bizly.com
ADMIN_PASSWORD=CAMBIAR_POR_UNA_CLAVE_SEGURA

EMAIL_SERVICE=gmail
EMAIL_FROM_NAME=Bizly
EMAIL_USER=
EMAIL_PASS=

DEV_SHOW_EMAIL_CODES=true
```

Las credenciales utilizadas deben corresponder al servidor MySQL instalado en el equipo.

El archivo `.env` contiene información privada y **no debe subirse al repositorio Git**.

---

# Crear el Primer Administrador

Una vez configurada correctamente la conexión con MySQL, ejecutar:

```bash
npm run create-admin
```

El script crea el primer usuario administrador utilizando los datos definidos en el archivo `.env`.

Ejemplo:

```env
ADMIN_NAME=Administrador
ADMIN_LASTNAME=Bizly
ADMIN_EMAIL=admin@bizly.com
ADMIN_PASSWORD=Bizly123456
```

Las contraseñas no se almacenan directamente en texto plano.

El backend utiliza bcrypt para generar el hash correspondiente.

---

# Iniciar el Backend

Ejecutar:

```bash
npm start
```

Por defecto, la API estará disponible en:

```text
http://localhost:3001
```

La terminal del backend debe permanecer abierta mientras se utiliza el sistema.

---

# 3. Instalación del Frontend

Abrir una nueva terminal.

Ir a:

```bash
cd bizly-vite/bizly
```

Instalar las dependencias:

```bash
npm install
```

Crear el archivo de variables de entorno:

```bash
cp .env.example .env
```

El archivo debe contener:

```env
VITE_API_URL=http://localhost:3001
```

---

# Iniciar el Frontend

Ejecutar:

```bash
npm run dev
```

Vite mostrará una dirección similar a:

```text
http://localhost:5173
```

Abrir esta dirección desde el navegador.

---

# Ejecución del Sistema

Durante el desarrollo deben permanecer funcionando simultáneamente:

## Terminal 1 — Backend

Ruta:

```text
bizly-vite/bizly/Backend
```

Comando:

```bash
npm start
```

Servidor:

```text
http://localhost:3001
```

## Terminal 2 — Frontend

Ruta:

```text
bizly-vite/bizly
```

Comando:

```bash
npm run dev
```

Aplicación:

```text
http://localhost:5173
```

---

# Scripts Disponibles

## Frontend

| Comando           | Descripción                           |
| ----------------- | ------------------------------------- |
| `npm run dev`     | Inicia el servidor de desarrollo      |
| `npm run build`   | Genera la compilación para producción |
| `npm run preview` | Previsualiza el build de producción   |

## Backend

| Comando                | Descripción                              |
| ---------------------- | ---------------------------------------- |
| `npm start`            | Inicia la API REST                       |
| `npm run create-admin` | Crea el primer administrador del sistema |

---

# Base de Datos

Bizly utiliza **MySQL como sistema de persistencia principal**.

Los datos ya no dependen de `localStorage` para almacenar la información comercial.

La información permanente del sistema se almacena en MySQL, incluyendo:

* Usuarios.
* Roles.
* Productos.
* Inventario.
* Clientes.
* Ventas.
* Detalles de venta.
* Sesiones.
* Auditoría.
* Configuración.
* Consentimientos.
* Tokens y mecanismos de recuperación según corresponda.

El frontend obtiene y modifica esta información mediante la API REST.

---

# Seguridad Implementada

Bizly incorpora diferentes mecanismos orientados a proteger el sistema y la información de los usuarios.

Entre ellos se encuentran:

* Autenticación mediante JWT.
* Access Token.
* Refresh Token.
* Sesiones almacenadas y revocables.
* Cierre de sesión individual.
* Cierre de sesión en todos los dispositivos.
* Middleware de autenticación.
* Middleware de autorización por roles.
* Contraseñas protegidas mediante bcrypt.
* Verificación de correo electrónico.
* Recuperación de contraseña.
* Códigos de recuperación con expiración.
* Códigos almacenados de forma segura.
* Bloqueo temporal ante múltiples intentos fallidos.
* Rate limiting en funciones sensibles.
* Consultas SQL parametrizadas.
* Validación de entradas.
* Protección de información interna de MySQL.
* Auditoría generada desde el servidor.
* Variables privadas almacenadas en `.env`.
* `.env` excluido del repositorio.
* Configuración de CORS.
* Cabeceras básicas de seguridad.
* HSTS preparado para producción.

En un entorno de producción el sistema debe desplegarse mediante **HTTPS** y utilizar secretos seguros y aleatorios.

---

# Roles y Permisos

Bizly diferencia las funcionalidades disponibles de acuerdo con el rol del usuario.

Entre los roles principales se encuentran:

```text
Administrador
Empleado
```

El backend valida los permisos correspondientes antes de permitir operaciones sensibles.

Los módulos administrativos, de auditoría, configuración y gestión de usuarios poseen controles adicionales de autorización.

La seguridad no depende únicamente de ocultar opciones en el frontend.

---

# Reglas de Negocio de Ventas

El proceso de ventas se encuentra controlado desde el backend.

El servidor:

* Obtiene los precios directamente desde MySQL.
* Calcula los valores de la venta.
* No confía en totales enviados por el navegador.
* Verifica que exista stock suficiente.
* Evita que el inventario quede con cantidades inválidas.
* Actualiza el inventario dentro de una transacción.
* Permite anular ventas.
* Impide que una venta sea anulada más de una vez.
* Devuelve el stock cuando una venta es anulada.
* Actualiza las métricas correspondientes del cliente.

Estas operaciones se realizan de forma controlada para mantener la consistencia de la información.

---

# Gestión de Inventario

El módulo de inventario permite:

* Crear productos.
* Editar productos.
* Consultar productos.
* Controlar cantidades disponibles.
* Identificar productos con bajo stock.
* Buscar productos.
* Filtrar información.
* Ordenar información.
* Importar productos desde archivos CSV.

---

# Importación Masiva mediante CSV

El sistema permite cargar hasta 500 productos desde un archivo CSV.

Los encabezados mínimos son:

```text
nombre,precio,stock
```

Los encabezados opcionales son:

```text
sku,categoria
```

Ejemplo:

```csv
nombre,sku,categoria,precio,stock
Mouse Logitech,MOU-001,Perifericos,85000,20
Teclado Mecánico,TEC-001,Perifericos,150000,12
Monitor 24 pulgadas,MON-001,Monitores,650000,8
```

Si el SKU ya existe, el sistema puede actualizar la información correspondiente.

Si el SKU se encuentra vacío, se registra un nuevo producto de acuerdo con las validaciones del sistema.

---

# Gestión de Clientes

El sistema permite realizar operaciones relacionadas con:

* Registro de clientes.
* Consulta de clientes.
* Edición de información.
* Desactivación de clientes.
* Seguimiento de compras.
* Consulta de métricas asociadas.

---

# Dashboard

El dashboard permite visualizar de manera resumida información relevante del negocio.

Puede incluir indicadores como:

* Ventas realizadas.
* Ingresos.
* Productos disponibles.
* Inventario bajo.
* Clientes registrados.
* Productos con mayor movimiento.
* Estadísticas comerciales.

La información mostrada puede variar dependiendo del rol del usuario.

---

# Reportes

Bizly permite consultar información consolidada relacionada con las operaciones realizadas.

Los reportes utilizan información almacenada en MySQL y pueden utilizar operaciones de agregación para generar indicadores de ventas, inventario, productos y clientes.

---

# Auditoría

El sistema cuenta con un módulo de auditoría que permite registrar acciones relevantes realizadas por los usuarios.

La auditoría se genera desde el backend utilizando la identidad obtenida mediante la sesión autenticada.

Esto permite mejorar la trazabilidad de las operaciones dentro de la plataforma.

---

# Correo Electrónico

Bizly cuenta con funcionalidades preparadas para:

* Verificación de cuentas.
* Recuperación de contraseña.
* Envío de códigos temporales.

Para habilitar el envío real de correos deben configurarse:

```env
EMAIL_USER=
EMAIL_PASS=
```

Durante el desarrollo puede utilizarse:

```env
DEV_SHOW_EMAIL_CODES=true
```

Esta opción permite visualizar códigos de prueba durante el desarrollo.

**No debe habilitarse en producción.**

---

# Privacidad y Tratamiento de Datos

El registro de usuarios exige la aceptación explícita de:

* Términos y condiciones.
* Política de privacidad.
* Tratamiento de datos.

El sistema puede registrar información relacionada con:

* Fecha de consentimiento.
* Versión de la política aceptada.

Los documentos académicos correspondientes se encuentran en:

```text
bizly-vite/bizly/public/privacidad.html
```

y:

```text
bizly-vite/bizly/public/terminos.html
```

Antes de implementar Bizly en un entorno comercial real, estos documentos deben ser revisados y adaptados por la organización responsable de la plataforma.

---

# API REST

El frontend se comunica con el backend mediante una API REST.

La documentación de las principales rutas se encuentra en:

```text
bizly-vite/bizly/Backend/API.md
```

Los endpoints permiten gestionar módulos como:

* Autenticación.
* Usuarios.
* Productos.
* Clientes.
* Ventas.
* Reportes.
* Auditoría.
* Configuración.

Las rutas sensibles requieren autenticación y, cuando corresponde, autorización basada en roles.

---

# Notas Técnicas

* Frontend desarrollado mediante React.
* Vite utilizado como entorno de desarrollo.
* Estado compartido mediante Context API.
* Comunicación con backend mediante `fetch`.
* API REST implementada con Express.js.
* Persistencia mediante MySQL.
* Consultas SQL parametrizadas.
* Autenticación mediante JWT.
* Contraseñas protegidas con bcrypt.
* Gráficas implementadas mediante Chart.js.
* Arquitectura modular orientada a componentes.
* Variables privadas administradas mediante `.env`.
* Auditoría realizada desde el servidor.
* Separación entre frontend, backend y base de datos.

---

# Metodología de Desarrollo

El proyecto fue desarrollado utilizando la metodología ágil **Scrum**.

El trabajo se organizó mediante diferentes etapas y sprints relacionados con:

1. Levantamiento de requisitos.
2. Análisis del sistema.
3. Diseño UI/UX.
4. Diseño de base de datos.
5. Gestión de usuarios.
6. Desarrollo del inventario.
7. Gestión de clientes.
8. Desarrollo del módulo de ventas.
9. Dashboard.
10. Reportes.
11. Auditoría.
12. Seguridad e integración.
13. Pruebas.
14. Corrección y estabilización.

Dentro de la documentación del proyecto se encuentran evidencias relacionadas con planeación, historias de usuario, reuniones Daily Scrum, estimaciones y ejecución de sprints.

---

# Equipo de Desarrollo

* **Hainer Alfredo Castellanos Martínez** — Líder de Proyecto.
* **Andrés Felipe Díaz Afanador** — Diseñador UI/UX.
* **Cristian David Ballén Contreras** — Documentador y Tester.
* **Jhoan Sebastián Agudelo Rodríguez** — Desarrollador Backend.

---

# Documentación Adicional

Para consultar información técnica complementaria se encuentran disponibles:

```text
CORRECCIONES_REALIZADAS.md
```

Contiene un resumen de las principales correcciones efectuadas en la versión actual.

```text
PRUEBAS_REALIZADAS.md
```

Contiene información relacionada con las validaciones realizadas sobre el proyecto.

```text
bizly-vite/bizly/Backend/API.md
```

Contiene documentación de las principales rutas de la API.

```text
Documentación Bizly 1.0/
```

Contiene las evidencias académicas y de metodología ágil desarrolladas durante el proyecto.

---

# Recomendaciones para Producción

Antes de utilizar Bizly en un entorno comercial real se recomienda:

* Configurar HTTPS.
* Utilizar secretos JWT largos y aleatorios.
* No publicar el archivo `.env`.
* Utilizar un usuario MySQL exclusivo para Bizly.
* Evitar utilizar `root` en producción.
* Configurar correctamente el servicio de correo.
* Deshabilitar `DEV_SHOW_EMAIL_CODES`.
* Realizar copias de seguridad de la base de datos.
* Revisar políticas de privacidad y tratamiento de datos.
* Configurar correctamente CORS.
* Utilizar contraseñas seguras.
* Mantener actualizadas las dependencias.
* Realizar pruebas periódicas de seguridad.

---

# Licencia

Proyecto desarrollado con fines académicos como parte del programa de formación **Análisis y Desarrollo de Software (ADSO)** del **Servicio Nacional de Aprendizaje (SENA)**.

Bizly se encuentra actualmente orientado a fines académicos y demostrativos.

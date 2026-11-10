# Supermercado - Gestión de Inventario (PFY2202)
Es un sitio web desarrollado en **React** que simula el sistema de gestión de
inventario de un supermercado, con navegación mediante **React Router** y
estilado con **Material UI**.

## Funcionalidades

- Página principal (Home).
- Menú inferior de navegación (`BottomNavigation`).
- Dos páginas informativas: **Quiénes somos** y **Contáctanos**.
- Navegación configurada con **React Router**.
- Menú superior (`AppBar`) con acceso a la gestión de inventario.
- **Estado global** del inventario mediante **Context API** (`InventarioContext`).
- Página con **formulario** para agregar artículos (nombre, marca y tipo).
- Página que **lista los artículos en una tabla**.
- Estilado completo con el framework **Material UI**.
- **Filtro por categoría** en el listado, que actualiza dinámicamente sin
  perder los datos originales del inventario.
- **Detalle de artículo**: al hacer clic en una fila se abre su detalle y se
  puede **agregar al carrito**, lo que **resta stock** del inventario.
- **Carrito de compras**: pantalla que lista los artículos agregados, con
  botones +/− que **actualizan el stock del inventario general**.
- Badge con la cantidad de unidades en el carrito en el menú superior.

## Tecnologías
- React 18
- React Router DOM 6
- Material UI 5
- Vite

## Cómo ejecutar el proyecto

Requisitos: tener instalado [Node.js](https://nodejs.org/) (versión 18 o superior).

```bash
# 1. Instalar las dependencias
npm install

# 2. Levantar el servidor de desarrollo
npm run dev
```

Luego abrir en el navegador la URL que muestra la consola (por defecto `http://localhost:5173`).
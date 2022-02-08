## Curso REACT - Comisión 22425

Developer: Ing. Ezequiel Petrone


## Tienda E-commerce del Síndrome de Peter

Algunas funcionalidades implementadas:

- Catálogo de productos: vista general con descripción, foto y precio (en caso de falta de stock muestra leyenda acorde)
- Selección por categorías: tomando las categorías de la base de datos se generan filtros de productos.
- Barra de filtro manual para buscar productos según su descripción.
- Vista con todos los detalles del producto y la opción de agregarlos al carrito.
- Control de stock: los usuarios no pueden agregar más items al carrito de los que hay disponibles.
- Selector de Divisa. La aplicación se conecta a una API que trae el precio del dólar en tiempo real y usando context permite en cualquier momento que el usuario elija la moneda que desee.
- Uso de Modals customs a lo largo de toda la experiencia de compra.
- Carrito y Formulario de Checkout: el carrito está hecho utilizando context, permite agregar y eliminar productos. El formulario de checkout valida datos antes de subir la orden.
- Uso del Local Storage a través de un hook custom. De esa forma no se pierde el carrito del usuario al refrescar la página.


## Dependencias

- TAILWIND para dar formato a la aplicación.
- React Router Dom para la navegación.
- FireBase para persistencia de datos.
- Validator para validación de datos en el form.


## Aplicación en funcionamiento

VER VIDEO EN LA RAÍZ DEL PROYECTO


## ¿Como ejecutar de forma local?

Este proyecto requiere [NodeJs](https://nodejs.org/) para su ejecución.

```bash
git clone https://github.com/EzequielPetrone/Store_ESDP.git
cd store_esdp
npm install
npm start
```
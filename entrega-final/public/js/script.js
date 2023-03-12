import convertFiatToFiat from "./exchange.js"

//Tipos de Cambio
let rateARS = await convertFiatToFiat(1, "USD", "ARS");

//Moneda Seleccionada por Default en la página
let monedaValue = 1
let monedaText = "ARS"

// Class y métodos
class Producto {
    constructor(nombre, precioARS, stock, id, cantidad, categoria, descripcion) {
        this.nombre = nombre;
        this.precioARS = precioARS;
        this.stock = stock;
        this.id = id;
        this.cantidad = cantidad; // Cantidad en Carrito por default
        this.categoria = categoria
        this.descripcion = descripcion
        this.precioUSD = (precioARS / rateARS);
    }
}

// Array de los productos disponibles en la tienda
let productos = [];

// Productos ingresados al sistema por el administrador //
//(nombre, precioARS, stock, id, cantidad en carrito por default, descripción)
productos.push(new Producto("Abuelitos Nos Vemos Pronto", 4000, 2, 1, 0, "Abuelos", "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil."));
productos.push(new Producto("El Rey", 2500, 3, 2, 0, "Lo más nuevo", "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil."));
productos.push(new Producto("Grandma was here", 7000, 4, 3, 0, "Abuelos", "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil."));
productos.push(new Producto("Hola Abuela y Abuelo", 350, 0, 4, 0, "Abuelos", "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil."));
productos.push(new Producto("Hola Mundo", 3500, 4, 5, 0, "Lo más nuevo", "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil."));
productos.push(new Producto("Milk Monster", 3700, 3, 6, 0, "Halloween", "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil."));
productos.push(new Producto("Soy Capitán Bebé", 9000, 7, 7, 0, "Lo más nuevo", "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil."));
productos.push(new Producto("Soy La Princesa", 700, 3, 8, 0, "Lo más nuevo", "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil."));
productos.push(new Producto("Cute Like Mommy Smelly Like Daddy", 1700, 2, 9, 0, "Divertidos", "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil."));
productos.push(new Producto("Emma", 3500, 7, 10, 0, "Lo más nuevo", "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil."));
productos.push(new Producto("Grandma a mom without rules", 325, 1, 11, 0, "Abuelos", "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil."));
productos.push(new Producto("I am mamas boo", 6900, 9, 12, 0, "Divertidos", "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil."));
productos.push(new Producto("My First Halloween", 11700, 0, 13, 0, "Halloween", "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil."));
productos.push(new Producto("The Dark Side", 5700, 6, 14, 0, "Divertidos", "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil."));
productos.push(new Producto("Promoted To...", 700, 10, 15, 0, "Tazas", "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil."));
productos.push(new Producto("Hello World", 1200, 6, 16, 0, "Recién Nacidos", "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil."));
productos.push(new Producto("Recién Horneado", 1500, 9, 17, 0, "Recién Nacidos", "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil."));

productos = productos.sort((a, b) => (a.categoria > b.categoria) ? 1 : ((b.categoria > a.categoria) ? -1 : 0)) // Sort by category A-Z

// Array del carrito
let carrito = [];

// Guardar carrito en el localStorage
const carritoStorage = localStorage.getItem("carrito")
if (carritoStorage) {
    carrito = JSON.parse(carritoStorage);
    for (const producto of carrito) {
        mostrarCarrito(producto)
    }
    calcularTotal(carrito);
}

//Render de las cards de productos en el HTML
const catalogoDeProductos = document.getElementById("catalogoDeProductos");

for (const producto of productos) {
    const fila = document.createElement("div");
    fila.classList.add("px-2", "max-w-sm", "rounded", "overflow-hidden", "shadow-lg");
    fila.innerHTML =
        `
    <img class="p-1 w-full" src="./img/${producto.nombre}.png" alt="${producto.nombre}">
    <div class="px-6 py-4"">
    <div class="font-bold text-xl mb-2">${producto.nombre}</div>
    <p class="text-gray-700 text-base">
    ${producto.descripcion}
    </p>
    </div>
    <div class="px-6 pt-4 pb-2">
    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Stock: ${producto.stock}</span>
    <span class="inline-block bg-yellow-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#${producto.categoria}</span><br>
    <span class="inline-block text-2xl font-semibold pb-2">${producto.precioARS} ARS</span><br>
    <button id="${producto.id}" class="inline-block bg-pink-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 botonCompra hover:bg-pink-300">
    Agregar al carrito
    </button>
    </div>
    </div>
    `
    catalogoDeProductos.append(fila);
}

function toastifyProductoAgregado() { 

    Toastify({
        text: "✓ Producto agregado",
        duration: 500,
        gravity: "bottom",
        position: "center",
        style: {
            fontSize: "24px",
            color: "black",
            background: "pink"
        }
    }).showToast();
    
}

//Boton Comprar
const btnCompra = document.querySelectorAll(".botonCompra");
for (const boton of btnCompra) {

    boton.addEventListener("click", agregarCarrito);

}

function agregarCarrito(e) {
    const id = e.target.getAttribute("id");
    //Chequeo si el producto existe
    const productoSeleccionado = productos.find((producto) => producto.id === parseInt(id));
    //Chequeo si el producto ya está en el carrito
    const productoExistente = carrito.find((producto) => producto.id === productoSeleccionado.id);
    //Si el stock está en 0 no agrega el producto al carrito
    if (productoSeleccionado.stock === 0) {
        Swal.fire({

            title: "SIN STOCK",
            text: "El producto no se agregó al carrito, no hay stock disponible para comprar",
            icon: "error",
            showClass: {
                popup: "animate__animated animate__zoomIn"
            },
            hideClass: {
                popup: "animate__animated animate__zoomOut"
            },
            color: "black",
            background: "white"
        });

        return
    }
    //Si hay suficiente stock agrega al carrito
    if (productoExistente && productoExistente.cantidad < productoExistente.stock) {
        productoExistente.cantidad++
        toastifyProductoAgregado()

        
    }
    if (!productoExistente) {
        productoSeleccionado.cantidad++
        toastifyProductoAgregado()
        mostrarCarrito(productoSeleccionado);
        carrito.push(productoSeleccionado);
    } else {
        const cantidad = document.getElementById(`cantidad-${productoSeleccionado.id}`);
        if (cantidad) {
            cantidad.innerHTML = productoExistente.cantidad
        }
    }
    localStorage.setItem("carrito", JSON.stringify(carrito));
    calcularTotal(carrito);
}

//Render del Carrito 

function mostrarCarrito(producto) {
    //Rate ARS
    const rate = document.getElementById("rateARS")
    rate.innerHTML =
        `
    <span>1 USD = ${rateARS.toFixed(2)} ARS</span>
    `

    //Creación de la tabla
    const tabla = document.getElementById("tbody");

    //Creación de la fila
    const fila = document.createElement("tr");
    fila.id = `fila-${producto.id}`
    fila.classList.add("hover:bg-gray-200")

    //Imagen del producto (basado en el nombre del producto)
    const td1 = document.createElement("td");
    const img = document.createElement("img");
    img.src = `./img/${producto.nombre}.png`
    img.classList.add("w-20", "p-2")
    td1.appendChild(img);

    //Nombre del Producto
    const td2 = document.createElement("td");
    const p = document.createElement("p");
    p.innerHTML = producto.nombre
    td2.appendChild(p);
    td2.classList.add("text-left", "w-25", "p-1", "text-base", "tracking-wide")

    //Cantidad del Producto
    const td3 = document.createElement("td");
    td3.innerHTML = producto.cantidad
    td3.id = `cantidad-${producto.id}`
    td3.classList.add("text-center", "w-20", "p-3", "text-base", "tracking-wide")

    //Precio en ARS del producto
    const td4 = document.createElement("td");
    td4.innerHTML = (producto.precioARS).toFixed(2)
    td4.classList.add("text-right", "w-20", "p-3", "text-base", "tracking-wide")

    //Boton de Borrar producto
    const td5 = document.createElement("td");
    const button = document.createElement("button");
    button.id = `borrar-${producto.id}`
    button.innerHTML =
        `
    <svg class="w-5" id=${button.id} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
    </svg>
    `
    button.classList.add("bg-primary-color", "hover:bg-pink-300", "text-black", "font-bold", "py-2", "px-4", "rounded-full");
    button.addEventListener("click", borrarProducto);
    td5.appendChild(button);

    //Renderizando la fila
    fila.appendChild(td1);
    fila.appendChild(td2);
    fila.appendChild(td3);
    fila.appendChild(td4);
    fila.appendChild(td5);
    tabla.append(fila);
}

//Borrar Producto del Carrito
function borrarProducto(evento) {
    const id = evento.target.getAttribute("id").replace("borrar-", "");
    const fila = document.getElementById(`fila-${id}`);
    if (fila) {
        carrito = carrito.filter((producto) => producto.id !== parseInt(id));
        fila.remove();
        localStorage.setItem("carrito", JSON.stringify(carrito));
        calcularTotal(carrito);
        const productoSeleccionado = productos.find((producto) => producto.id === parseInt(id));
        if (productoSeleccionado) {
            productoSeleccionado.cantidad = 0
        }
    }
}

//Moneda Seleccionada en el dropdown del carrito
const moneda = document.getElementById("moneda");
moneda.addEventListener("change", (e) => {
    monedaValue = parseInt(moneda.value);
    monedaText = moneda.options[moneda.selectedIndex].text;
    calcularTotal(carrito);
});

// Calcular el total del Carrito
function calcularTotal(carrito) {
    //ARS
    if (monedaValue == 1) {
        const carritoTotal = document.getElementById("carritoTotal");
        const totalCarritoARS = carrito.reduce((previous, current) => previous + (current.cantidad * current.precioARS), 0);
        const iva = totalCarritoARS * 0.21
        const total = totalCarritoARS + iva
        carritoTotal.innerHTML = `Subtotal: ${totalCarritoARS.toFixed(2)} ${monedaText} <br>
                              IVA (21%): ${iva.toFixed(2)} ${monedaText} <br>
                              Total: ${total.toFixed(2)} ${monedaText}`
    }
    //USD
    if (monedaValue == 2) {
        const carritoTotal = document.getElementById("carritoTotal");
        const totalCarritoUSD = carrito.reduce((previous, current) => previous + (current.cantidad * current.precioUSD), 0);
        const iva = totalCarritoUSD * 0.21
        const total = totalCarritoUSD + iva
        carritoTotal.innerHTML = `Subtotal en ${monedaText}: ${totalCarritoUSD.toFixed(2)} ${monedaText} <br>
                                  IVA (21%): ${iva.toFixed(2)} ${monedaText} <br>
                                  Total: ${total.toFixed(2)} ${monedaText}`
    }
}

//Boton de Pagar

const btnPagar = document.getElementById("botonPagar");
btnPagar.addEventListener('click', () => {
    let total = document.getElementById("carritoTotal").innerText;
    //Si el carrito está en blanco, o el total es igual a 0 no hace nada
    if (total == "" || (total.indexOf("Total: 0.00 ARS") != -1) || (total.indexOf("Total: 0.00 USD") != -1)) {
        return
    }
    //Si hay total a pagar el boton procede a hacer esto:
    document.body.innerHTML = 
    `
    <div class="text-center">
    <h1>Carlos Duarte Medina - Entrega Final</h1>
    <h2>Coderhouse - JS39415</h2><br>
    <h2> Gracias por su compra! </h2>
    <div class="underline">
    <a href="index.html">Volver a la tienda</a>
    </div>
    </div>
    `
    localStorage.clear();
}
)
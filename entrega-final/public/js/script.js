import convertFiatToFiat from "./exchange.js"

//Tipos de Cambio
let rateARS = await convertFiatToFiat(1, "USD", "ARS");

//Moneda Seleccionada por Default en la página
let monedaValue = 1
let monedaText = "ARS"

//Class y métodos
class Producto {
    constructor(nombre, precioARS, stock, id, cantidad, categoria, img1, descripcion) {
        this.nombre = nombre;
        this.precioARS = precioARS;
        this.stock = stock;
        this.id = id;
        this.cantidad = cantidad; // Cantidad en Carrito por default
        this.categoria = categoria
        this.img1 = img1
        this.descripcion = descripcion
        this.precioUSD = (precioARS / rateARS);
    }
}

//Array de los productos disponibles en la tienda
let productos = [];

//Productos ingresados al sistema por el administrador

productos.push(new Producto("LAPTOP HYUNDAI CELERON N4020 HYBOOK", 126000, 7, 1, 0, "Laptops", "Laptop-hyundai.jpeg", "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil."));
productos.push(new Producto("LAPTOP ACER CELERON N4020 TRAVELMATE B3", 77700, 3, 2, 0, "Laptops", "Laptop-acer.jpg", "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil."));
productos.push(new Producto("LAPTOP TECLAST CORE I3 1005G1 TB04 F15 PRO", 145800, 0, 3, 0, "Laptops", "Laptop-tbolt.jpg", "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil."));
productos.push(new Producto("LAPTOP HP CELERON N4000 STREAM 11 PRO G5", 81000, 2, 4, 0, "Laptops", "Laptop-hp.jpg", "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil."));
productos.push(new Producto("PROCESADOR INTEL CORE I9 12900K 3.2GHZ - 30MB | 1700 | S/COOLER", 227880, 3, 5, 0, "Procesadores", "CPU-I9-12900K.jpg", "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil."));
productos.push(new Producto("PROCESADOR AMD RYZEN 7 4750G 3.6GHZ, 8MB, 8 NUCLEOS, RADEON GRAPHICS, OEM C/COOLER", 93600, 7, 6, 0, "Procesadores", "CPU-Ryzen-7-4750G.jpg", "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil."));
productos.push(new Producto("PC INTEL I7 11700F B560M TRX 3060/12GB DDR4 16GB(2X8)/3200 SSD KINGSTON 500GB HDD SEAGATE 2TB", 506520, 2, 7, 0, "Desktop", "Desktop-i7-11700f.jpg", "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil."));
productos.push(new Producto("PC AMD 3PRO 4350G A520M-HVS DDR4 8GB/2666 SSD 480GB", 146700, 0, 8, 0, "Desktop", "Desktop-ryzen-3.jpg", "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil."));
productos.push(new Producto("TARJETA DE VIDEO MSI VENTUS 3X OC RTX 4080 16GB GDDR6X GEFORCE NVIDIA 256 BITS", 523800, 3, 9, 0, "Tarjetas de Video", "GPU-RTX-4080.jpg", "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil."));
productos.push(new Producto("TARJETA DE VIDEO GALAX SG RTX 3090 OC 24GB GDDR6X GEFORCE NVIDIA 384 BITS", 814680, 2, 10, 0, "Tarjetas de Video", "GPU-RTX-3090.jpg", "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil."));
productos.push(new Producto("TARJETA DE VIDEO GIGABYTE RADEON XTREME WATERFORCE RX 6900 XT,16GB GDDR6 256 BITS", 953640, 3, 11, 0, "Tarjetas de Video", "GPU-Radeon-RX-6900-XT.jpg", "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil."));
productos.push(new Producto("TECLADO LOGITECH GAMING MECANICO G413", 27360, 3, 12, 0, "Teclados", "teclado-logitech-g413.jpg", "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil."));
productos.push(new Producto("TECLADO GENIUS ALAMBRICO KB-117", 3420, 3, 13, 0, "Teclados", "teclado-genius.jpg", "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil."));
productos.push(new Producto("MOUSE LOGITECH M110, SENSOR HASTA 1000 DPI", 2880, 3, 14, 0, "Mouse", "mouse-logitech.jpg", "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil."));
productos.push(new Producto("MOUSE LOGITECH G403 HERO GAMING, SENSOR HASTA 16000 DPI", 18360, 3, 15, 0, "Mouse", "mouse-logitech-g403.jpg", "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil."));

//Sortear render de los productos en la pagina principal por categoria A-Z
productos = productos.sort((a, b) => (a.categoria > b.categoria) ? 1 : ((b.categoria > a.categoria) ? -1 : 0))

//Array del carrito
let carrito = [];

//Carrito en el localStorage
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
function renderizarProductos(productos) {
    catalogoDeProductos.innerHTML = ``
    for (const producto of productos) {
        const fila = document.createElement("div");
        fila.classList.add("px-2", "max-w-sm", "rounded", "overflow-hidden", "shadow-lg");
        fila.innerHTML =
            `
        <img class="p-1 w-full" src="./img/productos/${producto.img1}" alt="${producto.nombre}">
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
        <button id="${producto.id}" class="inline-block bg-green-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 botonCompra hover:bg-green-300">
        Agregar al carrito
        </button>
        </div>
        </div>
            `
        catalogoDeProductos.append(fila);
    }
    botonComprar();
}

//Toastify de cuando se agrega un producto al carrito
function toastifyProductoAgregado() {
    Toastify({
        text: "✓ Producto agregado",
        duration: 500,
        gravity: "bottom",
        position: "center",
        style: {
            fontSize: "24px",
            color: "black",
            background: "#9cecaa",
            opacity: "0.9"
        }
    }).showToast();
}

//Alerta Sweet Alert 2 de cuando no hay stock
function noStockAlert() {
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
}

//Boton Comprar
function botonComprar() {
    const btnCompra = document.querySelectorAll(".botonCompra");
    for (const boton of btnCompra) {
        boton.addEventListener("click", agregarCarrito);
    }
}

//Función de agregar el carrito
function agregarCarrito(e) {
    const id = e.target.getAttribute("id");
    //Chequeo si el producto existe
    const productoSeleccionado = productos.find((producto) => producto.id === parseInt(id));
    //Chequeo si el producto ya está en el carrito
    const productoExistente = carrito.find((producto) => producto.id === productoSeleccionado.id);
    //Si el stock está en 0 no agrega el producto al carrito
    if (productoSeleccionado.stock === 0) {
        noStockAlert();
        return
    }
    //Si hay suficiente stock agrega al carrito
    if (productoExistente && productoExistente.cantidad < productoExistente.stock) {
        productoExistente.cantidad++
        toastifyProductoAgregado();
    }
    if (!productoExistente) {
        productoSeleccionado.cantidad++
        toastifyProductoAgregado();
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
    fila.id = `id-${producto.id}`
    fila.classList.add("hover:bg-gray-200")

    //Imagen del producto (basado en el nombre del producto)
    const td1 = document.createElement("td");
    const img = document.createElement("img");
    img.src = `./img/productos/${producto.img1}`
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
    button.classList.add("bg-primary-color", "hover:bg-green-300", "text-black", "font-bold", "py-2", "px-4", "rounded-full");
    button.addEventListener("click", borrarProducto);
    td5.appendChild(button);

    //Renderizando la fila
    fila.appendChild(td1);
    fila.appendChild(td2);
    fila.appendChild(td3);
    fila.appendChild(td4);
    fila.appendChild(td5);
    tabla.append(fila);

    //Renderizando el total de productos agregados al carrito
    totalProductosCarrito();
}

//Función que calcula la cantidad de productos en el carrito y lo muestra en el navbar
function totalProductosCarrito() {
    const tabla = document.getElementById("tbody");
    let totalRows = tabla.rows.length
    const totalProductosCarrito = document.getElementById("totalProductosCarrito");
    totalProductosCarrito.innerHTML =
        `
    <span class="font-bold text-xl">[${totalRows}]</span>
        `
}

//Borrar Producto del Carrito
function borrarProducto(e) {
    const id = e.target.getAttribute("id")?.replace("borrar-", "");
    const fila = document.getElementById(`id-${id}`);
    if (fila) {
        carrito = carrito.filter((producto) => producto.id !== parseInt(id));
        fila.remove();
        localStorage.setItem("carrito", JSON.stringify(carrito));
        calcularTotal(carrito);
        const productoSeleccionado = productos.find((producto) => producto.id === parseInt(id));
        if (productoSeleccionado) {
            productoSeleccionado.cantidad = 0
            totalProductosCarrito();
        }
    }
}

//Moneda Seleccionada en el dropdown del carrito
const moneda = document.getElementById("moneda");
moneda.addEventListener("change", () => {
    monedaValue = parseInt(moneda.value);
    monedaText = moneda.options[moneda.selectedIndex].text;
    calcularTotal(carrito);
});

//Calcular el total del Carrito
function calcularTotal(carrito) {
    //ARS
    if (monedaValue == 1) {
        const carritoTotal = document.getElementById("carritoTotal");
        const totalCarritoARS = carrito.reduce((previous, current) => previous + (current.cantidad * current.precioARS), 0);
        const iva = totalCarritoARS * 0.21
        const total = totalCarritoARS + iva
        carritoTotal.innerHTML =
            `
        Subtotal: ${totalCarritoARS.toFixed(2)} ${monedaText} <br>
        IVA (21%): ${iva.toFixed(2)} ${monedaText} <br>
        Total: ${total.toFixed(2)} ${monedaText}
            `
    }
    //USD
    if (monedaValue == 2) {
        const carritoTotal = document.getElementById("carritoTotal");
        const totalCarritoUSD = carrito.reduce((previous, current) => previous + (current.cantidad * current.precioUSD), 0);
        const iva = totalCarritoUSD * 0.21
        const total = totalCarritoUSD + iva
        carritoTotal.innerHTML =
            `
        Subtotal en ${monedaText}: ${totalCarritoUSD.toFixed(2)} ${monedaText} <br>
        IVA (21%): ${iva.toFixed(2)} ${monedaText} <br>
        Total: ${total.toFixed(2)} ${monedaText}
            `
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
});

//Filtrar por categorias
const menuItems = document.getElementsByClassName('menuItem')
for (const menuItem of menuItems) {
    menuItem.addEventListener("click", (e) => {
        let categoria = productos.filter((producto) => producto.categoria === e.target.innerText);
        renderizarProductos(categoria);
    });
}

//Inicialización de la página
renderizarProductos(productos);
totalProductosCarrito();
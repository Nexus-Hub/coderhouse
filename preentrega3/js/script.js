//Tipos de Cambio
let rateARS = 360.99;

//Moneda Seleccionada por Default en la página
let monedaValue = 1
let monedaText = "ARS"

// Class y métodos
class Producto {
    constructor(nombre, precioARS, stock, id, cantidad) {
        this.nombre = nombre;
        this.precioARS = precioARS;
        this.stock = stock;
        this.id = id;
        this.cantidad = cantidad; // Cantidad en Carrito por default
        this.precioUSD = (precioARS / rateARS);
    }
}

// Array de los productos disponibles en la tienda
let productos = [];

// Productos ingresados al sistema por el administrador //
//(nombre, precioARS, stock, id, cantidad en carrito por default)
productos.push(new Producto("Cuadro", 4000, 2, 1, 0));
productos.push(new Producto("Taza", 2500, 3, 2, 0));
productos.push(new Producto("Remera", 7000, 4, 3, 0));
productos.push(new Producto("Portavaso", 350, 0, 4, 0));

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

//Boton Mostrar/Ocultar Carrito
const btnCarrito = document.getElementById("mostrarCarrito");

btnCarrito.addEventListener("click", function () {
    const carrito = document.getElementById("carrito");
    if (carrito.style.display != "none") {
        carrito.style.display = "none";
    }
    else {
        carrito.style.display = "block";
    }
})

//Render de las cards de productos en el HTML
const catalogoDeProductos = document.getElementById("catalogoDeProductos");

for (const producto of productos) {
    const fila = document.createElement("div");
    fila.classList.add("col");
    fila.classList.add("justify-content-center");
    fila.innerHTML = `<div class="card" style="width: 90%;">
    <img src="./img/${producto.nombre}.png" class="card-img-top" alt="${producto.nombre}">
    <div class="card-body">
        <h3 class="card-title">${producto.nombre}</h5>
        <p class="card-text">Stock: ${producto.stock}</p>
        <p class="precio">${producto.precioARS} ARS</p>
        <a href="#" id="${producto.id}" class="btn btn-primary botonCompra">Agregar al Carrito</a>
    </div>
</div>`
    catalogoDeProductos.append(fila);
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
        alert("El producto no se agregó al carrito, no hay stock disponible para comprar")
        return
    }
    //Si hay suficiente stock agrega al carrito
    if (productoExistente && productoExistente.cantidad < productoExistente.stock) {
        productoExistente.cantidad++
    }
    if (!productoExistente) {
        productoSeleccionado.cantidad++
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
    //Creación de la tabla
    const tabla = document.getElementById("tbody");

    //Creación de la fila
    const fila = document.createElement("tr");
    fila.id = `fila-${producto.id}`

    //Imagen del producto (basado en el nombre del producto)
    const td1 = document.createElement("td");
    const img = document.createElement("img");
    img.src = `./img/${producto.nombre}.png`
    td1.appendChild(img);

    //Nombre del Producto
    const td2 = document.createElement("td");
    const p = document.createElement("p");
    p.innerHTML = producto.nombre
    td2.appendChild(p);

    //Cantidad del Producto
    const td3 = document.createElement("td");
    td3.innerHTML = producto.cantidad
    td3.id = `cantidad-${producto.id}`

    //Precio en ARS del producto
    const td4 = document.createElement("td");
    td4.innerHTML = producto.precioARS

    //Boton de Borrar producto
    const td5 = document.createElement("td");
    const button = document.createElement("button");
    button.id = `borrar-${producto.id}`
    button.innerHTML = "X"
    button.classList.add("btn", "btn-danger");
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
        const totalCarritoARS = carrito.reduce((previous, current) => previous + (current.cantidad * current.precioARS), 0);
        const totalCarritoUSD = carrito.reduce((previous, current) => previous + (current.cantidad * current.precioUSD), 0);
        const iva = totalCarritoUSD * 0.21
        const total = totalCarritoUSD + iva
        carritoTotal.innerHTML = `1 ${monedaText} = ${rateARS} ARS <br>
                                  Subtotal en ARS: ${totalCarritoARS.toFixed(2)} ARS <br>
                                  <br>
                                  Subtotal en ${monedaText}: ${totalCarritoUSD.toFixed(2)} ${monedaText} <br>
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
    document.body.innerHTML = `<h1>Carlos Duarte Medina - PreEntrega 3</h1>
                                   <h2>Coderhouse - JS39415</h2>
                                   <br>
                                   <h2> Gracias por su compra! </h2>
                                   <div class="text-center">
                                   <a href="index.html">Volver a la tienda</a>
                                   </div>`
    localStorage.clear();
}
)
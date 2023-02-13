//Tipos de Cambio
let rateARS = 362.81;

// Class y métodos
class Producto {
    constructor(nombre, precioARS, stock) {
        this.nombre = nombre;
        this.precioARS = precioARS;
        this.stock = stock;
        this.precioUSD = (precioARS / rateARS);
    }

    verStock() {
        return "Nombre: " + this.nombre + "\n" +
            "Precio por Unidad ARS: " + this.precioARS + "\n" +
            "Precio por Unidad USD: " + parseFloat((this.precioUSD).toFixed(2)) + "\n" +
            "Stock: " + this.stock + "\n" + "\n"
    }

    validarStock(cantidad) {
        if (!cantidad && this.stock > 0) {
            return true
        } else if (cantidad && this.stock >= cantidad) {
            return true
        } else {
            return false
        }
    }

    restarStock(cantidad) {
        this.stock -= cantidad;
    }

    getSubtotal(moneda) {
        if (moneda.toUpperCase() === "ARS") {
            return (this.precioARS * this.stock);
        } else if (moneda.toUpperCase() === "USD") {
            return parseFloat((this.precioUSD * this.stock).toFixed(2));
        } else {
            return ""
        }
    }

    imprimirRecibo(moneda) {
        return "Nombre: " + this.nombre + " - " +
            "Cantidad: " + this.stock + " - " +
            "Subtotal: " + this.getSubtotal(moneda) + "\n"

    }

    verCarrito() {
        return "Nombre: " + this.nombre + "\n" +
            "Precio por Unidad en ARS: " + this.precioARS + "\n" +
            "Precio por Unidad en USD: " + parseFloat((this.precioUSD).toFixed(2)) + "\n" +
            "Cantidad: " + this.stock + "\n" + "\n"
    }

}

// Array de los productos disponibles en la tienda
let listaProductos = [];

// Productos ingresados al sistema por el administrador //
listaProductos.push(new Producto("Cuadro", 4000, 2));
listaProductos.push(new Producto("Taza", 2500, 3));
listaProductos.push(new Producto("Remera", 7000, 4));
listaProductos.push(new Producto("Portavaso", 350, 0));

// Array del carrito
let carrito = [];

// Inicio del bucle
let comprando = true
while (comprando === true) {
    let opcion = prompt("1) Ver productos disponibles en la tienda \n2) Seleccionar productos a comprar \n3) Ver Carrito \n4) Comprar \n5) Salir de la tienda");
    if (opcion == 1) { //Ver stock
        let stockDisponible = ""
        for (let producto of listaProductos) {
            stockDisponible += producto.verStock();
        }
        alert(stockDisponible)
    } else if (opcion == 2) { //Compra de productos
        function buscarProducto(producto) {
            return producto.nombre.toLowerCase() == productoAComprar.toLowerCase();
        }
        function nombreProducto(producto, index) {
            return (index + 1) + ")" + " " + producto.nombre
        }
        //Compra de Usuario usando un highorder function para renderizar los productos en el alert
        const productoAComprar = prompt("Ingrese el NOMRBE del producto que quiere comprar" + "\n" + listaProductos.map(nombreProducto).join("\n"));

        // Buscamos si el nombre del producto existe en el inventario
        const resultadoBusqueda = listaProductos.find(buscarProducto);
        // De no existir el producto entramos acá
        if (resultadoBusqueda === undefined) {
            alert("No existe el producto en el inventario");
        }
        else {
            // De existir el producto pasamos acá
            if (resultadoBusqueda.validarStock()) {
                const unidades = prompt("Cuantas unidades quieres comprar? Disponibilidad de stock: " + resultadoBusqueda.stock);
                //Se valida que el stock sea suficiente
                if (resultadoBusqueda.validarStock(unidades)) {
                    //Se agrega el producto al array del carrito
                    carrito.push(new Producto(resultadoBusqueda.nombre, resultadoBusqueda.precioARS, unidades));
                    //Se resta el stock de los productos ingresados al sistema
                    resultadoBusqueda.restarStock(unidades);
                } else {
                    //El stock no es suficiente
                    alert("No se puede realizar la compra, no hay suficiente stock del producto");
                }
            } else {
                //El stock es igual a 0
                alert("No se puede realizar la compra, el producto está agotado");
            }
        }
    } else if (opcion == 3) { // Ver Carrito
        // Si hay productos en el carrito se entra acá
        if (carrito.length > 0) {
            let carritoActual = ""
            carrito.forEach(producto => {
                carritoActual += producto.verCarrito();
            });
            alert(carritoActual);
        } else {
            // Si no hay productos en el carrito se entra acá
            alert("No hay productos en el carrito");
        }

    } else if (opcion == 4) { // Comprar
        if (carrito.length === 0) {
            // Si no hay productos en el carrito se entra acá
            alert("No hay productos seleccionados para comprar");
        } else {
            // Si el usuario elige comprar se entra acá y se le pregunta en que moneda quiere comprar
            const moneda = prompt("Desea pagar en ARS o en USD?")
            if (moneda && (moneda.toUpperCase() === "ARS" || moneda.toUpperCase() === "USD")) {
                // Se renderiza el ticket de compra
                const recibo = procesarCompra(moneda, carrito);
                alert(recibo);
                comprando = false;
            } else if (moneda) {
                // Mensaje si no elige moneda o ingresa un valor no permitido
                alert("No se eligió una moneda disponible");
            }
        }
    } else if (opcion == 5) { // Salir
        alert("Gracias por visitarnos, vuelva pronto.");
        comprando = false;
    }
}

//Función que crea y devuelve el ticket de compra
function procesarCompra(moneda, carrito) {
    let subtotal = 0;
    let iva = 0.21;

    let recibo = "Su ticket de compra: " + "\n"

    for (let producto of carrito) {
        subtotal += producto.getSubtotal(moneda);
        recibo += producto.imprimirRecibo(moneda);
    }

    let subtotalConIVA = (subtotal * iva);
    let total = subtotal + subtotalConIVA;

    recibo += "Subtotal: " + subtotal.toFixed(2) + "\n"
    recibo += "IVA (21%): " + subtotalConIVA.toFixed(2) + "\n"
    recibo += "Total: " + total.toFixed(2) + "\n"
    recibo += "Gracias por su compra! vuelva pronto."

    return recibo
}
const button = document.querySelector('#navButton');
const menu = document.querySelector('#menu');
const btnCarrito = document.getElementById("mostrarCarrito");
const btnCarritoDos = document.getElementById("mostrarCarritoDos");

//Boton Mostrar/Ocultar Nav Bar en Mobile
button.addEventListener("click", () => {
    menu.classList.toggle('hidden')
})

//Boton Mostrar/Ocultar Carrito
btnCarrito.addEventListener("click", function () {
    const carrito = document.getElementById("carrito");
    if (carrito.style.display != "none") {
        carrito.style.display = "none";
    }
    else {
        carrito.style.display = "block";
    }
})

btnCarritoDos.addEventListener("click", function () {
    const carrito = document.getElementById("carrito");
    if (carrito.style.display != "none") {
        carrito.style.display = "none";
    }
    else {
        carrito.style.display = "block";
    }
})


//Variable Auxiliar, se usa para el número de operaciones para el prompt() y el console.log() y mantener el primer index en 0.
let auxCantOperaciones = 1

//Tipos de cambio. 
let ARS = 380
let BTC = 0.000044

//Total convertido.
let totalConvertido = 0;

//Total ingresado.
let totalIngresado = 0;

//Prompt que ingresa cuantas operaciones desea realizar (Alimenta el Bucle).
let cantOperaciones = parseInt(prompt("Ingrese el número de operaciones que desea realizar (1,2,3,4,... hasta 10)"));
//Condicional que detecta si el input del prompt es "Not a Number".
if (isNaN(cantOperaciones)) {
    alert("No ingresaste un número de operaciones correcto, manda F5")
} else if (cantOperaciones <= 0 || cantOperaciones > 10) {
    //Alerta de que se ingresó cualquier número que no va entre 1 y 10.
    alert("El máximo de operaciones que podes realizar al mismo tiempo está entre 1 y 10 , manda F5")
} else {
    //Prompt que ingresa la moneda a convertir, siendo esta ARS o BTC convertido a minusculas para evitar problemas de capitalización.
    let moneda = prompt("Ingresa si vas a cambiar a ARS o a BTC").toLowerCase();
    // Validación de moneda
    if (moneda !== "ars" && moneda !== "btc") {
        alert("Ingrese una moneda válida (ARS o BTC), manda F5");
    } else {
        let monedaAsignada
        if (moneda == "ars") {
            monedaAsignada = ARS
        } else {
            monedaAsignada = BTC
        }
        //Cálculo de la cantidad de operaciones necesarias e ingreso de los montos en USD a convertir.
        for (let i = 0; i <= cantOperaciones - 1; i = i + 1) {
            montoX = prompt('Ingrese la cantidad en USD de la operacion N°:' + " " + (auxCantOperaciones + i));
            //Cancelación del bucle si se presiona salir.
            if (montoX === null) {
                alert("Operación cancelada");
                break;
            }
            //Multiplicación del monto en USD por el valor de conversión
            let resultado = montoX * monedaAsignada
            //Acumulando el total ingresado para el resumen utilizo parseFloat porqué sino me concatena un string el +=
            totalIngresado += parseFloat(montoX);
            //Acumulando el total convertido para el resumen
            totalConvertido += resultado;
            //Mostrando resultados de cada vuelta para la moneda Argentina (2 decimales).
            if (monedaAsignada === ARS) {
                console.log((auxCantOperaciones + i) + ": ", montoX, "USD", "x", monedaAsignada, "=", resultado.toFixed(2), "ARS");
            } else {
                //Mostrando resultados de cada vuelta para la moneda Bitcoin (8 decimales).
                console.log((auxCantOperaciones + i) + ": ", montoX, "USD", "x", monedaAsignada, "=", resultado.toFixed(8), "BTC");
            }
        }
        //Llamada a la función del resumen
        console.log("")
        console.log("Resumen:")
        mostrarResumen(moneda, totalIngresado, totalConvertido);

        //LLamadas multiples a la función del resumen multiple
        console.log("")
        console.log("Resumen Multiple:")
        mostrarResumenMulti(2, monedaAsignada, totalIngresado, totalConvertido);
        mostrarResumenMulti(5, monedaAsignada, totalIngresado, totalConvertido);
        mostrarResumenMulti(10, monedaAsignada, totalIngresado, totalConvertido);

        console.log("")
        mostrarResumenMulti("HOLA")

    }
}

// Una función para mostrar el resumen del total ingresado y el total convertido al finalizar las vueltas
function mostrarResumen(moneda, totalIngresado, totalConvertido) {
    if (moneda == "ars") {
        console.log("Total Ingresado: ", totalIngresado, " USD lo que equivale a un total de: ", totalConvertido.toFixed(2), " ARS");
    } else {
        console.log("Total Ingresado: ", totalIngresado, " USD lo que equivale a un total de: ", totalConvertido.toFixed(8), " BTC");
    }
}

function mostrarResumenMulti(numero, moneda, totalIngresado, totalConvertido ) {
    //mostrarResumenMulti se encarga de mostrar los resultados multiplicados por el numero
    //numero: Numero entero o flotante
    //Si es ARS muestra 2 decimales y si es BTC muestra 8 decimales, si no es un number muestra el saludo
    if (typeof (numero) == "number" && moneda === ARS) {
        console.log("Total Ingresado:", totalIngresado, "x", numero, "=", totalIngresado * numero, " USD lo que equivale a un total de: ", (numero * totalConvertido).toFixed(2), " ARS");
    } else if (typeof (numero) == "number" && moneda === BTC) {
        console.log("Total Ingresado:", totalIngresado, "x", numero, "=", totalIngresado * numero, " USD lo que equivale a un total de: ", (numero * totalConvertido).toFixed(8), " BTC");
    } else {
        console.log("Hola profe y tutores :) en esta función cualquier cosa que no sea un número caera aqui")
    }
}

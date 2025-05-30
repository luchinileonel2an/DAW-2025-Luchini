// Crear una función suma que reciba dos valores numéricos y retorne el resultado. Ejecutar la función y guardar el resultado en una variable, mostrando el valor de
// dicha variable en la consola del navegador.
function suma(a, b) {
    return a + b;
}
var resultado = suma(4, 5);
console.log("Resultado suma:", resultado);

// A la función suma anterior, agregarle una validación para controlar si alguno de los parámetros no es un número, mostrar una alerta aclarando que uno de los
// parámetros tiene error y retornar el valor NaN como resultado.
function sumaValidada(a, b) {
    if (isNaN(a) || isNaN(b)) {
        alert("Uno de los parámetros no es un número");
        return NaN;
    }
    return a + b;
}

// Crear una función validate integer que reciba un número como parámetro y devuelva verdadero si es un número entero.
function validateInteger(n) {
    return Number.isInteger(n);
}
console.log(validateInteger(5.3)); // false

// A la función suma del ejercicio 6b) agregarle una llamada que valide que los números sean enteros. En caso que haya decimales mostrar un alerta con el
// error y retorna el número convertido a entero (redondeado).
function sumaValidaEntera(a, b) {
    if (isNaN(a) || isNaN(b)) {
        alert("Uno de los parámetros no es un número");
        return NaN;
    }
    if (!validateInteger(a)) {
        alert("Primer número no es entero. Se redondea.");
        a = Math.round(a);
    }
    if (!validateInteger(b)) {
        alert("Segundo número no es entero. Se redondea.");
        b = Math.round(b);
    }
    return a + b;
}
console.log(sumaValidaEntera(4.7, 3.2)); // 8

// Convertir la validación del ejercicio 6d) en una función separada y llamarla dentro de la función suma probando que todo siga funcionando igual.
function roundIfDecimal(n) {
    if (!validateInteger(n)) {
        alert("Número no entero, se redondea.");
        return Math.round(n);
    }
    return n;
}

function sumaConValidacion(a, b) {
    if (isNaN(a) || isNaN(b)) {
        alert("Uno de los parámetros no es un número");
        return NaN;
    }
    a = roundIfDecimal(a);
    b = roundIfDecimal(b);
    return a + b;
}

console.log(sumaConValidacion(2.9, 7.1)); // 10

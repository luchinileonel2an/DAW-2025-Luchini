// Dado el siguiente Array.

var meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
    "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

// Mostrar por consola los meses 5 y 11 (utilizar console.log).
console.log(meses[4], meses[10]);

// Ordenar el array de meses alfabéticamente y mostrarlo por consola (utilizar sort).
console.log(meses.sort());

// Agregar un elemento al principio y al final del array (utilizar unshift y push).
meses.unshift("Inicio");
meses.push("Fin");
console.log(meses);

// Quitar un elemento del principio y del final del array (utilizar shift y pop).
meses.shift();
meses.pop();
console.log(meses);

// Invertir el orden del array (utilizar reverse).
meses.reverse();
console.log(meses);

// Unir todos los elementos del array en un único string donde cada mes este separado por un guión - (utilizar join).
var unidos = meses.join(" - ");
console.log(unidos);

// Crear una copia del array de meses que contenga desde Mayo hasta Noviembre (utilizar slice).
var copia = meses.slice(meses.indexOf("Mayo"), meses.indexOf("Noviembre") + 1);
console.log(copia);

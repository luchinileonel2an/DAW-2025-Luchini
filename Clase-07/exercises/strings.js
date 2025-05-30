// Crear una variable de tipo string con al menos 10 caracteres y convertir todo el texto en mayúscula (utilizar toUpperCase).
var str1 = "Bienvenido usuario.";
console.log(str1.toUpperCase());

// Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los primeros 5 caracteres guardando el resultado en una nueva variable (utilizar substring).
var str2 = "Compra realizada con exito.";
var primeros5 = str2.substring(0, 5);
console.log(primeros5);

// Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los últimos 3 caracteres guardando el resultado en una nueva variable (utilizar substring).
var str3 = "";
var ultimos3 = str3.substring(str3.length - 3);
console.log(ultimos3);

// Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con la primera letra en mayúscula y las demás en minúscula. Guardar el
// resultado en una nueva variable (utilizar substring, toUpperCase, toLowerCase y el operador +).
var str4 = "Samsung Galaxy.";
var resultado = str4.substring(0, 1).toUpperCase() + str4.substring(1).toLowerCase();
console.log(resultado);

// Crear una variable de tipo string con al menos 10 caracteres y algún espacio en blanco. Encontrar la posición del primer espacio en blanco y guardarla en una variable (utilizar indexOf).
var str5 = "Verstappen logra la pole.";
var espacio = str5.indexOf(" ");
console.log("Posición del primer espacio:", espacio);

// Crear una variable de tipo string con al menos 2 palabras largas (10 caracteres y algún espacio entre medio). Utilizar los métodos de los ejercicios anteriores para
// generar un nuevo string que tenga la primera letra de ambas palabras en mayúscula y las demás letras en minúscula (utilizar indexOf, substring, toUpperCase, toLowerCase y el operador +).
var palabraLarga = "Ácido desoxirribonucleico";
var espacioIndex = palabraLarga.indexOf(" ");
var palabraA = palabraLarga.substring(0, espacioIndex);
var palabraB = palabraLarga.substring(espacioIndex + 1);
var capitalizada =
    palabraA.substring(0, 1).toUpperCase() + palabraA.substring(1).toLowerCase() + " " +
    palabraB.substring(0, 1).toUpperCase() + palabraB.substring(1).toLowerCase();
console.log(capitalizada);
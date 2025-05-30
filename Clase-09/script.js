const formulario = document.getElementById("form-suscripcion");
const saludo = document.getElementById("saludo");


const campos = {
    nombre: document.getElementById("nombre"),
    email: document.getElementById("email"),
    password: document.getElementById("password"),
    repetir: document.getElementById("repetir"),
    edad: document.getElementById("edad"),
    telefono: document.getElementById("telefono"),
    direccion: document.getElementById("direccion"),
    ciudad: document.getElementById("ciudad"),
    codigo: document.getElementById("codigo"),
    dni: document.getElementById("dni")
};


const validadores = {
    nombre: (v) => v.length > 6 && v.includes(" "),
    email: (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v),
    password: (v) => /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(v),
    repetir: (v) => v === campos.password.value,
    edad: (v) => Number.isInteger(+v) && +v >= 18,
    telefono: (v) => /^\d{7,}$/.test(v),
    direccion: (v) => /^[A-Za-z0-9]+\s[A-Za-z0-9\s]{3,}$/.test(v),
    ciudad: (v) => v.length >= 3,
    codigo: (v) => v.length >= 3,
    dni: (v) => /^\d{7,8}$/.test(v)
};


const mensajesError = {
    nombre: "Debe tener más de 6 letras y al menos un espacio.",
    email: "Debe tener un formato válido.",
    password: "Debe tener al menos 8 caracteres con letras y números.",
    repetir: "Las contraseñas no coinciden.",
    edad: "Debe ser mayor o igual a 18.",
    telefono: "Debe contener al menos 7 dígitos sin símbolos.",
    direccion: "Debe tener al menos 5 caracteres con un espacio.",
    ciudad: "Debe tener al menos 3 caracteres.",
    codigo: "Debe tener al menos 3 caracteres.",
    dni: "Debe tener 7 u 8 dígitos numéricos."
};


function validarCampo(id) {
    const input = campos[id];
    const valor = input.value.trim();
    const esValido = validadores[id](valor);
    const errorSpan = document.getElementById(`error-${id}`);

    if (!esValido) {
        errorSpan.textContent = mensajesError[id];
        return false;
    } else {
        errorSpan.textContent = "";
        return true;
    }
}


Object.keys(campos).forEach((id) => {
    const input = campos[id];
    input.addEventListener("blur", () => validarCampo(id));
    input.addEventListener("focus", () => {
        const errorSpan = document.getElementById(`error-${id}`);
        errorSpan.textContent = "";
    });
});


campos.nombre.addEventListener("focus", () => {
    saludo.textContent = "HOLA";
});
campos.nombre.addEventListener("keydown", () => {
    saludo.textContent = "HOLA " + campos.nombre.value;
});
campos.nombre.addEventListener("input", () => {
    saludo.textContent = "HOLA " + campos.nombre.value;
});


formulario.addEventListener("submit", (e) => {
    e.preventDefault();

    let errores = [];
    let datos = [];

    Object.keys(campos).forEach((id) => {
        const valido = validarCampo(id);
        const valor = campos[id].value.trim();
        if (!valido) {
            errores.push(`${id.toUpperCase()}: ${mensajesError[id]}`);
        } else {
            datos.push(`${id.toUpperCase()}: ${valor}`);
        }
    });

    if (errores.length > 0) {
        alert("Errores:\n\n" + errores.join("\n"));
    } else {
        alert("Datos enviados correctamente:\n\n" + datos.join("\n"));
        formulario.reset();
        saludo.textContent = "HOLA";
    }
});

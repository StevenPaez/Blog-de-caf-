// VALIDACIÓN DE FORMULARIO Y ACCIONES

const datos = {
    nombre: '',
    email: '',
    mensaje: ''
}

const nombre = document.querySelector('#nombre');
const email = document.querySelector('#email');
const mensaje = document.querySelector('#mensaje');
const formulario = document.querySelector('.formulario');

nombre.addEventListener('input', leerTexto);
email.addEventListener('input', leerTexto);
mensaje.addEventListener('input', leerTexto);
formulario.addEventListener('submit', function (e) { // SUBMIT
    e.preventDefault();
    const { nombre, email, mensaje } = datos;
    // VALIDAR FORMULARIO
    // ALERTA ERROR
    if (nombre === '' || email === '') {
        mostrarAlerta('Los campos nombre y correo son obligatorios', true);
        return;
    }
    // ALERTA OK
    mostrarAlerta('Mensaje enviado correctamente');

    // Simulación por consola
    console.log('Formulario recibido', nombre, email, mensaje)
})

// Leer texto
function leerTexto(e) {
    datos[e.target.id] = e.target.value;
}

// ALERTA

function mostrarAlerta(mensaje, error = null) {
    const alerta = document.createElement('P');
    alerta.textContent = mensaje;
    if (error) {
        alerta.classList.add('error');
    } else {
        alerta.classList.add('correcto');
    }

    formulario.appendChild(alerta);

    setTimeout(() => {
        alerta.remove();
    }, 3500);
}
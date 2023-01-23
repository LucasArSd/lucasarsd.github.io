const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input');
const textareas = document.querySelectorAll('#formulario textarea');

const expresiones = {
    asunto: /^[a-zA-Z0-9À-ÿ.,\s\_\-\?\¿\!\¡]{3,40}$/, // Letras, numeros, guion y guion_bajo
	nombre: /^[a-zA-ZÀ-ÿ\s]{3,40}$/, // Letras y espacios, pueden llevar acentos.
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	telefono: /^\d{7,14}$/, // 7 a 14 numeros.
    mensaje: /^[a-zA-Z0-9À-ÿ.,\s\_\-\?\¿\!\¡]{5,200}$/ // Letras, numeros, guion y guion_bajo
}

/*Para validar entradas*/
let campos = {
    asunto: false,
	nombre: false,
	email: false,
    numero: false,
    mensaje: false
}

const validarFormulario = function(e){
    switch (e.target.name){
        case "Nombre":
            validarCampo(expresiones.nombre, e.target,'nombre','line1');
        break;
        case "Telefono":
            validarCampo(expresiones.telefono, e.target,'numero','line2');
        break;
        case "Email":
            validarCampo(expresiones.correo, e.target,'email','line3');
        break;
        case "Asunto":
            validarCampo(expresiones.asunto, e.target,'asunto','line4');
	break;
        case "Mensaje":
            validarCampo(expresiones.mensaje, e.target,'mensaje','line5');
        break;
    }
}

const validarCampo = function (expresion, input, campo, linea){
    if(expresion.test(input.value)){
        document.getElementById(`${linea}`).classList.remove('line_incorrecto');
        document.getElementById(`${linea}`).classList.add('line_correcto');
        document.querySelector(`#grupo_${campo} .form_mensaje_error`).classList.remove('form_mensaje_error_activo');
        campos[campo] = true;
    }else{
        document.getElementById(`${linea}`).classList.remove('line_correcto');
        document.getElementById(`${linea}`).classList.add('line_incorrecto');
        document.querySelector(`#grupo_${campo} .form_mensaje_error`).classList.add('form_mensaje_error_activo');
        document.querySelector(`#grupo_${campo} .form_mensaje_error`).classList.remove('form_mensaje_error_oculto');
        campos[campo] = false;
    }
}

inputs.forEach(function (input){
    input.addEventListener('keyup', validarFormulario);
    input.addEventListener('blur', validarFormulario);
});

textareas.forEach(function(input){
    input.addEventListener('keyup', validarFormulario);
    input.addEventListener('blur', validarFormulario);
})

formulario.addEventListener('submit', function(e){
    e.preventDefault();
    if (campos.asunto && campos.email && campos.mensaje && campos.nombre && campos.numero){
        document.querySelector('#contenedor_formulario .mensaje_submit').classList.remove('mensaje_submit_activo');
        formulario.reset();
        /*faltar absorción del formulario*/
    }else{
        document.querySelector('#contenedor_formulario .mensaje_submit').classList.add('mensaje_submit_activo');
        console.log('Falla el formulario');
    }
});

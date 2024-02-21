document.addEventListener("DOMContentLoaded", function () {
    // Ruta al archivo JSON
    const urlJSON = 'productos.json';

    // Llamada a la función para cargar y mostrar los datos
    cargarYMostrarDatos(urlJSON);
});

function cargarYMostrarDatos(urlJSON) {
    // Utilizar fetch para cargar el archivo JSON
    fetch(urlJSON)
        .then(response => response.json())
        .then(datos => {
            // Mostrar los datos en el HTML
            mostrarDatosEnHTML(datos);
        })
        .catch(error => {
            console.error('Error al cargar el archivo JSON:', error);
        });
}

function mostrarDatosEnHTML(datos) {
    const container = document.getElementById('productos-container');

    // Iterar sobre los datos y agregarlos al contenedor
    datos.forEach(producto => {
        // Crear la estructura de la tarjeta
        const tarjeta = document.createElement('div');
        tarjeta.className = 'col';
        tarjeta.innerHTML = `
            <div class="card" id="suplementos">
                <img src="${producto.url}" class="card-img-top pointer" alt="suplementos" onclick="mostrarImagen(this.src)">
                <div class="card-body">
                    <p class="card-text text-center">${producto.descripcion}</p>
                </div>
            </div>
        `;

        // Agregar la tarjeta al contenedor principal
        container.appendChild(tarjeta);
    });
}

document.addEventListener('DOMContentLoaded', function() {
    
    
    // Código para obtener los valores después de que la página se ha cargado
    
    const  form = document.getElementById('formulario');
    const  boton= document.getElementById('enviarBtn')
    
    form.addEventListener('change', function(){
        // Aquí cada vez que cambia su valor.
        
        resetearMensajesError()
        validarNombre()
        validarApellido()
        validarFecha()
        validarCorreo()
        validarTelefono()
        validarPlan()
        validarVeces()
        

     })

    form.addEventListener("submit", e=>{
        e.preventDefault();
        
        resetearMensajesError()
        validarNombre()
        validarApellido()
        validarFecha()
        validarCorreo()
        validarTelefono()
        validarPlan()
        validarVeces()

        if(validarNombre()&&
        validarApellido()&&
        validarFecha()&&
        validarCorreo()&&
        validarTelefono()&&
        validarPlan()&&
        validarVeces()){
            
            boton.classList.add('exito')
            boton.innerText = '✅ Enviado!'
            setTimeout(function() {
                form.submit()
                boton.classList.remove('exito')
                boton.innerText = 'Enviar'

              }, 2500)
        }
        
    })

    
});



function mostrarError(id, mensaje) { //funcion para poder mostrar los mensajes de error
    const elementoError = document.getElementById(id);
    if (elementoError) {
        elementoError.innerHTML = mensaje;
    }
}

function resetearMensajesError() {
    const mensajesError = document.querySelectorAll('.error-message');
    
    mensajesError.forEach(elemento => {
        elemento.innerHTML = '';
    });
}

function validarNombre() {
    
    let Nombre = document.getElementById('nombre');
    // Expresión regular para verificar que solo haya letras
    // y que cada palabra tenga un minimo de 3 letras
    const expresionRegular = /^[a-zA-Z]{3,}(?:\s[a-zA-Z]{3,})*$/
    
    if(Nombre.value.trim() === ''){
        mostrarError("errorNombre", "El campo no puede estar vacio")
        Nombre.classList.add('error')
        return false
    }
    
    if(!expresionRegular.test(Nombre.value)){
        mostrarError("errorNombre", "Debe ser un nombre valido")
        Nombre.classList.add('error')
        return false
    }

    

    Nombre.classList.remove('error')
    Nombre.classList.add('succes')
    return true

}

function validarApellido() {
    
    let Apellido = document.getElementById('apellido')
    /// Expresión regular para verificar que solo haya letras
    // y que cada palabra tenga un minimo de 3 letras
    const expresionRegular = /^[a-zA-Z]{3,}(?:\s[a-zA-Z]{3,})*$/
    
    if(Apellido.value.trim() === ''){
        mostrarError("errorApellido", "El campo no puede estar vacio")
        Apellido.classList.add('error')
        return false
    }

    if(!expresionRegular.test(Apellido.value)){
        mostrarError("errorApellido", "Debe ser un apellido valido")
        Apellido.classList.add('error')
        return false
    }

    
    Apellido.classList.remove('error')
    Apellido.classList.add('succes')
    return true
}

function validarCorreo(){

    let Correo = document.getElementById('correo');
    //expresion regular que verifica formato de usuario@dominio.ext
    const expresionRegular = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
    
    if(Correo.value.trim() === ''){
        mostrarError("errorCorreo", "El campo No puede estar vacio")
        Correo.classList.add('error')
        return false
    }

    if (!expresionRegular.test(Correo.value)){
        mostrarError("errorCorreo", "introduzca una direccion valida")
        Correo.classList.add('error')
        return false
    }

    

    Correo.classList.remove('error')
    Correo.classList.add('succes')
    return true

}

function validarFecha(){

    let Fecha = document.getElementById('fechaNacimiento')

    // obtener la fecha actual
    let fechaActual = new Date();

    // configurar la fecha mínima como hace 18 años desde la actual
    let fechaMinima = new Date();
    fechaMinima.setFullYear(fechaActual.getFullYear() - 18);

    // fecha máxima como la fecha actual
    let fechaMaxima = fechaActual;

    // fecha de nacimiento a objeto Date para comparación
    let fechaNacimientoDate = new Date(Fecha.value);

    if (Fecha.value === ''){
        mostrarError("errorFechaNacimiento", "Seleccione una Fecha")
        Fecha.classList.add('error')
        return false
    }
    
    // verificar si la fecha de nacimiento es menor a 18 años desde la actual
    if (fechaNacimientoDate > fechaMinima) {
        mostrarError('errorFechaNacimiento', 'No puedes ser menor de 18 años');
        Fecha.classList.add('error')
        return false
    }

    // verificar si la fecha de nacimiento es mayor a la fecha actual
    if (fechaNacimientoDate > fechaMaxima) {
        mostrarError('errorFechaNacimiento', 'La fecha de nacimiento no puede ser mayor a la fecha actual');
        Fecha.classList.add('error')
        return false
    }

    

    Fecha.classList.remove('error')
    Fecha.classList.add('succes')
    return true
}

function validarTelefono() {

    let Telefono = document.getElementById('telefono')

    // Expresión regular para verificar el formato del teléfono
    let formatoTelefono = /^\d{3,4}-\d{6}$/;

    if(Telefono.value.trim() === ''){
        mostrarError('errorTelefono', 'Ingresa un número de teléfono');
        Telefono.classList.add('error')
        return false
    }
    
    // Verificar si el formato del teléfono es válido
    if (!formatoTelefono.test(Telefono.value)) {
        mostrarError('errorTelefono', 'Ingresa un número de teléfono válido (por ejemplo, 123-456789).');
        Telefono.classList.add('error')
        return false
    }

    Telefono.classList.remove('error')
    Telefono.classList.add('succes')
    return true

}

function validarPlan(){

    let Plan = document.getElementById('plan')

    if(Plan.value === ''){
        mostrarError("errorPlan", "Debe seleccionar un plan")
        Plan.classList.add('error')
        return false
    }

    Plan.classList.remove('error')
    Plan.classList.add('succes')    
    return true

}

function validarVeces(){
    let checkboxes = document.querySelectorAll('input[name="intereses"]:checked');
    let cantidadSeleccionados = checkboxes.length;
    
    // Verificar si se ha seleccionado exactamente una opción
    if (cantidadSeleccionados !== 1) {
        if (cantidadSeleccionados === 0) {
        mostrarError('errorVeces', 'Debes seleccionar alguna opcion.');
        return false 
        }

        mostrarError('errorVeces', 'Debes seleccionar solo una opción.');
        return false
    }

    

    return true
    
}

function loader(){
    document.getElementById('loader').classList.toggle("ocultar")
    
}

window.addEventListener("load", function(){
    setTimeout(loader,500)
    
})

// Función para mostrar la imagen en grande al hacer clic en la miniatura
function mostrarImagen(src) {
    let modal = document.getElementById('modal');
    let modalImg = document.getElementById('imagenAmpliada');
    modal.style.display = 'flex';
    modalImg.src = src;
  }
  
  // Función para cerrar el modal
function cerrarModal() {
    let modal = document.getElementById('modal');
    modal.style.display = 'none';
}

//animacion shake
function sacudir(elemento) {
    elemento.classList.add("shaking");
    
    // Remueve la clase 'shaking' después de la duración de la animación
    setTimeout(function() {
      elemento.classList.remove("shaking");
    }, 600);
}



  
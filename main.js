document.addEventListener("DOMContentLoaded", function () {
    // Ruta al archivo JSON
    const jsonFilePath = 'productos.json';

    // Llamada a la función para cargar y mostrar los datos
    cargarYMostrarDatos(jsonFilePath);
});

function cargarYMostrarDatos(jsonFilePath) {
    // Utilizar fetch para cargar el archivo JSON
    fetch(jsonFilePath)
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
            <div class="card">
                <img src="${producto.url}" class="card-img-top" alt="imagen">
                <div class="card-body">
                    <p class="card-text">${producto.descripcion}</p>
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
    // Expresión regular para verificar que solo haya una palabra
    
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
            console.log("enviado")
            form.submit()
            alert("Los datos se han enviado correctamente!")
        }
        

        

        
        

        

        

    })

    
});



function mostrarError(id, mensaje) {
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
    // Expresión regular para verificar que solo haya una palabra
    const expresionRegular = /^\S+$/;
    
    if(Nombre.value.length < 3 ){
        mostrarError("errorNombre", "Nombre muy Corto")
        Nombre.classList.add('error')
        return false
    }

    if(!expresionRegular.test(Nombre.value)){
        mostrarError("errorNombre", "Solo debe ser una palabra")
        Nombre.classList.add('error')
    }

    if(Nombre.value.trim() === ''){
        mostrarError("errorNombre", "El campo No puede estar vacio")
        Nombre.classList.add('error')
    }

    Nombre.classList.remove('error')
    Nombre.classList.add('succes')
    return true

}

function validarApellido() {
    
    let Apellido = document.getElementById('apellido');
    // Expresión regular para verificar que solo haya una palabra
    const expresionRegular = /^\S+$/;
    
    if(Apellido.value.length < 3 ){
        mostrarError("errorApellido", "Apellido muy Corto")
        Apellido.classList.add('error')
        return false
    }

    if(!expresionRegular.test(Apellido.value)){
        mostrarError("errorApellido", "Solo debe ser una palabra")
        Apellido.classList.add('error')
        return false
    }

    if(Apellido.value.trim() === ''){
        mostrarError("errorApellido", "El campo No puede estar vacio")
        Apellido.classList.add('error')
        return false
    }

    Apellido.classList.remove('error')
    Apellido.classList.add('succes')
    return true
}

function validarCorreo(){

    let Correo = document.getElementById('correo');
    const expresionRegular = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
    if (!expresionRegular.test(Correo.value)){
        mostrarError("errorCorreo", "introduzca una direccion valida")
        Correo.classList.add('error')
        return false
    }

    if(Correo.value.trim() === ''){
        mostrarError("errorCorreo", "El campo No puede estar vacio")
        Correo.classList.add('error')
        return false
    }

    Correo.classList.remove('error')
    Correo.classList.add('succes')
    return true

}

function validarFecha(){

    let Fecha = document.getElementById('fechaNacimiento')

    // Obtener la fecha actual
    var fechaActual = new Date();

    // Configurar la fecha mínima como hace 10 años desde la actual
    var fechaMinima = new Date();
    fechaMinima.setFullYear(fechaActual.getFullYear() - 10);

    // Configurar la fecha máxima como la fecha actual
    var fechaMaxima = fechaActual;

    // Convertir la fecha de nacimiento a objeto Date para comparación
    var fechaNacimientoDate = new Date(Fecha.value);

    // Verificar si la fecha de nacimiento es menor a 10 años desde la actual
    if (fechaNacimientoDate > fechaMinima) {
        mostrarError('errorFechaNacimiento', 'No puedes ser menor de 10 años');
        Fecha.classList.add('error')
        return false
    }

    // Verificar si la fecha de nacimiento es mayor a la fecha actual
    if (fechaNacimientoDate > fechaMaxima) {
        mostrarError('errorFechaNacimiento', 'La fecha de nacimiento no puede ser mayor a la fecha actual.');
        Fecha.classList.add('error')
        return false
    }

    if (Fecha.value === ''){
        mostrarError("errorFechaNacimiento", "Seleccione una Fecha")
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
    var formatoTelefono = /^\d{3,4}-\d{6}$/;

    // Verificar si el formato del teléfono es válido
    if (!formatoTelefono.test(Telefono.value)) {
        mostrarError('errorTelefono', 'Ingresa un número de teléfono válido (por ejemplo, 123-456789).');
        Telefono.classList.add('error')
        return false
    }

    if(Telefono.value.trim() === ''){
        mostrarError('errorTelefono', 'Ingresa un número de teléfono');
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
        mostrarError('errorVeces', 'Debes seleccionar solo una opción.');
        return false
    }

    if (cantidadSeleccionados === 0) {
        mostrarError('errorVeces', 'Debes seleccionar alguna opcion.');
        return false

    }

    return true
    
}
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
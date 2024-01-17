function colorearTablero(filas, columnas) {
    let tablero = [];

    for (let i = 0; i < filas; i++) {
        let fila = [];
        for (let j = 0; j < columnas; j++) {
            // Alternar colores en cada fila y columna
            fila.push((i + j) % 2 === 0 ? 'rojo' : 'azul');
        }
        tablero.push(fila);
    }

    return tablero;
}

// Ejemplo para un tablero de 8x8
const tablero8x8 = colorearTablero(8, 8);
console.log(tablero8x8);
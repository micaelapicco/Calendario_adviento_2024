/**
 * @param {string[]} names - Array of names to frame
 * @returns {string} The framed names
 */
function createFrame(names) {
    // mapeo los nombres y me quedo con el maximo 
    let anchoMax = Math.max(...names.map(nombre => nombre.length))
    //el maximo que se le agrega los espacios
    let longMax = anchoMax + 2

    //dibujo el borde mas dos que es el marco
    let borde = "*".repeat(longMax + 2)

    const contenido = names.map(nombre => `* ${nombre.padEnd(anchoMax, " ")} *`)

    const cuadro = [borde, ...contenido, borde].join("\n")

    return cuadro
}
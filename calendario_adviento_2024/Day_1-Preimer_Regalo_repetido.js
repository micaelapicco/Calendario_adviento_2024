/**
 * @param {number[]} gifts - The array of gifts to prepare
 * @returns {number[]} An array with the prepared gifts
 */
function prepareGifts(gifts) {
    // Eliminar duplicados usando un Set y convertirlo a un array
    const numerosUnicos = [...new Set(gifts)];
    // Ordenar los números en orden ascendente
    const listaOrdenada = numerosUnicos.sort((a, b) => a - b);
    return listaOrdenada;
}


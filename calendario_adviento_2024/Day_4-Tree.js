
/**
 * @param {number} height - Height of the tree
 * @param {string} ornament - Symbol to draw
 * @returns {string} Drawn tree
 */
function createXmasTree(height, ornament) {
    let tree = "";

    for (let i = 1; i <= height; i++) {
        // Calcular los espacios y adornos para el nivel actual
        const espacios = '_'.repeat(height - i);
        const adornos = ornament.repeat(2 * i - 1);

        // Construir la línea del árbol y agregarla al árbol
        tree += espacios + adornos + espacios + "\n";
    }

    // Crear el tronco del árbol
    const tronco = '_'.repeat(height - 1) + '#' + '_'.repeat(height - 1) + "\n";
    tree += tronco.repeat(2); // El tronco tiene 2 líneas

    return tree;
}

const tree = createXmasTree(5, '*')
console.log(tree)
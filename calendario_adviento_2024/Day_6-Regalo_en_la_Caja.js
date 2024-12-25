/** @param {string[]} box
 *  @returns {boolean} True if the gift is inside the box
 */
function inBox(box) {
    let encontre = false;

    box.forEach((line, index) => {
        // Saltar la primera y última línea
        if (index === 0 || index === box.length - 1) return;

        // Encontrar el índice del *
        const pos = line.indexOf('*');

        // Verificar si el * está dentro de los bordes
        if (pos > 0 && pos < line.length - 1) {
            encontre = true;
        }
    });

    return encontre;
}
const box = [
    "###",
    "# #",
    "###"
];
const prueba = inBox(box)
console.log(prueba)

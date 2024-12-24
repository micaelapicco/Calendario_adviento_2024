/** @param {string[]} box
 *  @returns {boolean} True if the gift is inside the box
 */
function inBox(box) {
    let encontre = false

    box.forEach(line => {
        if (line.indexOf('*') == -1) {
        }
        else {
            encontre = true
        }
        console.log(line); // Imprime cada línea de la caja


    });

    return encontre
}

const box = [
    "###",
    "#*#",
    "###"
];
const prueba = inBox(box)
console.log(prueba)

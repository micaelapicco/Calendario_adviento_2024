/**
 * @param {{ type: 'I' | 'R', size: number }[]} shoes
 * @returns {number[]} Available shoes 
 */
function organizeShoes(shoes) {
    const contador = {};
    shoes.forEach(shoe => {
        if (!contador[shoe.size]) {
            contador[shoe.size] = { I: 0, R: 0 };
        }
        contador[shoe.size][shoe.type]++;
    })

    const resultado = [];
    Object.keys(contador).forEach(size => {
        const pares = Math.min(contador[size].I, contador[size].R);
        for (let i = 0; i < pares; i++) {
            resultado.push(Number(size));
        }
    });

    return resultado;
}
const shoes = [
    { type: 'I', size: 38 },
    { type: 'R', size: 38 },
    { type: 'R', size: 42 },
    { type: 'I', size: 41 },
    { type: 'I', size: 42 }
]

const prueba = organizeShoes(shoes)
console.log(prueba)
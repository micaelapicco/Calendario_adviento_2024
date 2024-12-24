/**
 * @param {{ name: string, quantity: number, category: string }[]} inventory
 * @returns {object} The organized inventory
 */
function organizeInventory(inventory) {
    const result = {}


    inventory.forEach(regalo => {
        const { name, quantity, category } = regalo;

        if (!result[category]) {
            result[category] = {}
        }
        if (!result[category][name]) {
            result[category][name] = quantity;
        }
        else {
            result[category][name] += quantity
        }
    })

    return result
}
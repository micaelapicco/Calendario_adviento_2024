/** @param {string} packages with parentheses
 *  @returns {string} Fixed and sorted packages
 */
function fixPackages(packages) {

    let sigo = true
    while (packages.includes("(")) {
        sigo = true
        let first = packages.lastIndexOf("(")
        let last = packages.indexOf(")", first)

        const subString = packages.slice(first + 1, last)
        let reversed = subString.split("").reverse().join("");
        packages = packages.slice(0, first) + reversed + packages.slice(last + 1);
    }
    return packages
}

const prueba = fixPackages('abc(def(gh)i)jk')
console.log(prueba)
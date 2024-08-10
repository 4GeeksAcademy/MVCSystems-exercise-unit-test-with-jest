// Declaramos una función con el nombre exacto "formEuroToDollar"
const fromEuroToDollar = function(valueInEuro) {
    // Convertimos el valor a dólares
    let valueInDollar = valueInEuro * 1.07;
    // Retornamos el valor en dólares
    return valueInDollar;
}

const fromDollarToYen = function(valueInDollar) {
    // Convertimos el valor a yenes
    let valueInYen = valueInDollar * 146.67;
    // Retornamos el valor en yenes
    return valueInYen;
}

const fromYenToPound = function(valueInYen) {
    // Convertimos el valor a libras
    let valueInPound = valueInYen * 0.0054;
    // Retornamos el valor en libras
    return valueInPound;
}


// Exportamos la función para usarla en otros archivo
module.exports = { fromEuroToDollar , fromDollarToYen, fromYenToPound };
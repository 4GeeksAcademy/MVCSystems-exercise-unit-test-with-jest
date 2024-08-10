const { LuTestTube2 } = require('react-icons/lu');

// one euro is:
let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}

let oneDollarIs = {
    "JPY": 146.67, // japan yen
    "EUR": 0.93, // euro
    "GBP": 0.79, // british pound
}

let oneYenIs = {
    "USD": 0.0068, // us dollar
    "EUR": 0.0062, // euro
    "GBP": 0.0054, // british pound
}


test("One euro equivale a 1.07 dolares", function() {
    // Importo la funcion desde app.js
    const { fromEuroToDollar } = require('./app.js');

    // Uso la función como debe ser usada
    const dollars = fromEuroToDollar(3.5);

    // Si 1 euro son 1.07 dólares, entonces 3.5 euros debe ser (3.5 * 1.07)
    const expected = 3.5 * 1.07;

    // Hago mi comparación (la prueba)
    expect(fromEuroToDollar(3.5)).toBe(3.745); // 1 euro son 1.07 dólares, entonces 3.5 euros deberían ser = (3.5 * 1.07)
})

test("One dolar equivale a 146.67 yen", function() {

    // Importo la funcion desde app.js
    const { fromDollarToYen } = require('./app.js');

    const yen = fromDollarToYen(10);
    const expected = 10 * 146.67;

    // Hago mi comparación (la prueba)
    expect(fromDollarToYen(10)).toBeCloseTo(1466.7); // 1 dolar son 146.67 yenes, entonces 10 dolares deberían ser = (10 * 146.67)
})


test("One yen equivale a 0.0054 pound", function() {
    // Importo la funcion desde app.js
    const { fromYenToPound } = require('./app.js');

    // Uso la función como debe ser usada
    const pound = fromYenToPound(10);
    const expected = 10 * 0.0054;

    // Hago mi comparación (la prueba)
    expect(fromYenToPound(10)).toBeCloseTo(0.054); // 1 yen son 0.0054 libras, entonces 10 yenes deberían ser = (10 * 0.0054)
})
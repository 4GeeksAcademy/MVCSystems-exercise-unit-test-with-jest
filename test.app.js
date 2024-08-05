
const { fromDollarToYen , fromEuroToDollar, fromYenToPound }  = require('./app.convert');
const { OneDollartoYen, OneEurotoDollar, OneYentoPound } = require('./app.convert');

test("Convertir 10 Euros a Dolar es 10.7", function(){
    expect(fromEuroToDollar(10 * OneEurotoDollar.USD)).toBe(10.7);
})

test("Convertir 10 Dolar a Yen", function(){
    expect(fromDollarToYen(10 * OneDollartoYen.JPY)).toBe(1429);
})

test("Convertir 10 Yen a Libra", function(){
    expect(fromYenToPound(10 * OneYentoPound.GBP)).toBe(0.055);
})



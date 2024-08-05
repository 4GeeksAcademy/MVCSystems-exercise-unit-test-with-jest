
// One euro is:
const  oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
};

const OneDollartoYen = {
    "JPY": 142.90, // japan yen
};
const OneEurotoDollar = {
    "USD": 1.09, // us dollar
};
const OneYentoPound = {
    "GBP": 0.0055, // british pound
};


// Puedes tener seguridad de que 1 EUR es 1.07 USD:
// 1 EUR (Euro) = 1.07 USD (US Dollar)
// Nuestro programa necesita las siguientes funciones para convertir fromDollarToYen, fromEuroToDollar y fromYenToPound.

// From Dollars to Yen
function fromDollarToYen(dollar){ 
    let yen = dollar * OneDollartoYen.JPY;
    return yen;
}

// From Euro to Dollars
function fromEuroToDollar(euro){
    let dollar = euro * OneEurotoDollar.USD;
    return dollar;
}

// From Yen to Pounds
function fromYenToPound(yen){
    let pound = yen * OneYentoPound.GBP;
    return pound;
}

export { fromDollarToYen, fromEuroToDollar, fromYenToPound };

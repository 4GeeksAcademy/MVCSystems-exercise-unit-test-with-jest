// Importar la función sum del archivo app.js
const {sum}  = require('./app');
// Comienza tu primera prueba
test( 'adds 14 + 9 to equal 23', () => {
    // Dentro de la prueba llamamos a nuestra función sum con 14 y 9
    // y esperamos que retorne 23
    expect(sum(14, 9)).toBe(23);
});

//Node Js
/* Function expect*/
/* Function test*/
const { registrar, leer } = require('./operaciones'); // Importamos las funciones

// Obtenemos los argumentos de la línea de comandos
const [operacion, nombre, edad, tipo, color, enfermedad] = process.argv.slice(2);

// Verificamos qué operación se quiere realizar
if (operacion === 'registrar') {
    // Si falta algún argumento, mostramos un mensaje de error
    if (!nombre || !edad || !tipo || !color || !enfermedad) {
        console.log('Faltan argumentos. Uso: node index.js registrar <nombre> <edad> <tipo> <color> <enfermedad>');
    } else {
        // Si todo está bien, llamamos a la función registrar
        registrar(nombre, edad, tipo, color, enfermedad);
    }
} else if (operacion === 'leer') {
    // Si la operación es "leer", llamamos a la función leer
    leer();
} else {
    // Si la operación no es válida, mostramos un mensaje de error
    console.log('Operación no válida. Usa "registrar" o "leer".');
}
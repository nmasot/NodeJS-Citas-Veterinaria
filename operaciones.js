const fs = require('fs'); // Importamos el módulo 'fs' para trabajar con archivos

// Función para registrar una nueva cita
function registrar(nombre, edad, tipo, color, enfermedad) {
    // Crear un objeto con los datos de la cita
    const nuevaCita = { nombre, edad, tipo, color, enfermedad };

    // Leer el archivo citas.json
    const citas = JSON.parse(fs.readFileSync('citas.json', 'utf8'));

    // Agregar la nueva cita al arreglo
    citas.push(nuevaCita);

    // Guardar el arreglo actualizado en el archivo citas.json
    fs.writeFileSync('citas.json', JSON.stringify(citas, null, 2));

    console.log('Cita registrada con éxito:', nuevaCita);
}

// Función para leer todas las citas
function leer() {
    // Leer el archivo citas.json
    const citas = JSON.parse(fs.readFileSync('citas.json', 'utf8'));

    // Mostrar las citas en la consola
    console.log('Citas registradas:');
    citas.forEach((cita, index) => {
        console.log(`Cita ${index + 1}:`);
        console.log(`  Nombre: ${cita.nombre}`);
        console.log(`  Edad: ${cita.edad}`);
        console.log(`  Tipo: ${cita.tipo}`);
        console.log(`  Color: ${cita.color}`);
        console.log(`  Enfermedad: ${cita.enfermedad}`);
        console.log('-----------------------------');
    });
}

// Exportar las funciones para usarlas en otros archivos
module.exports = { registrar, leer };
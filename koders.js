const fs = require('fs');
const path = './koders.json';  // Usamos koders.json como archivo de datos

const command = process.argv[2];
const koderName = process.argv[3];

switch (command) {
    case 'add':
        addKoder(koderName);
        break;
    case 'ls':
        listKoders();
        break;
    case 'rm':
        removeKoder(koderName);
        break;
    case 'reset':
        resetKoders();
        break;
    default:
        console.log('Comando no reconocido');
}

function addKoder(name) {
    const koders = readKoders();
    if (!Array.isArray(koders)) {
        console.error('Error: el contenido de koders.json no es un arreglo.');
        return;
    }
    koders.push({ name });
    saveKoders(koders);
    console.log(`Koder ${name} agregado.`);
}

function listKoders() {
    const koders = readKoders();
    if (!Array.isArray(koders)) {
        console.error('Error: el contenido de koders.json no es un arreglo.');
        return;
    }
    if (koders.length === 0) {
        console.log('No hay koders registrados.');
    } else {
        console.log('Koders registrados:');
        koders.forEach(koder => console.log(koder.name));
    }
}

function removeKoder(name) {
    let koders = readKoders();
    if (!Array.isArray(koders)) {
        console.error('Error: el contenido de koders.json no es un arreglo.');
        return;
    }
    const initialLength = koders.length;
    koders = koders.filter(koder => koder.name !== name);
    if (koders.length === initialLength) {
        console.log(`No se encontró un koder con el nombre ${name}.`);
    } else {
        saveKoders(koders);
        console.log(`Koder ${name} eliminado.`);
    }
}

function resetKoders() {
    saveKoders([]);
    console.log('Todos los koders han sido eliminados.');
}

function readKoders() {
    if (fs.existsSync(path)) {
        const data = fs.readFileSync(path, 'utf8');
        try {
            return JSON.parse(data);
        } catch (error) {
            console.error('Error al parsear el JSON:', error);
            return [];
        }
    } else {
        return [];
    }
}

function saveKoders(koders) {
    fs.writeFileSync(path, JSON.stringify(koders, null, 2));
}
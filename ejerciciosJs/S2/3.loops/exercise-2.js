// Usa un for in para imprimir por consola los datos del alienigena.

const alien = {
    name: 'Wormuck',
    race: 'Cucusumusu',
    planet: 'Eden',
    weight: '259kg'
}
for (const dato in alien) {
    console.log(`${dato}: ${alien[dato]}`);
}

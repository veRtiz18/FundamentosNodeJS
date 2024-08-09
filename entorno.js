let nombre = process.env.NOMBRE || 'Variable no inicializada';
let usuario = process.env.USUARIO || 'No esta inicializada la variable usuario';

console.log('hola ' + nombre);
console.log("tu usuario es: " + usuario);


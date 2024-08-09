const os = require('os');

console.log(os.arch()); // Arquitectura de 64 bits en mi pc

//con procesos hijo, podemos a lo mejor ejecutar un script acorde a nuestra arquitectura, ya sea de 32 o 64 bits

console.log(os.platform()); // Que SO estamos ocupando, en mi caso win32, lo mismo, si los comandos son diferentes aqui mero queda

console.log(os.cpus().length) // info de las cpus

console.log(os.constants);

const SIZE = 1024;
function kb(bytes) {return bytes / SIZE;}
function mb(bytes) {return kb(bytes) / SIZE;}
function gb(bytes) {return mb(bytes) / SIZE;}



console.log(kb(os.freemem())); //memoria
console.log(mb(os.freemem())); //memoria
console.log(gb(os.freemem()));
console.log(gb(os.totalmem())); //memoria


console.log(os.homedir());//directorio del usuario
console.log(os.tmpdir());//archivos temporales

console.log(os.hostname()); //nombre del servidor o maquina
console.log(os.networkInterfaces()); // interfaces de red activas en mi máquina
const { exec } = require('child_process');
const { spawn } = require('child_process');

//ejecutamos desde este archivo la impresion de todo nuestro directotio
// exec('dir', (err, stdout, sterr) => {
//     if (err) {
//         console.error('algo ha salido mal:' + err.message);
//         return false;
//     }

//     console.log(stdout);
// })


//Ejecturamos otro proceso de node por debajo
// exec('node modulos/console.js', (err, stdout, sterr) => {
//     if (err) {
//         console.log('Algo ha salido mal: ', err.message);
//         return false;
//     }
//     console.log(stdout);
// })


//Invocamos un proceso nuevo de node.js 

let proceso = spawn('cmd.exe', ['/c', 'dir']);

//console.log(proceso);

//acedemos al ID del proceso:
console.log(proceso.pid);
console.log(proceso.connected);

proceso.stdout.on('data', function(dato){
    console.log('esta muerto?')
    console.log(process.killed);
    console.log(dato.toString());
})

proceso.on('exit', function(){
    console.log('el proceso termino');
    console.log(proceso.killed);
})
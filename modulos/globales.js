let i = 0;
let intervalo = setInterval(() => {
    console.log('Hola');
    if (i === 3) {
        clearInterval(intervalo);
    }
    i++;
}, 1000);

setImmediate(() => {
    console.log('hola desde el set inmediate')
})


console.log(__dirname);
console.log(__filename);

//evitalo, pero esta es una variable global, es un foco de problemas enorme jijoles
global.miVariable = 'holaComoStan';
console.log(miVariable);
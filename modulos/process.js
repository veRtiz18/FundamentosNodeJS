
process.on('beforeExit', () => {
    console.log('Carlos, el proceso va a terminar');
});


process.on('exit', () => {
    console.log('Carlos, el proceso acabó');
    setTimeout(() => {
        console.log('Esto no se va a ver nunca')
    })
});


//excepciones que no se han capturado
process.on('uncaughtException', (error, origen) => {
    console.log('Vaya se nos ha olvidado capturar un error');
    setTimeout(() => {
        console.log('Esto viene desde las excepciones');
    })
    console.error(error)
});

setTimeout(() => {
    console.log('Esto si se va a ver');
})

funcionQueNoExiste();

console.log('Esto si el error no se recoge, no sale');

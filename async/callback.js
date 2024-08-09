

function hola(nombre, miCallaback) {

    setTimeout(function () {
        console.log(`¡Hola! ${nombre}`);
        miCallaback();
    }, 1000)
}

function adios(nombre, otroCallback) {
    setTimeout(
        function () {
            console.log(`Adios ${nombre}`);
            otroCallback();
        }, 1000
    );
}

console.log('Iniciando proceso...')
hola("Marisol", function () {
    adios("Marisol", function () {
        console.log('Terminando prcoeso...')
    });
})
function saludar(nombre, primerCallback) {

    setTimeout(function () {
        console.log(`Hola ${nombre}`);
        primerCallback();
    })
}

function despedir(nombre, ultimoCallback) {

    setTimeout(function () {
        console.log(`Adios, ${nombre}`);
        ultimoCallback();
    }, 1000)
}


console.log('Inicializando...');
saludar("Sebastian", function () {
    despedir("Sebastian", function () {
        console.log("Finalizando...")
    })
})
// con callbacks realiza la forma de que te subas al carro

const subirAlCarro = (nombre, miCallback) => {
    setTimeout(function () {
        console.log(`${nombre} Te has subido al carro!`);
        miCallback(nombre);
    }, 1000);
}

const prenderCarro = (nombre, miOtroCallback) => {
    setTimeout(function () {
        console.log(`Ya has encendido el carrito!`);
        miOtroCallback();
    }, 1000);

}

const manejarCarro = (nombre, miUltimoCallback) => {
    setTimeout(function () {
        console.log(`${nombre}, estas manejando...`);
        miUltimoCallback(nombre);
    }, 1000);
}

console.log('Carlos, has visto tu carro...');
subirAlCarro('Adolfo', function (nombre) {
    prenderCarro(nombre, function () {
        manejarCarro(nombre, function () {
            manejarCarro(nombre, function () {
                console.log('Ya te has bajado del carrito');
            });
        });
    });
});

const subirAlCarro = (nombre) => {

    return promise = new Promise((resolve, reject) => {
        setTimeout(function () {
            const estado = true;
            if (estado == true) {
                console.log(`${nombre} Te has subido al carro!`);
                resolve(nombre);
            } else {
                reject('Ha ocurrido un problema');
            }
        }, 1000);
    });
}

const prenderCarro = (nombre) => {
    return promise = new Promise((resolve, reject) => {
        setTimeout(function () {
            console.log(`Ya has encendido el carrito!`);
            resolve(nombre);
        }, 1000);
    });
}

const manejarCarro = (nombre) => {
    return promise = new Promise((resolve, reject) => {
        setTimeout(function () {
            console.log(`${nombre}, estas manejando...`);
            resolve(nombre);
        }, 1000);
    });
}

console.log('Hola usuario aqui esta tu carro');

subirAlCarro('Carlos')
    .then(prenderCarro)
    .then(manejarCarro)
    .then((nombre) => {
        console.log(`${nombre} Has termiando de haber manejado el carro :)`);
    }).catch(error => {
        console.log('Creo que has chocado o se te ha parado el carro o ni sirve :(');
        console.log(error);
    });



function hola(nombre) {

    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            console.log(`¡Hola! ${nombre}`);
            resolve(nombre)
            //  reject('Ha ocurrido un error'); -> en caso de que haya ocurrido un error!! se utiliza reject
        }, 1000);

    });
}

function hablar(nombre) {
    return new Promise((resolve, reject) => {
        setTimeout(function () {
            console.log('bla bla bla bla ...');
            resolve(nombre);
        }, 1000)
    })

}

function adios(nombre) {
    return new Promise((resolve, reject) => {
        setTimeout(
            function () {
                console.log(`Adios ${nombre}`);
                resolve(nombre);
            }, 1000
        );
    })
}


console.log('Iniciando el proceso...');
hola("Adolfo")
    .then(hablar)
    .then(hablar)
    .then(hablar)
    .then(hablar)
    .then(hablar)
    .then(adios)
    .then((nombre) => {
        console.log("Terminado el proceso...");
    }).catch(error => {
        console.log('Error:');
        console.log(error);
    });

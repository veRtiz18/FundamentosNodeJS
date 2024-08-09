

function hola(nombre, miCallaback) {

    setTimeout(function () {
        console.log(`¡Hola! ${nombre}`);
        miCallaback(nombre);
    }, 1000)
}

function hablar(callbackHablar) {
    setTimeout(function () {
        console.log('bla bla bla bla ...');
        callbackHablar();
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



function conversacion(nombre, veces, callback) {
    if (veces >= 0) {
        hablar(function () {
            conversacion(nombre, --veces, callback);
        });
    } else {
        adios(nombre, callback)
    }
}


console.log('Iniciando proceso...')
hola('Mariel', function (nombre) {
    conversacion(nombre, 3, function (){
        console.log('proceso terminado');
    });
});

//Esto esta mal porque es una malisima práctica
// hola("Marisol", function () {
//     hablar(function () {
//         hablar(function () {
//             hablar(function () {
//                 adios("Marisol", function () {
//                     console.log('Terminando proceso...')
//                 });
//             });
//         });
//     });
// });
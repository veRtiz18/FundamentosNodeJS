
function otraFunction() {
    seRompe();
}

function seRompe() {
    return 3 + z;
}

try {
    otraFunction();
} catch (err) {
    console.log('Ha ocurrido un error:');
    console.log(err.message);
}
console.log(' esto de aqui esta hasta el final')


//funcionamiento en asincrono
//entonces, si a esta funcion asincrona la colocamos dentro de un
//bloque try catch nos mandara error ¿Porque?


// function seRompeAsincrono() {
//     setTimeout(function () {
//             return 3 + z;
//         }
//     }, 3000);
// }


try {
    seRompeAsincrono(function () {
        console.log('Hay error');
    });
} catch (error) {
    console.error('Ha ocurrido un error: ');
    console.error(error.message);
}

// Pues porque el setTimeOut se esta ejecutando en otro hilo
// recordar el como funciona el eventLoop se esta ejecutando fuera del bloque 

//Solución:
function seRompeAsincrono(cb) {
    setTimeout(function () {
        try {
            return 3 + z;
        } catch (error) {
            console.error('Error en la funcion asincrona')
            cb(error);
        }
    }, 1000);
}

//Uso de async await 
async function asyncFunction() {
    try {
        return 3 + z;
    } catch (error) {
        console.error('Error con async: ', error.message);
    }
}

asyncFunction();
console.log('resto del codigo');
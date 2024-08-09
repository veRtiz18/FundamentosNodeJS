const obtenerDatos = () => {

    return new Promise((resolve, reject) => {
        setTimeout(function () {
            resolve('Datos impresos');
        }, 2000);
    });
};


const mostrarDatos = async () => {

    console.log('esperando datos...');
    try {
        const datos = await obtenerDatos();
        console.log(datos); // Datos obtenidos despues de dos segundos.
    } catch (error) {
        console.log('Error: ' + error);
    }
};

//Llamada al metodo async 
mostrarDatos();
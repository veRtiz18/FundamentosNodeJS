const fs = require('fs');

const leer = (ruta, callback) => {
    fs.readFile(ruta, (err, data) => {
        //leido
        console.log(data.toString());
    })
}


const escribir = (ruta, contenido, cb) => {
    fs.writeFile(ruta, contenido, (err,) => {
        if (err) {
            console.error('No he podido escribirlo', err);

        } else {
            console.log('Se ha escrito correctamente');
        }

    });
}

console.log(__dirname);
//leer(__dirname + '/archivo.txt');
escribir(__dirname + '/archivo1.txt', 'Soy un archivo nuevOOooOO XoXo', console.log());

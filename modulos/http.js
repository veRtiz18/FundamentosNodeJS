
const http = require('http');

http.createServer(router).listen(3000);

function router(req, res) {
    console.log('.:Nueva Peticion:.');
    console.log(req.url);


    switch (req.url) {
        case '/hola':
            res.write('hola que tal');
            res.end();
            res.end();
            break;

        default:
            res.write('Error 404, no que es lo que quieres');
            res.end();
    }
}

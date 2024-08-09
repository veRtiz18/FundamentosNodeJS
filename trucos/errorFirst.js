function asincrona(callback) {
    setTimeout(function () {
        try {
            let a = 3 + z;
            callback(null, a);
        } catch (e) {
            callback(e, null);
        }
    }, 1000)
}

asincrona(function (err, dato) {
    if (err) {
        console.error('Tenemos un error');
        console.error(err.toString());

        return false;
    }

    console.log('todo ha ido bien mi data es: ' + dato);
})
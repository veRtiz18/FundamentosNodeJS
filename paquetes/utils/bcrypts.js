

const bcrypt = require('bcrypt');

const password = 'holaMundo102';

bcrypt.hash(password, 5, function (err, hash) {
    console.log(hash);

    bcrypt.compare(password, hash, function(err, res){
        console.log(res);
    })

})

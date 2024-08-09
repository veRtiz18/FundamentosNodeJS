const sharp = require('sharp');

sharp('./image.png')
    .resize(80)
    .toFile('nueva_imagen.png');
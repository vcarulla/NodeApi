'use strict';

const mongoose = require('mongoose');
const app = require('./app');
const config = require('./config');

mongoose.connect(config.db, (err, res) => {
    if (err) {
        return console.error(`Error en la conexión con mongodb.\nERROR: ${err}`);
    }
    console.info(`Conexión a mongodb establecida correctamente.`);

    app.listen(config.port, () => {
        console.info(`API REST corriendo en http://localhost:${config.port}`);
    });
});


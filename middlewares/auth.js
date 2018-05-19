'use strict';

const services = require('../services');

function isAuth(req, res, next) {
     if (!req.headers.authorization) {
         return res.status(403).send({ message: `No se encuentra autorizado para acceder` })
     }
    const token = req.headers.authorization;
    services.decodeToken(token)
        .then( response => {
            console.log('sdkljhj', response)
            req.user = response;
            next();
        })
        .catch( response => {
            res.status(response.status).send({ message: response.message });
        });
}

module.exports = isAuth;
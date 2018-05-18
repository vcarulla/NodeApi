'use strict';

const services = require('../services');

function isAuth(req, res, next) {
     if (!req.headers.authorization) {
         return res.status(403).send({ message: `No se encuentra autorizado para acceder` })
     }

    const token = req.headers.authorization.split("")[1]; // Tomo el solo el token exp:  Authorization: Bearer <token>
    services.decodeToken(token)
        .then( response => {
            req.user = response;
            next(response);
        })
        .catch( response => {
            res.status(response.status);
        });
}

module.exports = isAuth;
'use strict';

const jwt = require('jwt-simple');
const moment = require('moment');
const config = require('../config');

function createToken(user) {
    const payload = {
        sub: user._id, //TODO inseguro
        iat: moment().unix(),
        exp: moment().add(14, 'days').unix(),
    };

    return jwt.encode(payload, config.SECRET_TOKEN, 'HS512', {});

}

function decodeToken(token) {
    const decode = new Promise( (resolve, reject) => {
       try {
           const payload = jwt.decode(token, config.SECRET_TOKEN, false, 'SHA512');
           if ( payload.exp <= moment.unix() ) {
               reject({
                   status: 401,
                   message: `Token expirado`
               });
           }
           resolve(payload.sub);
       } catch (err) {
           reject({
               status: 500,
               message: `Token incorrecto`
           });
       }
    });

    return decoded;
}

module.exports = {
    createToken,
    decodeToken
};
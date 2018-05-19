'use strict';

const jwt = require('jwt-simple');
const moment = require('moment');
const config = require('../config');

function createToken(user) {
    const payload = {
        sub: user._id, //TODO inseguro
        iat: moment().unix(),
        exp: moment().add(14, 'days').unix()
    };

    return jwt.encode(payload, config.SECRET_TOKEN, 'HS512', {});
}

function decodeToken(token) {
    const decode = new Promise( (resolve, reject) => {
       try {
           const payload = jwt.decode(token, config.SECRET_TOKEN, false, 'HS512');
           // const payloadExp = moment(payload.exp).unix();
           if ( moment(payload.exp).unix() >= moment().unix() ) {
               resolve({
                   status: 401,
                   message: `Token expirado.`
               })
           }
           resolve(payload.sub);
       } catch (err) {
           reject({
               status: 500,
               message: `Token incorrecto.`
           });
       }
    });
    return decode;
}

module.exports = {
    createToken,
    decodeToken
};
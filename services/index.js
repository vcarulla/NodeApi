'use strict';

const jwt = require('jsonwebtoken');
const moment = require('moment');
const config = require('../config');
const randtoken = require('rand-token');

function createToken() {
    const payload = {
        sub: randtoken.uid(256),
        iat: moment().unix(),
        exp: moment().add(60, 'seconds').unix(),
    };
    return jwt.sign(payload, config.SECRET_PRIVATE_KEY, { algorithm: 'RS256' });
}

function decodeToken(token) {
    const decode = new Promise( (resolve, reject) => {
       jwt.verify(token, config.SECRET_PUBLIC_KEY, { algorithms: ['RS256'] }, (err, payload) => {
           if ( err ) {
               reject({
                   status: 401,
                   message: `${err.message}`,
                   err: `${err}`
               });
           }
           resolve(payload.sub);
       });
    });
    return decode;
}

module.exports = {
    createToken,
    decodeToken
};
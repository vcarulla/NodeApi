'use strict';

const User = require('../models/user');
const service = require('../services');

const signUp = (req, res) => {
    const user = new User({
        email: req.body.email,
        displayName: req.body.displayName,
        password: req.body.password
    });

    user.avatar = user.gravatar();

    user.save( (err) => {
        if (err) return res.status(500).send({ message: `Se produjo un error al realizar la petición.`, ERROR: `${err}` });

        return res.status(200).send({ message: `Usuario generado con éxito!`, token: service.createToken(user) });
    });
};

function signIn(req, res) {
    User.findOne({ email: req.body.email }, (err, user) => {
        if (err) return res.status(500).send({ message: `Se produjo un error al realizar la petición.`, ERROR: `${err}` });
        if (!user) return res.status(401).send({ message: `Usuario o password inexistente. ERROR: ${err}` });
        user.comparePassword(req.body.password, (err, match) => {
            if (err) return res.status(500).send({ message: `Se produjo un error al realizar la petición.`, ERROR: `${err}` });
            if (match) {
                res.status(200).send({ message: `Bienvenido ${user.displayName}!`, token: service.createToken(user) });
            } else {
             res.status(401).send({ message: `Usuario o password inexistente.`, ERROR: `${err}` });
            }
        });
    }).select('avatar password displayName');
    // Sino hacemos el ".select" mongo no retorna el password, por q se puso select:false al crear el schema.
}

function signOut() {

}

module.exports = {
    signIn,
    signUp,
};
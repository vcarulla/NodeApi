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
        if (err) return res.status(500).send({ message: `Se produjo un error al realizar la petición. ERROR: ${err}` });

        return res.status(200).send({ token: service.createToken(user) });
    });
};

function signIn(req, res) {
    User.findOne({ email: req.body.email }, (err, user) => {
        if (err) return res.status(500).send({ message: `Se produjo un error al realizar la petición. ERROR: ${err}` });
        if (!user) return res.status(404).send({ message: `Usuario inexistente. ERROR: ${err}` });
        user.comparePassword(req.body.password, (err, match) => {
            if (err) return res.status(500).send({ message: `Se produjo un error al realizar la petición2. ERROR: ${err}` });
            if (match) {
                res.status(200).send({ message: `Bienvenido ${user}!`, token: service.createToken(user) });
            } else {
             res.status(401).send({ message: `Datos Incorrectos. ERROR: ${err}` });
            }
        });
    }).select('avatar password displayName');
    // TODO Sino hacemos esto mongo no retorna el password, por q se puso select:false al crear el schema.
}

module.exports = {
    signIn,
    signUp,
};
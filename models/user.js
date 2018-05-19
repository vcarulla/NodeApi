'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt-nodejs');
const crypto = require('crypto');

const UserSchema = Schema({
    email: { type: String, unique: true, lowercase: true },
    displayName: {type: String, maxLength: 50},
    avatar: String,
    password: { type: String, select: false },
    signupDate: { type: Date, default: Date.now() },
    lastLogin: Date
});

UserSchema.pre('save', function (next) {

    bcrypt.genSalt(10, (err, salt) => {
        if (err) return next(err);

        bcrypt.hash(this.password, salt, null, (err, hash) => {
            if (err) return next(err);

            this.password = hash;
            next();
        });
    });
});


UserSchema.methods.comparePassword = function (candidatePassword, callback) {
    bcrypt.compare(candidatePassword, this.password, (err, isMatch) => {
        if (err) return callback(err);
        callback(null, isMatch)
    });
};

UserSchema.methods.gravatar = function (size) {
    if (!size) {
        size = 200;
    }
    if (!this.email) return `https://gravatar.com/avatar/?s=${size}&d=retro`;
    const md5 = crypto.createHash('md5').update(this.email).digest('hex');
    return `https://gravatar.com/avatar/${md5}?s=${size}&d=retro`;
};

module.exports = mongoose.model('User', UserSchema);
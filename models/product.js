'use strict'

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProductSchema = Schema({
    name: {type: String, maxLength: 50},
    price: { type: Number, default: 0},
    picture: String,
    description: {type: String, maxLength: 140},
    category: { type: String, enum: ['notebook', 'ultrabook', 'desktop'] }
});

module.exports = mongoose.model('Product', ProductSchema);
'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    enterpriseName: {
        type: String,
        required: true,
        trim: true
    },
    cpf: {
        type: Number,
        required: true
    },
    telephone: {
        type: Number,
        required: true
    },
    email: [{
        type: String,
        required: true
    }],
    password: {
        type: String,
        required: true,
        trim: true
    }
});

module.exports = mongoose.model('Product', schema);

'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    namePeople: {
        type: String,
        required: true
    },
    nameCompany: {
        type: String,
        required: true
    },
    cpf: {
        type: String,
        required: true
    },
    number: {
        type: String,
        required: true
    },
    active: {
        type: Boolean,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('User', schema);
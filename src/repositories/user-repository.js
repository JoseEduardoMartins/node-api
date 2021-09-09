'use strict';

const mongoose = require('mongoose');
const User = mongoose.model('User');

exports.get = async() => {
    const res = await User.find({});
    return res
}
exports.getCpf = async(cpf) => {
    const res = await User.findOne({
        cpf: cpf
    }, 'cpf');
    return res
}
exports.getEmail = async(email) => {
    const res = await User.findOne({
        email: email
    }, 'email');
    return res
}
exports.getPassword = async(password) => {
    const res = await User.findOne({
        password: password
    }, 'password');
    return res
}

exports.create = async(data) => {
    var user = new User(data);
    await user.save();
}

exports.update = async(id, data) => {
    await User
        .findByIdAndUpdate(id, {
            $set: {
                namePeople: data.namePeople,
                nameCompany: data.nameCompany,
                cpf: data.cpf,
                number: data.number,
                email: data.email,
                password: data.password
            }
        })
}

exports.delete = async(id) => {
    await User
        .findOneAndRemove({_id: id});
}
'use strict';

const mongoose = require('mongoose');
const User = mongoose.model('User');

exports.get = async() => {
    const res = await User.find({});
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
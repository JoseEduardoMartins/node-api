'use strict';

const ValidationContract = require('../validators/fluent-validator');
const repository = require('../repositories/customer-repository');
const md5 = require('md5');
const emailService = require('../sevices/email-service');

exports.post = async(req, res, next) => {
    let contract = new ValidationContract();
    contract.hasMinLen(req.body.name, 3, 'O nome deve conter pelo menos 3 caracteres');
    contract.isEmail(req.body.email, 'email invalido!');
    contract.hasMinLen(req.body.password,  6 , 'senha invalido!');

    //Se os dados forem invalidos
    if (!contract.isValid()) {
        res.status(400).send(contract.errors()).end();
        return;
    }
    try {
        await repository.create({
            name: req.body.name,
            email: req.body.email,
            password: md5(req.body.passaword + global.SALT_KEY)
        });
        emailService.send(req.body.email, 'bem vindo ao node store', global.EMAIL_TMPL.replace('{0}', req.body.name))
        
        res.status(201).send({
            message: 'Cliente cadstrado com sucesso!'
        });
    } catch (error) {
        res.status(500).send({
            message: 'Falha ao processar sua requisição'
        });
    }
};
'use strict';

const repository = require('../repositories/user-repository');

exports.get = async(req, res, next) => {
    try {
        var data = await repository.get()
        res.status(200).send(data);
    } catch (error) {
        res.status(500).send({
            message: 'Falha ao processar sua requisição'
        });
    }
};
function getByEmail(email) {
    try {
        let data =  repository.getByEmail(email);
        return data;
    } catch (error) {
        res.status(500).send({
            message: 'Falha ao processar sua requisição'
        });
    }
    console.log(returnEmail);
}

exports.post = async(req, res, next) => {
    try {
        await repository.create({
            namePeople: req.body.namePeople,
            nameCompany: req.body.nameCompany,
            cpf: req.body.cpf,
            number: req.body.number,
            active: true,
            email: req.body.email,
            password: req.body.password
        })
        res.status(201).send({
            message: 'Produto cadastrado com sucesso!'
        });
    } catch (error) {
        res.status(500).send({
            message: 'Falha ao processar sua requisição'
        });
    }
};

exports.put = async(req, res, next) => {
    try {
        await repository.update(req.params.id, req.body);
        res.status(201).send({
            message: 'Produto atualizado com sucesso!'
        });
    } catch (error) {
        res.status(400).send({
            message: 'Falha ao processar sua requisição'
        });
    }
};

exports.delete = async(req, res, next) => {
    try {
        await repository.delete(req.body.id)
        res.status(200).send({
            message: 'Usuario removido com sucesso!'
        });
    } catch (error) {
        res.status(500).send({
            message: 'Falha ao processar sua requisição',
        });
    }
};
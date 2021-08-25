'use strict';

const mongoose = require('mongoose');
const product = require('../models/product');
const Product = mongoose.model('Product');

exports.get = (req, res, next) => {
    Product
        .find({
            active: true
        }, 'title price slug')
        .then(data => {
            res.status(200).send(data);
        }).catch(e => {
            //status 400 é uma bad request
            res.status(400).send(e);
        });
};

exports.getBySlug = (req, res, next) => {
    Product
        .findOne({
            slug: req.params.slug,
            active: true
        }, 'title description price slug tags')
        .then(data => {
            res.status(200).send(data);
        }).catch(e => {
            //status 400 é uma bad request
            res.status(400).send(e);
        });
};
exports.getById = (req, res, next) => {
    Product
        .findById(req.params.id)
        .then(data => {
            res.status(200).send(data);
        }).catch(e => {
            //status 400 é uma bad request
            res.status(400).send(e);
        });
};
exports.getByTag = (req, res, next) => {
    Product
        .find({
            tags: req.params.tag,
            active: true
        }, 'title description price slug tags')
        .then(data => {
            res.status(200).send(data);
        }).catch(e => {
            //status 400 é uma bad request
            res.status(400).send(e);
        });
};

exports.post = (req, res, next) => {
    var product = new Product(req.body);
    /*Para ter mais segurança ao iserir dados no objeto

    product.title = req.body.title;
    product.slug = req.body.slug;
    product.description = req.body.description;
    product.price = req.body.price;
    product.active = req.body.active;
    product.tags = req.body.tags;
    product.image = req.body.image;|*/
    product
        .save()
        .then(x => {
            res.status(201).send({
                message: 'Produto cadastrado com sucesso!'
            });
        }).catch(e => {
            //status 400 é uma bad request
            res.status(400).send({
                message: 'Falha ao cadastrar o produto!',
                data: e
            });
        });
};
exports.put = (req, res, next) => {
    Product
        .findByIdAndUpdate(req.params.id, {
            $set: {
                title: req.body.title,
                description: req.body.description,
                price: req.body.price,
                slug: req.body.slug,
                active: req.body.active,
                tags: req.body.tags,
                image: req.body.image
            }
        }).then(x => {
            res.status(201).send({
                message: 'Produto atualizado com sucesso!'
            });
        }).catch(e => {
            res.status(400).send({
                message: 'Falha ao atualizar produto',
                data: e
            });
        })
} ;
exports.delete = (req, res, next) => {
    const id = req.params.id;
    res.status(200).send(req.body);
};
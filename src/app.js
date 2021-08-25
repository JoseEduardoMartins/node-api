'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
const router = express.Router();

//conexão com banco de dados
mongoose.connect('mongodb+srv://jose:jose@db-pf.uxugv.mongodb.net/myFirstDatabase?');

//carrega os models
const Product = require('./models/product');

//carrega as rotas
const indexRoutes = require('./routes/index_route');
const productRoutes = require('./routes/product-route')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));

app.use('/', indexRoutes);
app.use('/products', productRoutes);

module.exports = app;

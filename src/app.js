'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const config = require('./config');

const app = express();
const router = express.Router();

//conexão com banco de dados
mongoose.connect(config.connectionString);

//carrega os models
const Product = require('./models/product');
const Customer = require('./models/customer');
const Order = require('./models/order');

//carrega as rotas
const indexRoutes = require('./routes/index_route');
const productRoutes = require('./routes/product-route')
const customertRoutes = require('./routes/customer-route')
const orderRoutes = require('./routes/order-route')


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));

app.use('/', indexRoutes);
app.use('/products', productRoutes);
app.use('/customers', customertRoutes);
app.use('/orders', orderRoutes);

module.exports = app;

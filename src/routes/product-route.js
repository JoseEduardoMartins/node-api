'use strict';

const express = require('express');
const router = express.Router();
const controller = require('../controllers/product-controller');

const create = router.post('/', controller.post); 
const put = router.put('/:id', controller.put);
const del = router.delete('/', controller.delete);

module.exports = router;
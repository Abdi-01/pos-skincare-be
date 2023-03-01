const express = require('express');
const { productController } = require('../controllers');
const route = express.Router();

// route.get('/', productController.getProducts);
route.get('/products', productController.getProducts);
// route.get('/detail/:id', productController.getProductsDetail);
route.post('/new-products', productController.postProducts);
// route.patch('/:id', productController.patchProducts);
// route.delete('/:id', productController.deleteProducts);

module.exports = route; 
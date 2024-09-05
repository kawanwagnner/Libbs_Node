const { Router } = require('express');
const routerProduct = Router();

const productController = require('../controller/ProdutoController');
const { validateProduct, validateProductId } = require('../middlewares/ValidateProduct');

routerProduct.post('/', validateProduct, (req,res) => {
    productController.create(req,res)
});

routerProduct.get('/', validateProduct, validateProductId, (req,res) => {
    productController.getAll(req,res);
});

// /api/users/:id => Isso é um modelo de (params)

// api/users?id=3216 => Isto é uma (Query)

// {body: {id: "3212"} } => (Body)

routerProduct.delete('/:id', validateProductId, (req,res) => {
    productController.delete(req,res);
});

routerProduct.put('/:id',  validateProduct, validateProductId,(req,res) => {
    productController.update(req,res);
});

routerProduct.get('/:id', validateProductId, (req,res) => {
    productController.getOne(req,res);
});

module.exports = routerProduct;
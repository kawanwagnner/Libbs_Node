const { Router } = require('express');
const clienteController = require('../controller/ClienteController');
const { validateCliente, validateClientetId } = require('../middlewares/ValidateCliente');


const router = Router();

//Configurar as rotas (CRUD);

router.post('/', validateCliente, (req,res) => {
    clienteController.create(req,res)
});

router.get('/', validateClientetId,validateCliente, (req,res) => {
    clienteController.getAll(req,res);
});

// /api/users/:id => Isso é um modelo de (params)

// api/users?id=3216 => Isto é uma (Query)

// {body: {id: "3212"} } => (Body)

router.delete('/:id', validateClientetId, (req,res) => {
    clienteController.delete(req,res);
});

router.put('/:id', validateCliente, validateClientetId, (req,res) => {
    clienteController.update(req,res);
});

router.get('/:id', validateClientetId, (req,res) => {
    clienteController.getOne(req,res);
});





module.exports = router;
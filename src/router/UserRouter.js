const { Router } = require('express');
const userController = require('../controller/UserController');
const { validateUser, validateUserId } = require('../middlewares/ValidateUser');


const router = Router();

//Configurar as rotas (CRUD);

router.post('/', validateUser, (req,res) => {
    userController.create(req,res)
});

router.get('/', validateUserId,validateUser, (req,res) => {
    userController.getAll(req,res);
});

// /api/users/:id => Isso é um modelo de (params)

// api/users?id=3216 => Isto é uma (Query)

// {body: {id: "3212"} } => (Body)

router.delete('/:id', validateUserId, (req,res) => {
    userController.delete(req,res);
});

router.put('/:id', validateUser, validateUserId, (req,res) => {
    userController.update(req,res);
});

router.get('/:id', validateUserId, (req,res) => {
    userController.getOne(req,res);
});

router.post('/login' , (req, res) => {
    userController.login(req,res);
})





module.exports = router;
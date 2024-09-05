const { Router } = require('express');
const userRoutes = require('./UserRouter');
const produtoRoutes = require('./ProdutoRouter');
const clienteRoutes = require('./ClienteRouter');
const UserController = require('../controller/UserController');
const uploadRoutes = require('../router/UploadRouter')

const router = Router();

router.use('/image' , uploadRoutes);
router.use('/user', userRoutes);
router.use('/produto', produtoRoutes);
router.use('/cliente', clienteRoutes);
router.post('/login', userRoutes);

module.exports = router;
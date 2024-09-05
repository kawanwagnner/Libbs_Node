const User = require("../models/User");
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const UserController = {
   login: async (req, res) => {
    try {
      const {email, senha} = req.body;

      const user = await User.findOne({ where: { email }});

      if (!user) {
        return res.status(400).json({
          msg: 'Email ou senha incorretos'
        })
      }

      const isValida = await bcrypt.compare(senha, user.senha);
      if(!isValida) {
        return res.status(400).json({
          msg: 'Email ou senha incorretos'
        })
      }

      const token = jwt.sign({ email: user.email, name: user.nome}, process.env.SECRET,{expiresIn: '1h' });

      return res.status(200).json({
        msg: 'Login realizado',
        token
      })
      

    } catch (error) { 
      console.error(error);
      return res.status(500).json({
        msg: "Acione o Suporte",
      });
    }
  },

  create: async (req, res) => {
    try {
      const { nome, email, senha } = req.body;

      const hashSenha = await bcrypt.hash(senha, 10 )

      

      const userCriado = await User.create({ nome, email, senha: hashSenha });

      return res.status(200).json({
        msg: "Usuario criado com sucesso",
        user: userCriado
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({
        msg: "Acione o Suporte",
      });
    }
  },
  update: async (req, res) => {
    try {
      const { id } = req.params;
      const { nome, senha, email } = req.body;

      await User.update ({
        
            nome: nome,
            email: email,
            senha: senha
        

      },
    {
        where : {id: id},
    })

      

      return res.status(200).json({ msg: "Usuario atualizado com sucesso" });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ msg: "Acione o Suporte" });
    }
  },
  getAll: async (req, res) => {
    try {
      const usuarios = await User.findAll();
      return res.status(200).json({ 
        msg: "Usuários encontrados", 
        usuarios 
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ msg: "Acione o Suporte" });
    }
  },
  
  getOne: async (req, res) => {
    try {
      const { id } = req.params;
      const usuario = await User.findByPk(id); 
  
      if (!usuario) {
        return res.status(404).json({ msg: "Usuário não encontrado" });
      }
  
      return res.status(200).json({ 
        msg: "Usuário encontrado com sucesso", 
        usuario : usuario
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ msg: "Acione o Suporte" });
    }
  },
  
  delete: async (req, res) => {
    try {
      const { id } = req.params;
  
      
      const usuario = await User.findByPk(id);
  
      if (!usuario) {
        return res.status(404).json({ msg: "Usuário não encontrado" });
      }
  
      
      await usuario.destroy();
  
      return res.status(200).json({ msg: "Usuário deletado com sucesso" });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ msg: "Acione o Suporte" });
    }
  },
  
};

module.exports = UserController;

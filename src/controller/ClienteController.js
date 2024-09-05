const Produto = require("../models/Cliente");

const ClienteController = {
  create: async (req, res) => {
    try {
      const { nome, cpf, rg } = req.body;
      const ClienteCriado = await Cliente.create({ nome, cpf, rg });

      return res.status(200).json({
        msg: "Cliente criado com sucesso",
        cliente: ClienteCriado
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
      const { nome, cpf, rg } = req.body;

      await Cliente.update ({
        
            nome: nome,
            cpf: cpf,
            rg: rg
        

      },
    {
        where : {id: id},
    })

      

      return res.status(200).json({ msg: "Cliente atualizado com sucesso" });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ msg: "Acione o Suporte" });
    }
  },
  getAll: async (req, res) => {
    try {
      const clientes = await Cliente.findAll();
      return res.status(200).json({ 
        msg: "Clientes encontrados", 
        clientes 
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ msg: "Acione o Suporte" });
    }
  },
  
  getOne: async (req, res) => {
    try {
      const { id } = req.params;
      const cliente = await Cliente.findByPk(id); 
  
      if (!cliente) {
        return res.status(404).json({ msg: "Cliente não encontrado" });
      }
  
      return res.status(200).json({ 
        msg: "Cliente encontrado com sucesso", 
        cliente : cliente
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ msg: "Acione o Suporte" });
    }
  },
  
  delete: async (req, res) => {
    try {
      const { id } = req.params;
  
      
      const cliente = await Cliente.findByPk(id);
  
      if (!cliente) {
        return res.status(404).json({ msg: "Cliente não encontrado" });
      }
  
      
      await cliente.destroy();
  
      return res.status(200).json({ msg: "Cliente deletado com sucesso" });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ msg: "Acione o Suporte" });
    }
  },
  
};

module.exports = ClienteController;

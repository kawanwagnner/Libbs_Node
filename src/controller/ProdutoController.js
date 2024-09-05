const Produto = require("../models/Produto");

const ProdutoController = {
  create: async (req, res) => {
    try {
      const { nome, preco, quantidade } = req.body;
      const ProdutoCriado = await Produto.create({ nome, preco, quantidade });

      return res.status(200).json({
        msg: "Produto criado com sucesso",
        produto: ProdutoCriado
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
      const { nome, preco, quantidade } = req.body;

      await Produto.update ({
        
            nome: nome,
            preco: preco,
            quantidade: quantidade
        

      },
    {
        where : {id: id},
    })

      

      return res.status(200).json({ msg: "Produto atualizado com sucesso" });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ msg: "Acione o Suporte" });
    }
  },
  getAll: async (req, res) => {
    try {
      const produtos = await Produto.findAll();
      return res.status(200).json({ 
        msg: "Produtos encontrados", 
        produtos 
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ msg: "Acione o Suporte" });
    }
  },
  
  getOne: async (req, res) => {
    try {
      const { id } = req.params;
      const produto = await Produto.findByPk(id); 
  
      if (!produto) {
        return res.status(404).json({ msg: "Produto não encontrado" });
      }
  
      return res.status(200).json({ 
        msg: "Produto encontrado com sucesso", 
        produto : produto
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ msg: "Acione o Suporte" });
    }
  },
  
  delete: async (req, res) => {
    try {
      const { id } = req.params;
  
      
      const produto = await Produto.findByPk(id);
  
      if (!produto) {
        return res.status(404).json({ msg: "Produto não encontrado" });
      }
  
      
      await produto.destroy();
  
      return res.status(200).json({ msg: "Produto deletado com sucesso" });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ msg: "Acione o Suporte" });
    }
  },
  
};

module.exports = ProdutoController;

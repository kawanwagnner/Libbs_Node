const sequelize = require("../config/config");
const { DataTypes } = require("sequelize")


const Produtos = sequelize.define('produto',{
    nome: {
        type: DataTypes.STRING,
        allowNull: false
    },
    preco: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    quantidade: {
        type: DataTypes.STRING,
        allowNull: false
    }

});





module.exports =  Produtos;
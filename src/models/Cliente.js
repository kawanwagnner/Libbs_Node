const sequelize = require("../config/config");
const { DataTypes } = require("sequelize")


const Clientes = sequelize.define('cliente',{
    nome: {
        type: DataTypes.STRING,
        allowNull: false
    },
    cpf: {
        type: DataTypes.STRING,
        allowNull: false
    },
    rg: {
        type: DataTypes.STRING,
        allowNull: false
    }

});





module.exports =  Clientes;
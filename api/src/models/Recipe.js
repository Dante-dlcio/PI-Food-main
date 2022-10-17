const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('recipe', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },

    name: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },

    summary: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },

    healthScore: {
      type: DataTypes.INTEGER(0,100),
      allowNull: false,
    },
    stepByStep: {
      type: DataTypes.STRING(1800),
      allowNull: false,
    },
    created:{
      type: DataTypes.BOOLEAN,
    }
  },
  {
    timestamps: false
  });
};

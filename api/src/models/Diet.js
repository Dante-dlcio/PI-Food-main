const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define("diet", {
    name: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    created: {
      type: DataTypes.BOOLEAN,
    }
  }, {
    timestamps: true,
    paranoid: true,
  });
};

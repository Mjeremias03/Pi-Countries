const { DataTypes, UUIDV4 } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("Country", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
     
    },
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true, 
      primaryKey: true,
      allowNull: false,
      validate: {
      min: 100,
      max: 999,  
    },},
    imagen: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    continente: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    capital: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    subregion: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    area: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    poblacion: {
      type: DataTypes.INTEGER, // Change the data type to INTEGER if "elemento.population" is an integer
      allowNull: false,
    },
  });
};


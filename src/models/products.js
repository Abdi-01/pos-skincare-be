'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class products extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  products.init({
    namaproduct: DataTypes.STRING,
    categoryid: DataTypes.INTEGER,
    price: DataTypes.INTEGER,
    fotoproduk: DataTypes.STRING,
    weight: DataTypes.STRING,
    deskripsi: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'products',
  });
  return products;
};
'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Products extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Products.belongsToMany(models.Orders, {
        through: 'ProductsOrders',
        as: 'Orders',
        foreignKey: 'products_id',
      });
    }
  }

  Products.init({
    name: DataTypes.STRING,
    price: DataTypes.DECIMAL,
    flavor: DataTypes.STRING,
    complement: DataTypes.STRING,
    image: DataTypes.STRING,
    type: DataTypes.STRING,
    sub_type: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Products',
  });
  return Products;
};

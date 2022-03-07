'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class item extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.item.belongsTo(models.groupticket)
    }
  }
  item.init({
    itemsId: DataTypes.INTEGER,
    groupticketId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER,
    transactionId: DataTypes.INTEGER,
    cost: DataTypes.FLOAT,
    description: DataTypes.STRING,
    quantity: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'item',
  });
  return item;
};
'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class individualTicket extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  individualTicket.init({
    individualTicket: DataTypes.INTEGER,
    userID: DataTypes.INTEGER,
    locationID: DataTypes.INTEGER,
    itemsID: DataTypes.INTEGER,
    individualTotal: DataTypes.FLOAT,
    title: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'individualTicket',
  });
  return individualTicket;
};
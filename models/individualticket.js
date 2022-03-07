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
      models.individualTicket.belongsTo(models.groupticket)
      models.individualTicket.hasMany(models.user)
    }
  }
  individualTicket.init({
    individualTicketId: DataTypes.INTEGER,
    groupticketId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER,
    locationId: DataTypes.INTEGER,
    itemsId: DataTypes.INTEGER,
    individualTotal: DataTypes.FLOAT,
    title: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'individualTicket',
  });
  return individualTicket;
};
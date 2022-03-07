'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class groupticket extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      //location association
      models.groupticket.belongsTo(models.location);
      //friends association
      models.groupticket.hasMany(models.individualTicket);
      //items association
      models.groupticket.hasMany(models.item);
      models.groupticket.belongsToMany(models.user, { through: 'friend' })
    }
  }
  groupticket.init({
    groupTicketId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER,
    itemsId: DataTypes.INTEGER,
    locationId: DataTypes.INTEGER,
    title: DataTypes.STRING,
    groupTotal: DataTypes.FLOAT,
    tip: DataTypes.FLOAT
  }, {
    sequelize,
    modelName: 'groupticket',
  });
  return groupticket;
};
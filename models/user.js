'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.user.hasOne(models.login) // one to one with login table
      // one to many with friends table
      models.user.hasMany(models.groupticket)
      models.user.belongsTo(models.individualTicket)
      models.user.hasMany(models.friend)
      models.user.belongsToMany(models.groupticket, { through: 'friend' })
    }
  }
  user.init({
    userId: DataTypes.INTEGER,
    fname: DataTypes.STRING,
    lname: DataTypes.STRING,
    email: DataTypes.STRING,
    phoneNumber: DataTypes.STRING,
    individualTicketId: DataTypes.INTEGER,
    loginId: DataTypes.INTEGER

  }, {
    sequelize,
    modelName: 'user',
  });
  return user;
};
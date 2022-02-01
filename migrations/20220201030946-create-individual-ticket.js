'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('individualTickets', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      individualTicket: {
        type: Sequelize.INTEGER
      },
      userID: {
        type: Sequelize.INTEGER
      },
      locationID: {
        type: Sequelize.INTEGER
      },
      itemsID: {
        type: Sequelize.INTEGER
      },
      individualTotal: {
        type: Sequelize.FLOAT
      },
      title: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('individualTickets');
  }
};
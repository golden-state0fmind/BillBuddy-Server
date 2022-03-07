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
      individualTicketId: {
        type: Sequelize.INTEGER
      },
      groupticketId: {
        type: Sequelize.INTEGER
      },
      userId: {
        type: Sequelize.INTEGER
      },
      locationId: {
        type: Sequelize.INTEGER
      },
      itemsId: {
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
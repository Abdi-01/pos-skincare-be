'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      username: {
        allowNull: false,
        type: Sequelize.STRING(45)
      },
      email: {
        allowNull: false,
        type: Sequelize.STRING(45)
      },
      password: {
        allowNull: false,
        type: Sequelize.STRING(200)
      },
      phone: {
        allowNull: false,
        type: Sequelize.STRING(45)
      },
      role: {
        type: Sequelize.STRING(45),
        defaultValue:'users'
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
    await queryInterface.dropTable('users');
  }
};
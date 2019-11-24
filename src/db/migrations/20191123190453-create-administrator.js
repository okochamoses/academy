"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable(
      "Administrators",
      {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER
        },
        firstName: {
          type: Sequelize.STRING
        },
        lastName: {
          type: Sequelize.STRING
        },
        email: {
          type: Sequelize.STRING
        },
        password: {
          type: Sequelize.STRING
        },
        username: {
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
      },
      {
        timestamps: true
      }
    );
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("Administrators");
  }
};

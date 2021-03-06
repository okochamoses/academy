"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
      "Students", // name of Source model
      "GuardianId", // name of the key we're adding
      {
        type: Sequelize.INTEGER,
        references: {
          model: "Guardians", // name of Target model
          key: "id" // key in Target model that we're referencing
        }
      }
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn(
      "Students", // name of Source model
      "GuardianId" // key we want to remove
    );
  }
};

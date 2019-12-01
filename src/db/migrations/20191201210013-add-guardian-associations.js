"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
      "Students", // name of Source model
      "guardian_id", // name of the key we're adding
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
      "guardian_id" // key we want to remove
    );
  }
};

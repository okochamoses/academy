"use strict";
const Mock = require("../../utils/mocker");

const mockAdmins = new Mock({
  firstName: "{{name.firstName}}",
  lastName: "{{name.lastName}}",
  username: "{{internet.userName}}",
  email: "{{internet.email}}",
  password: "{{internet.password}}",
  createdAt: new Date(),
  updatedAt: new Date()
});

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Administrators", mockAdmins.get(10), {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Administrators", null, {});
  }
};

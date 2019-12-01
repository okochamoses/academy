"use strict";
const Mock = require("../../utils/mocker");

const mockAdmins = new Mock({
  firstName: "{{name.firstName}}",
  lastName: "{{name.lastName}}",
  username: "{{internet.userName}}",
  email: "{{internet.email}}",
  password: "{{internet.password}}",
  phone: "{{phone.phoneNumber}}",
  active: 1,
  createdAt: new Date(),
  updatedAt: new Date()
});

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Students", mockAdmins.get(10), {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Students", null, {});
  }
};

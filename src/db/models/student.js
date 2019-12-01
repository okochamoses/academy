"use strict";
const Class = require("./class");
module.exports = (sequelize, DataTypes) => {
  const Student = sequelize.define(
    "Student",
    {
      firstName: DataTypes.STRING,
      lastName: DataTypes.STRING,
      email: DataTypes.STRING,
      phone: DataTypes.STRING,
      username: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false
      },
      active: {
        type: DataTypes.BOOLEAN,
        default: true,
        allowNull: false
      },
      password: DataTypes.STRING
    },
    {}
  );
  Student.associate = function(models) {
    Student.belongsTo(Class);
  };
  return Student;
};

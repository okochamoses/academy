"use strict";
module.exports = (sequelize, DataTypes) => {
  const Teacher = sequelize.define(
    "Teacher",
    {
      firstName: DataTypes.STRING,
      lastName: DataTypes.STRING,
      email: DataTypes.STRING,
      username: DataTypes.STRING,
      password: DataTypes.STRING,
      active: {
        type: DataTypes.BOOLEAN,
        default: true,
        allowNull: false
      }
    },
    {}
  );
  Teacher.associate = function(models) {
    // associations can be defined here
  };
  return Teacher;
};

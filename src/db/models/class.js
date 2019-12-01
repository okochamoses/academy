"use strict";
module.exports = (sequelize, DataTypes) => {
  const Class = sequelize.define(
    "Class",
    {
      name: DataTypes.STRING,
      code: DataTypes.STRING,
      active: DataTypes.BOOLEAN
    },
    {}
  );
  Class.associate = function(models) {
    // associations can be defined here
  };
  return Class;
};

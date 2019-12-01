"use strict";
module.exports = (sequelize, DataTypes) => {
  const Guardian = sequelize.define(
    "Guardian",
    {
      firstName: DataTypes.STRING,
      lastName: DataTypes.STRING,
      email: DataTypes.STRING,
      phone: DataTypes.STRING,
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
  Guardian.associate = function(models) {
    // associations can be defined here
    Guardian.hasMany(models.Student);
  };
  return Guardian;
};

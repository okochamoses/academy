"use strict";
module.exports = (sequelize, DataTypes) => {
  const Grades = sequelize.define(
    "Grades",
    {
      subject: DataTypes.STRING,
      score: DataTypes.INTEGER,
      total: DataTypes.INTEGER,
      type: DataTypes.STRING,
      session: DataTypes.STRING,
      cummulative: DataTypes.BOOLEAN
    },
    {}
  );
  Grades.associate = function(models) {
    // associations can be defined here
    Grades.belongsTo(models.Student);
  };
  return Grades;
};

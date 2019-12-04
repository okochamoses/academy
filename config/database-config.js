const { DB } = require("./configs");

module.exports = {
  development: {
    username: "root",
    password: "password",
    database: "academy_dev",
    host: "127.0.0.1",
    dialect: "mysql",
    operatorsAliases: false
  },
  test: {
    username: DB.username,
    password: DB.password,
    database: DB.database,
    host: DB.host,
    dialect: DB.dialect,
    operatorsAliases: false
  },
  production: {
    username: "root",
    password: null,
    database: "academy",
    host: "127.0.0.1",
    dialect: "mysql",
    operatorsAliases: false
  }
};

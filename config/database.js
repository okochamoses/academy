const Sequelize = require("sequelize");

const {
  database,
  dialect,
  host,
  password,
  port,
  username
} = require("./configs").DB;

const sequelize = new Sequelize(database, username, password, {
  host,
  dialect,
  port
});

// Uncomment below to test database connection
// sequelize
//   .authenticate()
//   .then(() => {
//     console.log("Connection has been established successfully.");
//   })
//   .catch(err => {
//     console.error("Unable to connect to the database:", err);
//   });

// Sequelize will keep the connection open by default, and use the same connection for all queries
module.exports = sequelize;

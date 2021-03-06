require("dotenv").config();

// App level config
module.exports.App = {
  baseUrl: process.env.BASE_URL
};

// Declare database configurations
module.exports.DB = {
  dialect: process.env.DB_DIALECT,
  database: process.env.DB_DATABASE,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT
};

module.exports.Keys = {
  jwt_secret: process.env.JWT_SECRET
}

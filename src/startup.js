const express = require("express");
const path = require("path");
const logger = require("morgan");
const RouteHandler = require("./handlers/route");
const passport = require("passport");

const app = express();

class Application {
  constructor(app, database) {
    this.app = app;
    this.database = database;
    this.routeHandler = new RouteHandler(this.app);
  }

  buildApp() {
    this.app.use(logger("dev"));
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: false }));
    this.app.use(express.static(path.join(__dirname, "public")));
    this.app.use(passport.initialize());
    this.routeHandler.registerRoutes(); // Register Routes
    this.connectDatabase(); // Connect to database

    return this.app;
  }

  connectDatabase() {
    require("../config/database");
  }
}

// Export single instance of application class
module.exports = new Application(app);

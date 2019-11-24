const { baseUrl } = require("../../config/configs").App;
const routes = require("../routes");

class RouteHandler {
  constructor(app) {
    this.app = app;
    this.baseUrl = !baseUrl.endsWith("/") ? baseUrl : `${baseUrl}`; // Check URL for trailing slash
  }

  // Register all routes below
  registerRoutes() {
    this.registerRoute("", routes.homeRouter);
    this.registerRoute("user", routes.usersRouter);
  }

  registerRoute(endpoint, route) {
    this.app.use(this.routePath(endpoint), route);
  }

  routePath(route) {
    route = route[0] === "/" ? route : `/${route}`;
    return this.baseUrl + route;
  }
}

module.exports = RouteHandler;

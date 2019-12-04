const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const passport = require("passport");
const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;
const {jwt_secret} = require("../../config/configs").Keys;

class Auth {
  constructor(model, middleware) {
    this.model = model; // A DB model is injected
    this.middleware = middleware;
    this.privateKey = jwt_secret;
  }

  async extractHeader() {}

  async authenticate(username, password) {
    try {
        const user = await this.model.findByUsername(username);
        if (user) {
          const isMatch = await this.comparePassword(password, user.password);
          const userPayload = {
            id: user.id,
            username: user.username,
            firstName: user.firstName,
            lastName: user.lastName
          }
          const token = jwt.sign(userPayload, this.privateKey);
          return "Bearer " + token;
        } else {
          throw new Error("Authentication failure");
          return false;
        }
    } catch (error) {
      return error;
    }
  }

  
  async validate(token) {
    try {
      var opts = {};
      opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
      opts.secretOrKey = "secret";
      opts.issuer = "accounts.examplesoft.com";
      opts.audience = "yoursite.net";

      passport.use(new JwtStrategy(opts, async (jwt_payload, done) => {
        const user = await this.model.findByUsername(username);
        return user;
        if (user) {
          const isMatch = await this.comparePassword(password, user.password);
          return user;
        } else {
          throw new Error("Authentication failure");
          return false;
        }
      }))
    } catch (error) {
      return error;
    }
  }

  async comparePassword(password, hash) {
    return await bcrypt.compare(password, hash);
  }
}

module.exports = Auth;

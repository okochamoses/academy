module.exports = class ServiceResponse {
  constructor(code, description, data = undefined) {
    this.statusCode = 200
    this.body = {
      code, description, data
    }
  }

  success() {
    this.body.code = 0;
    this.body.description = "Successful";
    return this;
  }

  failure(message) {
    this.body.code = 10;
    this.body.description = message || "Operation failed";
    this.statusCode = 500;
    return this;
  }

  setStatusCode(statusCode) {
    this.statusCode = statusCode;
    return this;
  }

  code(code) {
    this.body.code = code;
    return this;
  }

  description(description) {
    this.body.description = description;
    return this;
  }

  data(data) {
    this.body.data = data;
    return this;
  }
};

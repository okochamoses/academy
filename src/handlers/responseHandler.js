module.exports = class ServiceResponse {
  constructor(code, description, data = undefined) {
    this.code = code;
    this.description = description;
    this.data = data;
  }

  success() {
    this.code = 0;
    this.description = "Successful";
    return this;
  }

  failure() {
    this.code = 10;
    this.description = "Operation failed";
    return this;
  }
};

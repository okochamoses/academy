const ServiceResponse = require("../handlers/responseHandler");
const studentRepo = require("../repositories/StudentRepo");
const adminRepo = require("../repositories/AdminRepo");
const Auth = require("../services/Auth");

module.exports.getUsers = async clientRequest => {
  try {
    return new ServiceResponse().success().data(await adminRepo.findAll());
  } catch (error) {
    console.log(error);
  }
};

module.exports.login = async clientRequest => {
  try {
    const { username, password, type } = clientRequest.body;
    // TODO: Validate request body
    let repo;
    switch (type) {
      case "ADMIN":
        repo = adminRepo;
        break;
      case "STUDENT":
        repo = studentRepo;
        break;
      default:
        return new ServiceResponse().failure("Please enter a valid user type");
    }
    auth = new Auth(studentRepo);
    const res = await auth.authenticate(username, password, type);
    return new ServiceResponse(0, "Login Successful", res).setStatusCode(res === {} ? 401 : 200);
  } catch (error) {
    console.log(error);
  }
};

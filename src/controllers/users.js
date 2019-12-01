const ServiceResponse = require("../handlers/responseHandler");
const adminRepo = require("../repositories/AdminRepo");

module.exports.getUsers = async clientRequest => {
  try {
    const { ip } = clientRequest;
    return {
      statusCode: 200,
      body: await adminRepo.update(21, { email: "test@mailers.com" })
    };
  } catch (error) {
    console.log(error);
  }
};

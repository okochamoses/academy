const ServiceResponse = require("../handlers/responseHandler");
const adminRepo = require("../repositories/StudentRepo");

module.exports.getUsers = async clientRequest => {
  try {
    const { ip } = clientRequest;
    return {
      statusCode: 200,
      body: await adminRepo.findAll()
    };
  } catch (error) {
    console.log(error);
  }
};

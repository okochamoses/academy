const ServiceResponse = require("../handlers/responseHandler");

module.exports.getUsers = async clientRequest => {
  try {
    const { ip } = clientRequest;
    return {
      statusCode: 200,
      body: new ServiceResponse().failure()
    };
  } catch (error) {
    console.log(error);
  }
};

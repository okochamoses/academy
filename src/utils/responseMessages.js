module.exports = {
  responseMessage: {
    SUCCESS: "Operation Successful",
    FAILED: "Operation failed",
    AUTH_FAILED: "Authentication Failed",
    ERROR: "Oops! Something went wrong"
  },
  responseCode: {
    SUCCESS: 0, // Represents a successful operation
    FAILED: 10, // Represents failure
    AUTH_FAILED: 30, // Authentication failure
    THIRD_PARTY_ERROR: 50 // Failure from third-party service
  }
};

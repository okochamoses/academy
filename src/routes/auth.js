var express = require("express");
var router = express.Router();
const httpHandler = require("../handlers/httpHandler");
const authController = require("../controllers/authController");

/* POST generate a bearer token */
router.post("/", httpHandler(authController.login));
/* GET user types */
router.get("/", httpHandler(authController.getUserTypes));

module.exports = router;

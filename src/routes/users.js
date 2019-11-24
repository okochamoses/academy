var express = require("express");
var router = express.Router();
const httpHandler = require("../handlers/httpHandler");
const userController = require("../controllers/users");

/* GET users listing. */
router.get("/", httpHandler(userController.getUsers));

module.exports = router;

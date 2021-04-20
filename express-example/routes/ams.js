var express = require("express");
var router = express.Router();
const yssBaseAdmin = require("./yss-base-admin");

/* GET users listing. */
router.use("/yss-base-admin", yssBaseAdmin);

module.exports = router;

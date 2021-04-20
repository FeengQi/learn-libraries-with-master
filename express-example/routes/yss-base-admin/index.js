var express = require("express");
var router = express.Router();

/* GET users listing. */
router.use("/jwt/token", function (req, res, next) {
  res.send("heng... women");
});

module.exports = router;

var express = require("express");
var app = express();

var account = require("../controllers/account.controller");

var Category = require("../controllers/category.controller");
module.exports = function(app) {
  app.use("/api/account", account);

  app.use("/api/Category", Category);
};

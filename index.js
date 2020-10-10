//Define mongoose
//Mongoose provides a straight-forward, schema-based solution to model your application data.
// It includes built-in type casting, validation, query building, business ...

const dbConfig = require("../config/db.config.js");

const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
db.url = dbConfig.url;
db.tutorial = require("./tutorial.model.js")(mongoose);

module.exports = db;
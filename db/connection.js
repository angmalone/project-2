//connection setup
const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/trips");
mongoose.Promise = Promise;
module.exports = mongoose;

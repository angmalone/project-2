//requiring dependencies
const express = require("express");
const hbs = require("hbs");
const Trip = require("./models/Trip");

//app setup
const app = express();
app.set("view engine", "hbs");

//route definition
app.get("/", (req, res) => {
  Trip.find({}).then(trips => {
    res.render("index", { trips });
  });
});

//check server connection
app.listen(3000, () => console.log("hi this works"));

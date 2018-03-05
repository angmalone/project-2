//requiring dependencies
const express = require("express");
const hbs = require("hbs");
const bodyParser = require("body-parser");
const Trip = require("./models/Trip");

//app setup
const app = express();
app.set("view engine", "hbs");
app.use(bodyParser.urlencoded({ extended: true }));

const tripController = require("./controllers/trips");

//route definition
app.get("/", (req, res) => {
  Trip.find({}).then(trips => {
    res.render("index", { trips });
  });
});

app.use("/trips", tripController);

//check server connection
app.listen(3000, () => console.log("hi this works"));

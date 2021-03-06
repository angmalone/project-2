//requiring dependencies
const express = require("express");
const hbs = require("hbs");
const bodyParser = require("body-parser");
const methodOverride = require("method-override");
const Trip = require("./models/Trip");
const path = require("path");
var sortJsonArray = require("sort-json-array");

//app setup
const app = express();
app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "hbs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride("_method"));

const tripController = require("./controllers/trips");

//route definition
app.get("/", (req, res) => {
  Trip.find({}).then(trips => {
    res.render("index", { trips });
  });
});

app.use("/trips", tripController);

//check server connection
//app.listen(3000, () => console.log("hi this works"));

app.set("port", process.env.PORT || 3001);

app.listen(app.get("port"), () => {
  console.log(`✅ PORT: ${app.get("port")} 🌟`);
});

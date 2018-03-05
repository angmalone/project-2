const express = require("express");
const router = express.Router();

const Trip = require("../models/Trip");

//load individual trips
router.get("/", (req, res) => {
  Trip.find({}).then(trips => {
    res.render("trips/index", { trips });
  });
});

module.exports = router;

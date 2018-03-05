const express = require("express");
const router = express.Router();

const Trip = require("../models/Trip");

//load individual trips
router.get("/", (req, res) => {
  Trip.find({}).then(trips => {
    res.render("trips/index", { trips });
  });
});

//load details of each individual trip
router.get("/:id", (req, res) => {
  Trip.findOne({ _id: req.params.id }).then(trips => {
    res.render("trips/show", trips);
  });
});

module.exports = router;

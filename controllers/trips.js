const express = require("express");
const router = express.Router();

const Trip = require("../models/Trip");

//load individual trips
router.get("/", (req, res) => {
  Trip.find({}).then(trips => {
    res.render("trips/index", { trips });
  });
});

//create a new trip
router.get("/new", (req, res) => {
  res.render("trips/new");
});

//load details of each individual trip
router.get("/:id", (req, res) => {
  Trip.findOne({ _id: req.params.id }).then(trips => {
    res.render("trips/show", trips);
  });
});

//creating the new trip
router.post("/", (req, res) => {
  Trip.create({
    trip: req.body.trip,
    restaurant: req.body.restaurant,
    type: req.body.type,
    website: req.body.website
  }).then(trips => {
    res.redirect("/trips");
  });
});

module.exports = router;

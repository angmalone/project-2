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

//deleting a trip
router.delete("/:id", (req, res) => {
  Trip.findOneAndRemove({ _id: req.params.id }).then(() => {
    res.redirect("/trips");
  });
});

//creating the new trip
router.post("/", (req, res) => {
  Trip.create({
    location: req.body.location,
    name: req.body.name,
    website: req.body.website,
    notes: req.body.notes,
    type: req.body.type
  }).then(trips => {
    res.redirect("/trips");
  });
});

module.exports = router;

//connect to database
const mongoose = require("../db/connection");

//create schema
const TripSchema = new mongoose.Schema({
  trip: String,
  restaurant: String,
  type: String,
  website: String
});

const Trip = mongoose.model("Trip", TripSchema);

module.exports = Trip;

/***

//connect to database
const mongoose = require("../db/connection");

//create schema
const TripSchema = new mongoose.Schema({
  name: String,
  restaurants: [{ type: Schema.Types.ObjectId, ref: "Restaurant" }],
  places: [{ type: Schema.Types.ObjectId, ref: "Place" }]
});

const RestaurantSchema = new mongoose.Schema({
  name: String,
  website: String,
  type: String,
  eat: String,
  notes: String
});

const PlaceSchema = new mongoose.Schema({
  name: String,
  website: String,
  notes: String
});

// Giving mongoose the schema to build the model
const Trip = mongoose.model("Trip", TripSchema);
const Restaurant = mongoose.model("Restaurant", RestaurantSchema);
const Place = mongoose.model("Place", PlaceSchema);

// exporting the Joke model
module.exports = Trip;
module.exports = Restaurant;
module.exports = Place;

***/

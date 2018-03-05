const Trip = require("../models/Trip");
const data = require("./seeds.json");

//adding seed data
Trip.remove({})
  .then(() => {
    return Trip.collection.insert(data);
  })
  .then(() => {
    process.exit();
  });

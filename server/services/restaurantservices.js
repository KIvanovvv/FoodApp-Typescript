const Restaurant = require("../models/Restaurants.js");

async function getRestaurants() {
  const restaurants = await Restaurant.find({});
  return restaurants;
}
async function getRestaurantById(id) {
  const restaurant = await Restaurant.findById(id);
  return restaurant;
}

module.exports = {
  getRestaurants,
  getRestaurantById,
};

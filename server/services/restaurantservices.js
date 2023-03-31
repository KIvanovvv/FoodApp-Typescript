const Restaurant = require("../models/Restaurants.js");

async function getRestaurants() {
  const restaurants = await Restaurant.find({});
  return restaurants;
}
async function getRestaurantById(id) {
  const restaurant = await Restaurant.findById(id);
  return restaurant;
}
async function getRestaurantByCategory(category) {
  const restaurant = await Restaurant.find({ category: category });
  console.log(restaurant);
  return restaurant;
}

module.exports = {
  getRestaurants,
  getRestaurantById,
  getRestaurantByCategory,
};

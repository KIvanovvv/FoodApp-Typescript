const Restaurant = require("../models/Restaurants.js");

async function getRestaurants(){
  const restaurants = await Restaurant.find({})
  return restaurants
}


module.exports = {
  getRestaurants
}
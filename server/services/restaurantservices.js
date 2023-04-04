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
async function updateRestaurantRating(stars, dataArr) {
  dataArr.forEach(async (restaurantInfo) => {
    const restaurant = await Restaurant.find({
      name: restaurantInfo.restaurantName,
    });
    restaurant[0].rating.push(stars);
    await restaurant[0].save();
  });
}

module.exports = {
  getRestaurants,
  getRestaurantById,
  getRestaurantByCategory,
  updateRestaurantRating,
};

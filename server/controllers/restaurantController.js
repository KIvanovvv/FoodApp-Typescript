const {
  getRestaurants,
  getRestaurantById,
} = require("../services/restaurantServices.js");

const restaurantController = require("express").Router();

restaurantController.get("/", async (req, res) => {
  try {
    const allRestaurants = await getRestaurants();
    res.status(200).json(allRestaurants);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});
restaurantController.get("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const restaurant = await getRestaurantById(id);
    res.status(200).json(restaurant);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = restaurantController;

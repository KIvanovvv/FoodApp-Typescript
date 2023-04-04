const {
  getRestaurants,
  getRestaurantById,
  getRestaurantByCategory,
  updateRestaurantRating,
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
restaurantController.get("/menu/:category", async (req, res) => {
  try {
    const category = req.params.category;
    const restaurant = await getRestaurantByCategory(category);
    res.status(200).json(restaurant);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});
restaurantController.post("/rating", async (req, res) => {
  try {
    const { stars, dataArr } = req.body;
    await updateRestaurantRating(stars, dataArr);
    res.status(201).end();
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = restaurantController;

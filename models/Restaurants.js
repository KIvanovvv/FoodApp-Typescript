const { Schema, model } = require("mongoose");

const restaurantSchema = new Schema({
  name: { type: String, required: true },
  rating: { type: [Number], default: [] },
  description: { type: String, required: true },
  minOrder: { type: Number, required: true },
  delivery: { type: Number, required: true },
  freeDelivery: { type: Number, required: true },
  cardImageUrl: { type: String, required: true },
  pageImageUrl: { type: String, required: true },
  food: { type: [], default: [] },
  category: { type: [], default: [] },
});

const Restaurant = model("Restaurant", restaurantSchema);

module.exports = Restaurant;

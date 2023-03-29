const app = require("./config/express.js");
const runDB = require("./config/database.js");

const restaurantController = require("./controllers/restaurantController.js");
const Restaurant = require("./models/Restaurants.js");

app.get("/", (req, res) => {
  res.send(`Server is running...`);
});

app.use("/restaurants", restaurantController);

start();
async function start() {
  app.listen(5000, () => console.log(`Server is running on port 5000...`));
  runDB();
}

// (async function add() {
//   await Restaurant.create({
//     name: "Fire Grill",
//     description: "If you like Balkan cuisine, this it the right place for you",
//     delivery: 10,
//     minOrder: 25,
//     freeDelivery: 50,
//     pageImageUrl:
//       "https://png.pngtree.com/thumb_back/fh260/background/20230322/pngtree-grilled-meat-with-vegetables-on-wooden-board-photo-image_2010101.jpg",
//     cardImageUrl:
//       "https://png.pngtree.com/thumb_back/fh260/background/20230322/pngtree-grilled-meat-with-vegetables-on-wooden-board-photo-image_2010104.jpg",
//     food: [
//       {
//         name: "Steak",
//         price: 13.99,
//         description:
//           "A perfectly cooked beef steak. Slowly cooked on wooden coils.",
//         category: "main",
//       },
//       {
//         name: "Meat balls",
//         price: 11.99,
//         description:
//           "The best meat balls you ever taste. A perfect match with french fries and a pint of beer.",
//         category: "main",
//       },
//       {
//         name: "French Fries",
//         price: 5.5,
//         description: "Classic french fries with grated cheese",
//         category: "side",
//       },
//       {
//         name: "Beer",
//         price: 4.5,
//         description: "Draft beer",
//         category: "drinks",
//       },
//       {
//         name: "Coke",
//         price: 2.5,
//         description: "A can of cold Coke.",
//         category: "drinks",
//       },
//     ],
//     category: ["Grill", "BBQ"],
//   });
// })();

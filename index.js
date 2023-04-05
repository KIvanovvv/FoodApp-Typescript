const app = require("./config/express.js");
const runDB = require("./config/database.js");

const restaurantController = require("./controllers/restaurantController.js");
// const Restaurant = require("./models/Restaurants.js");
app.get("/", (req, res) => {
  res.send(`Server is running`);
});

app.use("/restaurants", restaurantController);

start();
async function start() {
  app.listen(5000, () => console.log(`Server is running on port 5000...`));
  runDB();
}

//FOR TESTING PURPOSES ONLY
// (async function add() {
//   await Restaurant.create({
//     name: "Fun Yi",
//     description: "Chinese restaurant",
//     delivery: 5,
//     minOrder: 10,
//     freeDelivery: 30,
//     rating: [4, 3, 5, 5, 2],
//     pageImageUrl:
//       "https://png.pngtree.com/thumb_back/fh260/back_our/20190620/ourmid/pngtree-chinese-style-health-food-medicinal-food-poster-image_153622.jpg",
//     cardImageUrl:
//       "https://png.pngtree.com/thumb_back/fh260/background/20210911/pngtree-food-chinese-food-image_852652.jpg",
//     food: [
//       {
//         name: "Rice with vegetables and chicken with vegetables",
//         price: 18.99,
//         description: "",
//         category: "main",
//       },
//       {
//         name: "Rice with three types of meat and potatoes in soy sauce",
//         price: 15.99,
//         description: "",
//         category: "main",
//       },
//       {
//         name: "Rice noodles with vegetables and three types of meat",
//         price: 19.99,
//         description: "",
//         category: "main",
//       },
//       {
//         name: "Rice Specialty of the House and eight treasures",
//         price: 20,
//         description: "",
//         category: "main",
//       },
//       {
//         name: "Duck with vegetables and white rice",
//         price: 15.99,
//         description: "",
//         category: "main",
//       },
//       {
//         name: "Breaded vegetables",
//         price: 6.99,
//         description: "",
//         category: "side",
//       },
//       {
//         name: "Hot Chinese cabbage",
//         price: 12.69,
//         description: "",
//         category: "side",
//       },
//       {
//         name: "Seaweed salad",
//         price: 6.99,
//         description: "",
//         category: "side",
//       },
//       {
//         name: "Salad crystal noodles",
//         price: 6.99,
//         description: "",
//         category: "side",
//       },
//       {
//         name: "Chicken salad with cucumbers",
//         price: 6.29,
//         description: "",
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
//       {
//         name: "Fanta",
//         price: 2.5,
//         description: "A can of cold Fanta.",
//         category: "drinks",
//       },
//       {
//         name: "7UP",
//         price: 2.5,
//         description: "A can of cold 7UP.",
//         category: "drinks",
//       },
//       {
//         name: "Coffee",
//         price: 1.5,
//         description: "",
//         category: "drinks",
//       },
//     ],
//     category: ["Chinese"],
//   });
// })();

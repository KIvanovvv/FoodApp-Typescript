import classes from "./Restaurants.module.css";
import ListRestourant from "./ListRestourant";
import { useEffect, useState } from "react";
import { getRestaurants } from "../../../services/restaurantServices";
import { RestaurantModel } from "../../models/types";
const testImgUrl =
  "https://res.cloudinary.com/tkwy-prod-eu/image/upload/c_thumb,h_136,w_288/f_auto/q_auto/dpr_1.0/v1610955877/static-takeaway-com/images/generic/heroes/351/351_lunch_6";
const DummyData = [
  {
    _id: `asd${(Math.random() * 100).toString()}`,
    name: "Pri Rumen",
    rating: [5, 5, 4, 5],
    minOrder: "10",
    delivery: "5",
    freeDelivery: "30",
    imageUrl: testImgUrl,
  },
  {
    _id: `asd${(Math.random() * 100).toString()}`,
    name: "Pri Joro",
    rating: [5, 3, 4, 5, 3],
    minOrder: "15",
    delivery: "5",
    freeDelivery: "35",
    imageUrl: testImgUrl,
  },
  {
    _id: `asd${(Math.random() * 100).toString()}`,
    name: "Pri Pacho",
    rating: [3, 4, 4],
    minOrder: "10",
    delivery: "5",
    freeDelivery: "25",
    imageUrl: testImgUrl,
  },
  {
    _id: `asd${(Math.random() * 100).toString()}`,
    name: "Toro",
    rating: [5, 5, 5, 4, 4],
    minOrder: "20",
    delivery: "10",
    freeDelivery: "60",
    imageUrl: testImgUrl,
  },
  {
    _id: `asd${(Math.random() * 100).toString()}`,
    name: "Maxi",
    rating: [3, 2, 1, 4, 5],
    minOrder: "15",
    delivery: "3",
    freeDelivery: "20",
    imageUrl: testImgUrl,
  },
];
const Restaurants = () => {
  const [restaurants, setRestaurants] = useState<RestaurantModel[]>([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    (async function fetchRestaurants() {
      setLoading(true);
      setRestaurants(await getRestaurants());
      setLoading(false);
    })();
  }, []);
  return (
    <div className={classes.wrapper}>
      <div className={classes.actions}>
        <div className={classes.search_container}>
          <input
            placeholder="Search for restaurant ..."
            type="text"
            className={classes.input}
          />
        </div>
        <div className={classes.filter_container}>
          <p>Sort by:</p>
          <select className={classes.select}>
            <option>Name</option>
            <option>Delivery price</option>
            <option>Rating</option>
            <option>Min order</option>
          </select>
        </div>
      </div>
      <ul className={classes.ul}>
        {restaurants.map((x) => (
          <ListRestourant key={x._id} {...x} />
        ))}
      </ul>
    </div>
  );
};

export default Restaurants;

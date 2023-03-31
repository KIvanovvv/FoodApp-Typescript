import classes from "./Restaurants.module.css";
import ListRestourant from "./ListRestourant";
import { useEffect, useState } from "react";
import { getRestaurants } from "../../../services/restaurantServices";
import { RestaurantModel } from "../../../models/types";

const Restaurants:React.FC<{category:string}> = (props) => {
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

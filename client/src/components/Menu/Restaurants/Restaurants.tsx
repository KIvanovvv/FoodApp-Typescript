import classes from "./Restaurants.module.css";
import ListRestourant from "./ListRestourant";
import { useEffect, useState } from "react";
import {
  getRestaurantByCategory,
  getRestaurants,
} from "../../../services/restaurantServices";
import { RestaurantModel } from "../../../models/types";
import Spinner from "../../Utils/Spinner";
import { Container, TextField } from "@mui/material";
import Filter from "./Filter";
import { set } from "mongoose";

const Restaurants: React.FC<{ category: string }> = (props) => {
  const [restaurants, setRestaurants] = useState<RestaurantModel[]>([]);
  const [loading, setLoading] = useState(false);
  const [filter, setFilter] = useState("Name");
  const [searchQuery, setSearchQuery] = useState("");
  const onSelectFilter = (filter: string) => {
    setFilter(filter);
  };
  useEffect(() => {
    if (searchQuery === "") {
      if (props.category === "") {
        (async function fetchRestaurants() {
          setLoading(true);
          setRestaurants(await getRestaurants());
          setLoading(false);
        })();
      } else {
        (async function fetchRestaurants() {
          setLoading(true);
          setRestaurants(await getRestaurantByCategory(props.category));
          setLoading(false);
        })();
      }
    } else {
      setRestaurants(
        restaurants.filter((x) =>
          x.name.toLowerCase().includes(searchQuery.toLowerCase())
        )
      );
    }
  }, [searchQuery, props.category]);

  restaurants.sort((a, b) => {
    if (filter === "Name") {
      return a.name.localeCompare(b.name);
    } else if (filter === "Delivery price") {
      return a.delivery - b.delivery;
    } else if (filter === "Rating") {
      const aRating =
        a.rating.reduce((a, b) => a + b, 0) / a.rating.length || 0;
      const bRating =
        b.rating.reduce((a, b) => a + b, 0) / b.rating.length || 0;
      return bRating - aRating;
    } else if (filter === "Min order") {
      return a.minOrder - b.minOrder;
    }
    return 0;
  });

  return (
    <Container className={classes.wrapper}>
      {loading && <Spinner w="450" h="450" />}
      {!loading && (
        <>
          <div className={classes.actions}>
            {/* <div className={classes.search_container}>
              <input
                placeholder="Search for restaurant ..."
                type="text"
                className={classes.input}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div> */}
            <TextField
              id="outlined-basic"
              label="Search for restaurant"
              variant="outlined"
              size="small"
              sx={{ width: "40%" }}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            {/* <div className={classes.filter_container}>
              <p>Sort by:</p>
              <select
                className={classes.select}
                onChange={(e) => setFilter(e.target.value)}
              >
                <option>Name</option>
                <option>Delivery price</option>
                <option>Rating</option>
                <option>Min order</option>
              </select>
            </div> */}
            <Filter onSelectFilter={onSelectFilter} />
          </div>
          <ul className={classes.ul}>
            {restaurants.map((x) => (
              <ListRestourant key={x._id} {...x} />
            ))}
          </ul>
        </>
      )}
    </Container>
  );
};

export default Restaurants;

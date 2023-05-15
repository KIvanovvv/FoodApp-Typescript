import classes from "./Restaurants.module.css";
import { useEffect, useState } from "react";
import {
  getRestaurantByCategory,
  getRestaurants,
} from "../../../services/restaurantServices";
import { RestaurantModel } from "../../../models/types";
import { TextField, Stack } from "@mui/material";
import Filter from "./Filter";
import ListRestourant2 from "./ListRestaurant2";
import FilterOptions from "./FilterOptions";
import Spinner from "../../Utils/Spinner";

const Restaurants: React.FC<{ category: string }> = (props) => {
  const [restaurants, setRestaurants] = useState<RestaurantModel[]>([]);
  const [restaurantData, setRestaurantData] = useState<RestaurantModel[]>([]);
  const [loading, setLoading] = useState(false);
  const [filter, setFilter] = useState("Name");
  const [searchQuery, setSearchQuery] = useState("");
  const [showOpen, setShowOpen] = useState(false);
  const [showFreeDelivery, setShowFreeDelivery] = useState(false);
  const [showOpenFlag, setShowOpenFlag] = useState(false);
  const onSelectFilter = (filter: string) => {
    setFilter(filter);
  };
  useEffect(() => {
    if (searchQuery === "") {
      if (props.category === "") {
        if (!restaurants.length && !restaurantData.length) {
          (async function fetchRestaurants() {
            setLoading(true);
            setRestaurants(await getRestaurants());
            setRestaurantData(await getRestaurants());
            setLoading(false);
          })();
        } else {
          if (!showOpen) {
            setRestaurants(restaurantData);
          } else {
            setRestaurants(restaurantData.filter((x) => x.status === "Open"));
          }
        }
      } else {
        (async function fetchRestaurants() {
          setLoading(true);
          if (!showOpen) {
            setRestaurants(
              restaurantData.filter((x) => x.category.includes(props.category))
            );
          } else {
            setRestaurants(
              restaurantData
                .filter((x) => x.category.includes(props.category))
                .filter((x) => x.status === "Open")
            );
          }
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
    //FIXING ISSUE WIHT OPEN NOW SWITCH
  }, [searchQuery, props.category]);
  useEffect(() => {
    if (showOpen) {
      setRestaurants(restaurants.filter((x) => x.status === "Open"));
    } else {
      if (props.category !== "") {
        setRestaurants(
          restaurantData.filter((x) => x.category.includes(props.category))
        );
      } else {
        setRestaurants(restaurantData);
      }
    }
  }, [showOpen, showOpenFlag]);
  useEffect(() => {
    if (showFreeDelivery) {
      setRestaurants(restaurants.filter((x) => x.delivery === 0));
    } else {
      setRestaurants(restaurantData);
    }
  }, [showFreeDelivery]);

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
  const toggleShowOpen = () => {
    setShowOpen((showOpen) => !showOpen);
  };
  const toggleShowFreeDelivery = () => {
    setShowFreeDelivery((showFreeDelivery) => !showFreeDelivery);
  };
  //State of OptionFilters should presis with the category pages
  return (
    <Stack className={classes.wrapper} margin={"auto"}>
      {loading && <Spinner />}
      {!loading && (
        <>
          <Stack direction={"row"} justifyContent={"space-around"}>
            <TextField
              id="outlined-basic"
              label="Search for restaurant"
              variant="outlined"
              size="small"
              sx={{ width: "50%" }}
              color="success"
              inputProps={{
                style: { fontWeight: "bold", color: "#f77f00" },
              }}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Filter onSelectFilter={onSelectFilter} />
          </Stack>
          <Stack direction={"row"} gap={10} mt={2}>
            <FilterOptions
              totalRestaurants={restaurants.length}
              showOnlyOpen={showOpen}
              toggleShowOpen={toggleShowOpen}
              showOnlyFreeDelivery={showFreeDelivery}
              toggleShowFreeDelivery={toggleShowFreeDelivery}
            />
            <Stack
              spacing={2}
              mt={2}
              width="100%"
              alignContent={"center"}
              justifyContent={"center"}
            >
              {restaurants &&
                restaurants.map((x) => <ListRestourant2 key={x._id} {...x} />)}
            </Stack>
          </Stack>
        </>
      )}
    </Stack>
  );
};

export default Restaurants;

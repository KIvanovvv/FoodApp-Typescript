import classes from "./Restaurants.module.css";
import ListRestourant from "./ListRestourant";
import { useEffect, useState } from "react";
import {
  getRestaurantByCategory,
  getRestaurants,
} from "../../../services/restaurantServices";
import { RestaurantModel } from "../../../models/types";
import Spinner from "../../Utils/Spinner";
import {
  Container,
  List,
  TextField,
  Stack,
  Divider,
  Typography,
  IconButton,
  Tooltip,
} from "@mui/material";
import Filter from "./Filter";
import Switch from "@mui/material/Switch";
import InfoIcon from "@mui/icons-material/Info";
import ListRestourant2 from "./ListRestaurant2";
import MinOrderRadio from "./MinOrderRadio";
import RatingFilter from "./RatingFilter";

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
    <Stack className={classes.wrapper} margin={"auto"}>
      {loading && <Spinner w="450" h="450" />}
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
            <Stack
              alignSelf={"start"}
              position={"sticky"}
              top={190}
              gap={3}
              mt={5}
            >
              <Typography
                variant="h6"
                fontWeight={"bold"}
                noWrap
                color={"secondary"}
              >
                12 restaurants
              </Typography>
              <Typography
                variant="h6"
                fontWeight={"bold"}
                noWrap
                color={"secondary"}
                display={"flex"}
                justifyContent={"space-between"}
              >
                Open now <Switch color="secondary" />
              </Typography>
              <Typography
                variant="h6"
                fontWeight={"bold"}
                noWrap
                color={"secondary"}
                display={"flex"}
                justifyContent={"space-between"}
              >
                Free delivery <Switch color="secondary" />
              </Typography>
              <Stack>
                <Typography
                  variant="h6"
                  fontWeight={"bold"}
                  noWrap
                  color={"secondary"}
                  display={"flex"}
                  justifyContent={"space-between"}
                  alignItems={"center"}
                >
                  Minimal ordering price{" "}
                  <Tooltip title="This is the minimal ordering price for the restaurant.   ">
                    <IconButton aria-label="info">
                      <InfoIcon color="secondary" />
                    </IconButton>
                  </Tooltip>
                </Typography>
                <MinOrderRadio />
              </Stack>
              <Stack>
                <Typography
                  variant="h6"
                  fontWeight={"bold"}
                  color={"secondary"}
                >
                  Rating
                </Typography>
                <RatingFilter />
              </Stack>
            </Stack>
            <Stack
              spacing={2}
              // divider={<Divider orientation="horizontal" flexItem />}
              mt={2}
              width="100%"
              alignContent={"center"}
              justifyContent={"center"}
            >
              {restaurants.map((x) => (
                <ListRestourant2 key={x._id} {...x} />
              ))}
            </Stack>
          </Stack>
        </>
      )}
    </Stack>
  );
};

export default Restaurants;

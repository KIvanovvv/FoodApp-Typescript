import classes from "./Restaurants.module.css";
import { useEffect, useState } from "react";
import { getRestaurants } from "../../../services/restaurantServices";
import { RestaurantModel } from "../../../models/types";
import { TextField, Stack, Fab, Box, ClickAwayListener } from "@mui/material";
import Filter from "./Filter";
import ListRestourant2 from "./ListRestaurant2";
import FilterOptions from "./FilterOptions";
import Spinner from "../../Utils/Spinner";
import NoRestaurant from "./NoRestaurant";
import filterRestaurants from "../../Utils/RestaurantFilters";
import NavigationIcon from "@mui/icons-material/Navigation";
import TuneIcon from "@mui/icons-material/Tune";
import FilterOptionsBottom from "./FilterOptionsBottom";

const Restaurants: React.FC<{ category: string }> = (props) => {
  const [restaurants, setRestaurants] = useState<RestaurantModel[]>([]);
  const [restaurantData, setRestaurantData] = useState<RestaurantModel[]>([]);
  const [loading, setLoading] = useState(false);
  const [filter, setFilter] = useState("Name");
  const [searchQuery, setSearchQuery] = useState("");
  const [showOpen, setShowOpen] = useState(false);
  const [showFreeDelivery, setShowFreeDelivery] = useState(false);
  const [minOrderPrice, setMinOrderPrice] = useState(0);
  const [ratingFilter, setRatingFilter] = useState(0);
  const [showBottomFilter, setShowBottomFilter] = useState(false);

  const onSetRatingFilter = (rating: number) => {
    setRatingFilter(rating);
  };

  const onSetMinOrder = (minOrderPrice: number) => {
    setMinOrderPrice(minOrderPrice);
  };

  const onSelectFilter = (selectedFilter: string) => {
    setFilter(selectedFilter);
  };

  useEffect(() => {
    const fetchRestaurants = async () => {
      setLoading(true);
      const fetchedRestaurants = await getRestaurants();
      setRestaurants(fetchedRestaurants);
      setRestaurantData(fetchedRestaurants);
      setLoading(false);
    };

    if (!restaurants.length && !restaurantData.length) {
      fetchRestaurants();
    }
  }, [restaurants.length, restaurantData.length]);

  useEffect(() => {
    const filteredData = filterRestaurants(
      restaurantData,
      showOpen,
      showFreeDelivery,
      props.category,
      searchQuery,
      minOrderPrice,
      ratingFilter
    );
    setRestaurants(filteredData);
  }, [
    showOpen,
    showFreeDelivery,
    props.category,
    searchQuery,
    minOrderPrice,
    ratingFilter,
  ]);

  const toggleShowOpen = () => {
    setShowOpen((showOpen) => !showOpen);
  };

  const toggleShowFreeDelivery = () => {
    setShowFreeDelivery((showFreeDelivery) => !showFreeDelivery);
  };

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
    <Stack
      className={classes.wrapper}
      margin={"auto"}
      sx={{ padding: "0 10px" }}
      maxHeight={"100%"}
    >
      {/* Bottom filter button visible only below md BrP */}
      <ClickAwayListener onClickAway={() => setShowBottomFilter(false)}>
        <Stack
          position={"fixed"}
          // left={"70%"}
          // sx={{ transform: "translateX(-50%)" }}
          bottom={0}
          height={"40px"}
          width={"100%"}
          alignSelf={"center"}
          display={{ xs: "flex", md: "none" }}
          zIndex={1}
        >
          <Fab
            variant="extended"
            color="success"
            onClick={() => setShowBottomFilter(true)}
            size="medium"
            sx={{ borderRadius: "0 " }}
          >
            <TuneIcon sx={{ mr: 1 }} />
            Filters
          </Fab>
        </Stack>
      </ClickAwayListener>
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
          <Stack direction={"row"} gap={{ xs: 0, md: 10 }} mt={2}>
            <FilterOptions
              totalRestaurants={restaurants.length}
              showOnlyOpen={showOpen}
              toggleShowOpen={toggleShowOpen}
              showOnlyFreeDelivery={showFreeDelivery}
              toggleShowFreeDelivery={toggleShowFreeDelivery}
              setMinOrderPrice={onSetMinOrder}
              onSetRatingFilter={onSetRatingFilter}
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
              {restaurants.length === 0 && <NoRestaurant />}
            </Stack>
          </Stack>
        </>
      )}
      <FilterOptionsBottom open={showBottomFilter} />
    </Stack>
  );
};

export default Restaurants;

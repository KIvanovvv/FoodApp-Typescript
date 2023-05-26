import classes from "./RestaurantMenu.module.css";
import MenuHeader from "./MenuHeader";
import ListItem from "./ListItem";
import { useParams } from "react-router";
import { useEffect, useMemo, useState } from "react";
import { RestaurantModel } from "../../models/types";
import { getRestaurantById } from "../../services/restaurantServices";
import Spinner from "../Utils/Spinner";
import { Box, Stack } from "@mui/material";
import MenuHeader2 from "./MenuHeader2";

const RestaurantMenu2 = () => {
  const { resId } = useParams();
  const [restaurant, setRestaurant] = useState<RestaurantModel>();
  const [loading, setLoading] = useState(false);

  const data = useMemo(
    () =>
      Array.from(new Set(restaurant?.food.map((x) => x.category))).map((x) => ({
        [x]: restaurant?.food.filter((y) => y.category === x),
      })),
    [restaurant]
  );

  useEffect(() => {
    (async function fetchRestaurant() {
      setLoading(true);
      setRestaurant(await getRestaurantById(resId));
      setLoading(false);
    })();
  }, []);

  return (
    <Stack m={"auto"}>
      {loading && (
        <Box>
          <Spinner />
        </Box>
      )}
      {!loading && (
        <>
          <MenuHeader2
            pageImageUrl={restaurant?.pageImageUrl || ""}
            name={restaurant?.name || ""}
            rating={restaurant?.rating || []}
            minOrder={restaurant?.minOrder || 0}
            delivery={restaurant?.delivery || 0}
            freeDelivery={restaurant?.freeDelivery || 0}
          />
        </>
      )}
    </Stack>
  );
};

export default RestaurantMenu2;

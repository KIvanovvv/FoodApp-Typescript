
import { useParams } from "react-router";
import { useEffect, useMemo, useState, useRef } from "react";
import { RestaurantModel } from "../../models/types";
import { getRestaurantById } from "../../services/restaurantServices";
import Spinner from "../Utils/Spinner";
import {
  Button,
  ButtonGroup,
  List,
  Stack,
  Typography,
  Divider,
} from "@mui/material";
import MenuHeader2 from "./MenuHeader2";
import ListItem2 from "./ListItem2";

const RestaurantMenu2 = () => {
  const { resId } = useParams();
  const [restaurant, setRestaurant] = useState<RestaurantModel>();
  const [loading, setLoading] = useState(false);
  const refs = useRef<any>([]);

  const assignRef = (index: number) => (element: any) => {
    refs.current[index] = element;
  };

  const onSelectCategory = (index: number) => {
    refs.current[index].scrollIntoView({
      behavior: "smooth",
    });
  };

  const category = useMemo(
    () => Array.from(new Set(restaurant?.food.map((x) => x.category))),
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
    <Stack gap={3} alignItems={"flex-start"} alignContent={"center"}>
      {loading && <Spinner />}
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
          <Stack alignSelf={"center"}>
            <Typography variant="h4" fontWeight={"bold"} noWrap m={"auto"}>
              Menu
            </Typography>
            <ButtonGroup
              variant="outlined"
              aria-label="outlined button group"
              color="secondary"
            >
              {category.map((category, i) => (
                <Button key={category} onClick={() => onSelectCategory(i)}>
                  <Typography
                    variant="button"
                    fontWeight={"bold"}
                    color={"secondary.main"}
                  >
                    {category}
                  </Typography>
                </Button>
              ))}
            </ButtonGroup>
          </Stack>
          <Stack
            border={"2px solid #f77f00"}
            borderRadius={1}
            sx={{ padding: "20px 40px", maxWidth: 1200, width: "100%" }}
          >
            {category.map((category, index) => (
              <List
                key={category}
                ref={assignRef(index)}
                subheader={
                  <Typography
                    variant="h4"
                    fontWeight={"bold"}
                    sx={{
                      textTransform: "capitalize",
                    }}
                    color={"secondary.main"}
                  >
                    {category}
                  </Typography>
                }
              >
                {restaurant?.food.map(
                  (food) =>
                    food.category === category && (
                      <>
                        <ListItem2
                          key={food.name}
                          category={food.category}
                          name={food.name}
                          description={food.description}
                          price={food.price}
                          delivery={restaurant.delivery}
                          freeDelivery={restaurant.freeDelivery}
                          restaurantName={restaurant.name}
                        />
                        <Divider />
                      </>
                    )
                )}
              </List>
            ))}
          </Stack>
        </>
      )}
    </Stack>
  );
};

export default RestaurantMenu2;

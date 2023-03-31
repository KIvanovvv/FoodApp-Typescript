import classes from "./RestaurantMenu.module.css";
import MenuHeader from "./MenuHeader";
import ListItem from "./ListItem";
import { useParams } from "react-router";
import { useEffect, useState } from "react";
import { RestaurantModel } from "../../models/types";
import { getRestaurantById } from "../../services/restaurantServices";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const [restaurant, setRestaurant] = useState<RestaurantModel>();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    (async function fetchRestaurant() {
      setLoading(true);
      setRestaurant(await getRestaurantById(resId));
      setLoading(false);
    })();
  }, []);

  return (
    <div className={classes.wrapper}>
      <MenuHeader
        pageImageUrl={restaurant?.pageImageUrl || ""}
        name={restaurant?.name || ""}
        rating={restaurant?.rating || []}
        minOrder={restaurant?.minOrder || 0}
        delivery={restaurant?.delivery || 0}
        freeDelivery={restaurant?.freeDelivery || 0}
      />
      <p className={classes.headline}>Menu</p>
      <div className={classes.cat_container}>
        <p className={classes.cat_tags}>Main</p>
        <ul className={classes.ul}>
          {restaurant?.food.map(
            (x) =>
              x.category === "main" && (
                <ListItem
                  category={x.category}
                  description={x.description}
                  name={x.name}
                  price={x.price}
                  
                  key={(Math.random() * 1000).toString()}
                />
              )
          )}
        </ul>
      </div>
      <div className={classes.cat_container}>
        {" "}
        <p className={classes.cat_tags}>Sides</p>
        <ul className={classes.ul}>
          {restaurant?.food.map(
            (x) =>
              x.category === "side" && (
                <ListItem
                  category={x.category}
                  description={x.description}
                  name={x.name}
                  price={x.price}
                  key={(Math.random() * 1000).toString()}
                />
              )
          )}
        </ul>
      </div>
      <div className={classes.cat_container}>
        {" "}
        <p className={classes.cat_tags}>Drinks</p>
        <ul className={classes.ul}>
          {restaurant?.food.map(
            (x) =>
              x.category === "drinks" && (
                <ListItem
                  category={x.category}
                  description={x.description}
                  name={x.name}
                  price={x.price}
                  key={(Math.random() * 1000).toString()}
                />
              )
          )}
        </ul>
      </div>
    </div>
  );
};

export default RestaurantMenu;

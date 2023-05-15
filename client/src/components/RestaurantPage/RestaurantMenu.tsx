import classes from "./RestaurantMenu.module.css";
import MenuHeader from "./MenuHeader";
import ListItem from "./ListItem";
import { useParams } from "react-router";
import { useEffect, useMemo, useState } from "react";
import { RestaurantModel } from "../../models/types";
import { getRestaurantById } from "../../services/restaurantServices";
import Spinner2 from "../Utils/Spinner2";

const RestaurantMenu = () => {
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
    <div className={classes.wrapper}>
      {loading && (
        <div className={classes.spinner}>
          <Spinner2 />
        </div>
      )}
      {!loading && (
        <>
          <MenuHeader
            pageImageUrl={restaurant?.pageImageUrl || ""}
            name={restaurant?.name || ""}
            rating={restaurant?.rating || []}
            minOrder={restaurant?.minOrder || 0}
            delivery={restaurant?.delivery || 0}
            freeDelivery={restaurant?.freeDelivery || 0}
          />
          <p className={classes.headline}>Menu</p>

          {data.map((categoryObject) => (
            <div
              className={classes.cat_container}
              key={Object.keys(categoryObject)[0]}
            >
              <p className={classes.cat_tags}>
                {Object.keys(categoryObject).flat()}
              </p>
              <ul className={classes.ul}>
                {categoryObject[Object.keys(categoryObject)[0]]?.map((item) => (
                  <ListItem
                    category={Object.keys(categoryObject)[0]}
                    description={item.description}
                    name={item.name}
                    price={item.price}
                    delivery={restaurant?.delivery || 0}
                    freeDelivery={restaurant?.freeDelivery || 0}
                    restaurantName={restaurant?.name || ""}
                    key={item.name}
                  />
                ))}
              </ul>
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default RestaurantMenu;

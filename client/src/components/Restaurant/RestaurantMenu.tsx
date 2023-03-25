import classes from "./RestaurantMenu.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import MenuHeader from "./MenuHeader";
const bgUrl =
  "https://png.pngtree.com/thumb_back/fh260/background/20210902/pngtree-barbecue-daytime-lamb-skewers-indoor-gourmet-chili-noodle-photograph-with-picture-image_785968.jpg";

const Dummy_Data = {
  _id: `asd${(Math.random() * 100).toString()}`,
  name: "Pri Rumen",
  rating: [5, 5, 4, 5, 3],
  minOrder: "10",
  delivery: "5",
  freeDelivery: "30",
  bgUrl: bgUrl,
};
const RestaurantMenu = () => {
  let ratingPoints =
    Dummy_Data.rating.reduce((a, b) => {
      return a + b;
    }, 0) / Dummy_Data.rating.length;
  return (
    <div className={classes.wrapper}>
      <MenuHeader
        bgUrl={Dummy_Data.bgUrl}
        name={Dummy_Data.name}
        ratingPoints={ratingPoints}
        ratedCount={Dummy_Data.rating.length}
        delivery={Dummy_Data.delivery}
        freeDelivery={Dummy_Data.freeDelivery}
        minOrder={Dummy_Data.minOrder}
      />
    </div>
  );
};

export default RestaurantMenu;

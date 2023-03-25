import classes from "./RestaurantMenu.module.css";
import MenuHeader from "./MenuHeader";
import ListItem from "./ListItem";
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
  return (
    <div className={classes.wrapper}>
      <MenuHeader {...Dummy_Data} />
      <p className={classes.headline}>Menu</p>
      <ul className={classes.ul}>
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
      </ul>
    </div>
  );
};

export default RestaurantMenu;

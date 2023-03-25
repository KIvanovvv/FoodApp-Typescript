import { Link } from "react-router-dom";
import classes from "./Header.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDrumstickBite,
  faCartShopping,
} from "@fortawesome/free-solid-svg-icons";
const Header = () => {
  return (
    <div className={classes.nav_container}>
      <div className={classes.header_container}>
        <p className={classes.main_header}>FoodApp</p>
        <FontAwesomeIcon
          icon={faDrumstickBite}
          className={classes.icon}
          size={"1x"}
        />
      </div>
      <div className={classes.link_container}>
        <Link to={"/menu"} className={classes.link_btn}>
          All
        </Link>
        <Link to={"/menu/pizza"} className={classes.link_btn}>
          Pizza
        </Link>
        <Link to={"/menu/burger"} className={classes.link_btn}>
          Burger
        </Link>
        <Link to={"/menu/kebab"} className={classes.link_btn}>
          Kebab
        </Link>
        <Link to={"/menu/sushi"} className={classes.link_btn}>
          Sushi
        </Link>
        <Link to={"/menu/mexican"} className={classes.link_btn}>
          Mexican
        </Link>
        <Link to={"/menu/chinese"} className={classes.link_btn}>
          Chinese
        </Link>
      </div>
      <div className={classes.cart_container}>
        <FontAwesomeIcon
          icon={faCartShopping}
          className={classes.cart}
          size={"1x"}
        />
        <p className={classes.counter}>2</p>
      </div>
    </div>
  );
};

export default Header;
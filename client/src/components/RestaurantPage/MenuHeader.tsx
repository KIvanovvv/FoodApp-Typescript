import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import classes from "./RestaurantMenu.module.css";
import { MenuHeaderProps } from "../../models/types";
const MenuHeader: React.FC<MenuHeaderProps> = (props) => {
  let ratingPoints =
    props.rating.reduce((a, b) => {
      return a + b;
    }, 0) / props.rating.length;
  return (
    <>
      <img src={props.pageImageUrl} alt={""} className={classes.background} />
      <div className={classes.first_row}>
        <div className={classes.header_wrapper}>
          <div className={classes.header}>
            <p>{props.name}</p>
          </div>
          <div className={classes.rating_container}>
            <p className={classes.review}>
              <FontAwesomeIcon icon={faStar} color={"gold"} />
              <span className={classes.rating}>
                {" "}
                {`${ratingPoints.toFixed(1)} (${props.rating.length})`}
              </span>
            </p>
            <div className={classes.hint}>
              Rated by {props.rating.length} customers
            </div>
          </div>
        </div>
      </div>
      <div className={classes.second_row}>
        <div className={classes.info}>
          <p className={classes.tag_info}>Min order: {props.minOrder}$</p>
          <p className={classes.tag_info}>Delivery fee: {props.delivery}$</p>
          <p className={classes.tag_info_free}>
            Free delivery over: {props.freeDelivery}$
          </p>
        </div>
      </div>
    </>
  );
};
export default MenuHeader;

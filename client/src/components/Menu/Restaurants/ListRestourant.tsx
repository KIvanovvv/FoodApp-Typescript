import classes from "./Restaurants.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const ListRestourant: React.FC<{
  imageUrl: string;
  name: string;
  rating: number[];
  minOrder: string;
  delivery: string;
  freeDelivery: string;
  _id: string;
}> = (props) => {
  const navigate = useNavigate();
  let ratingPoints =
    props.rating.reduce((a, b) => {
      return a + b;
    }, 0) / props.rating.length;
  const onListClickHandler = () => {
    navigate(`/restaurant/${props._id}`);
  };
  return (
    <li className={classes.li} onClick={onListClickHandler}>
      <div className={classes.img_container}>
        <img src={props.imageUrl} alt="" className={classes.img} />
      </div>
      <div className={classes.info_container}>
        <div className={classes.name_container}>
          <p className={classes.name}>{props.name}</p>
          <p className={classes.review}>
            <FontAwesomeIcon icon={faStar} color={"gold"} />
            <span className={classes.rating}>
              {" "}
              {`${ratingPoints.toFixed(1)} (${props.rating.length})`}
            </span>
          </p>
        </div>
        <div className={classes.pricing_container}>
          <div className={classes.inner_pricing_container}>
            <p className={classes.min_order}>Min order: {props.minOrder}$</p>
            <p className={classes.delivery_price}>
              Delivery price: {props.delivery}$
            </p>
          </div>
          <p className={classes.free_delivery}>
            Free delivery over: {props.freeDelivery}$
          </p>
        </div>
      </div>
    </li>
  );
};

export default ListRestourant;
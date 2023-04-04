import { useContext } from "react";
import Header from "../Header/Header";
import classes from "./OrderedPage.module.css";
import { CartContext } from "../../context/contextWithReducer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { useLocation } from "react-router";

const OrderedPage = () => {
  const { items } = useContext(CartContext);
  const location = useLocation();
  const { name, city, postcode, street, phone } = location.state.deliveryInfo;

  return (
    <div className={classes.wrapper}>
      <Header items={items} />
      <div className={classes.main}>
        <div className={classes.header_container}>
          <FontAwesomeIcon
            icon={faCheck}
            className={classes.checkIcon}
            size="10x"
          />
          <div className={classes.headline_container}>
            <p className={classes.thanks_tag}>Thank you !</p>
            <p> Your order has been placed .</p>
          </div>
        </div>
        <div className={classes.details_container}>
          <p className={classes.tags}>
            Deliver to: <span>{name}</span>
          </p>
          <p className={classes.tags}>
            City: <span>{city}</span>
          </p>
          <p className={classes.tags}>
            Street: <span>{street}</span>
          </p>
          <p className={classes.tags}>
            Postcode: <span>{postcode}</span>
          </p>
          <p className={classes.tags}>
            Phone: <span>{phone}</span>
          </p>
          <p className={classes.tags}>
            Approximate delivery time{" "}
            <span>{`${10 + Math.trunc(Math.random() * 40)} min.`}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default OrderedPage;

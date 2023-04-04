import { useContext, useState } from "react";
import { CartContext } from "../../../context/contextWithReducer";
import classes from "./CartModal.module.css";
import { useNavigate } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faExclamation,
  faExclamationCircle,
} from "@fortawesome/free-solid-svg-icons";
const CartModal: React.FC<{
  closeModal: () => void;
  total: number;
  uniqueDeliveries: { restaurantName: string; price: number }[];
}> = (props) => {
  const { items, actions } = useContext(CartContext);
  const [name, setName] = useState("");
  const [street, setStreet] = useState("");
  const [postcode, setPostcode] = useState("");
  const [city, setCity] = useState("");
  const [phone, setPhone] = useState("");
  const [error, setError] = useState(false);
  const navigate = useNavigate();
  const deliveryData = {
    name,
    street,
    postcode,
    city,
    phone,
    price: props.total.toFixed(2),
    uniqueDeliveries:props.uniqueDeliveries
  };
  const onInputClick = () => {
    setError(false);
  };
  const onOrderHandler = () => {
    if (!name || !street || !postcode || !city || !phone) {
      setError(true);
      return;
    }
    actions.clearCart();
    navigate("/order", { state: { deliveryInfo: deliveryData } });
  };
  return (
    <>
      <div className={classes.backdrop} onClick={props.closeModal}>
        {" "}
      </div>
      <div className={classes.main}>
        <p className={classes.headline}>Proceed with checkout</p>
        <div className={classes.form}>
          {error && (
            <div className={classes.error}>
              <FontAwesomeIcon
                icon={faExclamationCircle}
                className={classes.icon_error}
              />
              <p>All fields are required</p>
            </div>
          )}
          <div className={classes.input}>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              onChange={(e) => setName(e.target.value)}
              onClick={onInputClick}
            />
          </div>
          <div className={classes.input}>
            <label htmlFor="street">Street</label>
            <input
              type="text"
              id="street"
              onChange={(e) => setStreet(e.target.value)}
              onClick={onInputClick}
            />
          </div>
          <div className={classes.input}>
            <label htmlFor="postal">Postal Code</label>
            <input
              type="text"
              id="postal"
              onChange={(e) => setPostcode(e.target.value)}
              onClick={onInputClick}
            />
          </div>
          <div className={classes.input}>
            <label htmlFor="city">City</label>
            <input
              type="text"
              id="city"
              onChange={(e) => setCity(e.target.value)}
              onClick={onInputClick}
            />
          </div>
          <div className={classes.input}>
            <label htmlFor="phone">Phone number</label>
            <input
              type="number"
              id="phone"
              onChange={(e) => setPhone(e.target.value)}
              onClick={onInputClick}
            />
          </div>
        </div>
        <div className={classes.order}>
          <ul className={classes.ul}>
            {items.map((x) => (
              <li className={classes.li} key={x.itemName}>
                <p>
                  <span>{x.itemName}</span> <span>{x.quantity}</span> x{" "}
                  <span>{x.price.toFixed(2)}$</span>
                </p>
              </li>
            ))}
            {props.uniqueDeliveries.map((x) => (
              <li className={classes.li} key={x.restaurantName}>
                <p>
                  <span>Delivery / {x.restaurantName}</span>
                  <span> {x.price}$</span>
                </p>
              </li>
            ))}
          </ul>
          <div className={classes.total}>
            <p>Total Amount: {props.total.toFixed(2)}$</p>
          </div>
        </div>
        <div className={classes.actions}>
          <button className={classes.btn_cancel} onClick={props.closeModal}>
            Cancel
          </button>
          <button className={classes.btn_order} onClick={onOrderHandler}>
            Order
          </button>
        </div>
      </div>
    </>
  );
};

export default CartModal;

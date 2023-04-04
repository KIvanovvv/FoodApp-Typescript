import { useContext } from "react";
import { CartContext } from "../../../context/contextWithReducer";
import classes from "./CartModal.module.css";
import { useNavigate } from "react-router";
const CartModal: React.FC<{
  closeModal: () => void;
  total: number;
  uniqueDeliveries: { restaurantName: string; price: number }[];
}> = (props) => {
  const { items, actions } = useContext(CartContext);
  const navigate = useNavigate();
  const deliveryData = {
    name: "Krasimir Ivanov",
    street: "Krasna 1",
    postcode: "1000",
    city: "Sofia",
    phone: "0888888888",
  };
  const onOrderHandler = () => {
    actions.clearCart();
    navigate("/order",{state: {deliveryInfo: deliveryData}});
  };
  return (
    <>
      <div className={classes.backdrop} onClick={props.closeModal}>
        {" "}
      </div>
      <div className={classes.main}>
        <p className={classes.headline}>Proceed with checkout</p>
        <div className={classes.from}>
          <div className={classes.input}>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" />
          </div>
          <div className={classes.input}>
            <label htmlFor="street">Street</label>
            <input type="text" id="street" />
          </div>
          <div className={classes.input}>
            <label htmlFor="postal">Postal Code</label>
            <input type="text" id="postal" />
          </div>
          <div className={classes.input}>
            <label htmlFor="city">City</label>
            <input type="text" id="city" />
          </div>
          <div className={classes.input}>
            <label htmlFor="phone">Phone number</label>
            <input type="number" id="phone" />
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

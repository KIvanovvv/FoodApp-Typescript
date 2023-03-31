import classes from "./Cart.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import { CartContext } from "../../context/contextWithReducer";

const Cart = () => {
  const { items, actions } = useContext(CartContext);
  const onRemoveFromCart = (itemName: string) => {
    actions.removeItem(itemName);
  };
  const onAddFromCart = (itemName: string) => {
    const item = items.find((x) => x.itemName === itemName);
    if (!item) return;
    actions.addItem(item);
  };

  const total = items.reduce((a, b) => a + b.price, 0);
 
  return (
    <div className={classes.container}>
      <p className={classes.headline}>Cart</p>
      <ul className={classes.ul}>
        {items.length > 0 &&
          items.map((x) => (
            <li className={classes.li} key={x.itemName}>
              <div className={classes.info_container}>
                <p className={classes.name}>{x.itemName}</p>
                <p className={classes.price}>{x.price}$</p>
              </div>
              <div className={classes.actions}>
                <p className={classes.counter}>{x.quantity}</p>
                <FontAwesomeIcon
                  icon={faMinus}
                  className={classes.icon}
                  onClick={() => {
                    onRemoveFromCart(x.itemName);
                  }}
                />
                <FontAwesomeIcon
                  icon={faPlus}
                  className={classes.icon}
                  onClick={() => {
                    onAddFromCart(x.itemName);
                  }}
                />
              </div>
            </li>
          ))}
      </ul>
      {items.length > 0 && (
        <div className={classes.footer}>
          <div>
            <p className={classes.total}>Total amount: {total.toFixed(2)}$</p>
          </div>
          <button className={classes.btn_checkout}>Checkout</button>
        </div>
      )}
      {items.length === 0 && (
        <p className={classes.empty}>Your cart is empty</p>
      )}
    </div>
  );
};

export default Cart;

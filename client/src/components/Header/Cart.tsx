import classes from "./Cart.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import { useContext, useState } from "react";
import { CartContext } from "../../context/contextWithReducer";
import CartModal from "./CartModal";

const Cart = () => {
  const [showModal, setShowModal] = useState(false);
  const { items, actions } = useContext(CartContext);
  const onRemoveFromCart = (itemName: string) => {
    actions.removeItem(itemName);
  };
  const onAddFromCart = (itemName: string) => {
    const item = items.find((x) => x.itemName === itemName);
    if (!item) return;
    actions.addItem(item);
  };
  const allDeliveries = [
    {
      price: [items[0]?.delivery || 0],
      restaurantName: [items[0]?.restaurantName || ""],
    },
  ];
  items.forEach((x) => {
    const existing = allDeliveries.map((y) =>
      y.restaurantName.find((z) => z === x.restaurantName)
    );
    console.log(existing);

    // if (x.restaurantName !== allDeliveries.restaurantName[0]) {
    //   allDeliveries.price.push(x.delivery);
    //   allDeliveries.restaurantName.push(x.restaurantName);
    // }
  });
  const totalNoDelivery = items.reduce((a, b) => a + b.price, 0);

  const handleCheckout = () => {
    setShowModal(true);
    console.log(items);
    console.log(allDeliveries);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <>
      {showModal && (
        <CartModal
          closeModal={closeModal}
          total={totalNoDelivery}
          allDeliveries={allDeliveries}
        />
      )}
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
          {}
        </ul>
        {items.length > 0 && (
          <div className={classes.footer}>
            <div>
              <p className={classes.total}>
                Total amount: {totalNoDelivery.toFixed(2)}$
              </p>
            </div>
            <button className={classes.btn_checkout} onClick={handleCheckout}>
              Checkout
            </button>
          </div>
        )}
        {items.length === 0 && (
          <p className={classes.empty}>Your cart is empty</p>
        )}
      </div>
    </>
  );
};

export default Cart;

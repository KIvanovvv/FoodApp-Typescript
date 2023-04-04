import classes from "./Cart.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import { useContext, useState } from "react";
import { CartContext } from "../../../context/contextWithReducer";
import CartModal from "./CartModal";
import { FreeDeliveryData, UniqueDelivery } from "../../../models/types";
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
  const uniqueDeliveries: UniqueDelivery[] = [];

  items.forEach((item) => {
    const existing = uniqueDeliveries.find(
      (delivery: any) => delivery.restaurantName === item.restaurantName
    );
    if (!existing) {
      uniqueDeliveries.push({
        price: item.delivery,
        restaurantName: item.restaurantName,
        hasFreeDelivery: false,
      });
    }
  });

  const freeDeliveryData: FreeDeliveryData[] = [];
  uniqueDeliveries.forEach((x) => {
    const result = items
      .filter((item) => item.restaurantName === x.restaurantName)
      .reduce((a, b) => a + b.price, 0);

    freeDeliveryData.push({
      price: result,
      restaurantName: x.restaurantName,
      freeDelivery: items.find((y) => y.restaurantName === x.restaurantName)
        ?.freeDelivery,
    });
  });

  freeDeliveryData.forEach((data) => {
    if (data.price >= data.freeDelivery!) {
      const index = uniqueDeliveries.findIndex(
        (x) => x.restaurantName === data.restaurantName
      );
      uniqueDeliveries[index].hasFreeDelivery = true;
    }
  });
  uniqueDeliveries.forEach((x: any) => {
    if (x.hasFreeDelivery) {
      x.price = 0;
    }
  });
  const total =
    items.reduce((a, b) => a + b.price, 0) +
    uniqueDeliveries.reduce((a: number, b: any) => a + b.price, 0);

  const onHandleCheckout = () => {
    setShowModal(true);
  };
  const onHandleClear = () => {
    actions.clearCart();
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <>
      {showModal && (
        <CartModal
          closeModal={closeModal}
          total={total}
          uniqueDeliveries={uniqueDeliveries}
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
                  <p className={classes.price}>{x.price.toFixed(2)}$</p>
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
          {uniqueDeliveries.map(
            (x: { restaurantName: string; price: number }) => (
              <li className={classes.li} key={x.restaurantName}>
                <div className={classes.info_container}>
                  <p className={classes.name}>
                    Delivery from {x.restaurantName}
                  </p>
                  <p
                    className={
                      x.price === 0
                        ? `${classes.price} ${classes.free}`
                        : classes.price
                    }
                  >
                    {x.price === 0 ? "Free" : `${x.price} $`}
                  </p>
                </div>
              </li>
            )
          )}
        </ul>
        {items.length > 0 && (
          <div className={classes.footer}>
            <div className={classes.total_container}>
              <p className={classes.total}>Total amount: {total.toFixed(2)}$</p>
            </div>
            <div className={classes.btns_container}>
              <button
                className={classes.btn_checkout}
                onClick={onHandleCheckout}
              >
                Checkout
              </button>{" "}
              <button className={classes.btn_clear} onClick={onHandleClear}>
                Clear Cart
              </button>{" "}
            </div>
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

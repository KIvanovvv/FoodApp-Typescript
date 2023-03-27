import classes from "./Cart.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";

const Cart = () => {
  return (
    <div className={classes.container}>
      <p className={classes.headline}>Cart</p>
      <ul className={classes.ul}>
        <li className={classes.li}>
          <div className={classes.info_container}>
            <p className={classes.name}>Kebab</p>
            <p className={classes.price}>5.99$</p>
          </div>
          <div className={classes.actions}>
            <p className={classes.counter}>1</p>
            <FontAwesomeIcon icon={faMinus} className={classes.icon} />
            <FontAwesomeIcon icon={faPlus} className={classes.icon} />
          </div>
        </li>
        <li className={classes.li}>
          <div className={classes.info_container}>
            <p className={classes.name}>Kebab</p>
            <p className={classes.price}>5.99$</p>
          </div>
          <div className={classes.actions}>
            <FontAwesomeIcon icon={faMinus} className={classes.icon} />
            <FontAwesomeIcon icon={faPlus} className={classes.icon} />
          </div>
        </li>
        <li className={classes.li}>
          <div className={classes.info_container}>
            <p className={classes.name}>Kebab</p>
            <p className={classes.price}>5.99$</p>
          </div>
          <div className={classes.actions}>
            <FontAwesomeIcon icon={faMinus} className={classes.icon} />
            <FontAwesomeIcon icon={faPlus} className={classes.icon} />
          </div>
        </li>
        <li className={classes.li}>
          <div className={classes.info_container}>
            <p className={classes.name}>Kebab</p>
            <p className={classes.price}>5.99$</p>
          </div>
          <div className={classes.actions}>
            <FontAwesomeIcon icon={faMinus} className={classes.icon} />
            <FontAwesomeIcon icon={faPlus} className={classes.icon} />
          </div>
        </li>
        <li className={classes.li}>
          <div className={classes.info_container}>
            <p className={classes.name}>Kebab</p>
            <p className={classes.price}>5.99$</p>
          </div>
          <div className={classes.actions}>
            <FontAwesomeIcon icon={faMinus} className={classes.icon} />
            <FontAwesomeIcon icon={faPlus} className={classes.icon} />
          </div>
        </li>
        <li className={classes.li}>
          <div className={classes.info_container}>
            <p className={classes.name}>Kebab</p>
            <p className={classes.price}>5.99$</p>
          </div>
          <div className={classes.actions}>
            <FontAwesomeIcon icon={faMinus} className={classes.icon} />
            <FontAwesomeIcon icon={faPlus} className={classes.icon} />
          </div>
        </li>
        <li className={classes.li}>
          <div className={classes.info_container}>
            <p className={classes.name}>Kebab</p>
            <p className={classes.price}>5.99$</p>
          </div>
          <div className={classes.actions}>
            <FontAwesomeIcon icon={faMinus} className={classes.icon} />
            <FontAwesomeIcon icon={faPlus} className={classes.icon} />
          </div>
        </li>
      </ul>
      <div className={classes.footer}>
        <div>
          <p className={classes.total}>Total amaunt: 24.99$</p>
        </div>
        <button className={classes.btn_checkout}>Checkout</button>
      </div>
    </div>
  );
};

export default Cart;

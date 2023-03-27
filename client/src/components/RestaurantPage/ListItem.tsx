import classes from "./ListItem.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import { CartContext } from "../../context/contextWithReducer";

const ListItem = () => {
  const { actions } = useContext(CartContext);
  const Dum_item = {
    _id: "asd12",
    name: "Kebab",
    price: 2.9,
    description:
      "Kebabs consist of cut up or ground meat, sometimes with vegetables and various other accompaniments according to the specific recipe.",
  };
  const onAddToCartHandler = () => {
    actions.addItem({
      _id: Dum_item._id,
      itemName: Dum_item.name,
      price: Dum_item.price,
    });
  };
  return (
    <li className={classes.li}>
      <div className={classes.item_container}>
        <p className={classes.name}>{Dum_item.name}</p>
        <p className={classes.price}>Price: {Dum_item.price}$</p>
      </div>
      <textarea
        defaultValue={Dum_item.description}
        readOnly={true}
        className={classes.textarea}
      />
      <FontAwesomeIcon
        icon={faCirclePlus}
        size={"3x"}
        className={classes.icon}
        onClick={onAddToCartHandler}
      />
    </li>
  );
};

export default ListItem;

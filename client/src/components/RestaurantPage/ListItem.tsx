import classes from "./ListItem.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";
const ListItem = () => {
  const description =
    "Kebabs consist of cut up or ground meat, sometimes with vegetables and various other accompaniments according to the specific recipe.";
  return (
    <li className={classes.li}>
      <div className={classes.item_container}>
        <p className={classes.name}>Kebab</p>
        <p className={classes.price}>Price: 1.90$</p>
      </div>
      <textarea
        defaultValue={description}
        readOnly={true}
        className={classes.textarea}
      />
      <FontAwesomeIcon
        icon={faCirclePlus}
        size={"3x"}
        className={classes.icon}
      />
    </li>
  );
};

export default ListItem;

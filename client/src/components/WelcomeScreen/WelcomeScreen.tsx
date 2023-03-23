import classes from "./WelcomeScreen.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDrumstickBite } from "@fortawesome/free-solid-svg-icons";
import pizzaImg from "../../resources/pizza.png";
import { useState } from "react";
const WelcomeScreen = () => {
  const [selectionVisible, setSelectionVisible] = useState(false);
  return (
    <div className={classes.wrapper}>
      <div className={classes.header}>
        <div className={classes.main_header_container}>
          <p className={classes.main_header}>Welocme to FoodApp</p>
          <FontAwesomeIcon
            icon={faDrumstickBite}
            className={classes.icon}
            size={"3x"}
          />
        </div>
        <p className={classes.secondary_header}>
          Order delicious food with few clicks
        </p>
      </div>
      <div className={classes.main}>
        {!selectionVisible && (
          <img
            src={pizzaImg}
            className={classes.pizza}
            onClick={() => setSelectionVisible(true)}
          />
        )}
      </div>
    </div>
  );
};

export default WelcomeScreen;

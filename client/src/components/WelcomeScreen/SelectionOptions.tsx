import { useNavigate } from "react-router-dom";
import classes from "./SelectionOptions.module.css";
import pizzaImg from "../../resources/pizza2.png";
import burgerImg from "../../resources/burger.png";
import sushiImg from "../../resources/sushi.png";
import kebabImg from "../../resources/kebab.png";
import mexicanImg from "../../resources/mexican.png";
import chineseImg from "../../resources/chinese.png";
import menuImg from "../../resources/menu.png";

const SelectionOptions = () => {
  const navigate = useNavigate();

  return (
    <div className={classes.main_menu}>
      <div className={classes.first_row}>
        <div className={classes.card} onClick={() => navigate("/menu/burger")}>
          <img src={burgerImg} className={classes.img} alt="Burger" />
          <p className={classes.card_name}>Burger</p>
        </div>
        <div className={classes.card} onClick={() => navigate("/menu/sushi")}>
          <img src={sushiImg} className={classes.img} alt="Sushi" />
          <p className={classes.card_name}>Sushi</p>
        </div>
      </div>
      <div className={classes.second_row}>
        <div className={classes.card} onClick={() => navigate("/menu/pizza")}>
          <img src={pizzaImg} className={classes.img} alt="Pizza" />
          <p className={classes.card_name}>Pizza</p>
        </div>
        <div className={classes.card} onClick={() => navigate("/menu")}>
          <img src={menuImg} className={classes.img} alt="menu" />
          <p className={classes.card_name}>Search</p>
        </div>
        <div className={classes.card} onClick={() => navigate("/menu/chinese")}>
          <img src={chineseImg} className={classes.img} alt="chinese" />
          <p className={classes.card_name}>Chinese</p>
        </div>
      </div>
      <div className={classes.third_row}>
        <div className={classes.card} onClick={() => navigate("/menu/kebab")}>
          <img src={kebabImg} className={classes.img} alt="kebab" />
          <p className={classes.card_name}>Kebab</p>
        </div>
        <div className={classes.card} onClick={() => navigate("/menu/mexican")}>
          <img src={mexicanImg} className={classes.img} alt="taco" />
          <p className={classes.card_name}>Mexican</p>
        </div>
      </div>
    </div>
  );
};

export default SelectionOptions;

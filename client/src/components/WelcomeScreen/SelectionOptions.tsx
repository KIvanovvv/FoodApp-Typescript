import classes from "./SelectionOptions.module.css";
import pizzaImg from "../../resources/pizza.png";

const SelectionOptions = () => {
  return (
    <div className={classes.main_menu}>
      <div className={classes.first_row}>
        <div className={classes.burger_card}>
          <img src={pizzaImg} className={classes.img} />
          <p className={classes.card_name}>Burger</p>
        </div>
        <div className={classes.sushi_card}>
          <img src={pizzaImg} className={classes.img} />
          <p className={classes.card_name}>Sushi</p>
        </div>
      </div>
      <div className={classes.second_row}>
        <div className={classes.pizza_card}>
          <img src={pizzaImg} className={classes.img} />
          <p className={classes.card_name}>Pizza</p>
        </div>
        <div className={classes.search_card}>
          <img src={pizzaImg} className={classes.img} />
          <p className={classes.card_name}>Search</p>
        </div>
        <div className={classes.chineese_card}>
          <img src={pizzaImg} className={classes.img} />
          <p className={classes.card_name}>Chineese</p>
        </div>
      </div>
      <div className={classes.third_row}>
        <div className={classes.kebab_card}>
          <img src={pizzaImg} className={classes.img} />
          <p className={classes.card_name}>Kebab</p>
        </div>
        <div className={classes.mexican_card}>
          <img src={pizzaImg} className={classes.img} />
          <p className={classes.card_name}>Mexican</p>
        </div>
      </div>
    </div>
  );
};

export default SelectionOptions;

import pizzaImg from "../../resources/pizza2.png";
import burgerImg from "../../resources/burger.png";
import sushiImg from "../../resources/sushi.png";
import kebabImg from "../../resources/kebab.png";
import mexicanImg from "../../resources/mexican.png";
import chineseImg from "../../resources/chinese.png";
import menuImg from "../../resources/menu.png";

export const selectionOptions = {
  rowOne: [
    {
      name: "Burger",
      img: burgerImg,
      path: "/menu/burger",
      row: 1,
    },
    {
      name: "Sushi",
      img: sushiImg,
      path: "/menu/sushi",
      row: 1,
    },
  ],
  rowTwo: [
    {
      name: "Pizza",
      img: pizzaImg,
      path: "/menu/pizza",
      row: 2,
    },
    {
      name: "Menu",
      img: menuImg,
      path: "/menu",
      row: 2,
    },
    {
      name: "Chinese",
      img: chineseImg,
      path: "/menu/chinese",
      row: 2,
    },

  ],
  rowThree: [
    {
      name: "Kebab",
      img: kebabImg,
      path: "/menu/kebab",
      row: 3,
    },
    {
      name: "Mexican",
      img: mexicanImg,
      path: "/menu/mexican",
      row: 3,
    },
  ]
}

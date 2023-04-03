import { CartItem, ReducerAction } from "./types";

export default (state: CartItem[], action: ReducerAction) => {
  switch (action.type) {
    case "ADD":
      let signlePrice = action.payload.price / action.payload.quantity;
      const existing = state.findIndex(
        (item) => item.itemName === action.payload.itemName
      );
      if (existing === -1) {
        return [...state, action.payload];
      } else {
        const updatedState = [...state];
        updatedState[existing].quantity += 1;
        updatedState[existing].price += signlePrice;
        return updatedState;
      }

    case "REMOVE":
      let price = 0;
      const existingItem = state.findIndex((item) => {
        price = item.price / item.quantity;
        return item.itemName === action.payload;
      });
      console.log(price);
      if (existingItem !== -1) {
        const updatedState = [...state];
        if (updatedState[existingItem].quantity > 1) {
          updatedState[existingItem].quantity -= 1;
          updatedState[existingItem].price -= price;
          return updatedState;
        }
      }
      return state.filter((item) => item.itemName !== action.payload);
    case "CLEAR":
      return [];
    default:
      return state;
  }
};

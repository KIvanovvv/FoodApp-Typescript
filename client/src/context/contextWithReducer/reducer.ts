import { CartItem, ReducerAction } from "./types";

export default (state: CartItem[], action: ReducerAction) => {
  switch (action.type) {
    case "ADD":
      const existing = state.findIndex(
        (item) => item.itemName === action.payload.itemName
      );
      if (existing === -1) {
        return [...state, action.payload];
      } else {
        const updatedState = [...state];
        updatedState[existing].quantity += 1;
        updatedState[existing].price *= 2;
        return updatedState;
      }

    case "REMOVE":
      const existingItem = state.findIndex(
        (item) => item.itemName === action.payload
      );
      if (existingItem !== -1) {
        const updatedState = [...state];
        if (updatedState[existingItem].quantity > 1) {
          updatedState[existingItem].quantity -= 1;
          updatedState[existingItem].price /= 2;
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

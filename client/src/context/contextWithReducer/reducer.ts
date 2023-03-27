import { CartItem, ReducerAction } from './types'

export default (state: CartItem[], action: ReducerAction) => {
  switch (action.type) {
    case "ADD":
      return [...state, action.payload];
    case "REMOVE":
      return state.filter((item) => item._id !== action.payload);
    case "CLEAR":
      return [];
    default:
      return state;
  }
}

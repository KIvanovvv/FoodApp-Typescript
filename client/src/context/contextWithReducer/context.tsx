import {
  createContext,
  useReducer,
} from "react";

import reducer from './reducer'
import { actions } from './actions'
import { CartContextInterface, CartProvideProps } from './types'

const defaultState = {
  items: [],
  actions: {} as ReturnType<typeof actions>,
}

export const CartContext = createContext<CartContextInterface>(defaultState);

export default function CartProvider({ children }: CartProvideProps) {
  const [items, dispatch] = useReducer(reducer, []);

  const value = {
    items,
    actions: actions(dispatch),
  }

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
}


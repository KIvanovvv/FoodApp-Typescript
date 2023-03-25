import {
  createContext,
  Dispatch,
  SetStateAction,
  ReactNode,
  useState,
} from "react";

export type CartItem = {
  _id: string;
  itemName: string;
  price: number;
};

export interface CartContextInterface {
  items: CartItem[];
  setItems: Dispatch<SetStateAction<CartItem>>;
}

const defaultState = {
  items: [
    {
      _id: "",
      itemName: "",
      price: 0,
    },
  ],
  setItems: (items: CartItem) => {},
} as CartContextInterface;

export const CartContext = createContext(defaultState);

type CartProvideProps = {
  children: ReactNode;
};

export default function CartProvider({ children }: CartProvideProps) {
  const [items, setItems] = useState<CartItem[]>([
    {
      _id: "",
      itemName: "",
      price: 0,
    },
  ]);

  // return (
  //   <CartContext.Provider value={{ items, setItems }}>
  //     {children}
  //   </CartContext.Provider>
  // );
}

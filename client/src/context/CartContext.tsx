// import {
//   createContext,
//   ReactNode,
//   useState,
// } from "react";
//
// export type CartItem = {
//   _id: string;
//   itemName: string;
//   price: number;
// };
//
// export interface CartContextInterface {
//   items: CartItem[];
//   addItem: (item: CartItem) => void;
//   removeItem: (id: string) => void;
//   clearCart: () => void;
//   }
//
// const defaultState = {
//   items: [
//     {
//       _id: "",
//       itemName: "",
//       price: 0,
//     },
//   ],
//     addItem: (item: CartItem) => {},
//     removeItem: (id: string) => {},
//     clearCart: () => {},
// }
//
// export const CartContext = createContext<CartContextInterface>(defaultState);
//
// type CartProvideProps = {
//   children: ReactNode;
// };
//
// export default function CartProvider({ children }: CartProvideProps) {
//   const [items, setItems] = useState<CartItem[]>([]);
//
//   const addItem = (item: CartItem) => {
//     setItems((prevState) => [...prevState, item]);
//   }
//
//   const removeItem = (id: string) => {
//     setItems((prevState) => prevState.filter((item) => item._id !== id));
//   }
//
//   const clearCart = () => {
//     setItems([]);
//   }
//
//   const value = {
//     items,
//     addItem,
//     removeItem,
//     clearCart,
//   }
//
//   return (
//     <CartContext.Provider value={value}>
//       {children}
//     </CartContext.Provider>
//   );
// }

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
  setItems: Dispatch<SetStateAction<CartItem[]>>;
}

const defaultState: CartContextInterface = {
  items: [
    {
      _id: "",
      itemName: "",
      price: 0,
    },
  ],
  setItems: () => {}
}

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

  return (
    <CartContext.Provider value={{ items, setItems }}>
      {children}
    </CartContext.Provider>
  );
}


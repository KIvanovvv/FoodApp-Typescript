import { ReactNode } from "react";
import { actions } from "./actions";
import { ADD, REMOVE, CLEAR } from "./constants";

type Actions = ReturnType<typeof actions>;

export type ReducerAction =
  | {
      type: typeof ADD;
      payload: CartItem;
    }
  | {
      type: typeof REMOVE;
      payload: string;
    }
  | {
      type: typeof CLEAR;
      payload: null;
    };

export type CartItem = {
  quantity: number;
  itemName: string;
  price: number;
};

export interface CartContextInterface {
  items: CartItem[];
  actions: Actions;
}

export type CartProvideProps = {
  children: ReactNode;
};

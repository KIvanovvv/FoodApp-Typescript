export type RestaurantModel = {
  _id: string;
  name: string;
  description: string;
  cardImageUrl: string;
  pageImageUrl: string;
  rating: number[];
  minOrder: number;
  delivery: number;
  freeDelivery: number;
  food: Food[];
  category: string[];
};

export type MenuHeaderProps = {
  pageImageUrl: string;
  name: string;
  rating: number[];
  minOrder: number;
  delivery: number;
  freeDelivery: number;
};

type Food = {
  category: string;
  description: string;
  name: string;
  price: number;
};

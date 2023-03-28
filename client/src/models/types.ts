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
};

export type MenuHeaderProps = {
  pageImageUrl: string;
  name: string;
  rating: number[];
  minOrder: number;
  delivery: number;
  freeDelivery: number;
};

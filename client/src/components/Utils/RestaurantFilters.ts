import { RestaurantModel } from "../../models/types";

export default function filterRestaurants(
  restaurants: RestaurantModel[],
  showOpen: boolean,
  showFreeDelivery: boolean,
  category: string,
  searchQuery: string,
  minOrder: number,
  ratingFilter: number
): RestaurantModel[] {
  let filteredData = restaurants.slice();

  if (category) {
    filteredData = filteredData.filter((x) => x.category.includes(category));
  }

  if (showOpen) {
    filteredData = filteredData.filter((x) => x.status === "Open");
  }

  if (showFreeDelivery) {
    filteredData = filteredData.filter((x) => x.delivery === 0);
  }
  if (searchQuery) {
    filteredData = filteredData.filter((x) =>
      x.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }
  if (minOrder) {
    filteredData = filteredData.filter((x) => x.minOrder <= minOrder);
  }
  if (ratingFilter) {
    filteredData = filteredData.filter(
      (x) =>
        x.rating.reduce((a, b) => a + b, 0) / x.rating.length >= ratingFilter
    );
  }

  return filteredData;
}

const host = "http://localhost:5000/restaurants";

export async function getRestaurants() {
  try {
    const respones = await fetch(host);
    if (!respones.ok) {
      throw new Error(
        `Something went wrong with the request: ${respones.status}`
      );
    }
    const data = await respones.json();
    return data;
  } catch (err: any) {
    throw new Error(err.message);
  }
}
export async function getRestaurantById(id: string | undefined) {
  try {
    const respones = await fetch(`${host}/${id}`);
    if (!respones.ok) {
      throw new Error(
        `Something went wrong with the request: ${respones.status}`
      );
    }
    const data = await respones.json();
    return data;
  } catch (err: any) {
    throw new Error(err.message);
  }
}
export async function getRestaurantByCategory(category: string) {
  try {
    const respones = await fetch(`${host}/menu/${category}`);
    if (!respones.ok) {
      throw new Error(
        `Something went wrong with the request: ${respones.status}`
      );
    }
    const data = await respones.json();
    return data;
  } catch (err: any) {
    throw new Error(err.message);
  }
}

import store from "../redux/redux";
import { putCategory } from "../redux/misc";

export const loader = async ({ request, params }) => {
  const category = params.category;

  store.dispatch(putCategory(category));

  return fetch("https://dummyjson.com/products/category/" + category);
};

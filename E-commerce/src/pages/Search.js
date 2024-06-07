import { redirect } from "react-router-dom";
import store from "../redux/redux";
import { putCategory } from "../redux/misc";

export const loader = async ({ request, params }) => {
  const search = params.search;

  return fetch("https://dummyjson.com/products/search?q=" + search);
};

export const action = async ({ request }) => {
  const data = await request.formData();
  const search = data.get("search");
  store.dispatch(putCategory(null));

  return redirect(`/store/search/${search}`);
};

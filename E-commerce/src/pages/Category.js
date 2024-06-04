export const loader = async ({ request, params }) => {
  console.log(params);
  const category = params.category;

  console.log(category);

  return fetch("https://dummyjson.com/products/category/" + category);
};

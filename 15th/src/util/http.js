export async function fetchMeals() {
  const response = await fetch("http://localhost:3000/meals");

  if (!response.ok) throw new Error("Something went wrong <3");

  const data = await response.json();
  return data;
}

export async function insetOrder(order) {
  const response = await fetch("http://localhost:3000/orders", {
    method: "POST",
    body: JSON.stringify({
      order,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) throw new Error("Something went wrong <3");

  const data = await response.json();
  return data;
}

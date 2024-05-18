import { formatNumber } from "./formatNumber";

export const totalCartCost = (cart) =>
  formatNumber(
    cart.reduce(
      (accumulator, currentValue) =>
        accumulator + Number(currentValue.price) * currentValue.quantity,
      0
    )
  );

export const addToCart = (cart, meal) => {
  const newCart = [...cart];

  const thatMeal = newCart.find((cartMeal) => cartMeal.id === meal.id);
  if (thatMeal) {
    thatMeal.quantity++;
    const thatMealIndex = newCart.findIndex((cartMeal) => cartMeal === meal.id);
    newCart[thatMealIndex] = thatMeal;
  } else {
    meal.quantity = 1;
    newCart.push(meal);
  }

  return newCart;
};

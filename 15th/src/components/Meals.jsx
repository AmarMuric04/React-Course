import { useState, useEffect } from "react";
import { Loader } from "../assets/icons";
import { useContext } from "react";
import { CartContext } from "../store/cartContext";

export default function Meals() {
  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const { cart, handleUpdateCart } = useContext(CartContext);

  useEffect(() => {
    async function handleFetch() {
      const response = await fetch("http://localhost:3000/meals");

      if (!response.ok) console.log("NOOO!!");

      const data = await response.json();

      setIsLoading(false);
      setMeals(data);
    }
    handleFetch();
  }, []);

  function handleAddToCart(meal) {
    const newCart = [...cart];

    const thatMeal = newCart.find((cartMeal) => cartMeal.id === meal.id);
    if (thatMeal) {
      thatMeal.quantity++;
      const thatMealIndex = newCart.findIndex(
        (cartMeal) => cartMeal === meal.id
      );
      newCart[thatMealIndex] = thatMeal;
    } else {
      meal.quantity = 1;
      newCart.push(meal);
    }

    handleUpdateCart(newCart);
  }

  return (
    <main id="meals">
      {isLoading && (
        <div className="loader-div">
          <Loader />
        </div>
      )}
      {!isLoading &&
        meals.map((meal) => (
          <div key={meal.id} className="meal-item">
            <article>
              {/* <img src={meal.image} alt="" /> */}
              <h3>{meal.name}</h3>
              <p className="meal-item-price">{meal.price} $</p>
              <p className="meal-item-description">{meal.description}</p>
              <div className="meal-item-actions">
                <button
                  className="button"
                  onClick={() => handleAddToCart(meal)}
                >
                  Buy
                </button>
              </div>
            </article>
          </div>
        ))}
    </main>
  );
}

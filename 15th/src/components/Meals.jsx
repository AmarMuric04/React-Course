import { Loader } from "../assets/icons";
import { formatNumber } from "../util/formatNumber";
import { fetchMeals } from "../util/http.js";
import useFetch from "../hooks/useFetch";
import { useCart } from "../hooks/useCart.js";
import { addToCart } from "../util/helpers.js";

export default function Meals() {
  const { handleUpdateCart, cart } = useCart();

  const { isLoading, fetchedData, error } = useFetch(
    fetchMeals,
    [],
    "FETCH",
    "Failed to load meals..."
  );

  function handleAddToCart(meal) {
    const newCart = addToCart(cart, meal);

    handleUpdateCart(newCart);
  }

  return (
    <main id="meals">
      {error && <p>{error}</p>}
      {isLoading && (
        <div className="loader-div">
          <Loader />
        </div>
      )}
      {!isLoading &&
        fetchedData.map((meal) => {
          const thatMeal = cart.find((cartMeal) => cartMeal.id === meal.id);

          console.log(thatMeal);

          return (
            <div key={meal.id} className="meal-item">
              <article>
                {/* <img src={meal.image} alt="" /> */}
                <h3>{meal.name}</h3>
                <p className="meal-item-price">{formatNumber(meal.price)}</p>
                <p className="meal-item-description">{meal.description}</p>
                <div className="meal-item-actions">
                  <button
                    className="button"
                    onClick={() => handleAddToCart(meal)}
                  >
                    Add to cart
                  </button>
                  <p>{thatMeal && "In cart: " + thatMeal.quantity}</p>
                </div>
              </article>
            </div>
          );
        })}
    </main>
  );
}

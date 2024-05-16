import Header from "./components/Header";
import availablePlaces from "../backend/data/available-meals.json";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    async function handleFetch() {
      const response = await fetch("http://localhost:3000/meals");
      const data = response.json();

      console.log(data);
    }
    handleFetch();
  }, []);

  return (
    <>
      <Header />
      <main id="meals">
        {availablePlaces.map((meal) => (
          <div key={meal.id} className="meal-item">
            <img src={meal.image} alt="" />
            <h3>{meal.name}</h3>
            <p className="meal-item-price">{meal.price} $</p>
            <p className="meal-item-description">{meal.description}</p>
            <div className="meal-item-actions">
              <button className="button">Buy</button>
            </div>
          </div>
        ))}
      </main>
    </>
  );
}

export default App;

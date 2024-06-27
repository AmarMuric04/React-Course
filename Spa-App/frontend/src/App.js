import { RouterProvider } from "react-router-dom";
import { router } from "./router/router";
import { useEffect, useState } from "react";

function App() {
  const [meals, setMeals] = useState([]);
  useEffect(() => {
    const fetchMeals = async () => {
      try {
        const response = await fetch(
          "https://api.spoonacular.com/recipes/complexSearch?apiKey=YOUR_API_KEY=30336ef90b0c4d05b2474c707f96e0a6"
        );

        const data = await response.json();

        setMeals(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchMeals();
  }, []);

  console.log(meals);

  return <RouterProvider router={router} />;
}

export default App;

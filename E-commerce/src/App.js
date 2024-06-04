import { RouterProvider } from "react-router-dom";
import { router } from "./router/router";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { miscActions } from "./redux/misc";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const category = JSON.parse(localStorage.getItem("category"));

    dispatch(miscActions.putCategory(category));
  }, [dispatch]);

  return <RouterProvider router={router} />;
}

export default App;

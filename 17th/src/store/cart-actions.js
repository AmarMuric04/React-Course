import { uiActions } from "./ui-slice";
import { cartActions } from "./redux";

// thunk
export const sendCartData = (cart) => {
  return async (dispatch) => {
    dispatch(
      uiActions.showNotification({
        status: "pending",
        title: "Sending",
        message: "Sending cart data",
      })
    );

    const sendRequest = async () => {
      const response = await fetch(
        "https://project-8439030004701767488-default-rtdb.europe-west1.firebasedatabase.app/cart.json",
        {
          method: "PUT",
          body: JSON.stringify({
            items: cart.items,
          }),
        }
      );

      if (!response.ok) throw new Error("Failed!");
    };

    try {
      await sendRequest();
      dispatch(
        uiActions.showNotification({
          status: "success",
          title: "Success...",
          message: "Sent cart data successfully",
        })
      );
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          status: "error",
          title: "Error...",
          message: "Error sending cart data",
        })
      );
    }
  };
};

export const getCartData = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch(
        "https://project-8439030004701767488-default-rtdb.europe-west1.firebasedatabase.app/cart.json"
      );

      if (!response.ok) throw new Error("error");

      const data = await response.json();

      return data;
    };

    try {
      const cartData = await fetchData();

      dispatch(cartActions.replaceCart({ items: cartData?.items || [] }));
    } catch (error) {
      console.error(error);

      dispatch(
        uiActions.showNotification({
          status: "error",
          title: "Error...",
          message: "Fetching cart data failed",
        })
      );
    }
  };
};

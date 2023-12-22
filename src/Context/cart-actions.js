import { uiActions } from "./uiSlice";
import { cartActions } from "./cartSlice";

export const sendCartData = (cart) => {
  return async (dispatch) => {
    dispatch(
      uiActions.showNotification({
        title: "Sending...",
        message: "Sending cart data!",
        status: "sending",
      })
    );
    const sendRequest = async () => {
    // add your own firebase project url so that it can send data and show its work  
      const response = await fetch(
        // "https://food-order-database-fb5fc-default-rtdb.firebaseio.com/cart.json",
        {
          method: "PUT",
          body: JSON.stringify({
            items: cart.items,
            totalQuantity: cart.totalQuantity,
          }),
        }
      );
      if (!response.ok) {
        throw new Error("Sending cart data failed.");
      }
    };
    try {
      await sendRequest();

      dispatch(
        uiActions.showNotification({
          title: "Success",
          message: "Data saved successfully",
          status: "success",
        })
      );
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          title: "Error",
          message: "Sending cart data failed!",
          status: "error",
        })
      );
      console.log(error.message);
    }
  };
};


export const fetchCartData = () => {
//    the dispatch function is provided by redux thunk and it is used to dispatch an action as shown below
    return async (dispatch) => { 
        const fetchData = async () => {
            const response = await fetch(
              "https://food-order-database-fb5fc-default-rtdb.firebaseio.com/cart.json"
            );
            if (!response.ok) {
                throw new Error("Fetching cart data failed.");
            }
            const data = await response.json(); 

            return data;
        }

        try {
            const cartData = await fetchData();
            dispatch(cartActions.replaceCart({
                items: cartData.items || [],
                totalQuantity: cartData.totalQuantity,
            }));
        }
        catch(e){
            dispatch(
                uiActions.showNotification({
                  title: "Error",
                  message: "Fetching cart data failed!",
                  status: "error",
                })
              );
              console.log(e.message);
        }

    } 
}

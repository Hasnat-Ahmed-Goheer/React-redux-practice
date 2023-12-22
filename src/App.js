import { useDispatch, useSelector } from "react-redux";
import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import Notification from "./components/UI/Notifiaction";
import { useEffect } from "react";
// import { uiActions } from "./Context/uiSlice";
import { fetchCartData, sendCartData } from "./Context/cart-actions";

let isInitial = true;

function App() {
  const isVisible = useSelector((state) => state.ui.isVisible);
  const notification = useSelector((state) => state.ui.notification);
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  useEffect(() => { 
    dispatch(fetchCartData()); 

  }, [dispatch]);

  useEffect(() => {

    if (isInitial) {
      isInitial = false;
      return;
    }
    
   if(cart.changed)
    dispatch(sendCartData(cart));
    
    
    // try {
    //   const sendRequest = async () => {
    //     dispatch(
    //       uiActions.showNotification({
    //         title: "Sending...",
    //         message: "Sending cart data!",
    //         status: "sending",
    //       })
    //     );

    //     const response = await fetch(
    //       "https://food-order-database-fb5fc-default-rtdb.firebaseio.com/cart.json",
    //       {
    //         method: "PUT",
    //         body: JSON.stringify(cart),
    //       }
    //     );
    //     if (!response.ok) {
    //         throw new Error("Sending cart data failed.");
    
    //     }
    
    //     dispatch(
      //       uiActions.showNotification({
    //         title: "Success",
    //         message: "Data saved successfully",
    //         status: "success",
    //       })
    //     );
    //   };
    
    // if (isInitial) {
    //   isInitial = false;
    //   return;
    // }
    //   sendRequest().catch(() => {
    //     dispatch(
    //       uiActions.showNotification({
    //         title: "Error",
    //         message: "Sending cart data failed!",
    //         status: "error",
    //       })
    //     );
    //   });
    // } catch (error) {
    //   console.log(error.message);
    // }

  }, [cart, dispatch]);

  return (
    <>
      {notification && (
        <Notification
          title={notification.title}
          status={notification.status}
          message={notification.message}
        />
      )}
      <Layout>
        {isVisible && <Cart />}
        <Products />
      </Layout>
    </>
  );
}

export default App;

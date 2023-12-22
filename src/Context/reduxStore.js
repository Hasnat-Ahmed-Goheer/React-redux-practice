import { configureStore } from "@reduxjs/toolkit";
import uiSliceReducer from "./uiSlice";
import cartSliceReducer from "./cartSlice";

const reduxStore = configureStore({
    reducer :{
        ui: uiSliceReducer,
        cart: cartSliceReducer,
    }
});

export default reduxStore;
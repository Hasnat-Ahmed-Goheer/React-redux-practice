import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  totalQuantity: 0,
  changed: false,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action) {
      // console.log(action.payload);
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);
      state.changed = true;
      state.totalQuantity++;
      if (!existingItem) {
          state.items.push({
              id: newItem.id,
              title: newItem.title,
              price: newItem.price,
              totalPrice: newItem.price,
              quantity: 1,
        });
      } else {
        existingItem.quantity++;
        existingItem.totalPrice = existingItem.totalPrice + newItem.price;
    }
},
removeItem(state, action) {
    // console.log(state);
    const id = action.payload;
    const existingItem = state.items.find((item) => item.id === id);
    state.changed = true;
    state.totalQuantity--;
    if (existingItem.quantity === 1) {
        state.items = state.items.filter((item) => item.id !== id);
      } else {
        existingItem.quantity--;
        existingItem.totalPrice = existingItem.totalPrice - existingItem.price;
      }
    },
    replaceCart(state, action) {
        state.totalQuantity = action.payload.totalQuantity;
        state.items = action.payload.items; 
        
    }
  },
});

// action creators thunk


export const cartActions = cartSlice.actions;

export default cartSlice.reducer;

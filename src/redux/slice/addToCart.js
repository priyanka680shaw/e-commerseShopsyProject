import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartCount: 0,
  cardDataItems: []
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    // ✅ Add item (Increase quantity if already exists)
    setAddtoCard: (state, action) => {
      const itemIndex = state.cardDataItems.findIndex((item) => item.id === action.payload.id);
      
      if (itemIndex >= 0) {
        // If product already exists, increase quantity
        state.cardDataItems[itemIndex].quantity += 1;
      } else {
        // Add new product with quantity = 1
        state.cardDataItems.push({ ...action.payload, quantity: 1 });
      }

      state.cartCount += 1; // Increase total cart count
    },

    // ✅ Remove item (Decrease quantity or remove completely)
    setRemoveFromCart: (state, action) => {
      const itemIndex = state.cardDataItems.findIndex((item) => item.id === action.payload);
      
      if (itemIndex >= 0) {
        if (state.cardDataItems[itemIndex].quantity > 1) {
          state.cardDataItems[itemIndex].quantity -= 1;
        } else {
          state.cardDataItems.splice(itemIndex, 1);
        }
      }

      state.cartCount = Math.max(0, state.cartCount - 1); // Prevent negative count
    },


    //  Remove item completely and decrease cart count
setRemoveItemFromCart: (state, action) => {
  const itemToRemove = state.cardDataItems.find((item) => item.id === action.payload);
  
  if (itemToRemove) {
    state.cartCount = Math.max(0, state.cartCount - itemToRemove.quantity); // Decrease cartCount based on quantity
  }

  state.cardDataItems = state.cardDataItems.filter((item) => item.id !== action.payload);
}
    
  }
});

export const { setAddtoCard, setRemoveFromCart, setRemoveItemFromCart } = cartSlice.actions;
export const cardreducer = cartSlice.reducer;

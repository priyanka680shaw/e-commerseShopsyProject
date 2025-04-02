import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  product: [], // Ensure it's an array
  originalProducts : [] // store all the original data
};

const homeSlice = createSlice({
  name: "homePage",
  initialState,
  reducers: {
    setProduct: (state, action) => {
      state.product = [...action.payload]; // Spread to avoid reference issues
    },
    setResetProduct : (state , action)=>{
      state.product = [...state.originalProducts]
    },
    setOriginalProduct :(state , action)=>{
      state.originalProducts = [...action.payload]  ;
      state.product =[...action.payload];
    }
  },
});

export const { setProduct ,  setResetProduct , setOriginalProduct} = homeSlice.actions;
export const homereducer = homeSlice.reducer;

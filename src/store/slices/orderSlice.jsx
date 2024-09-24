import { createSlice } from "@reduxjs/toolkit";

export const orderSlice = createSlice({
  name: "orders",
  initialState: {
    orders: null,
    currentOrder: null,
    setOrderID: null,
    allOrders: [],
    cart:[]
  },
  reducers: {
    setOrder: (state, action) => {
      state.orders = action.payload;
    },
    setCurrentOrder: (state, action) => {
      state.currentOrder = action.payload;
    },
    setOrderID: (state, action) => {
      state.setOrderID = action.payload;
    },
    setAllOrders: (state, action) => {
      state.allOrders = action.payload;
    },
    setCartItems: (state, action) => {
      state.cart = action.payload;
    },
 
  },
});

export const { setOrder, setCurrentOrder,setCartItems, setOrderID, setAllOrders } = orderSlice.actions;

export default orderSlice.reducer;

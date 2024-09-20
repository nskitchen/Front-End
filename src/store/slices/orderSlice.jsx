import { createSlice } from "@reduxjs/toolkit";

export const orderSlice = createSlice({
  name: "orders",
  initialState: {
    orders: null,
    currentOrder: null,
    setOrderID: null,
    allOrders: null,
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
  },
});

export const { setOrder, setCurrentOrder, setOrderID, setAllOrders } = orderSlice.actions;

export default orderSlice.reducer;

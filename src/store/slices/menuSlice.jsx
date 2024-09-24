import { createSlice } from "@reduxjs/toolkit";

export const menuSlice = createSlice({
  name: "menu",
  initialState: {
    isAuthenticated: false,
    menu: null,
    food: 'all',
    category: null,
    menuCategory:[
      { name: "Burger"},
      { name: "Sandwich"},
      { name: "Pasta"},
      { name: "Pizza"},
      { name: "Snacks"},
      { name: "Beverages"},
    ]
  },
  reducers: {
    setFood: (state, action) => {
      state.food = action.payload;
    },
    setMenu: (state, action) => {
      state.menu = action.payload;
    },
    setCategory: (state, action) => {
      state.category = action.payload;
    },  
   
  },
});

export const { setFood , setMenu, setCategory } = menuSlice.actions;

export default menuSlice.reducer;

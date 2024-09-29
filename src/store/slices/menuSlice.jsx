import { createSlice } from "@reduxjs/toolkit";

export const menuSlice = createSlice({
  name: "menu",
  initialState: {
    menu: null,
    food: 'all',
    category: null,
    menuCategory:[]
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
    setMenuCategory: (state, action) => {
      state.menuCategory = action.payload;
    },  
   
  },
});

export const { setFood , setMenu,setMenuCategory, setCategory } = menuSlice.actions;

export default menuSlice.reducer;

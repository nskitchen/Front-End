import { useSelector } from "react-redux";
import { menuAPI } from "../../utils/Axios";
import { setCategory,setMenuCategory, setMenu } from "../slices/menuSlice";


export const getMenu = (isVeg = null, isSpecial = null, isAvailable = null) => async (dispatch,getState) => {
  try {
    const { data } = await menuAPI.get("/");
    const menu = getState().menu.food
    if (isVeg == null && isSpecial == null && isAvailable == null) {
      const { data } = await menuAPI.get("/", {
        params: {
          limit: 10,
          skip: 0,
          filter:{
            category:menu
          }
        },
      });
      dispatch(setMenu(data.data.menus));
    } else {
      const { data } = await menuAPI.get("/", {
        params: {
          limit: 10,
          skip: 0,
          filter: {
            category: menu,
            isVeg,
            isSpecial,
            isAvailable,
          }
        },
      });
      dispatch(setMenu(data.data.menus));
    }
  } catch (error) {
    console.error("Error fetching menu:", error);
  }
};

export const getUpdateMenuById = (id, data2) => async (dispatch) => {
  try {
    const { data } = await menuAPI.put(`/${id}`, data2);
    dispatch(getMenu())
  } catch (error) {
    console.error("Error fetching menu by id:", error);
  }
};

export const updateCategory = (name) => async (dispatch) => {
  try {
    await menuAPI.put(`/category`, {name});
    // dispatch(getMenu())
  } catch (error) {
    console.error("Error fetching menu by id:", error);
  }
};

export const getCategory = () => async (dispatch) => {
  try {
    const { data } = await menuAPI.get(`/category`);
    dispatch(setMenuCategory(data.data.category))
  } catch (error) {
    console.error("Error fetching menu by id:", error);
  }
};

export const getDeleteMenuById = (id) => async (dispatch) => {
  try {
    if (id) {
      await menuAPI.delete(`/${id}`);
      dispatch(getMenu());
    }
  } catch (error) {
    console.error("Error fetching menu by id:", error);
  }
};

export const getUpdateOutOfStock = (id, data2) => async (dispatch) => {
  try {
    await menuAPI.put(`/update/${id}`, data2);
    dispatch(getMenu());
  } catch (error) {

    console.error("Error fetching menu by id:", error);
  }
};

export const getPopularDishes = async() => {
  try {
    const {data} = await menuAPI.post(`/popular`);
    return data.data.popular
  } catch (error) {
    console.error("Error fetching menu by id:", error);
  }
};

export const getOutOfStockItems = (id, data2) => async (dispatch) => {
  try {
    await menuAPI.put(`/update/${id}`, data2);
    dispatch(getMenu());
  } catch (error) {

    console.error("Error fetching menu by id:", error);
  }
};
import { useSelector } from "react-redux";
import { menuAPI } from "../../utils/Axios";
import { setCategory, setMenu } from "../slices/menuSlice";


export const getMenu = (isVeg,isSpecial,isAvailable) => async (dispatch,getState) => {
  try {
    const { data } = await menuAPI.get("/");
    const categories = [
      ...new Set(data.data.menus.map((item) => item.category)), 
    ];
    dispatch(setCategory(categories));
    
    const menu = getState().menu.food
    if (menu === "all") {
      const { data } = await menuAPI.get("/", {
        params: {
          limit: 10,
          skip: 0,
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
            isVeg: isVeg || true,
            isSpecial: isSpecial || false,
            isAvailable: isAvailable || true,
          },
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
import { useSelector } from "react-redux";
import { menuAPI } from "../../utils/Axios";
import { setCategory, setMenu } from "../slices/menuSlice";

export const getMenu = (menu) => async (dispatch) => {
  try {
    // const categories = [...new Set(items.map(item => item.category))];
    // console.log( 'menu',  menu);
    const { data } = await menuAPI.get("/");
    {
      // console.log(data.data.menus);
      const categories = [
        ...new Set(data.data.menus.map((item) => item.category)),
      ];
      dispatch(setCategory(categories));
    }

    if (menu === "all") {
      // console.log("kasdjklajdadajlkd");
      const { data } = await menuAPI.get("/", {
        params: {
          limit: 10,
          skip: 0,
        },
      });
      // console.log(data.data.menus);
      dispatch(setMenu(data.data.menus));
    } else {
      const { data } = await menuAPI.get("/", {
        params: {
          limit: 10,
          skip: 0,
          filter: {
            category: menu,
            isVeg: true,
            isSpecial: false,
            isAvailable: true,
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
  } catch (error) {
    console.error("Error fetching menu by id:", error);
  }
};

export const getDeleteMenuById = (id, category) => async (dispatch) => {
  try {
    if (id) {
      await menuAPI.delete(`/${id}`);
      dispatch(getMenu(category));
      // dispatch(setMenu(category));
      // dispatch(setCategory(category));
    }
    //  // console.log(data);
  } catch (error) {
    console.error("Error fetching menu by id:", error);
  }
};

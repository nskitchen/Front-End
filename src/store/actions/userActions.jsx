import { setLoginError, setUser } from "../slices/userSlice";
import { userAPI } from "../../utils/Axios";

// export const refreshToken = () => async (dispatch) => {
//   try {
//     const response = await userAPI.put("/tokens/refresh");
//     // console.log(response);
//     // dispatch(getCurrentUser(true));
//   } catch (error) {
//     console.error("Error refreshing token:", error);
//   }
// };

export const loginUser = (email, password) => async (dispatch) => {
  try {
    await userAPI.post("/login", { email, password });
    // console.log(data.data.user);
    dispatch(getCurrentUser());
  } catch (error) {
    dispatch(setLoginError(error.response.data.message));
    console.error("Error refreshing token:", error);
  }
};

export const logoutUser = () => async (dispatch) => {
  try {
    await userAPI.post("/logout");
    // console.log(response);
    dispatch(setIsAuthenticated(false));
  } catch (error) {
    console.error("Error refreshing token:", error);
  }
};

export const registerUser = (data) => async (dispatch) => {
  try {
    const response = await userAPI.post("/registration", data);
    // console.log(response);
    dispatch(setIsAuthenticated(true));
    dispatch(setCurrentuser(response.data.user));
  } catch (error) {
    dispatch(setLoginError(error.response.data.message));
    console.error("Error refreshing token:", error);
  }
};

export const getCurrentUser = () => async (dispatch) => {
  try {
    const { data } = await userAPI.get("/info");
    console.log(data)
    dispatch(setUser(data.data.user));
  } catch (error) {
    console.error("Error fetching user info:", error);
    dispatch(setLoginError("Failed to fetch user information"));
  }
};

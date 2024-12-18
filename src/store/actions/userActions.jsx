import { setLoginError, setUser, removeUser } from "../slices/userSlice";
import { userAPI } from "../../utils/Axios";
import { useNavigate } from "react-router-dom";
// export const refreshToken = () => async (dispatch) => {
//   try {
//     const response = await userAPI.put("/tokens/refresh");
//     // dispatch(getCurrentUser(true));
//   } catch (error) {
//     console.error("Error refreshing token:", error);
//   }
// };

export const loginUser = (email, password) => async (dispatch) => {
  try {
    await userAPI.post("/login", { email, password });
    dispatch(getCurrentUser());
  } catch (error) {
    console.log(error)
    dispatch(setLoginError(error.response.data.message));
    console.error("Error refreshing token:", error);
    return false
  }
};

export const deleteUser = (userId) => async () => {
  try {
    await userAPI.delete(`/delete/${userId}`);
    return true
  } catch (error) {
    console.error("Error deleting user:", error);
    return false
  }
};

export const logoutUser = () => async (dispatch) => {
  try {
    await userAPI.delete("/logout");
    dispatch(removeUser());
    return true
  } catch (error) {
    console.error("Error refreshing token:", error);
    return false
  }
};

export const registerUser = (data) => async (dispatch) => {
  try {
    const response = await userAPI.post("/registration", data);
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
    dispatch(setUser(data.data.user));
  } catch (error) {
    console.error("Error fetching user info:", error);
    // dispatch(setLoginError("Failed to fetch user information"));
  }
};

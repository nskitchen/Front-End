import { setIsAuthenticated, setLoginError } from "../slices/loginSlice";
import {userAPI} from "../../utils/Axios";

export const refreshToken = () => async (dispatch) => {
    try {
        const response = await userAPI.put('/tokens/refresh');   
        console.log(response)     
        dispatch(setIsAuthenticated(true));

    } catch (error) {
        console.error("Error refreshing token:", error);
        dispatch(setIsAuthenticated(false));
    }
};

export const loginUser = (email,password) => async (dispatch) => {
    try {
        const response = await userAPI.post('/login',{email,password});   
        console.log(response)     
        dispatch(setIsAuthenticated(true));
    } catch (error) {
        dispatch(setLoginError(error.response.data.message))
        console.error("Error refreshing token:", error);
        dispatch(setIsAuthenticated(false));
    }
};

export const logoutUser = () => async (dispatch) => {
    try {
        const response = await userAPI.post('/logout');   
        console.log(response)     
        dispatch(setIsAuthenticated(false));

    } catch (error) {
        console.error("Error refreshing token:", error);
        dispatch(setIsAuthenticated(true));
    }
};
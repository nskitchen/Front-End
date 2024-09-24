import { useSelector } from "react-redux";
import { orderAPI } from "../../utils/Axios";
import { setAllOrders, setOrderID } from "../slices/orderSlice";
import { useNavigate } from "react-router-dom";

export const CreateNewOrders = ( data2) => async (dispatch,getValue) => {
    try {
        const cart = getValue().orders.cart
        const table = getValue().tables.tableNumber
        const userId = getValue().auth.user._id

        if(!cart || !table || !userId) return 
        const {data} = await orderAPI.post("/", {table: table, items:cart, user:userId});
        
        return true
    } catch (error) {
        console.log(error);
        return false
    }
};

export const getAllOrdersss = () => async (dispatch) => {
    try {
        const {data} = await orderAPI.get("/allorder");
        dispatch(setAllOrders(data.data.orders));
    } catch (error) {

        console.log(error);
    }

}

export const addToCart = (orderId) => async (dispatch) => {
    try {
        console.log(orderId.setOrderID);
        const {data} = await orderAPI.put(`/${orderId.setOrderID}`,{menuItem: orderId.itemId, quantity: orderId.quantity });
        console.log(data);
    } catch (error) {
        console.log(error);
    }
}
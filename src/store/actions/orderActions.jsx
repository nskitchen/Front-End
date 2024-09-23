import { orderAPI } from "../../utils/Axios";
import { setAllOrders, setOrderID } from "../slices/orderSlice";

export const CreateNewOrders = ( data2) => async (dispatch) => {
    try {
        // console.log(data.table);
        const {data} = await orderAPI.post("/", {table: data2.table, user: data2.user, status: "pending"});
        console.log(data.data.order._id);
        dispatch(setOrderID(data.data.order._id));
    } catch (error) {
        console.log(error);
    }
};

export const getAllOrdersss = () => async (dispatch) => {
    try {
        const {data} = await orderAPI.get("/allorder");
        console.log(data.data.orders);
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
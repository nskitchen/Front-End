import { billingAPI, orderAPI } from "../../utils/Axios";
import { setAllOrders } from "../slices/orderSlice";

export const CreateNewOrders = () => async (dispatch,getValue) => {
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

export const getAllOrdersss = (type) => async (dispatch) => {
    try {
        const params = {type: type}
        const {data} = await orderAPI.get("/allorder",{params});
        dispatch(setAllOrders(data.data.orders));
    } catch (error) {
        console.log(error);
    }
}

export const getUserOrders = (type) => async (dispatch) => {
    try {
        const params = {type: type}
        const {data} = await orderAPI.get("/userorder",{params});
        dispatch(setAllOrders(data.data.orders));
    } catch (error) {
        console.log(error);
    }
}

export const checkoutOrder = (orderId) => async (dispatch) => {
    try {
        const {data} = await orderAPI.post(`/checkout`,{id:orderId});
        console.log(data);
    } catch (error) {
        console.log(error);
    }
}

export const completeOrder = (orderId,itemId,id) => async (dispatch) => {
    try {
        const {data} = await orderAPI.put(`/completed-order/${id}`,{orderId,itemId});
        dispatch(getAllOrdersss());

    } catch (error) {
        console.log(error);
    }
}

export const serveOrder = (orderId,itemId,id) => async (dispatch) => {
    try {
        const {data} = await orderAPI.put(`/served-order/${id}`,{orderId,itemId});
        dispatch(getAllOrdersss());
        
    } catch (error) {
        console.log(error);
    }
}

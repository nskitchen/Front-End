import { billingAPI, orderAPI } from "../../utils/Axios";
import { setAllBills, setAllOrders } from "../slices/orderSlice";

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

export const deleteItems = (orderId,id) => async (dispatch) => {
    try {
        const {data} = await orderAPI.delete(`/items/${orderId}/${id}`);
        dispatch(getAllOrdersss(data.data.orders));
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
        // dispatch(getAllOrdersss());
        dispatch(getUserOrders())

        
    } catch (error) {
        console.log(error);
    }
}

export const getAllBills = (status,search,startDate,endDate) => async (dispatch) => {
    try {
        const params = {filter: {
            ...(status && {paymentStatus: status}),
            ...(search && {search: search}),
            ...(startDate && {startDate: startDate}),
            ...(endDate && {endDate: endDate}),
        }}
        const {data} = await billingAPI.get(`/`,{params});
        dispatch(setAllBills(data.data.billings));
        dispatch(getAllOrdersss())
        
    } catch (error) {
        console.log(error);
    }
}

export const getFilterExcel = (startDate,endDate) => async (dispatch) => {
    try {
        const params = {filter: {
            ...(startDate && {startDate: startDate}),
            ...(endDate && {endDate: endDate}),
        }}
        const response = await billingAPI.get(`/csv`,{params,responseType: 'blob' });
        const blob = new Blob([response.data], { type: 'text/csv' });
        
        // Create a link element
        const link = document.createElement('a');
        const url = URL.createObjectURL(blob);
        
        // Set the link attributes
        link.href = url;
        link.setAttribute('download', 'bills_data.csv'); // Set the file name
        
        // Append to the document
        document.body.appendChild(link);
        
        // Programmatically click the link to trigger the download
        link.click();
        
        // Cleanup: remove the link after downloading
        document.body.removeChild(link);
        URL.revokeObjectURL(url); // Free up memory
        return true        
    } catch (error) {
        console.log(error);
    }
}

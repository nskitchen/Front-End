import { billingAPI } from "../../utils/Axios";
import { getAllOrdersss } from "./orderActions";

export const generateBill = (total,scst,cgst,serviceCharge,paymentMode,order) => async (dispatch) => {
    try {
        const {data} = await billingAPI.post(`/`,{
            order:order._id,
            table:order.table,
            total:total,
            cgst:cgst,
            sgst:scst,
            serviceCharge:serviceCharge,
            paymentMode:paymentMode,
        });
        dispatch(getAllOrdersss())
    } catch (error) {
        console.log(error);
    }
}
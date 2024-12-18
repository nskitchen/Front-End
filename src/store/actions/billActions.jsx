import { billingAPI } from "../../utils/Axios";
import { getAllOrdersss } from "./orderActions";

export const generateBill = ({total,sgst,cgst,serviceCharge,paymentMethod,order}) => async (dispatch) => {
    try {
        const {data} = await billingAPI.post(`/`,{
            order:order._id,
            table:order.table,
            total:total,
            cgst:cgst,
            sgst:sgst,
            serviceCharge:serviceCharge,
            paymentMode:paymentMethod,
        });
        dispatch(getAllOrdersss())
    } catch (error) {
        console.log(error);
    }
}
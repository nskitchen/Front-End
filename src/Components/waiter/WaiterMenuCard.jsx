import React, { useEffect, useState } from "react";
import QuantityButton from "./QuantityButton";
import { useDispatch, useSelector } from "react-redux";
import PropTypes from "prop-types";
import { setCartItems } from "../../store/slices/orderSlice";

export function IconParkOutlineMallBag(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 48 48"
      {...props}
    >
      <g fill="none" stroke="black" strokeLinejoin="round" strokeWidth={4}>
        <path d="M6 12.6V41a2 2 0 0 0 2 2h32a2 2 0 0 0 2-2V12.6z"></path>
        <path
          strokeLinecap="round"
          d="M42 12.6L36.333 5H11.667L6 12.6v0m25.555 6.6c0 4.198-3.382 7.6-7.555 7.6s-7.556-3.402-7.556-7.6"
        ></path>
      </g>
    </svg>
  );
}
export function HugeiconsCommentAdd01(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1.5rem"
      height="1.5rem"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="none"
        stroke="black"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M14 6h8m-4-4v8M6.099 19.5q-1.949-.192-2.927-1.172C2 17.157 2 15.271 2 11.5V11c0-3.771 0-5.657 1.172-6.828S6.229 3 10 3h1.5m-5 15c-.205 1.002-1.122 3.166-.184 3.865c.49.357 1.271-.024 2.834-.786c1.096-.535 2.206-1.148 3.405-1.424c.438-.1.885-.143 1.445-.155c3.771 0 5.657 0 6.828-1.172C21.947 17.21 21.998 15.44 22 12M8 14h6M8 9h3"
        color="black"
      ></path>
    </svg>
  );
}


const WaiterMenuCard = ({handleRemark,item}) => {
  const { cart } = useSelector((state) => state.orders);
  const dispatch = useDispatch()
  const [parcel, setParcel] = useState(false)
  const [half, setHalf] = useState(false)

  useEffect(() => {
    if(item){
      const parcel = cart.find((foundItem) => foundItem.id === item._id)?.parcel || '';
      setParcel(parcel); // Set remark to the found remark or empty if not found
    }
    if(item.halfPrice){
      const half = cart.find((foundItem) => foundItem.id === item._id) || '';
      if(half.half){
        setHalf(true)
      }
    }
  }, [item,cart]);

  const parcelToggle = ()=>{
    const existingItem = cart.find((foundItem) => foundItem.id === item._id);

    if (existingItem) {
      const updatedCart = cart.map((foundItem) =>
        foundItem.id === item._id ? { ...foundItem, parcel: !foundItem.parcel} : foundItem
      );
      setParcel(!existingItem.parcel)
      dispatch(setCartItems(updatedCart));
    } else {
      const newItem = { id: item._id, count: 1,price:item.price,parcel:true,name:item.name };
      dispatch(setCartItems([...cart, newItem]));
      setParcel(true)
    }
  }

  console.log(cart)
  const halfToggle = ()=>{
    const existingItem = cart.find((foundItem) => foundItem.id === item._id);
    if (existingItem) {
      if(half){
        const updatedCart = cart.map((foundItem) =>
          foundItem.id === item._id ? { ...foundItem,half:false, price: item.price } : foundItem
        );
        setHalf(false)
        dispatch(setCartItems(updatedCart));
      }else{
        const updatedCart = cart.map((foundItem) =>
          foundItem.id === item._id ? { ...foundItem,half:true, price: item.halfPrice} : foundItem
        );
        setHalf(true)
        dispatch(setCartItems(updatedCart));
      }
    } else {
      const newItem = { id: item._id, count: 1,price:item.halfPrice, half:true,name:item.name };
      dispatch(setCartItems([...cart, newItem]));
      setHalf(true)
    }
  }

  return (
    <div className="w-full border-2 p-4 rounded-xl flex flex-col gap-3">
        <h1 className="text-lg boldf">{item.name}</h1>
      <p className="text-base">
        {item.description}
      </p>
      <h1 className="bold text-lg">{item.halfPrice && `₹${item.halfPrice} / `}₹{item.price} </h1>
      <div className="flex">
        {item.halfPrice && 
          <button className={`${half ? "bg-[#9747FF] text-white" : ""} flex border-2 items-center justify-center mr-3 p-2 px-4 rounded-lg`} onClick={()=>halfToggle()}> 
            Half
          </button>
        }
        <button className={`${parcel ? "bg-[#9747FF] text-white" : ""} mr-3 flex border-2 items-center justify-center p-2 px-4 rounded-lg`} onClick={()=>parcelToggle()}>
          Parcel <IconParkOutlineMallBag />
        </button>
        <button onClick={()=>handleRemark(item)} className="flex border-2  items-center justify-center p-3 rounded-lg">
          <HugeiconsCommentAdd01  />
        </button>
        <>{item.quantity}</>
        <div className="ml-auto">
          <QuantityButton menuItem={item} />
          {/* <QuantityButton orderId={currentOrder._id} itemId={item._id} /> */}
        </div>
      </div>
    </div>
  );
};

WaiterMenuCard.propsTypes = {
  item:PropTypes.object.isRequired
}

export default WaiterMenuCard;

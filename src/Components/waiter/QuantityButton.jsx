import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCartItems } from "../../store/slices/orderSlice";

const QuantityButton = ({ menuItem }) => {
  const [count, setCount] = useState(0);
  const dispatch = useDispatch();

  const { cart } = useSelector((state) => state.orders);

  useEffect(() => {
    if(menuItem){
      const count = cart.find((foundItem) => foundItem.id === menuItem._id)?.count || 0;
      setCount(count); // Set remark to the found remark or empty if not found
    }
  }, [menuItem,cart]);

  const handleIncrement = () => {
    const existingItem = cart.find((item) => item.id === menuItem._id);

    if (existingItem) {
      const updatedCart = cart.map((item) =>
        item.id === menuItem._id ? { ...item, count: count + 1 } : item
      );
      dispatch(setCartItems(updatedCart));
    } else {
      const newItem = { id: menuItem._id, count: 1,price:menuItem.price,name:menuItem.name  };
      dispatch(setCartItems([...cart, newItem]));
    }
    setCount(count+1)
  };

  const handleDecrement = () => {
    // Find if the item already exists in the cart
    const existingItem = cart.find((item) => item.id === menuItem._id);
    
    if (existingItem && existingItem.count > 1) {
      // If item exists and count is more than 1, decrement its count
      const updatedCart = cart.map((item) =>
        item.id === menuItem._id ? { ...item, count: count - 1 } : item
      );
      dispatch(setCartItems(updatedCart));
      
    } else if (existingItem && existingItem.count === 1) {
      const updatedCart = cart.filter((item) => item.id !== menuItem._id);
      dispatch(setCartItems(updatedCart));
    }
    setCount(count-1)

  };
  return (
    <button className="flex border-2 items-center justify-center gap-2 p-3 rounded-lg">
      <div
        className="h-5 w-5 bg-black rounded-full text-center text-white flex items-center justify-center cursor-pointer"
        onClick={() => handleDecrement()}
      >
        <i className="ri-subtract-line"></i>
      </div>
      <h1>{count < 10 ? `${count}` : count}</h1>
      <div
        className="h-5 w-5 bg-black rounded-full text-center text-white flex items-center justify-center cursor-pointer"
        onClick={() => handleIncrement()}
      >
        <i className="ri-add-fill"></i>
      </div>
    </button>
  );
};

export default QuantityButton;

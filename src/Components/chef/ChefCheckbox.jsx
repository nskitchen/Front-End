import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { completeOrder } from "../../store/actions/orderActions";

const ChefCheckbox = ({ id, orderId, itemId }) => {

  const [check, setcheck] = useState(false);
  const [timer, setTimer] = useState(null);
  const dispatch = useDispatch();

  const handleCheck = () => {
    setcheck(!check);
    if (!check) {
      console.log("Timer started");
      const newTimer = setTimeout(() => {
        dispatch(completeOrder(orderId, itemId, id))
      }, 10000);
      setTimer(newTimer);
    } else {
      console.log("Timer cancelled");
      if (timer) {
        clearTimeout(timer);
        setTimer(null);
      }
    }
    setcheck(!check);
  };

  useEffect(() => {
    return () => {
      if (timer) {
        clearTimeout(timer);
      }
    };
  }, [timer]);
  return (
    <div onClick={handleCheck} className="checkbox flex items-center justify-center cursor-pointer max-md:h-[6vw] max-md:w-[6vw] max-md:text-lg">
      <i className={`ri-check-double-line text-center flex items-center justify-center bg-black h-full w-full text-white transition-all ease-in-out duration-400 ${check ? "opacity-100" : "opacity-0"}`}></i>
    </div>
  );
};

export default ChefCheckbox;

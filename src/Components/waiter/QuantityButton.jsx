import React, { useState } from 'react';

const QuantityButton = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(prevCount => prevCount + 1);
  };

  const handleDecrement = () => {
    if (count > 0) {
      setCount(prevCount => prevCount - 1);
    }
  };

  return (
    <button className="flex border-2 items-center justify-center gap-2 p-3 rounded-lg">
      <div
        className="h-5 w-5 bg-black rounded-full text-center text-white flex items-center justify-center cursor-pointer"
        onClick={handleDecrement}
      >
        <i className="ri-subtract-line"></i>
      </div>
      <h1>{count < 10 ? `0${count}` : count}</h1>
      <div
        className="h-5 w-5 bg-black rounded-full text-center text-white flex items-center justify-center cursor-pointer"
        onClick={handleIncrement}
      >
        <i className="ri-add-fill"></i>
      </div>
    </button>
  );
};

export default QuantityButton;

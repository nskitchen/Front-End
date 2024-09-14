import React from "react";
import QrCard from "./QrCard";

const MenuDetailQr = () => {
  return (
    <div className="w-full mont">
      <div className="flex items-center justify-between font-semibold text-lg">
        <h1>Burger</h1>
        <div className="flex items-center gap-4">
          <h3>07</h3>
          <i className="ri-arrow-down-s-fill rotate-180"></i>
        </div>
      </div>
      <div className="flex flex-col gap-2 mt-2">
        <QrCard />
        <QrCard />
        <QrCard />
        <QrCard />
        <QrCard />
        <QrCard />
        <QrCard />
      </div>
    </div>
  );
};

export default MenuDetailQr;

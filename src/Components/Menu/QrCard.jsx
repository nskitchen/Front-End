import React from "react";

const QrCard = () => {
  return (
    <div className="w-full border-2 flex items-center justify-between p-4 rounded-xl">
      <div className="flex gap-1 w-[80%] flex-col">
        <h1 className="text-base font-semibold">Red Sauce Pasta (Concase Sauce)</h1>
        <p className="text-sm">Penne pasta, sweet corn, heavy. cream, red pepper, red onion</p>
      </div>
      <div className="img h-26 w-[35%] relative ">
        <img src="/foodAdminDemo.png" className="h-full w-full object-cover rounded-xl " alt="" />
        <div className="price absolute px-4 font-semibold -bottom-[10%] right-[5%] py-1 rounded-full bg-black text-white">
            <h1>
            ₹119
            </h1>
        </div>
      </div>
    </div>
  );
};

export default QrCard;

import React, { useState } from "react";
import SummaryCard from "./SummaryCard";
import AddRemark from "./AddRemark";

const SummaryWaiter = () => {
  const [openRemark, setopenRemark] = useState(false);
  const handleRemark = () => {
    setopenRemark(true);
  };
  return (
    <div className="w-full mont">
      <div className="w-full flex items-center justify-between">
        <h1 className="text-2xl boldf">Table 1</h1>
        <h3>08:28 PM</h3>
      </div>
      <div className="w-full text-lg flex items-center justify-between">
        <h3>Serve 01</h3>
        <h3>Order no. #315</h3>
      </div>
      <div className="flex flex-col gap-3 mt-4">
        <SummaryCard handleRemark={handleRemark} />
        <SummaryCard handleRemark={handleRemark} />
        <AddRemark isModalOpen={openRemark} setIsModalOpen={setopenRemark} />
      </div>
    </div>
  );
};

export default SummaryWaiter;

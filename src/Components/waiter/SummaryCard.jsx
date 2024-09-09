import React from "react";
import QuantityButton from "./QuantityButton";
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
const SummaryCard = ({handleRemark}) => {
  return (
    <div className="w-full h-fit border-2 p-2 rounded-xl flex flex-col gap-3">
      <div className="flex items-start justify-between">
        <h1 className="text-lg w-[80%] font-semibold">
          White Sauce Pasta (Alfraedo sauce)
        </h1>
        <i class="ri-close-large-line"></i>
      </div>
      <h4 className="text-base font-medium">No salt, no mushroom</h4>
      <div className="flex w-full items-center justify-between">
        <div className="flex items-center justify-between">
          <QuantityButton />
          <button className="flex border-2 items-center justify-center gap-2 p-3 rounded-lg ml-4">
            <HugeiconsCommentAdd01 onClick={handleRemark} />
          </button>
        </div>
        <div className="flex items-center text-lg justify-between gap-2">
          <h1 className="boldf">₹120</h1>
          <span className="w-[1px] h-3 bg-black"></span>
          <h1 className="text-[#9747FF] boldf">Parcel</h1>
        </div>
      </div>
    </div>
  );
};

export default SummaryCard;

import React from "react";

const Pagenation = ({ number, counter, setcounter, pages }) => {
  console.log(pages, 45);
  return (
    <div className="flex items-center gap-2 mont text-base absolute bottom-3 right-3 font-semibold">
      {pages?.map((page, index) => (
        <h3
          key={page.id}
          onClick={() => setcounter(index + 1)}
          className={`cursor-pointer ${
            index + 1 === number ? "text-black" : "text-gray-500"
          }`}
        >
          {index + 1}
        </h3>
      ))}
    </div>
  );
};

export default Pagenation;

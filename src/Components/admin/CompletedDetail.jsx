import { Divider } from "antd";
import React from "react";

export function SolarBagBold(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1vw"
      height="1vw"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="black"
        fillRule="evenodd"
        d="M8.25 6.015V5a3.75 3.75 0 0 1 7.5 0v1.015c1.287.039 2.075.177 2.676.676c.833.692 1.053 1.862 1.492 4.203l.75 4c.617 3.292.925 4.938.026 6.022C19.794 22 18.119 22 14.77 22H9.23c-3.35 0-5.024 0-5.924-1.084s-.59-2.73.026-6.022l.75-4c.44-2.34.659-3.511 1.492-4.203c.601-.499 1.389-.637 2.676-.676M9.75 5a2.25 2.25 0 1 1 4.5 0v1h-4.5z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
}
export function SimpleIconsJusteat(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1vw"
      height="1vw"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="black"
        d="M11.196.232a1.38 1.38 0 0 1 1.528 0a33 33 0 0 1 3.384 2.438s.293.203.301-.14a5.4 5.4 0 0 1 .079-1.329a.61.61 0 0 1 .562-.39s1.329.066 2.173.179c.377.05.671.352.711.73c0 0 .543 3.62.665 4.925c0 0 .105.664 1.067 1.79c0 0 1.953 2.735 2.18 3.259c0 0 .454.946-.523 1.074c0 0-1.783.18-1.955.22a.446.446 0 0 0-.39.484s-.094 6.296-.555 9.32c0 0-.121 1.2-.782 1.173c0 0-1.833-.059-2.259-.047c0 0-.183 0-.156-.246c0 0 .934-9.817.301-14.78c0 0-.028-.64-.516-.782c0 0-.445-.18-.871.391a15.57 15.57 0 0 0-2.9 8.86s-.05 1.563.188 1.953c0 0 .148.274.907.336l.96.13s.176 0 .16.233c0 0-.218 2.88-.28 3.393a1 1 0 0 1-.071.34s-.035.098-.336.086c0 0-4.236-.03-4.713 0c0 0-.2 0-.242-.105c-.043-.106-.294-3.717-.286-4.229a.255.255 0 0 1 .149-.25a2.55 2.55 0 0 0 1.172-1.871q.078-.823.024-1.646s.156-5.522.195-6.41c0 0 .031-.3-.36-.355a.364.364 0 0 0-.437.27v.03c0 .032-.274 3.643-.223 5.081c0 0 .094.942-.558.961c0 0-.634.095-.665-.69c0 0 .047-3.542.203-5.292a.39.39 0 0 0-.348-.391a.39.39 0 0 0-.437.316a.1.1 0 0 0 0 .031s-.274 3.39-.223 5.179c0 0 .078.868-.614.836c0 0-.578.066-.61-.704c0 0 .157-4.85.2-5.224A.39.39 0 0 0 6.647 9h-.039a.39.39 0 0 0-.418.325v.035s-.258 5.8-.223 7.503c0 0-.023 1.751 1.27 2.462c0 0 .192.11.196.277c0 0 .145 3.076.277 4.069c0 0 .047.238-.164.238L4.291 24a.67.67 0 0 1-.665-.633a73 73 0 0 1-.601-9.829a.5.5 0 0 0-.391-.535S.969 12.85.566 12.749a.692.692 0 0 1-.422-1.02A33.5 33.5 0 0 1 11.197.232Z"
      ></path>
    </svg>
  );
}
const CompletedDetail = () => {
  return (
    <div className="w-full text-xs">
      <div className="flex items-center  gap-2 pb-2">
        <h3 className="boldf">Order#351</h3>
        <span className="h-3 w-[1px] bg-black"></span>
        <h3>01 Serve</h3>
      </div>
      <div className="flex w-full items-start justify-between">
        <h1 className="w-[40%] text-sm">White Sauce Pasta (Alfraedo sauce)</h1>
        <div className="flex w-[30%] px-1 items-center justify-between gap-3 ">
          <h3>01</h3>
          <h3>
            <SolarBagBold />
          </h3>
          <h3>₹ 149</h3>
        </div>
      </div>
      <div className="flex w-full items-start justify-between">
        <h1 className="w-[40%] text-sm">White Sauce Pasta (Alfraedo sauce)</h1>
        <div className="flex w-[30%] px-1 items-center justify-between gap-3 ">
          <h3>01</h3>
          <h3>
            <SimpleIconsJusteat />
          </h3>
          <h3>₹ 149</h3>
        </div>
      </div>
      <span className="inline-block w-full h-[1px] bg-gray-200"></span>
    </div>
  );
};

export default CompletedDetail;

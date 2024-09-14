import React from "react";
export function EmojioneV1ForkAndKnife(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 64 64"
      {...props}
    >
      <path
        fill="white"
        d="M32.359 38.28S36.648 1.99 41.773 0a3.14 3.14 0 0 1 3.138 3.137v57.626a3.14 3.14 0 0 1-3.138 3.137a3.134 3.134 0 0 1-3.135-3.137V41.191c-2.722-.336-6.07-1.136-6.279-2.914"
      ></path>
      <path
        fill="white"
        d="M34.46 37.32s3.571-33.09 7.838-34.901c1.443 0 2.612 1.283 2.612 2.86v52.539c0 1.578-1.169 2.859-2.612 2.859c-1.442 0-2.612-1.281-2.612-2.859V39.975c-2.266-.307-5.05-1.036-5.226-2.655"
      ></path>
      <path
        fill="white"
        d="M30.22.039c-1.179 0-2.132 1.936-2.132 2.702v7.211c-.077 0-.154-.043-.23-.043h-1.131V2.74c0-.766-.957-2.702-2.138-2.702c-1.183 0-2.14 1.936-2.14 2.702v7.168h-.95c-.078 0-.149.033-.226.041V2.74c0-.766-.957-2.702-2.136-2.702c-1.185 0-2.136 1.937-2.136 2.702v15.54c0 4.379 2.785 5.448 4.498 5.448h.452v36.844c0 1.82 1.224 3.289 2.73 3.289c1.504 0 2.722-1.469 2.722-3.289V23.729h.456c1.712 0 4.501 0 4.501-5.448V2.74c0-.765-.957-2.701-2.14-2.701"
      ></path>
      <path
        fill="white"
        d="M23.847 22.09c-2.817-2.506-6.246-.808-5.104-21.98C17.747.468 17 2.058 17 2.736v15.54c0 4.379 2.785 5.448 4.498 5.448h.452v36.844c0 1.462.8 2.658 1.897 3.089z"
      ></path>
    </svg>
  );
}
export function MaterialSymbolsLightClose(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1.5rem"
      height="1.5rem"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="white"
        d="m6.4 18.308l-.708-.708l5.6-5.6l-5.6-5.6l.708-.708l5.6 5.6l5.6-5.6l.708.708l-5.6 5.6l5.6 5.6l-.708.708l-5.6-5.6z"
      ></path>
    </svg>
  );
}
const MenuFooter = ({ showModal, isModalOpen }) => {
  return (
    <div className="w-full h-20 bg-white fixed bottom-0 left-0 p-5 flex items-center justify-between z-[9999999999]">
      <div className="w-fit flex border-[1px] rounded-lg border-black p-2 gap-2">
        <i className="ri-search-line text-[#FF8144]"></i>
        <input
          type="text"
          className="w-44 outline-none border-none"
          placeholder="Search item"
        />
      </div>
      <button
        className="bg-black flex items-center justify-center p-3 text-white rounded-md relative z-[9999999999]"
        onClick={showModal}
      >
        {!isModalOpen ? (
          <>
            <EmojioneV1ForkAndKnife />
            Menu
          </>
        ) : (
          <>
            <MaterialSymbolsLightClose />
            Close
          </>
        )}
      </button>
    </div>
  );
};

export default MenuFooter;

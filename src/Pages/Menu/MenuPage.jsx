import React, { useState } from "react";
import MenuFooter from "../../Components/Menu/MenuFooter";
import MenuDetailQr from "../../Components/Menu/MenuDetailQr";
import { Divider, Modal } from "antd";

const MenuPage = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(!isModalOpen);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <div className="w-full h-screen flex flex-col items-center justify-start py-4 mont px-6 relative">
      <h1 className="alex text-2xl">Welcome to</h1>
      <h1 className="abril text-3xl">North-South Kitchen</h1>
      <div className="flex w-full items-center justify-between relative mont mt-4">
        <h1 className="mont boldf text-xl">Explore Menu</h1>
        <button className="bg-black border-[1px] border-orange-400 text-white flex items-center justify-center gap-2 px-6 py-2 rounded-lg uppercase font-bold">
          <img src="/fire.png" alt="" />
          Offers
          <div className="h-3 w-3 rounded-full absolute -top-1 right-2"></div>
        </button>
      </div>
      <div className="w-full h-fit py-2 relative overflow-y-auto pb-20">
        <MenuDetailQr  />
      </div>
      <Modal
        centered
        open={isModalOpen}
        footer={""}
        header={""}
        closable={false}
      >
        <div>
          <div className="flex mont text-lg text-black boldf items-center justify-between w-full">
            <h1>Burger</h1>
            <h1>07</h1>
          </div>
          <Divider className="my-2 bg-gray-300" />
        </div>
        <div>
          <div className="flex mont text-lg text-black boldf items-center justify-between w-full">
            <h1>ClubSandwich/Wraps</h1>
            <h1>10</h1>
          </div>
          <Divider className="my-2 bg-gray-300" />
        </div>
        <div>
          <div className="flex mont text-lg text-black boldf items-center justify-between w-full">
            <h1>Pasta</h1>
            <h1>08</h1>
          </div>
          <Divider className="my-2 bg-gray-300" />
        </div>
        <div>
          <div className="flex mont text-lg text-black boldf items-center justify-between w-full">
            <h1>Pizza</h1>
            <h1>06</h1>
          </div>
          <Divider className="my-2 bg-gray-300" />
        </div>
        <h1 className="text-gray-400 font-medium mont text-xl">Snacks</h1>
        <div>
          <div className="flex mont text-lg text-black boldf items-center justify-between w-full">
            <h1>Indo- Chinese</h1>
            <h1>07</h1>
          </div>
          <Divider className="my-2 bg-gray-300" />
        </div>
        <div>
          <div className="flex mont text-lg text-black boldf items-center justify-between w-full">
            <h1>Fried Rice And Noodles</h1>
            <h1>07</h1>
          </div>
          <Divider className="my-2 bg-gray-300" />
        </div>
        <div>
          <div className="flex mont text-lg text-black boldf items-center justify-between w-full">
            <h1>Biryani & Rice</h1>
            <h1>07</h1>
          </div>
          <Divider className="my-2 bg-gray-300" />
        </div>
        <div>
          <div className="flex mont text-lg text-black boldf items-center justify-between w-full">
            <h1>Rice Bowls</h1>
            <h1>07</h1>
          </div>
          <Divider className="my-2 bg-gray-300" />
        </div>
        <div>
          <div className="flex mont text-lg text-black boldf items-center justify-between w-full">
            <h1>Sizzlers</h1>
            <h1>07</h1>
          </div>
          <Divider className="my-2 bg-gray-300" />
        </div>
      </Modal>
      <MenuFooter showModal={showModal} isModalOpen={isModalOpen}  />
    </div>
  );
};

export default MenuPage;

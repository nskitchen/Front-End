import React, { useEffect, useState } from "react";
import WaiterHeader from "../../Components/waiter/WaiterHeader";
import WaiterFooter from "../../Components/waiter/WaiterFooter";
import WaiterMenu from "../../Components/waiter/WaiterMenu";
import WaiterMenuCard from "../../Components/waiter/WaiterMenuCard";
import { Modal, Button, Divider } from "antd";
import AddRemark from "../../Components/waiter/AddRemark";
import { useDispatch, useSelector } from "react-redux";
import { getAllOrdersss } from "../../store/actions/orderActions";
import { getMenu } from "../../store/actions/menuActions";
import { useNavigate } from "react-router-dom";

const WaiterMenuPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [openRemark, setopenRemark] = useState(false);
  const {tableNumber} = useSelector((state) => state.tables);
  const { menu, food, category } = useSelector((state) => state.menu);
  const { cart } = useSelector((state) => state.orders);
  const [selectedItem, setSelectedItem] = useState(null); // State to track the current item
  const navigate = useNavigate()

  const dispatch = useDispatch();
  const showModal = () => {
    setIsModalOpen(!isModalOpen);
  };
  const handleRemark = (item) => {
    setSelectedItem(item)
    setopenRemark(true);
  };

  const handleCategoryClick = (category) => {
    dispatch(getMenu(category));
  }

  useEffect(() => {
    dispatch(getMenu());
  }, [food]);

  return (
    <div className="h-screen w-full m-auto max-w-[600px] px-4 relative overflow-y-auto mont pb-40">
      <WaiterHeader data={"Menu"} />
      <WaiterMenu showModal={showModal} isModalOpen={isModalOpen} />
      <div className="flex  flex-col gap-2  items-start w-full">
        {menu?.map((item,idx) => {
        if(item.isAvailable){
          return(
            <WaiterMenuCard key={idx} handleRemark={handleRemark} item={item}/>
          )
        }
        })}
        <div className="h-16 m-auto max-w-[600px] w-screen bottom-20 left-1/2 -translate-x-1/2 bg-black flex items-center justify-between fixed text-white px-8 py-4">
          <h3>Total</h3>
          <span className="h-full w-[1px] inline-block bg-white"></span>
          <h3>{cart.reduce((acc,red)=>(acc+red.count),0)} Item</h3>
          <span className="h-full w-[1px] inline-block bg-white"></span>
          <h3>₹{cart.reduce((acc,red)=>(acc+(red.price * red.count)),0)}</h3>
        </div>
      </div>
      <AddRemark item={selectedItem} isModalOpen={openRemark} setIsModalOpen={setopenRemark} />
      <Modal
        centered
        open={isModalOpen}
        footer={""}
        header={""}
        closable={false}
        className="h-[60vh] overflow-auto"
      >
        {category && category?.map((item,idx) => (
          <div key={idx} >
            <div onClick={() => handleCategoryClick(item)} className="flex mont text-lg text-black boldf items-center justify-between w-full">
              <h1>{item}</h1>
            </div>
            <Divider className="my-2 bg-gray-300" />
          </div>
        ))}

        {/* <div>
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
        </div> */}
      </Modal>
      <WaiterFooter page={"menu"} />
    </div>
  );
};

export default WaiterMenuPage;

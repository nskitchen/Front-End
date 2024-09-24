import { Modal, Button } from 'antd';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setCartItems } from '../../store/slices/orderSlice';

const AddRemark = ({item, isModalOpen, setIsModalOpen }) => {

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  }

  const { cart } = useSelector((state) => state.orders);
  const dispatch = useDispatch()
  const [remark, setRemark] = useState('');

  useEffect(() => {
    if(item){
      const itemRemark = cart.find((foundItem) => foundItem.id === item._id)?.remark || '';
      setRemark(itemRemark); // Set remark to the found remark or empty if not found
    }
  }, [item,cart]);


  const saveRemark = () => {

    const existingItem = cart.find((foundItem) => foundItem.id === item._id)
    if (existingItem) {
      const updatedCart = cart.map((foundItem) =>
        foundItem.id === item._id ? { ...foundItem, remark: remark } : foundItem
      );
      dispatch(setCartItems(updatedCart));
    } else {
      const newItem = { id: item._id, count: 1, price: item.price,remark:remark,name:item.name };
      dispatch(setCartItems([...cart, newItem]));
    }
    setRemark(" ")
    setIsModalOpen(false);

  }

  return (

    <Modal centered title="Add Remark" open={isModalOpen} onOk={handleOk} onCancel={handleCancel} footer={""}>
      <textarea onInput={(e)=>setRemark(e.target.value)} value={remark} name="" placeholder='Write remark like no salt,no sugar...' className='border-2 w-full mont h-56 p-4 rounded-md' id=""></textarea>
      <button
        className="bg-black ml-auto flex items-center justify-center p-3 px-6 text-white mt-2 rounded-md relative z-[9999999999]"
        onClick={saveRemark}
      >
        Save
      </button>
    </Modal>
  )
}

export default AddRemark
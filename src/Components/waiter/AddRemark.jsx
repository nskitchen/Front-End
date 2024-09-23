import { Modal,Button } from 'antd';
import React from 'react'

const AddRemark = ({isModalOpen,setIsModalOpen}) => {

  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <Modal centered title="Add Remark"  open={isModalOpen} onOk={handleOk} onCancel={handleCancel} footer={""}>
    <textarea name="" placeholder='Write remark like no salt,no sugar...' className='border-2 w-full mont h-56 p-4 rounded-md' id=""></textarea>
    <button
          className="bg-black ml-auto flex items-center justify-center p-3 px-6 text-white mt-2 rounded-md relative z-[9999999999]"
          onClick={showModal}
        >
          Save
        </button>
  </Modal>
  )
}

export default AddRemark
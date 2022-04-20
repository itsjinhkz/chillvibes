import React, { useState } from "react";
import { Modal, Button } from "antd";
import { TiThMenuOutline } from "react-icons/ti";
import "./navModal.css";
import NavHeaderUserTablet from "./NavHeaderUserTablet";
export default function NavModal() {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  return (
    <>
      <Button type="primary" onClick={showModal}>
        <TiThMenuOutline size={40} color="orange" />
      </Button>
      <Modal
        title={<NavHeaderUserTablet />}
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <div className="space-y-5 font-bold flex  flex-col items-start justify-start">
          <span className="hover:text-red-500 cursor-pointer transition-all ">
            Lịch Chiếu
          </span>
          <span className="hover:text-red-500 cursor-pointer transition-all ">
            Cụm Rạp
          </span>
          <span className="hover:text-red-500 cursor-pointer transition-all ">
            Tin Tức
          </span>
          <span className="hover:text-red-500 cursor-pointer transition-all ">
            Ứng Dụng
          </span>
        </div>
      </Modal>
    </>
  );
}

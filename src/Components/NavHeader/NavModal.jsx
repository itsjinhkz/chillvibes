import React, { useState } from "react";
import { Modal, Button } from "antd";
import { TiThMenuOutline } from "react-icons/ti";
import { HashLink } from "react-router-hash-link";

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
          <HashLink smooth to="/#lichchieu">
            <span className="hover:text-red-500 cursor-pointer transition-all ">
              Lịch Chiếu
            </span>
          </HashLink>

          <HashLink smooth to="/#phoneapp">
            <span className="hover:text-red-500 cursor-pointer transition-all ">
              Ứng Dụng
            </span>
          </HashLink>
        </div>
      </Modal>
    </>
  );
}

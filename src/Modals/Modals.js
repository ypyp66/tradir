import React from "react";
import { Modal } from "antd";

const Modals = ({ title, isOpen, setIsOpen, children }) => {
  const toggle = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <Modal title={title} visible={isOpen} onOk={toggle} onCancel={toggle}>
      {children}
    </Modal>
  );
};

export default Modals;

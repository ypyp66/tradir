import React, { useEffect } from "react";
import { Modal } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { toggleModal } from "Modules/modals";

const Modals = ({ children, customOpen = null }) => {
  const isOpen = useSelector((state) => state.modals.isOpen);
  const dispatch = useDispatch();

  const toggle = () => {
    dispatch(toggleModal());
  };

  useEffect(() => {
    console.log(isOpen);
  }, [isOpen]);

  return (
    <Modal visible={customOpen || isOpen} onOk={toggle} onCancel={toggle}>
      {children}
    </Modal>
  );
};

export default Modals;

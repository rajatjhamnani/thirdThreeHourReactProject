import React, { createContext, useState } from "react";
export const ModalContext = createContext();

const ModalContextProvider = (props) => {
  const [show, setShow] = useState(false);

  const modalShowHandler = () => {
    setShow(true);
  };
  const modalHideHandler = () => {
    setShow(false);
  };

  const modalValue = {
    show: show,
    showModal: modalShowHandler,
    hideHandler: modalHideHandler,
  };
  return (
    <ModalContext.Provider value={modalValue}>
      {props.children}
    </ModalContext.Provider>
  );
};
export default ModalContextProvider;

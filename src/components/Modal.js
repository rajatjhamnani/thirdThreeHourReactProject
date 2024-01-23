import React, { useContext } from "react";
import classes from "./Modal.module.css";
import { ModalContext } from "./Globe/ModalContext";
const Modal = (props) => {
  const modalContxt = useContext(ModalContext);
  if (!props.show) {
    return null;
  }
  return (
    <div className={classes.modalWrapper}>
      <div className={classes.mode}>
        <div className={classes.btn}>
          <button onClick={() => modalContxt.hideHandler()}>x</button>
        </div>
        {props.children}
      </div>
    </div>
  );
};
export default Modal;

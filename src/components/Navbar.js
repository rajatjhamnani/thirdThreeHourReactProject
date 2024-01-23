import React, { useContext } from "react";
import classes from "./Navbar.module.css";
import { ModalContext } from "./Globe/ModalContext";
import Cart from "./Cart/Cart";
import { DataContext } from "./Globe/DataContext";

const Navbar = (props) => {
  const modalContxt = useContext(ModalContext);
  const dataContxt = useContext(DataContext);
  let qty = dataContxt.quantity;
  console.log(qty);

  return (
    <nav className={classes.bar}>
      <div></div>
      <div>
        <button onClick={() => modalContxt.showModal()}>Cart-{qty}</button>
      </div>
    </nav>
  );
};

export default Navbar;

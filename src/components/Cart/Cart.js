import React, { useContext, useState } from "react";
import Modal from "../Modal";
import classes from "./Cart.module.css";
import { ModalContext } from "../Globe/ModalContext";
import { DataContext } from "../Globe/DataContext";

const Cart = (props) => {
  const modalContxt = useContext(ModalContext);
  const dataContxt = useContext(DataContext);
  console.log(dataContxt.dataForCart);
  const data = [
    { name: "dole", description: "good", price: "20", quantity: "100" },
    { name: "calpol", description: "good", price: "10", quantity: "200" },
    { name: "syrup", description: "cough", price: "200", quantity: "50" },
  ];

  return (
    <Modal show={modalContxt.show}>
      <table>
        <thead>
          <tr className={classes.tall}>
            <th>Medicine Name</th>
            <th>Price</th>
            <th>Quantity</th>
          </tr>
        </thead>
        {dataContxt.dataForCart.map((data, idx) => (
          <tbody>
            <tr className={classes.tall}>
              <td>{data.name}</td>
              <td>{data.price}</td>
              <td>{data.quantity}</td>
            </tr>
          </tbody>
        ))}
        {/* <tbody>
          <tr className={classes.tall}>
            <td>{data[0].name}</td>

            <td>{data[0].price}</td>
            <td>{data[0].quantity}</td>
          </tr>
          <tr className={classes.tall}>
            <td>{data[1].name}</td>

            <td>{data[1].price}</td>
            <td>{data[1].quantity}</td>
          </tr>
          <tr className={classes.tall}>
            <td>{data[2].name}</td>

            <td>{data[2].price}</td>
            <td>{data[2].quantity}</td>
          </tr>
        </tbody> */}
      </table>
    </Modal>
  );
};

export default Cart;

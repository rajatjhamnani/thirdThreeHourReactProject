import React, { useContext, useState } from "react";
import { DataContext } from "./Globe/DataContext";
import classes from "./OutputDetails.module.css";
import Input from "./UI/input";

const OutPutDetails = (props) => {
  const dataContxt = useContext(DataContext);

  
  const [addedQuantities, setAddedQuantities] = useState([]);

  const addedDetailsHandler = (event, idx) => {
    
    const newQuantities = [...addedQuantities];
    newQuantities[idx] =
      event.target.value === "" ? "" : Number(event.target.value);
    setAddedQuantities(newQuantities);
  };

  return (
    <div className={classes.tale}>
      <h1>OutPut Data</h1>
      {dataContxt.data.length === 0 ? (
        <p>No Medicines Added</p>
      ) : (
        <table className={classes.tab}>
          <thead>
            <tr className={classes.tall}>
              <th>Medicine Name</th>
              <th>Medicine Description</th>
              <th>Price</th>
              <th>Quantity</th>
            </tr>
          </thead>
          {dataContxt.data.map((data, idx) => (
            <tbody key={idx}>
              <tr className={classes.tall}>
                <td>{data.name}</td>
                <td>{data.description}</td>
                <td>{data.price}</td>
                <td>{data.quantity - (addedQuantities[idx] || 0)}</td>
                <Input
                  label="Add Qty"
                  input={{
                    type: "number",
                    id: "quantity",
                    min: "0",
                    max: data.quantity,
                    step: "1",
                    onChange: (event) => addedDetailsHandler(event, idx),
                    value: addedQuantities[idx] || 0,
                  }}
                />
                <td>
                  <button
                    type="submit"
                    onClick={() => {
                      const actualQuantity =
                        data.quantity - (addedQuantities[idx] || 0);
                      dataContxt.receieveCartData(
                        data,
                        addedQuantities[idx] || 0,
                        actualQuantity
                      );
                      // Clear the "Add Qty" input field by updating its state to an empty string
                      const newQuantities = [...addedQuantities];
                      newQuantities[idx] = "";
                      setAddedQuantities(newQuantities);
                    }}
                  >
                    Add to Cart
                  </button>
                  <button>Remove Item</button>
                </td>
              </tr>
            </tbody>
          ))}
        </table>
      )}
    </div>
  );
};

export default OutPutDetails;

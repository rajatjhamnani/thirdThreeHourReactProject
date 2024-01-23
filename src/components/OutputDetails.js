import React, { useContext, useState } from "react";
import { DataContext } from "./Globe/DataContext";
import classes from "./OutputDetails.module.css";
import Input from "./UI/input";

const OutPutDetails = (props) => {
  const dataContxt = useContext(DataContext);

  const [addedQuantity, setAddedQuantity] = useState(0);

  const addedDetailsHandler = (event) => {
    setAddedQuantity(event.target.value);
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
            <tbody>
              <tr className={classes.tall}>
                <td>{data.name}</td>
                <td>{data.description}</td>
                <td>{data.price}</td>
                <td>{data.quantity}</td>
                <Input
                  label="Add Qty"
                  input={{
                    type: "number",
                    id: "quantity",
                    min: "0",
                    max: data.quantity,
                    step: "1",
                    onChange: addedDetailsHandler,
                    vavue: addedQuantity,
                  }}
                />

                <td>
                  <button
                    type="submit"
                    onClick={() =>
                      dataContxt.receieveCartData(data, addedQuantity)
                    }
                  >
                    Add to Cart
                  </button>
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

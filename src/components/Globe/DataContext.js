import React, { createContext, useState } from "react";

export const DataContext = createContext();

const DataContextProvider = (props) => {
  const [data, setData] = useState([]);
  const [cartData, setCartData] = useState([]);
  const [quantity, setQuantity] = useState(0);

  const receivedDataHandler = (data, qty) => {
    console.log(data, qty);

    setData((previous) => [...previous, data]);
  };

  const cartDataHandler = (data, qty, actualQuantity) => {
    let newData = {
      id: data.id,
      name: data.name,
      price: data.price,
      quantity: qty,
    };
    console.log(data.quantity);

    setData((previous) =>
      previous.map((item) =>
        item.id === data.id
          ? {
              ...item,
              quantity: actualQuantity,
            }
          : item
      )
    );

    setQuantity((prev) => {
      return prev + Number(qty);
    });
    setCartData((prev) => {
      return [...prev, newData];
    });
  };

  const retrievedData = {
    data: data,
    receivedData: receivedDataHandler,
    dataForCart: cartData,
    receieveCartData: cartDataHandler,
    quantity: quantity,
  };

  return (
    <DataContext.Provider value={retrievedData}>
      {props.children}
    </DataContext.Provider>
  );
};

export default DataContextProvider;

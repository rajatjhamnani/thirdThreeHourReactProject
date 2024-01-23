import react, { useContext, useState } from "react";
import Input from "./UI/input";
import classes from "./InputDetails.module.css";
import { DataContext } from "./Globe/DataContext";

const InputDetails = (props) => {
  const dataContxt = useContext(DataContext);
  const [medicineName, setMedicineNmae] = useState("");
  const [medicineDespriction, setMedicineDespriction] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const medicineNameHandler = (event) => {
    setMedicineNmae(event.target.value);
  };

  const medicineDesprictionHandler = (event) => {
    setMedicineDespriction(event.target.value);
  };

  const priceChangeHandler = (event) => {
    setPrice(event.target.value);
  };
  const quantityChangehandler = (event) => {
    setQuantity(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const data = {
      id: Math.random().toString(),
      name: medicineName,
      description: medicineDespriction,
      price: price,
      quantity: quantity,
    };
    // axios.post(
    //   `https://crudcrud.com/api/5ee204dc8ded474c8cf4c1b61b04f529/AddedDetails`,
    //   data
    // );
    dataContxt.receivedData(data);
    console.log(data);
    setMedicineNmae("");
    setMedicineDespriction("");
    setPrice("");
    setQuantity("");
  };
  return (
    <form className={classes.input} onSubmit={submitHandler}>
      <Input
        label="Medicine Name"
        input={{
          type: "text",
          id: "name",
          onChange: medicineNameHandler,
          value: medicineName,
        }}
      />
      <Input
        label="Medicine description"
        input={{
          type: "text",
          id: "despriction",
          onChange: medicineDesprictionHandler,
          value: medicineDespriction,
        }}
      />
      <Input
        label="Price"
        input={{
          type: "number",
          id: "price",
          onChange: priceChangeHandler,
          min: "0",
          value: price,
        }}
      />
      <Input
        label="Quantity Available"
        input={{
          type: "number",
          id: "quantity",
          min: "0",
          max: "100",
          step: "2",
          onChange: quantityChangehandler,
          value: quantity,
        }}
      />
      <button type="submit">Add Items</button>
    </form>
  );
};
export default InputDetails;

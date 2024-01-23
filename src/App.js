import logo from "./logo.svg";
import "./App.css";
import InputDetails from "./components/InputDetails";

import DataContextProvider from "./components/Globe/DataContext";
import OutputDetails from "./components/OutputDetails";
import Navbar from "./components/Navbar";
import Modal from "./components/Modal";
import { useContext, useState } from "react";
import Cart from "./components/Cart/Cart";
import ModalContextProvider from "./components/Globe/ModalContext";
function App() {
  return (
    <div className="App">
      <DataContextProvider>
        <ModalContextProvider>
          <Cart />
          <Navbar />
          <InputDetails />
          <OutputDetails />
        </ModalContextProvider>
      </DataContextProvider>
    </div>
  );
}

export default App;

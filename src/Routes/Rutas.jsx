import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./pages/Navbar";
import Home from ".pages/Home";
import ItemDetail from ".pages/ItemDetail";
import Productos from ".pages/Productos";

const Rutas = () => {
  return (
      <BrowserRouter>
          <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/item-detail" element={<ItemDetail />} />
        <Route path="/productos" element={<Productos />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Rutas;

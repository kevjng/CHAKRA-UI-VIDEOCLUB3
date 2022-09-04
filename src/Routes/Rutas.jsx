//DEPENDENCIAS

import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";


//COMPONENTES

import Navbar from "../components/Navbar/Navbar";
import ItemListContainer from "../components/ItemListContainer/ItemListContainer";
import Cart from "../components/Cart/Cart";
import ItemDetailContainer from "../components/ItemDetailContainer/ItemDetailContainer";

const Rutas = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/mi-lista" element={<Cart />} />
        <Route path="/item-detail/:id" element={<ItemDetailContainer />} />
        <Route path="/categorias/:id" element={<ItemListContainer />} />
        <Route path="/Cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Rutas;

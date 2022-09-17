//DEPENDENCIAS

import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";


//COMPONENTES

import Navbar from "../components/Navbar/Navbar";
import ItemListContainer from "../components/ItemListContainer/ItemListContainer";
import Cart from "../components/Cart/Cart";
import ItemDetailContainer from "../components/ItemDetailContainer/ItemDetailContainer";
import Peliculas from "../components/Peliculas/Peliculas"
import Series from "../components/Series/Series"
import Checkout from "../components/Checkout/Checkout";

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
        <Route path="/categorias/peliculas" element={<Peliculas />} />
        <Route path="/categorias/series" element={<Series />} />
        <Route path="/checkout" element={<Checkout/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default Rutas;

//DEPENDENCIAS

import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

//COMPONENTES

import Navbar from "../components/Navbar/Navbar";
import ItemListContainer from "../components/ItemListContainer/ItemListContainer";
import Cart from "../components/Cart/Cart";
import Series from "../components/Series/Series";
import Peliculas from "../components/Peliculas/Peliculas";
import ItemDetailContainer from "../components/ItemDetailContainer/ItemDetailContainer";

const Rutas = () => {
  return (
      <BrowserRouter>
        <Navbar />
          <Routes>

            <Route path="/" element={<ItemListContainer/>} />
            <Route path="/mi-lista" element={<Cart/>} />
            <Route path="/item-detail/:id" element={<ItemDetailContainer />} />
            <Route path="/peliculas" element={<Peliculas />} />
            <Route path="/series" element={<Series />} />

          </Routes>
      
    </BrowserRouter>
  );
};

export default Rutas;

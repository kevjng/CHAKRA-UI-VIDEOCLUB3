/* LIBRERIAS DEPENDENCIAS */
import { BrowserRouter, Routes, Route } from "react-router-dom";

/* COMPONENTES */
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";


/* ESTILOS */
import "./App.css";

function App() {
  return (
    <>
      <div className="gradiente">

        <BrowserRouter>
          <Navbar/>
          <Routes>
            <Route path='/' element={<ItemListContainer info="pasando una prop desde App"/>} />
            <Route path='/item/:id' element={<ItemDetailContainer/>} />
            <Route path='/tipo/:tipoid' element={<ItemDetailContainer/>} />
          </Routes>
          <Footer />
        </BrowserRouter>

      </div>
    </>
  );
}

export default App;

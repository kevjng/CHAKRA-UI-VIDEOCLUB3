/* LIBRERIAS DEPENDENCIAS */


/* COMPONENTES */
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

/* ESTILOS */
import './App.css';

function App() {
  return (
    <>
      <div className="gradiente">
        <Navbar />
        <ItemListContainer info="loading" />
        <Footer />
      </div>
    </>
  );
}

export default App;

/* LIBRERIAS DEPENDENCIAS */
import { Center } from "@chakra-ui/react";

/* COMPONENTES */
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./Footer/Footer";
import ItemCount from "./components/Counter/ItemCount";

/* ESTILOS */
import './App.css';

function App() {
  return (
    <>
      <div className="gradiente">
        <Navbar />
        <Center>
          <ItemListContainer info="Hola te estoy pasando info desde app.js" />
        </Center>
        <Center>
          <ItemCount/>
        </Center>
        <Footer />
      </div>
    </>
  );
}

export default App;

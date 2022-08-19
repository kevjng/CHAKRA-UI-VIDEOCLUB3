/* LIBRERIAS DEPENDENCIAS */
import { Center } from "@chakra-ui/react";

/* COMPONENTES */
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import Navbar from "./components/Navbar/Navbar";
import Counter from "./components/Counter/Counter";
import Footer from "./Footer/Footer";

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
          <Counter/>
        </Center>
        <Footer />
      </div>
    </>
  );
}

export default App;

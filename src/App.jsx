//COMPONENTES
import Rutas from "./Routes/Rutas";
import { CartProvider } from "./context/CartContex";

// ESTILOS
import "./App.css";
import Footer from "./components/Footer/Footer";


function App() {
  return (
    <>
      <div className="gradiente">
        <CartProvider>
          <Rutas />
          <Footer />
        </CartProvider>
      </div>
    </>
  );
}

export default App;

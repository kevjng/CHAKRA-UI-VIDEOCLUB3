//COMPONENTES
import Rutas from "./Routes/Rutas";

// ESTILOS
import "./App.css";
import Footer from "./components/Footer/Footer";
import { CartProvider } from "./context/CartContex";

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

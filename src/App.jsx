//COMPONENTES
import Rutas from "./Routes/Rutas";
import { CartProvider } from "./context/CartContex";

// ESTILOS
import "./App.css";
import Footer from "./components/Footer/Footer";
import { Box, useColorModeValue, bgGradient } from "@chakra-ui/react";


function App() {
  return (
    <>
      <Box bgGradient="linear(to-r, green.700, blue.800)">
        <CartProvider>
          <Rutas />

          <Footer />
        </CartProvider>
      </Box>
    </>
  );
}

export default App;

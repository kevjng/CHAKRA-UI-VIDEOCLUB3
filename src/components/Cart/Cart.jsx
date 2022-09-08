import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContex";

import { Box, Heading, Text } from "@chakra-ui/react";
import { CheckCircleIcon } from "@chakra-ui/icons";




const Cart = () => {

  const { items, removeItem, clear } = useContext(CartContext);

  return (
    <>
      
      <Box textAlign="center" py={10} px={6}>
        <CheckCircleIcon boxSize={"50px"} color={"green.500"} />
        <Heading as="h2" size="xl" mt={6} mb={2}>
          Esta es tu seleccion de Mi Lista
        </Heading>
        <Text color={"gray.500"}>
          Todas las peliculas y series que hayas agregado a Mi Lista apareceran
          en esta seccion 👌
        </Text>
      </Box>

       <h3>Carrito</h3>
    {!items.lenght && <div>Tu carrito esta vacio</div> }
    {items &&
    <div className='cartContain'>
        
            {items.map((item, index) => <div className='cart' key={index}> Producto seleccionado: {item.title} - Cantidad: {item.quantity} - Total: {item.total}
            <button className="btn" onClick={()=> removeItem(item.id)}>Eliminar Producto</button>
            </div>)}
       
    </div>
    }
    <button className="btn" onClick={()=> clear(items)}>Vaciar Carrito</button>
    <Link to='/'>
    <button className="btn">Seguir Comprando</button>
    </Link>
    
     
    </>
  );
}

export default Cart
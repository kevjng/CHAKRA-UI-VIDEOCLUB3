/* LIBRERIAS DEPENDENCIAS */
import { Button, IconButton } from "@chakra-ui/react";
import { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";

/* ESTILOS CSS*/

import "./Contador.css";

const Contador = ({ stock, initial = 0, onAdd }) => {
  const [contador, setContador] = useState(1); 

  const aumentarContador = () => {
    if (contador < stock) setContador(contador + 1)
  };

  return (
    <div>
      <span
        disabled={contador < initial}
        >
        <IconButton
          onClick={() => {
            if (contador > 0)
              setContador(contador - 1);
        }}
          ml={1}
          icon={<FaMinus />}
          isRound="true"
          size={"md"}
          color="red"
        ></IconButton>
      </span>

      <span
        style={{
          backgroundColor: "black",
          borderRadius: "5px",
          margin: "15px",
          color: "white",
          width: "40px",
        }}
      >
        {contador}
      </span>

      
        <IconButton
          onClick={aumentarContador}
          ml={0}
          icon={<FaPlus />}
          isRound="true"
          size={"md"}
          color="green"
        ></IconButton>
      

      <Button disabled={ contador < 1 } onClick={() => onAdd(contador)}>
        Agregar a Mi Lista
      </Button>
    </div>
  );
};

export default Contador;

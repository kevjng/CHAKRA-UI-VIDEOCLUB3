/* LIBRERIAS DEPENDENCIAS */
import { Button, IconButton } from "@chakra-ui/react";
import { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";
import { StarIcon } from "@chakra-ui/icons";

/* ESTILOS CSS*/
import "./Contador.css";



const Contador = ({ stock, initial = 0, onAdd }) => {
  const [counter, setCounter] = useState(1); 

  const aumentarContador = () => {
    if (counter < stock) setCounter(counter + 1)
  };


  return (
    <div
      className="boton-gradiente"
      style={{
        borderRadius: "1rem",
        display: "flex",
        height: "55px",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <span>Reproducciones:</span>
      <span disabled={counter < initial}>
        <IconButton
          onClick={() => {
            if (counter > 0) setCounter(counter - 1);
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
          color: "white",
          width: "40px",
          display: "flex",
          alignContent: "center",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {counter}
      </span>

      <IconButton
        onClick={aumentarContador}
        ml={0}
        icon={<FaPlus />}
        isRound="true"
        size={"md"}
        color="green"
      ></IconButton>
      <Button
        mt={0}
        ml={20}
        leftIcon={<StarIcon />}
        disabled={counter < 1}
        onClick={(() => onAdd(counter))}
      >
        Agregar a Mi Lista
      </Button>
    </div>
  );
};

export default Contador;

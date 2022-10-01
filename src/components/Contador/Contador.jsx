/* LIBRERIAS DEPENDENCIAS */
import { Box, Button, IconButton, Text, useColorModeValue } from "@chakra-ui/react";
import { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";
import { StarIcon } from "@chakra-ui/icons";
import { useToast } from "@chakra-ui/react";

/* ESTILOS CSS*/
import "./Contador.css";



const Contador = ({ stock, initial = 0, onAdd }) => {
  const [counter, setCounter] = useState(1); 

  const aumentarContador = () => {
    if (counter < stock) setCounter(counter + 1)
  };

  const toast = useToast();

  function handleClickAdd() {
    
    toast({
      title: "Producto agregado.",
      description: "Hemos agregado el producto a Mi Lista",
      status: "success",
      duration: 2000,
      position: "top",
      isClosable: true,
    });
    onAdd(counter);
  }

  

  return (
    <Box
      bg={useColorModeValue("gray.300", "gray.900")}
      style={{
        borderRadius: "1rem",
        display: "flex",
        height: "55px",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text color={useColorModeValue("gray.900", "gray.300")}>
        Reproducciones:
      </Text>
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
        color={useColorModeValue("gray.900", "white.900")}
        mt={0}
        mx={5}
        leftIcon={<StarIcon />}
        disabled={counter < 1}
        onClick={handleClickAdd}
      >
        Agregar a Mi Lista
      </Button>
    </Box>
  );
};

export default Contador;

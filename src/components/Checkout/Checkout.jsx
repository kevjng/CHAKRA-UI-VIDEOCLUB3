
import Swal from "sweetalert2";

import React, { useContext, useState } from "react";
import db from "../../services/index";
import { addDoc, collection } from "firebase/firestore";
import { validarCampos } from "../../helpers";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContex";
import { Box, Button, Center, FormControl, Heading } from "@chakra-ui/react";
import { ArrowBackIcon } from "@chakra-ui/icons";

import "./Checkout.css";

/* 
import {
  FormControl,
  FormLabel,
  FormHelperText,
  FormErrorMessage,} from "@chakra-ui/react"; */


const Input = ({
  className,
  type,
  name,
  value,
  inputClassName,
  onChange,
  onBlur,
  placeholder,
  error,
}) => {
  return (
    <Center>
      <Box textAlign="center" py={6} px={6}>
    <FormControl className={className}>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        onBlur={(e) => onBlur(e)}
        className={inputClassName}
        placeholder={placeholder}
      />
      {error.nombre && (
        <h6 className="error">{error.nombre}</h6>
      )}
      </FormControl>
    </Box>
    </Center>
      
  );
};

const setFirebase = async (orden) => {
  try {
    const col = collection(db, "ordenes"); //genero nueva col en fire
    const generarOrden = await addDoc(col, orden); //addDoc agrega doc a firebase
    console.log("La orden se recibio bajo el ID:", generarOrden.id);
    console.log("La fecha de la compra es", new Date());
    /* alert("Su orden se genero correctamente", generarOrden.id); */

  } catch (error) {
    console.log(error);
  }
};


const Checkout = ({ total, compra }) => {
  console.log(compra);
  console.log(total);
  console.log(typeof(total));
  
  const { items, clear, now } = useContext(CartContext);
  
  let suma = items.reduce((pv, cv) => pv + cv.price * cv.quantity, 0)

  const [formulario, setFormulario] = useState({
    buyer: {
      Nombre: "",
      Email: "",
      Telefono: "",
      Direccion: "",
    },
    Compra: {items},
    Total: suma,
    Fecha: now,
  });
  /* console.log(typeof (formulario.total));
  console.log(typeof(items.reduce((pv, cv) => pv + cv.price * cv.quantity, 0))); */
  

  const [error, setError] = useState({});
  const { buyer: { Nombre, Email, Telefono, Direccion }, } = formulario;

  const onSubmit = (e) => {
    e.preventDefault();
    if (validarCampos([Nombre, Email, Telefono, Direccion])) {
      Swal.fire({
        title: "Uhhh!",
        text: "Campos incompletos, por favor llenalos",
        icon: "error",
      });
      return;
    }
    Swal.fire({
      title: "Gracias por tu compra!",
      text: `Pronto nos pondremos en contacto al mail, ${Email} 😉`,
      icon: "success",
    });
    setFirebase({ formulario });
    clear();
   
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormulario({
      ...formulario,
      buyer: {
        ...formulario.buyer,
        [name]: value,
      },
    });
  };

    /* const data = {
    buyer: {
      nombre: "",
      email: "",
      telefono: "",
      direccion: "",
    },
    total: 15000,
    items: [
      {id:1, name:"gorra", price:300, desc:"prueba again 2022"},
      {id:2, name:"reloj", price:500, desc:"prueba again 2023"} 
    
    ],
  } */

  const handleBlur = (e) => {
    const { value, name } = e.target;
    if (value === "") {
      setError({ ...error, [name]: "Este campo es obligatorio" });
      return;
    }
    setError({});
  };

  return (
    <>
      <Center
        py={6}
        px={6}
        my={"2"}
        display={"flex"}
        background={"blackAlpha.500"}
        borderRadius={"2xl"}
        textAlign={"center"}
        alignContent={"center"}
        color={"white"}
      >
        <Box
          textAlign="center"
          py={6}
          px={6}
          border={"2px"}
          borderRadius={"2xl"}
          borderColor={"cyan"}
        >
          <form onSubmit={onSubmit} className="container border">
            <h2>Ingresa tus datos:</h2>
            {Object.keys(formulario.buyer).map((key, index) => (
              <Input
                key={index}
                type="text"
                name={`${key}`}
                value={key.value}
                onChange={handleChange}
                onBlur={handleBlur}
                inputClassName={`form-control ${
                  error[key] && "is-invalid"
                }`}
                placeholder={`${key}`}
                error={error}
              />
            ))}

            <Box alignContent={"center"} alignSelf={"center"}>
              <Heading as="h1" size="lg" mt={10} mb={4} color={"beige"}>
                Total de la compra: $
                {suma}
              </Heading>

              <Button
                type="submit"
                as={Button}
                variant={"solid"}
                colorScheme={"green"}
                size={"md"}
                onClick={() => setFormulario(formulario)}
                my={5}
              >
                Confirmar Compra
              </Button>
            </Box>
            <Button
              leftIcon={<ArrowBackIcon />}
              variant={"outline"}
              size={"sm"}
              colorScheme={"red"}
              my={5}
            >
              <Link to="/Cart">Volver a Mi Lista</Link>
            </Button>
          </form>
        </Box>
      </Center>
    </>
  );
};

export default Checkout;

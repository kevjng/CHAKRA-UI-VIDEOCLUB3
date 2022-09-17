import { Button, Input } from "@chakra-ui/react";
import React, { useState } from "react";
//import Cart from '../Cart/Cart';

import {
  FormControl,
  FormLabel,
  FormHelperText,
 /*   FormErrorMessage,*/
} from "@chakra-ui/react";

const Checkout = ({ total, compra }) => {
  const [form, setForm] = useState({
    buyer: {
      nombre: "",
      email: "",
      telefono: "",
      direccion: "",
    },
    total: total,
    items: compra,
  });

  const {
    buyer: { nombre, email, telefono, direccion },
  } = form;

  const handleChange = (e) => {
    const { name, value } = e.target;
    
    setForm({
      ...form,
      buyer: {
        ...form.buyer,
        [name]: value, 
      },
    });
  };

  return (
    <>
      <div>
        <form>
          <FormControl>
            <FormLabel htmlFor="nombre">Nombre</FormLabel>
            <Input
              type="text"
              name="nombre"
              onChange={handleChange}
              value={nombre}
            />
            <FormHelperText></FormHelperText>
          </FormControl>

          <FormControl>
            <FormLabel htmlFor="mail">Email</FormLabel>
            <Input
              type="email"
              name="email"
              onChange={handleChange}
              value={email}
            />
          </FormControl>
          <FormControl>
            <FormLabel htmlFor="telefono">Telefono</FormLabel>
            <Input
              type="number"
              name="telefono"
              onChange={handleChange}
              value={telefono}
            />
          </FormControl>

          <FormControl>
            <FormLabel htmlFor="direccion">Direccion</FormLabel>
            <Input
              type="text"
              name="direccion"
              onChange={handleChange}
              value={direccion}
            />

          <Button
            mt={"4"}
            colorScheme={"linkedin"}
            onClick={() => setForm(form)}
            >
            Enviar Compra
          </Button>
              </FormControl>
        </form>
      </div>
    </>
  );
};

export default Checkout;


/*
const sendOrder=()=>{
    const order={
        buyer:{}
        items:[{}
        
        ] date.now()
    }
}
const generaTicket= async({datos})=>{
    setCargar(true)
    try{
    }
}
const miData
//funcion guaradar en fire
const setFirebase=(orden)=>{
    try{
        const col =collection(db, "ordenes")//genero nueva col en fire
        const generarOrden= await addDoc(col, orden) //addDoc agrega doc a firebase
        console.log(generarOrden.id)
    } catch(error){
    }
}
button onclick= setFirebase(data)
*/

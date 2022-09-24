/* import { Button, Input } from "@chakra-ui/react"; */

import React, { useContext, useState } from "react";
import db from "../../services/index";
import { addDoc, collection } from "firebase/firestore";
import { validarTodoLLeno } from "../../helpers";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContex";
import { Button } from "@chakra-ui/react";

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
    <div className={className}>
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
        <h6 className="text-danger my-2 text-uppercase">{error.nombre}</h6>
      )}
    </div>
  );
};

const setFirebase = async (orden) => {
  try {
    const col = collection(db, "ordenes"); //genero nueva col en fire
    const generarOrden = await addDoc(col, orden); //addDoc agrega doc a firebase
    console.log(generarOrden.id);
    alert("Su orden se genero correctamente", generarOrden.id);
  } catch (error) {
    console.log(error);
  }
};

const Checkout = ({ total, compra }) => {
  const { clear, items } = useContext(CartContext);

  const [formulario, setFormulario] = useState({
    buyer: {
      nombre: "",
      email: "",
      telefono: "",
      direccion: "",
    },
    total: total,
    items: compra,
  });

  const [error, setError] = useState({});
  const { buyer: { nombre, email, telefono, direccion },} = formulario;

  const onSubmit = (e) => {
    e.preventDefault();
    if (validarTodoLLeno([nombre, email, telefono, direccion], items)) {
      Swal.fire({
        title: "Uhhh!",
        text: "Campos incompletos, por favor llenalos",
        icon: "error",
      });
      return;
    }
    Swal.fire({
      title: "Genial!",
      text: "Su orden de compra se genero correctamente!",
      icon: "success",
    });
    setFirebase({ datos: formulario });
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

  /*   const data = {
    buyer: {
      nombre: "",
      email: "",
      telefono: "",
      direccion: "",
    },
    total: 15000,
    items: [
      {id:1, name:"gorra", price:300, desc:"gorra moderna 2022"},
      {id:2, name:"reloj", price:500, desc:"Reloj moderno 2023"} 
    
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
      <form onSubmit={onSubmit} className="container border">
        <h3 className="text-uppercase text-center my-4">Ingresa tus datos:</h3>
        {Object.keys(formulario.buyer).map((key, index) => (
          <Input
            key={index}
            className="mb-3"
            type="text"
            name={`${key}`}
            value={key.value}
            onChange={handleChange}
            onBlur={handleBlur}
            inputClassName={`form-control ${error[key] && "is-invalid"}`}
            placeholder={`${key}`}
            error={error}
          />
        ))}

        <div className="border row d-flex px-2">
          <div className="col-12 col-lg-9">
            <p className="fs-4 text-uppercase">total</p>
          </div>
          <div className="col-12 col-lg-3">
            <p>${total}</p>
          </div>
          <Button type="submit" onClick={() => setFormulario(formulario)}>
            Finalizar Compra!
          </Button>
        </div>

        <Link to="/">Volver a Inicio</Link>
      </form>
    </>
  );
};

export default Checkout;

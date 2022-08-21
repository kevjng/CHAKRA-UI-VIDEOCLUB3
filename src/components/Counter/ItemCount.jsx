/* LIBRERIAS DEPENDENCIAS */
import { Button, IconButton } from "@chakra-ui/react";
import { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";

/* ESTILOS CSS*/

import "./ItemCount.css";

const ItemCount = () => {
  const [counter, setCounter] = useState(0);

  function Restar() {
    if (counter > 0) {
      setCounter(counter - 1);
      console.log(counter - 1);
    }
  }

  return (
    <div className="Counter">
      <span onClick={() => setCounter(counter + 1)}>
        <IconButton
          ml={1}
          icon={<FaPlus />}
          isRound="true"
          size={"lg"}
          color="green"
        ></IconButton>
      </span>

      <span
        style={{
          color: "white",
          backgroundColor: "#322222",
          borderRadius: "15px",
          padding: 16,
        }}
      >
        {counter}
      </span>

      <span onClick={Restar}>
        <IconButton
          ml={1}
          icon={<FaMinus />}
          isRound="true"
          size={"lg"}
          color="red"
        ></IconButton>
      </span>
      <div className="boton">
        <Button onClick={() => setCounter(0)}>Agregar a Mi Lista</Button>
      </div>
    </div>
  );
};

export default ItemCount;

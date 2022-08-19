/* LIBRERIAS DEPENDENCIAS */
import { Button, IconButton } from "@chakra-ui/react";
import { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";

/* ESTILOS CSS*/

import "./Counter.css";

const Counter = () => {
  const [counter, setCounter] = useState(0);

  function Restar() {
    if (counter > 0) {
      setCounter(counter - 1);
      console.log(counter - 1);
    }
  }

  return (
    <div className="Counter">
      <span
        style={{
          color: "white",
          backgroundColor: "#322222",
          borderRadius: "15px",
          padding: 16,
        }}
      >
        Contador: {counter}
      </span>
      <span onClick={() => setCounter(counter + 1)}>
        <IconButton
          ml={1}
          icon={<FaPlus />}
          isRound="true"
          size={"lg"}
          color="green"
        ></IconButton>
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
      <Button onClick={() => setCounter(0)}>Reiniciar</Button>
    </div>
  );
};

export default Counter;

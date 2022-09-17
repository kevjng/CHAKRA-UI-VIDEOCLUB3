import React from "react";
import { NavLink } from "react-router-dom";
import { StarIcon } from "@chakra-ui/icons";
import { Button, Text } from "@chakra-ui/react";
import { CartContext } from "../../context/CartContex";
import { useContext } from "react";

const Cartwidget = () => {

  const { items } = useContext(CartContext);

  return (
    <NavLink to={"/mi-lista"}>
      <Button
        as={Button}
        variant={"solid"}
        colorScheme={"teal"}
        size={"sm"}
        mr={4}
        leftIcon={<StarIcon />}
      >
        Mi Lista
        <Text
          background={"black"}
          color={"white"}
          borderRadius={"full"}
          width={"6"}
          height={"6"}
          position={"relative"}
          bottom={"10px"}
          borderColor={"white"}
          borderWidth={1.5}
          fontSize="small"
          textAlign={"center"}
          justifyContent={"center"}
        >
          {items.reduce((pv, cv) => pv + cv.quantity, 0)}
        </Text>
      </Button>
    </NavLink>
  );
};

export default Cartwidget;

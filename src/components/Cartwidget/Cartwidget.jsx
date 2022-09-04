import React from "react";
import { NavLink } from "react-router-dom";
import { StarIcon } from "@chakra-ui/icons";
import { Button } from "@chakra-ui/react";

const Cartwidget = () => {
  return (
    <NavLink to={"/mi-lista"}>
      <Button
        as={Button}
        variant={"solid"}
        colorScheme={"teal"}
        size={"sm"}
        mr={4}
        leftIcon={<StarIcon />}
      >Mi Lista</Button>
    </NavLink>
  );
};

export default Cartwidget;

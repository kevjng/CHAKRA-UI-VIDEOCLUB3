import React from 'react'
import { StarIcon, CheckCircleIcon } from "@chakra-ui/icons";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
} from "@chakra-ui/react";
  
import { Button } from "@chakra-ui/react";

const Cartwidget = () => {
  return (  
    <Menu>
      {({ isOpen }) => (
        <>
          <MenuButton
            isActive={isOpen}
            as={Button}
            variant={"solid"}
            colorScheme={"teal"}
            size={"sm"}
            mr={4}
            leftIcon={<StarIcon />}
          >
            {isOpen ? "Mi Lista" : "Mi Lista"}
          </MenuButton>
          <MenuList>
            <MenuItem>Pelicula favorita 1</MenuItem>
            <MenuItem>Pelicula favorita 2</MenuItem>
            <MenuItem>Pelicula favorita 3</MenuItem>
            <MenuItem>Pelicula favorita 4</MenuItem>
            <MenuDivider />
            <MenuItem onClick={() => alert("Yendo a pagina de pago")}>
              <CheckCircleIcon mr={2} w={6} h={6} color="green" />
              Alquilar listado!
            </MenuItem>
          </MenuList>
        </>
      )}
    </Menu>
  );
}

export default Cartwidget


import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContex";

import {
  Box,
  Heading,
  Text,
  Button,
  Image,
  Stack,
  Center,
} from "@chakra-ui/react";
import {
  ArrowBackIcon,
  CheckCircleIcon,
  DeleteIcon,
  SmallCloseIcon,
} from "@chakra-ui/icons";

const Cart = () => {
  const { items, removeItem, clear } = useContext(CartContext);

  return (
    <Center>
      <Box textAlign="center" py={10} px={6}>
        <CheckCircleIcon boxSize={"50px"} color={"green.500"} />
        <Heading as="h2" size="xl" mt={6} mb={2}>
          Esta es tu seleccion de Mi Lista
        </Heading>
        <Text color={"gray.500"}>
          Todas las peliculas y series que hayas agregado a Mi Lista apareceran
          en esta seccion 👌
        </Text>

        <Box py={10} px={4}>
          {!items.length && (
            <div>
              <h1>Tu carrito esta vacio 😒</h1>
              <Link to="/">
                <Button
                  as={Button}
                  variant={"solid"}
                  colorScheme={"pink"}
                  size={"sm"}
                  my={4}
                  leftIcon={<ArrowBackIcon />}
                >
                  Ir a elegir algo!
                </Button>
              </Link>
            </div>
          )}
          {items && (
            <>
              {items.map((item, index) => (
                <>
                  <Box
                    key={index}
                    width={"full"}
                    my={"2"}
                    display={"flex"}
                    background={"blackAlpha.500"}
                    borderRadius={"2xl"}
                    textAlign={"start"}
                  >
                    <Image
                      borderRadius="2xl"
                      boxSize="150px"
                      src={item.img}
                      mr={"10"}
                    />
                    <Stack>
                      <Text fontSize="2xl">{item.title}</Text>
                      <Text>Cantidad: {item.quantity}</Text>
                      <Text>Precio: ${item.price}</Text>

                      <Button
                        as={Button}
                        variant={"solid"}
                        colorScheme={"red"}
                        size={"sm"}
                        width={"100px"}
                        leftIcon={<DeleteIcon />}
                        onClick={() => removeItem(item.id)}
                      >
                        Eliminar
                      </Button>
                    </Stack>
                  </Box>
                </>
              ))}
              <Box>
                <Heading as="h1" size="lg" mt={10} mb={4} color={"beige"}>
                  Total de la compra: $
                  {items.reduce((pv, cv) => pv + cv.price * cv.quantity, 0)}
                </Heading>
              </Box>
              <Box py={10}>
                <Button
                  as={Button}
                  variant={"solid"}
                  colorScheme={"orange"}
                  size={"sm"}
                  mr={4}
                  leftIcon={<SmallCloseIcon />}
                  onClick={() => clear(items)}
                >
                  Vaciar Mi Lista
                </Button>

                <Link to="/">
                  <Button
                    as={Button}
                    variant={"solid"}
                    colorScheme={"teal"}
                    size={"sm"}
                    mr={4}
                    leftIcon={<ArrowBackIcon />}
                  >
                    Seguir Comprando
                  </Button>
                </Link>
              </Box>
            </>
          )}
        </Box>
      </Box>
    </Center>
  );
};

export default Cart;

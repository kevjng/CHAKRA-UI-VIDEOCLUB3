import React from 'react'
import { Box, Heading, Text } from "@chakra-ui/react";
import { CheckCircleIcon } from "@chakra-ui/icons";

const Cart = () => {
  return (
    <Box textAlign="center" py={10} px={6}>
      <CheckCircleIcon boxSize={"50px"} color={"green.500"} />
      <Heading as="h2" size="xl" mt={6} mb={2}>
        Esta es tu seleccion de Mi Lista
      </Heading>
      <Text color={"gray.500"}>
        Todas las peliculas y series que hayas agregado a Mi Lista apareceran en esta seccion 👌
      </Text>
    </Box>
  );
}

export default Cart
import { Box, Button, Center } from "@chakra-ui/react";
import {React, useContext, useState} from "react";
import { Link, useParams } from "react-router-dom";
import { CartContext } from "../../context/CartContex";

import {
  Container,
  Stack,
  Text,
  Image,
  Flex,
  VStack,
  Heading,
  SimpleGrid,
  StackDivider,
  useColorModeValue,
  List,
  ListItem,
} from "@chakra-ui/react";

//COMPONENTES
import Contador from "../Contador/Contador";

export default function ItemDetail({ item }) {
  const { id, price, title, img, tipo, año, genero, stock } = item;
  const [counter, setCounter] = useState(0);
  const { addItem } = useContext(CartContext)
  
  const params = useParams();

  /*   console.log(params.id);*/
  
  const onAdd = (contador) => {

    setCounter(contador);  
    console.log(
      "soy Agregar a Mi Lista y el valor del contador es:",
      contador, "el stock del producto es", stock,
      "del item-detail",
      params.id
    );
  };

  return (
    <Center>
      <Container maxW={"7xl"}>
        <SimpleGrid
          columns={{ base: 1, lg: 2 }}
          spacing={{ base: 8, md: 10 }}
          py={{ base: 18, md: 24 }}
        >
          <Flex>
            <Image
              rounded={"xl"}
              alt={title}
              src={img}
              fit={"cover"}
              align={"center"}
              w={"100%"}
              h={{ base: "100%", sm: "400px", lg: "640px" }}
            />
          </Flex>
          <Stack spacing={{ base: 6, md: 10 }}>
            <Box as={"header"}>
              <Heading
                lineHeight={1.1}
                fontWeight={600}
                fontSize={{ base: "2xl", sm: "4xl", lg: "5xl" }}
              >
                {title}
              </Heading>
              <Text
                color={useColorModeValue("gray.900", "gray.400")}
                fontWeight={300}
                fontSize={"2xl"}
              >
                {price}
              </Text>
            </Box>

            <Stack
              spacing={{ base: 4, sm: 6 }}
              direction={"column"}
              divider={
                <StackDivider
                  borderColor={useColorModeValue("gray.200", "gray.600")}
                />
              }
            >
              <VStack spacing={{ base: 4, sm: 6 }}>
                <Text
                  color={useColorModeValue("gray.500", "gray.400")}
                  fontSize={"2xl"}
                  fontWeight={"300"}
                >
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore
                </Text>
                <Text fontSize={"lg"}>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad
                  aliquid amet at delectus doloribus dolorum expedita hic, ipsum
                  maxime modi nam officiis porro, quae, quisquam quos
                  reprehenderit velit? Natus, totam.
                </Text>
              </VStack>
              <Box>
                <Text
                  fontSize={{ base: "16px", lg: "18px" }}
                  color={useColorModeValue("yellow.500", "yellow.300")}
                  fontWeight={"500"}
                  textTransform={"uppercase"}
                  mb={"4"}
                >
                  CODIGO DEL PRODUCTO
                </Text>

                <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
                  <List spacing={2}>
                    <ListItem>ID:</ListItem>
                  </List>
                  <List spacing={2}>
                    <ListItem>{id}</ListItem>
                  </List>
                </SimpleGrid>
              </Box>
              <Box>
                <Text
                  fontSize={{ base: "16px", lg: "18px" }}
                  color={useColorModeValue("yellow.500", "yellow.300")}
                  fontWeight={"500"}
                  textTransform={"uppercase"}
                  mb={"4"}
                >
                  DETALLE DE {tipo}
                </Text>

                <List spacing={2}>
                  <ListItem>
                    <Text as={"span"} fontWeight={"bold"}>
                      Genero:
                    </Text>{" "}
                    {genero}
                  </ListItem>
                  <ListItem>
                    <Text as={"span"} fontWeight={"bold"}>
                      Año:
                    </Text>{" "}
                    {año}
                  </ListItem>
                </List>
              </Box>
            </Stack>

            <Box align={"center"} mt={"5px"}>
              {counter !== 0 ? (
                <Link to="/Cart">
                  <div
                    style={{
                      backgroundColor: "red",
                      borderRadius: "1rem",
                      display: "block",
                      height: "55px",
                      justifyContent: "center",
                      alignContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Button>Finalizar compra</Button>
                  </div>
                </Link>
              ) : (
                <Contador stock={5} initial={0} onAdd={onAdd} />
              )}
            </Box>

            <Stack
              direction="row"
              alignItems="center"
              justifyContent={"center"}
            ></Stack>
          </Stack>
        </SimpleGrid>
      </Container>
    </Center>
  );
}

import {React, useContext, useState} from "react";
import { Link, /* useParams */ } from "react-router-dom";
import { CartContext } from "../../context/CartContex";


import { Box, Center } from "@chakra-ui/react";
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
import { ArrowLeftIcon, StarIcon } from "@chakra-ui/icons";

export default function ItemDetail({ item }) {
 /*  const params = useParams() */
  
  const { id, price, title, img1, tipo, año, genero, stock } = item;
  
  const { addItem } = useContext(CartContext); //paso el metodo añadir, lo traigo del context
  const [counter, setCounter] = useState(0);


  /*   console.log(params.id);*/

  const onAdd = (count) => {
    setCounter(count);
    addItem(item, count);

    /* console.log(
      "soy Agregar a Mi Lista y el valor del contador es:",
      count,
      "el stock del producto es",
      stock,
      "del item-detail",
      params.id
    ); */
  };

  return (
    <Center>
      <Container maxW={"7xl"}>
        <SimpleGrid
          columns={{ base: 1, lg: 2 }}
          spacing={{ base: 8, md: 10 }}
          py={24}
        >
          <Flex>
            <Image
              rounded={"xl"}
              alt={title}
              src={img1}
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
                color={useColorModeValue("gray.200", "gray.400")}
                fontWeight={300}
                fontSize={"2xl"}
              >
                ${price}
              </Text>
            </Box>

            <Stack
              spacing={{ base: 4, sm: 6 }}
              direction={"column"}
              divider={
                <StackDivider
                  borderColor={useColorModeValue("gray.300", "gray.500")}
                />
              }
            >
              <VStack alignItems={"baseline"} spacing={{ base: 4, sm: 6 }}>
                <Text
                  color={useColorModeValue("gray.300", "gray.400")}
                  fontSize={"md"}
                  fontWeight={"400"}
                >
                  Tipo ➡️
                  {item.tipo}
                </Text>
                <Text fontSize={"lg"}>{item.desc}</Text>
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
                    <ListItem>
                      ID:
                      {" " + id}
                    </ListItem>
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
                  DETALLE DE LA {tipo}
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
                  <ListItem>
                    <Text as={"span"} fontWeight={"bold"}>
                      Stock:
                    </Text>{" "}
                    {stock}
                  </ListItem>
                </List>
              </Box>
            </Stack>

            <Box align={"center"} mt={"5px"}>
              {counter !== 0 ? (
                <>
                  <Link to="/Cart">
                    <div
                      style={{
                        backgroundColor: "#0C847D",
                        borderRadius: "1rem",
                        display: "flex",
                        height: "55px",
                        justifyContent: "center",
                        alignContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <StarIcon />
                      <Text ml={2}>Ir a mi Lista</Text>
                    </div>
                  </Link>

                  <Link to="/">
                    <Box
                      backgroundColor={"red.400"}
                      style={{
                        borderRadius: "1rem",
                        display: "flex",
                        height: "55px",
                        justifyContent: "center",
                        alignContent: "center",
                        alignItems: "center",
                        margin: "1rem 0rem",
                      }}
                    >
                      <ArrowLeftIcon />
                      <Text ml={2}>Volver</Text>
                    </Box>
                  </Link>
                </>
              ) : (
                <>
                  <Contador stock={item.stock} initial={1} onAdd={onAdd} />
                  <Link to="/">
                    <Box
                      backgroundColor={"red.400"}
                      style={{
                        borderRadius: "1rem",
                        display: "flex",
                        height: "55px",
                        justifyContent: "center",
                        alignContent: "center",
                        alignItems: "center",
                        margin: "1rem 0rem",
                      }}
                    >
                      <ArrowLeftIcon />
                      <Text ml={2}>Volver</Text>
                    </Box>
                  </Link>
                </>
              )}
            </Box>
          </Stack>
        </SimpleGrid>
      </Container>
    </Center>
  );
}

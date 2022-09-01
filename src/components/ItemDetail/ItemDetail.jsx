import { Box, Center } from "@chakra-ui/react";
import React from "react";
import { useParams } from "react-router-dom";

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

import Contador from "../Contador/Contador";

export default function ItemDetail({ item }) {
  const { id, price, title, img, tipo, año } = item;
  const params = useParams();

  console.log(params.id);

  const onAdd = (contador) => {
    console.log(
      "soy Agregar a Mi Lista y el valor del contador es:",
      contador,
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
              alt={"product image"}
              src={img}
              fit={"cover"}
              align={"center"}
              w={"100%"}
              h={{ base: "100%", sm: "400px", lg: "500px" }}
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
                    {/* <ListItem>Master Chronometer Certified</ListItem>{" "}
                    <ListItem>Tachymeter</ListItem> */}
                  </List>
                  <List spacing={2}>
                    <ListItem>{id}</ListItem>
                    {/* <ListItem>Chronometer</ListItem>
                    <ListItem>Small seconds</ListItem> */}
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
                  DETALLE DEL PRODUCTO
                </Text>

                <List spacing={2}>
                  <ListItem>
                    <Text as={"span"} fontWeight={"bold"}>
                      Genero:
                    </Text>{" "}
                    {tipo}
                  </ListItem>
                  <ListItem>
                    <Text as={"span"} fontWeight={"bold"}>
                      Año:
                    </Text>{" "}
                    {año}
                  </ListItem>
                  {/* <ListItem>
                    <Text as={"span"} fontWeight={"bold"}>
                      Case:
                    </Text>{" "}
                    Steel
                  </ListItem>
                  <ListItem>
                    <Text as={"span"} fontWeight={"bold"}>
                      Case diameter:
                    </Text>{" "}
                    42 mm
                  </ListItem>
                  <ListItem>
                    <Text as={"span"} fontWeight={"bold"}>
                      Dial color:
                    </Text>{" "}
                    Black
                  </ListItem>
                  <ListItem>
                    <Text as={"span"} fontWeight={"bold"}>
                      Crystal:
                    </Text>{" "}
                    Domed, scratch‑resistant sapphire crystal with
                    anti‑reflective treatment inside
                  </ListItem>
                  <ListItem>
                    <Text as={"span"} fontWeight={"bold"}>
                      Water resistance:
                    </Text>{" "}
                    5 bar (50 metres / 167 feet){" "}
                  </ListItem> */}
                </List>
              </Box>
            </Stack>

            <Box align={"center"} mt={"5px"}>
              <Contador stock={5} initial={0} onAdd={onAdd} />
            </Box>

            <Stack
              direction="row"
              alignItems="center"
              justifyContent={"center"}
            >
              {/* <MdLocalShipping /> */}
              {/*               <Text>2-3 dias habiles</Text>
               */}{" "}
            </Stack>
          </Stack>
        </SimpleGrid>
      </Container>
    </Center>
  );
}

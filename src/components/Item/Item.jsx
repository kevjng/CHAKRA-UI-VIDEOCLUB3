import React from "react";
import Contador from "../Contador/Contador";

import {
  Box,
  Center,
  useColorModeValue,
  Heading,
  Text,
  Stack,
  Image,
  Divider,
  } from "@chakra-ui/react";

  
  export default function Item({ id, title, price, img }) {
    
    const onAdd = (contador) => {
      console.log(
        "soy Agregar a Mi Lista y el valor del contador es:",
        contador
      );
    };


    return (
      <Center my={10}>
        <Box
          role={"group"}
          p={4}
          maxW={"230px"}
          w={"full"}
          bg={useColorModeValue("gray.400", "gray.900")}
          boxShadow={"dark-lg"}
          rounded={"lg"}
          pos={"relative"}
          zIndex={0}
        >
          <Box
            rounded={"lg"}
            mt={-10}
            pos={"relative"}
            height={"200px"}
            _after={{
              transition: "all .3s ease",
              content: '""',
              w: "full",
              h: "full",
              pos: "absolute",
              top: 5,
              left: 0,
              backgroundImage: `url(${img})`,
              filter: "blur(10px)",
              zIndex: -1,
            }}
            _groupHover={{
              _after: {
                filter: "blur(20px)",
              },
            }}
          >
            <Image
              rounded={"lg"}
              height={230}
              width={282}
              objectFit={"cover"}
              src={img}
            />
          </Box>
          <Stack pt={8} align={"center"}>
            <Text
              color={"gray.500"}
              fontSize={"sm"}
              textTransform={"uppercase"}
            >
              {/* Pelicula {id} */}
            </Text>
            <Divider />
            <Heading
              fontSize={"sm"}
              fontFamily={"body"}
              fontWeight={500}
              align={"center"}
            >
              {title}
            </Heading>
            <Divider />
            <Stack direction={"row"} align={"center"}>
              <Text fontWeight={400} fontSize={"x1"}>
                {price}
              </Text>
            </Stack>
          </Stack>
          <Box align={"center"} mt={"5px"}>
            <Contador stock={5} initial={0} onAdd={onAdd} />
          </Box>
        </Box>
      </Center>
    );
  }

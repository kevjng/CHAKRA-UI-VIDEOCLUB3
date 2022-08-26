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

const IMAGE =
  "https://images.unsplash.com/photo-1518051870910-a46e30d9db16?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80";

export default function Item({ id, title, img, price }) {

  const onAdd = (contador) => {
  console.log("soy Agregar a Mi Lista y el valor del contador es:", contador)
}

  return (
    <Center py={12} margin={"1.5"}>
      <Box
        role={"group"}
        p={4}
        maxW={"230px"}
        w={"full"}
        bg={useColorModeValue("gray.400", "gray.900")}
        boxShadow={"dark-lg"}
        rounded={"lg"}
        pos={"relative"}
        zIndex={1}
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
            backgroundImage: `url(${IMAGE})`,
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
            src={IMAGE}
          />
        </Box>
        <Stack pt={8} align={"center"}>
          <Text color={"gray.500"} fontSize={"sm"} textTransform={"uppercase"}>
            {/* Pelicula {id} */}
          </Text>
          <Divider />
          <Heading fontSize={"sm"} fontFamily={"body"} fontWeight={500} align={"center"} > 
            {title}
          </Heading>
          <Divider />
          <Stack direction={"row"} align={"center"}>
            <Text fontWeight={400} fontSize={"x1"}>
              {price}
            </Text>
          </Stack>
        </Stack>
        <Box align={"center"} mt={"10px"}>
          <Contador stock={5} initial={0} onAdd={onAdd} />
        </Box>
      </Box>
    </Center>
  );
}

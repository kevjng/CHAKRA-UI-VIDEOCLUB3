import React from "react";
/* import Contador from "../Contador/Contador";*/
import { Link } from "react-router-dom"
import itemCSS from "./ItemCSS.css"

import {
  Box,
  Center,
  useColorModeValue,
  Heading,
  Text,
  Stack,
  Image,
  Divider,
  WrapItem,
  } from "@chakra-ui/react";

  
  export default function Item({ index, id, title, price, img, tipo, genero, stock, año, desc }) {
    
   


    return (
      <WrapItem>
        <Center my={"14"}>
          <Box
            role={"group"}
            p={4}
            maxW={"300px"}
            w={"full"}
            bg={useColorModeValue("gray.300", "gray.900")}
            boxShadow={"dark-lg"}
            rounded={"xl"}
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
              <Link to={`/item-detail/${id}`}>
                <Image
                  rounded={"lg"}
                  height={230}
                  width={282}
                  objectFit={"cover"}
                  src={img}
                  borderRadius="3xl"
                  objectPosition="0 -25px"
                  size="1"
                />
              </Link>
            </Box>
            <Stack pt={8} align={"center"}>
              <Divider />
              <Heading
                fontSize={"sm"}
                fontFamily={"body"}
                fontWeight={500}
                align={"center"}
              >
                {id}
              </Heading>
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
                <Text fontWeight={400} fontSize={"x1"}>
                  stock: {stock}
                </Text>
              </Stack>
              <Link to={`/item-detail/${id}`} className="masdetalles">
                {" "}
                Más detalles{" "}
              </Link>
            </Stack>
          </Box>
        </Center>
      </WrapItem>
    );
  }

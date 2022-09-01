import React from "react";
/* import Contador from "../Contador/Contador";*/
import { Link } from "react-router-dom"

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

  
  export default function Item({ index, id, title, price, img, tipo, genero }) {
    
   


    return (
      <WrapItem>
        
        <Center mt={"14"}>
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
              <Link to={`/item-detail/${id}`}>
                <Image
                  rounded={"lg"}
                  height={230}
                  width={282}
                  objectFit={"cover"}
                  src={img}
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
              </Stack>
            <Link to={`/item-detail/${id}`}> Más detalles </Link>
            </Stack>
            
          </Box>
        </Center>
      </WrapItem>
    );
  }

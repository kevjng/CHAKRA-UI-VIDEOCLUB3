import { Box, Center, Spinner } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList";
import Header from "../Header/Header";

const ItemListContainer = (props) => {
  const [items, setItems] = useState({});

  useEffect(() => {
    let arrPeliculas = [
      {
        id: 1,
        genero: "SuperHeroes",
        img: "/img/avangers.jpg",
        title: "Avangers - Infinity War",
        cantidad: 1,
        price: "$500",
        tipo: "serie",
      },
      {
        id: 2,
        genero: "Infantil",
        img: "/img/croods.jpg",
        title: "Los Croods - Una nueva era",
        cantidad: 1,
        price: "$500",
        tipo: "pelicula",
      },
      {
        id: 3,
        genero: "Infantil",
        img: "/img/cruella.jpg",
        title: "Cruella",
        cantidad: 1,
        price: "$700",
        tipo: "serie",
      },
      {
        id: 4,
        genero: "Aventura",
        img: "/img/jumanji.jpg",
        title: "Jumanji - Siguiente Nivel",
        cantidad: 1,
        price: "$800",
        tipo: "pelicula",
      },
      {
        id: 5,
        genero: "Aventura",
        img: "/img/jungle.jpg",
        title: "Jungle Cruise",
        cantidad: 1,
        price: "$900",
        tipo: "serie",
      },
      {
        id: 6,
        genero: "Infantil",
        img: "/img/luca.jpg",
        title: "Luca",
        cantidad: 1,
        price: "$500",
        tipo: "pelicula",
      },
      {
        id: 7,
        genero: "Suspenso",
        img: "/img/no-respires.jpg",
        title: "No Respires 2",
        cantidad: 1,
        price: "$1500",
        tipo: "serie",
      },
      {
        id: 8,
        genero: "Dibujos Animados",
        img: "/img/paw.jpg",
        title: "Paw Patrol - Jet to the Rescue",
        cantidad: 1,
        price: "$1000",
        tipo: "pelicula",
      },
      {
        id: 9,
        genero: "Aventura",
        img: "/img/space.jpg",
        title: "Space Jam",
        cantidad: 1,
        price: "$2500",
        tipo: "serie",
      },
      {
        id: 10,
        genero: "Dibujos Animados",
        img: "/img/tom.jpg",
        title: "Tom and Jerry",
        cantidad: 1,
        price: "$999",
        tipo: "pelicula",
      },
      {
        id: 11,
        genero: "Infatil",
        img: "/img/vivo.jpg",
        title: "Vivo!",
        cantidad: 1,
        price: "$500",
        tipo: "serie",
      },
      {
        id: 12,
        genero: "Aventura",
        img: "/img/spiderman3.jpg",
        title: "Spiderman 3",
        cantidad: 1,
        price: "$1240",
        tipo: "pelicula",
      },
    ];

    new Promise((resolve, reject) => {
      
      setTimeout(() => {
        resolve(arrPeliculas);
      }, 2000);
    }).then((data) => {
      setItems(data);
    });
  }, []);

  return (
    <>
      <Header />
      <Center justifyContent="space-around">
        <Box
          fontSize="5xl"
          fontWeight="bold"
          bgGradient="linear(to-r, red.400, orange.300, cyan.200)"
          bgClip="text"
        >
          De todo un poco para vos...
        </Box>
      </Center>
      <Center mx={"40"} maxW="1500px" minW="250px">
        {items.length ? (
          <ItemList info={props} items={items} />
        ) : (
          <Center py={"5vh"}>
            <Spinner
              thickness="4px"
              speed="0.65s"
              emptyColor="gray.200"
              color="blue.500"
              size="xl"
            />
          </Center>
        )}
      </Center>
    </>
  );
};

export default ItemListContainer;
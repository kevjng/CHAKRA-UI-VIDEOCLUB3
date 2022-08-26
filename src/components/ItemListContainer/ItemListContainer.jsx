import { Spinner } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList";
import { Container, Box } from "@chakra-ui/react";

const ItemListContainer = (props) => {
  const [items, setItems] = useState({});

  useEffect(() => {
    let arrPeliculas = [
      {
        id: 1,
        tipo: "SuperHeroes",
        img: "./src/img/avangers.jpg",
        title: "Avangers - Infinity War",
        cantidad: 1,
        price: "$500",
      },
      {
        id: 2,
        tipo: "Infantil",
        img: "./src/img/croods.jpg",
        title: "Los Croods - Una nueva era",
        cantidad: 1,
        price: "$500",
      },
      {
        id: 3,
        tipo: "Infantil",
        img: "./src/img/cruella.jpg",
        title: "Cruella",
        cantidad: 1,
        price: "$700",
      },
      {
        id: 4,
        tipo: "Aventura",
        img: "./src/img/jumanji.jpg",
        title: "Jumanji - Siguiente Nivel",
        cantidad: 1,
        price: "$800",
      },
      {
        id: 5,
        tipo: "Aventura",
        img: "./src/img/jungle.jpg",
        title: "Jungle Cruise",
        cantidad: 1,
        price: "$900",
      },
      {
        id: 6,
        tipo: "Infantil",
        img: "./src/img/luca.jpg",
        title: "Luca",
        cantidad: 1,
        price: "$500",
      },
      {
        id: 7,
        tipo: "Suspenso",
        img: "./src/img/no respires.jpg",
        title: "No Respires 2",
        cantidad: 1,
        price: "$1500",
      },
      {
        id: 8,
        tipo: "Dibujos Animados",
        img: "./src/img/paw.jpg",
        title: "Paw Patrol - Jet to the Rescue",
        cantidad: 1,
        price: "$1000",
      },
      {
        id: 9,
        tipo: "Aventura",
        img: "./src/img/space.jpg",
        title: "Space Jam",
        cantidad: 1,
        price: "$2500",
      },
      {
        id: 10,
        tipo: "Dibujos Animados",
        img: "./src/img/tom.jpg",
        title: "Tom and Jerry",
        cantidad: 1,
        price: "$999",
      },
      {
        id: 11,
        tipo: "Infatil",
        img: "./src/img/vivo.jpg",
        title: "Vivo!",
        cantidad: 1,
        price: "$500",
      },
    ];

    new Promise((resolve) => {
      setTimeout(() => {
        resolve(arrPeliculas);
      }, 2000);
    }).then((data) => {
      setItems(data);
    });
  }, []);

  return (
    <Container maxW="2xl" bg="blue.600" centerContent>
      <Box padding="4" bg="blue.400" maxW="md">
        {items.length ? (
          <ItemList info={props} items={items} />
        ) : (
          <Spinner size="xl" />
        )}
      </Box>
    </Container>
  );
};

export default ItemListContainer;

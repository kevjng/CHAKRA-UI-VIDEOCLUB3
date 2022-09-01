import { Center } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";

const ItemDetailContainer = () => {
  const { id } = useParams();
  const [item, setItem] = useState({});

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
        año: "2001",
      },
      {
        id: 2,
        genero: "Infantil",
        img: "/img/croods.jpg",
        title: "Los Croods - Una nueva era",
        cantidad: 1,
        price: "$500",
        tipo: "pelicula",
        año: "2002",
      },
      {
        id: 3,
        genero: "Infantil",
        img: "/img/cruella.jpg",
        title: "Cruella",
        cantidad: 1,
        price: "$700",
        tipo: "serie",
        año: "2003",
      },
      {
        id: 4,
        genero: "Aventura",
        img: "/img/jumanji.jpg",
        title: "Jumanji - Siguiente Nivel",
        cantidad: 1,
        price: "$800",
        tipo: "pelicula",
        año: "2004",
      },
      {
        id: 5,
        genero: "Aventura",
        img: "/img/jungle.jpg",
        title: "Jungle Cruise",
        cantidad: 1,
        price: "$900",
        tipo: "serie",
        año: "2005",
      },
      {
        id: 6,
        genero: "Infantil",
        img: "/img/luca.jpg",
        title: "Luca",
        cantidad: 1,
        price: "$500",
        tipo: "pelicula",
        año: "2006",
      },
      {
        id: 7,
        genero: "Suspenso",
        img: "/img/no-respires.jpg",
        title: "No Respires 2",
        cantidad: 1,
        price: "$1500",
        tipo: "serie",
        año: "2007",
      },
      {
        id: 8,
        genero: "Dibujos Animados",
        img: "/img/paw.jpg",
        title: "Paw Patrol - Jet to the Rescue",
        cantidad: 1,
        price: "$1000",
        año: "2008",
      },
      {
        id: 9,
        genero: "Aventura",
        img: "/img/space.jpg",
        title: "Space Jam",
        cantidad: 1,
        price: "$2500",
        tipo: "serie",
        año: "2009",
      },
      {
        id: 10,
        genero: "Dibujos Animados",
        img: "/img/tom.jpg",
        title: "Tom and Jerry",
        cantidad: 1,
        price: "$999",
        tipo: "pelicula",
        año: "2010",
      },
      {
        id: 11,
        genero: "Infatil",
        img: "/img/vivo.jpg",
        title: "Vivo!",
        cantidad: 1,
        price: "$500",
        tipo: "serie",
        año: "2011",
      },
      {
        id: 12,
        genero: "Aventura",
        img: "/img/spiderman3.jpg",
        title: "Spiderman 3",
        cantidad: 1,
        price: "$1240",
        tipo: "pelicula",
        año: "2012",
      },
    ];

    new Promise((resolve) => {
      setTimeout(() => {
        resolve(arrPeliculas.find((element) => element.id == id));
      }, 1);
    }).then((data) => {
      setItem(data);
    });
  }, [id]);

  return (
    <Center>
      <ItemDetail item={item} />
    </Center>
  );
};

export default ItemDetailContainer;

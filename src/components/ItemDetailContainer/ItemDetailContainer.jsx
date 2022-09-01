import { Center, Spinner } from "@chakra-ui/react";
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
        tipo: "SuperHeroes",
        img: "/img/avangers.jpg",
        title: "Avangers - Infinity War",
        cantidad: 1,
        price: "$500",
        año: "1989",
      },
      {
        id: 2,
        tipo: "Infantil",
        img: "/img/croods.jpg",
        title: "Los Croods - Una nueva era",
        cantidad: 1,
        price: "$500",
        año: "1990",
      },
      {
        id: 3,
        tipo: "Infantil",
        img: "/img/cruella.jpg",
        title: "Cruella",
        cantidad: 1,
        price: "$700",
        año: "1978",
      },
      {
        id: 4,
        tipo: "Aventura",
        img: "/img/jumanji.jpg",
        title: "Jumanji - Siguiente Nivel",
        cantidad: 1,
        price: "$800",
        año: "1890",
      },
      {
        id: 5,
        tipo: "Aventura",
        img: "/img/jungle.jpg",
        title: "Jungle Cruise",
        cantidad: 1,
        price: "$900",
        año: "1607",
      },
      {
        id: 6,
        tipo: "Infantil",
        img: "/img/luca.jpg",
        title: "Luca",
        cantidad: 1,
        price: "$500",
        año: "2001",
      },
      {
        id: 7,
        tipo: "Suspenso",
        img: "/img/no-respires.jpg",
        title: "No Respires 2",
        cantidad: 1,
        price: "$1500",
        año: "2002",
      },
      {
        id: 8,
        tipo: "Dibujos Animados",
        img: "/img/paw.jpg",
        title: "Paw Patrol - Jet to the Rescue",
        cantidad: 1,
        price: "$1000",
        año: "2003",
      },
      {
        id: 9,
        tipo: "Aventura",
        img: "/img/space.jpg",
        title: "Space Jam",
        cantidad: 1,
        price: "$2500",
        año: "2004",
      },
      {
        id: 10,
        tipo: "Dibujos Animados",
        img: "/img/tom.jpg",
        title: "Tom and Jerry",
        cantidad: 1,
        año: "2005",
      },
      {
        id: 11,
        tipo: "Infatil",
        img: "/img/vivo.jpg",
        title: "Vivo!",
        cantidad: 1,
        price: "$500",
        año: "2006",
      },
      {
        id: 12,
        tipo: "Aventura",
        img: "/img/spiderman3.jpg",
        title: "Spiderman 3",
        cantidad: 1,
        price: "$1240",
        año: "2007",
      },
    ];

    new Promise((resolve) => {
      setTimeout(() => {
        resolve(arrPeliculas.find((element) => element.id == id));
      }, 2000);
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

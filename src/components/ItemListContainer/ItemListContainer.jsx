import { Box, Center, Spinner } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList";
import Header from "../Header/Header";
import db from "../../services"
import { collection, getDocs } from "firebase/firestore";
/* import { useParams } from "react-router-dom";*/

const ItemListContainer = () => {
  const [items, setItems] = useState({});
/*   const {id} = useParams();*/
/*   console.log(id); */
  

 /*  useEffect(() => {
     let arrPeliculas = [
       {
         id: 1,
         genero: "SuperHeroes",
         img: "/img/avangers.jpg",
         title: "Avangers - Infinity War",
         cantidad: 1,
         price: 500,
         tipo: "serie",
         stock: 1,
         año: 2001,
         desc: "Los superhéroes se alían para vencer al poderoso Thanos, el peor enemigo al que se han enfrentado. Si Thanos logra reunir las seis gemas del infinito: poder, tiempo, alma, realidad, mente y espacio, nadie podrá detenerlo.",
       },
       {
         id: 2,
         genero: "Infantil",
         img: "/img/croods.jpg",
         title: "Los Croods - Una nueva era",
         cantidad: 1,
         price: 500,
         tipo: "pelicula",
         stock: 2,
         año: 2002,
         desc: "La familia prehistórica de los Crood enfrenta el desafío de una familia rival, los Betterman, quienes afirman estar más evolucionados.",
       },
       {
         id: 3,
         genero: "Infantil",
         img: "/img/cruella.jpg",
         title: "Cruella",
         cantidad: 1,
         price: 700,
         tipo: "serie",
         stock: 3,
         año: 2003,
         desc: "La joven Estella está decidida a hacerse un nombre en el mundo de la moda. Tras hacerse amiga de la baronesa von Hellman, una leyenda de la moda, abraza su lado malvado para convertirse en la vengativa Cruella.",
       },
       {
         id: 4,
         genero: "Aventura",
         img: "/img/jumanji.jpg",
         title: "Jumanji - Siguiente Nivel",
         cantidad: 1,
         price: 800,
         tipo: "pelicula",
         stock: 4,
         año: 2004,
         desc: "Spencer regresa al fantástico mundo de Jumanji. Sus amigos, Martha, Fridge y Bethany vuelven a entrar al juego para llevarlo de vuelta a casa, pero todo sobre Jumanji está a punto de cambiar, ya que descubren más obstáculos y peligros que superar.",
       },
       {
         id: 5,
         genero: "Aventura",
         img: "/img/jungle.jpg",
         title: "Jungle Cruise",
         cantidad: 1,
         price: 900,
         tipo: "serie",
         stock: 5,
         año: 2005,
         desc: "Un pequeño barco lleva a un grupo de viajeros a través de una jungla llena de peligrosos animales y reptiles. Sin embargo, la embarcación cuenta con un elemento secreto.",
       },
       {
         id: 6,
         genero: "Infantil",
         img: "/img/luca.jpg",
         title: "Luca",
         cantidad: 1,
         price: 500,
         tipo: "pelicula",
         stock: 6,
         año: 2006,
         desc: "Luca es un monstruo marino que vive debajo de un pueblo de la costa italiana. Cuando sale a la superficie, adquiere una apariencia humana, y conoce a un nuevo amigo, igual que él. Juntos emprenden una aventura entre humanos que odian a los monstruos.",
       },
       {
         id: 7,
         genero: "Suspenso",
         img: "/img/no-respires.jpg",
         title: "No Respires 2",
         cantidad: 1,
         price: 1500,
         tipo: "serie",
         stock: 7,
         año: 2007,
         desc: "Un veterano ciego debe usar su entrenamiento militar para salvar a un joven huérfano de un grupo de matones que irrumpen en su casa.",
       },
       {
         id: 8,
         genero: "Dibujos Animados",
         img: "/img/paw.jpg",
         title: "Paw Patrol - Jet to the Rescue",
         cantidad: 1,
         price: 1000,
         tipo: "pelicula",
         stock: 8,
         año: 2008,
         desc: "Cuando el intrigante Duke roba una gema de levitación, PAW Patrol debe acudir a rescatar antes de que la ciudad se pierda para siempre.",
       },
       {
         id: 9,
         genero: "Aventura",
         img: "/img/space.jpg",
         title: "Space Jam",
         cantidad: 1,
         price: 2500,
         tipo: "serie",
         stock: 9,
         año: 2009,
         desc: "La estrella de la NBA, Michael Jordan, ayuda a los Looney Tuners a vencer a los Monstars en un partido de baloncesto.",
       },
       {
         id: 10,
         genero: "Dibujos Animados",
         img: "/img/tom.jpg",
         title: "Tom and Jerry",
         cantidad: 1,
         price: 999,
         tipo: "pelicula",
         stock: 10,
         año: 2010,
         desc: "Jerry se muda a un hotel de Nueva York, pero un desesperado planificador de bodas contrata a Tom para deshacerse de él.",
       },
       {
         id: 11,
         genero: "Infatil",
         img: "/img/vivo.jpg",
         title: "Vivo!",
         cantidad: 1,
         price: 500,
         tipo: "serie",
         stock: 11,
         año: 2011,
         desc: "Vivo, un kinkajú dotado de un brillante talento para la música, se embarca en una aventura desde La Habana hasta Miami para entregarle una canción al antiguo amor de su adorado dueño.",
       },
       {
         id: 12,
         genero: "Aventura",
         img: "/img/spiderman3.jpg",
         title: "Spiderman 3",
         cantidad: 1,
         price: 1240,
         tipo: "pelicula",
         stock: 12,
         año: 2012,
         desc: "Peter Parker sufre una terrible transformación cuando su traje de Hombre Araña se vuelve negro y libera una personalidad oscura y vengativa.",
       },
     ]; */
  
  useEffect(() => {
    const getColData = async () => {
      
      try {
        const data = collection(db, "items");
        const col = await getDocs(data);
        const res = col.docs.map((doc) => doc = { id: doc.id, ...doc.data() })
        setItems(res)
        /* console.log(res) */
      } catch (error) {
        /* console.log(error) */
      }

      }  

    getColData();

    return () => {
      
    }
  }, [])
  

   /*  new Promise((resolve, reject) => {
      
      setTimeout(() => {
        resolve(arrPeliculas);
      }, 2000);
    }).then((data) => {
      if (id) {
        const tipoFiltrado = data.filter((item) =>
          item.tipo === id
        )
        console.log("tipo filtrado", tipoFiltrado);
        setItems (tipoFiltrado)
      } else {
        setItems(data);        
      }
    });
  }, [id]); */

 return (
    <Center>
      <Header />
      <Center>
        <Box
          fontSize="6xl"
          fontWeight="bold"
          bgGradient="linear(to-r, blue.400, orange.300, cyan.200)"
          bgClip="text"
          mb={8}
          mx={4}
        >
          De todo un poco para vos...
        </Box>
      </Center>
      <Center maxW="1500px" minW="250px">
        {items.length ? (
          <ItemList items={items} />
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
    </Center>
  );
};

export default ItemListContainer;

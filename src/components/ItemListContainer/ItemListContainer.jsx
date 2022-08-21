import { Box, Spinner } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList";

const ItemListContainer = (props) => {

  const [items, setItems] = useState({});
  
  useEffect(() => {

    let products = [{ id: 1, title: "Pelicula 1", price: 100 }, { id: 2, title: "Pelicula 2", price: 200 }, { id: 3, title: "Pelicula 3", price: 300 }];

    new Promise((resolve, reject) => {

      setTimeout(() => {
        resolve(products);
      }, 2000);

    }).then(data => {
      setItems(data);
    })
  } , []);

  return (
    <Box
      style={{
        display: "flex",
        width: "98%",
        justifyContent: "center",
        alignItems: "center",
        borderRadius:"10px",
        padding: "3rem 1rem",
        boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
        backgroundColor: "black",
        margin: "1rem auto",
      }}
    >
      {/* <span>{props.info}</span> */}
      <div>
        <span>
          {items.lenght ? 
            <ItemList items={items} /> :
            <Spinner></Spinner>}
          </span>
      </div>
    </Box>
  );
};

export default ItemListContainer;

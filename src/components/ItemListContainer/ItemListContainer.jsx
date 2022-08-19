import { Box } from "@chakra-ui/react";
import React from "react";
/* import { Grid, GridItem } from "@chakra-ui/react"; */

const ItemListContainer = (props) => {
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
      <span>{props.info}</span> {/* "desafio 1" */}
    </Box>
  );
};

export default ItemListContainer;

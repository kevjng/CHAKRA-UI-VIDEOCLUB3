import { Box, Center } from '@chakra-ui/react';
import React from 'react'

export default function ItemDetail({ item }) {
    const { id, price, title, img } = item;
    return (
                <Center>
        <Box>
        <img src={img} alt=""></img>
        <h1>Titulo: {title}</h1>
        <h1>ID: {id}</h1>
                <h1>Precio {price}</h1>
            </Box>
            
            
        </Center>
    );
}

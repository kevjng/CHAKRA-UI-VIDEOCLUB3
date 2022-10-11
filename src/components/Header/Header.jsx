import { Button } from '@chakra-ui/button';
import { useColorMode } from '@chakra-ui/color-mode'
import { Stack, Divider, Flex, Box, Text } from '@chakra-ui/layout';
import { useMediaQuery } from '@chakra-ui/media-query';
import React from 'react'

function Header() {

    const { colorMode } = useColorMode();
    const isDark = colorMode === "dark";

    const [isNotSmallerScreen] = useMediaQuery("(min-width:600px)");

    return (
      <Stack align={"center"} pt={0} mx={0}>
        <Flex
          direction={isNotSmallerScreen ? "row" : "column"}
          spacing="200px"
          my={"24"}
          mx={"24"}
          /* p={isNotSmallerScreen ? "24" : "24"} */
          alignSelf="center"
          color={"white"}
        >
          <Box align="flex-start">
            <Text
              bgGradient="linear(to-l, gold, pink)"
              bgClip="text"
              fontSize={"7xl"}
              fontWeight="extrabold"
              align={"start"}
              mx={"4"}
            >
              Bienvenido a VideoClub 3
            </Text>

            <Divider />
            <Text
              mx={"4"}
              color={isDark ? "gray.200" : "gray.200"}
              fontSize="xl"
            >
              Evolucionamos, volvimos.
            </Text>

            <Text
              mx={"4"}
              my={"8"}
              fontSize="4xl"
              fontWeight={700}
              lineHeight={10}
            >
              Una nueva forma de mirar contenido sin restricciones, donde estes,
              como estes y sin rebobinar tu peli o serie favorita 😍
            </Text>
            <Divider />
            <Button
              mt={8}
              mx={"4"}
              bgGradient="linear(to-l, pink.500, red.500)"
              _hover={{
                bgGradient: "linear(to-l, red.500, yellow.500)",
              }}
            >
              Conoce más de nosotros
            </Button>
          </Box>
        </Flex>
      </Stack>
    );
}

export default Header

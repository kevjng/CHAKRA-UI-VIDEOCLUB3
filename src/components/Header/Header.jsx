import { Button } from '@chakra-ui/button';
import { useColorMode } from '@chakra-ui/color-mode'
import { Image } from '@chakra-ui/image';
import { Stack, Divider, Flex, Box, Text } from '@chakra-ui/layout';
import { useMediaQuery } from '@chakra-ui/media-query';
import React from 'react'

function Header() {

    const { colorMode } = useColorMode();
    const isDark = colorMode === "dark";

    const [isNotSmallerScreen] = useMediaQuery("(min-width:600px)");

    return (
      <Stack>
        <Flex
          direction={isNotSmallerScreen ? "row" : "column"}
          spacing="200px"
          p={isNotSmallerScreen ? "32" : "0"}
          alignSelf="flex-start"
        >
          <Box mt={isNotSmallerScreen ? "0" : 16} align="flex-start">
            <Text fontSize="5xl" fontWeight="semibold">
              Bienvenido a
            </Text>
            <Text
              fontSize="7xl"
              fontWeight="bold"
              bgGradient="linear(to-r, cyan.400, blue.500, purple.600)"
              bgClip="text"
            >
              VideoClub 3
            </Text>
            <Divider />
            <Text color={isDark ? "gray.200" : "gray.500"}>
              Evolucionamos, volvimos.
            </Text>

            <Text fontSize="xl" fontWeight={700} lineHeight={10}>
              Una nueva forma de mirar contenido sin restricciones, donde estes,
              como estes y sin rebobinar tu peli o serie favorita 😍
            </Text>
            <Divider />
            <Button
              mt={8}
              colorScheme="blue" /* onClick={() => window.open("#")} */
            >
              Conoce más de nosotros
            </Button>
          </Box>
          <Image
            alignSelf="center"
            mt={isNotSmallerScreen ? "0" : "12"}
            mb={isNotSmallerScreen ? "0" : "12"}
            ml={isNotSmallerScreen ? "8" : "16"}
            borderRadius="full"
            backgroundColor="transparent"
            boxShadow="lg"
            boxSize="400px"
            src="https://i.blogs.es/b84106/portada/1366_2000.jpg"
          />
        </Flex>
      </Stack>
    );
}

export default Header

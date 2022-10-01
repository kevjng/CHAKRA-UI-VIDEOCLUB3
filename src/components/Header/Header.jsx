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
          color={"white"}
        >
          <Box mt={isNotSmallerScreen ? "0" : 16} align="flex-start">
            <Text
              bgGradient="linear(to-l, #7928CA, #FF0080)"
              bgClip="text"
              fontSize="7xl"
              fontWeight="extrabold"
            >
              Bienvenido a VideoClub 3
            </Text>

            <Divider />
            <Text color={isDark ? "gray.200" : "gray.200"} fontSize="xl">
              Evolucionamos, volvimos.
            </Text>

            <Text my={8} fontSize="4xl" fontWeight={700} lineHeight={10}>
              Una nueva forma de mirar contenido sin restricciones, donde estes,
              como estes y sin rebobinar tu peli o serie favorita 😍
            </Text>
            <Divider />
            <Button
              mt={8}
              bgGradient="linear(to-l, pink.500, red.500)"
              _hover={{
                bgGradient: "linear(to-l, red.500, yellow.500)",
              }}
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

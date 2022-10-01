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
      <Stack align={"center"} pt={10} mx={10}>
        <Flex
          direction={isNotSmallerScreen ? "row" : "column"}
          spacing="200px"
          p={isNotSmallerScreen ? "32" : "0"}
          alignSelf="center"
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
          <Flex
            flex={1}
            justify={"center"}
            align={"center"}
            position={"relative"}
            w={"full"}
          >
           
            <Box
              position={"relative"}
              height={"300px"}
              rounded={"2xl"}
              boxShadow={"2xl"}
              width={"full"}
              overflow={"hidden"}
            >
              
              <Image
                alt={"Hero Image"}
                fit={"cover"}
                align={"center"}
                w={"100%"}
                h={"100%"}
                src={
                  "https://de10.com.mx/sites/default/files/styles/detalle_nota_1080x666_v22/public/2021/12/15/sagas_spider_man.jpg?itok=MBWO7KSC"
                }
              />
            </Box>
          </Flex>
        </Flex>
      </Stack>
    );
}

export default Header

import { Heading } from "@chakra-ui/layout";

import { Flex, IconButton, useColorModeValue } from "@chakra-ui/react";

import { VStack, Spacer } from "@chakra-ui/layout";
import { FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <>
      <VStack
        p={20}
        bg={useColorModeValue("whiteAlpha.500", "gray.900")}
        mt={"14"}
      >
        <Flex w="100%">
          <Heading
            ml="1"
            size="xs"
            fontWeight="semibold"
            color="cyan.400"
            alignSelf={"center"}
          >
            by kvj
          </Heading>

          <Spacer></Spacer>
          <IconButton ml={8} icon={<FaInstagram />} isRound="true"></IconButton>
          <IconButton ml={2} icon={<FaLinkedin />} isRound="true"></IconButton>
          <IconButton ml={2} icon={<FaGithub />} isRound="true"></IconButton>
        </Flex>
      </VStack>
    </>
  );
}

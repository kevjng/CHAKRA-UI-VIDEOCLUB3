//COMPONENTES
import Cartwidget from "../Cartwidget/Cartwidget";
import config from "./config.json"

import { NavLink } from "react-router-dom";
import { Heading } from "@chakra-ui/layout";
import {
  Box,
  Flex,
  Avatar,
  HStack,
  /* Link, */
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  /*   Stack, */
  MenuList,
} from "@chakra-ui/react";
import {
  HamburgerIcon,
  CloseIcon,
  Search2Icon,
  ChevronDownIcon,
  BellIcon,
  SettingsIcon,
  EditIcon,
  QuestionOutlineIcon,
} from "@chakra-ui/icons";

import { useColorMode } from "@chakra-ui/color-mode";
import { FaSun, FaMoon } from "react-icons/fa";

/* const Links = ["Inicio", "Series", "Películas"];

const NavLinks = ({ children }) => (
  <Link
    px={2}
    py={1}
    rounded={"md"}
    _hover={{
      textDecoration: "none",
      bg: useColorModeValue("gray.50", "gray.500"),
    }}
    href={"#"}
  >
    <Box />
    {children}
  </Link>
); */

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";

  return (
    <>
      <Box bg={useColorModeValue("gray.100", "gray.900")} px={15}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={"center"}>
            <Heading ml="8" size="md" fontWeight="bold" color="teal.400">
              <NavLink to={"/"}>
                <img src="/img/logo.png" alt="logo"></img>
              </NavLink>
            </Heading>
            <HStack
              as={"nav"}
              spacing={4}
              display={{ base: "none", md: "flex" }}
            >
              {config.routes.map((ruta, index) => (
                <NavLink key={index} to={ruta.to}>{ruta.label}</NavLink>
              ))
              }

              
              {/* <NavLink to={"/"}>Home</NavLink>
              <NavLink to={"/peliculas"}>Peliculas</NavLink>
              <NavLink to={"/series"}>Series</NavLink> */}
              {/*  {Links.map((link) => (
                <NavLinks key={link}>{link}</NavLinks>
              ))} */}
            </HStack>
          </HStack>
          <Flex alignItems={"center"}>
            <button>
              <Search2Icon mr={6} w={4} />
            </button>
            <button>
              <BellIcon mr={6} w={5} h={5} />
            </button>
            <Cartwidget />
            <Menu>
              <MenuButton
                as={Button}
                rightIcon={<ChevronDownIcon />}
                rounded={"full"}
                variant={"link"}
                cursor={"pointer"}
                minW={0}
              >
                <Avatar
                  size={"sm"}
                  src={
                    "https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                  }
                  w={10}
                  h={10}
                  mr={0}
                />
              </MenuButton>
              <MenuList>
                <MenuItem>
                  <Avatar
                    size={"sm"}
                    src={
                      "https://images.unsplash.com/photo-1522307837370-cc113a36b784?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                    }
                    w={8}
                    h={8}
                    mr={2}
                  />
                  Perfil 1
                </MenuItem>
                <MenuItem>
                  <Avatar
                    size={"sm"}
                    src={
                      "https://images.unsplash.com/photo-1519783558103-d3eeaac092a9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                    }
                    w={8}
                    h={8}
                    mr={2}
                  />
                  Perfil 2
                </MenuItem>
                <MenuItem>
                  <EditIcon mr={2} />
                  Administrar perfiles
                </MenuItem>
                <MenuDivider />
                <MenuItem>
                  {" "}
                  <SettingsIcon mr={2} />
                  Cuenta
                </MenuItem>
                <MenuItem>
                  <QuestionOutlineIcon mr={2} />
                  Centro de ayuda
                </MenuItem>
                <MenuDivider />
                <MenuItem>Cerrar sesión</MenuItem>
              </MenuList>
            </Menu>
            <IconButton
              ml={8}
              icon={isDark ? <FaSun /> : <FaMoon />}
              isRound="true"
              onClick={toggleColorMode}
            />
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            {/*  <Stack as={"nav"} spacing={4}>
              {Links.map((link) => (
                <NavLinks key={link}>{link}</NavLinks>
              ))}
            </Stack> */}
          </Box>
        ) : null}
      </Box>
    </>
  );
}

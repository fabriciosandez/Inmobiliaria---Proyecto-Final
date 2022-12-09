import React from "react";
import "./NavbarSM.css";
import { useState } from "react";
import { Flex, Image, Button, Box, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const NavbarSM = () => {
  const [menu, setMenu] = useState(false);
  const toggleMenu = () => {
    setMenu(!menu);
  };
  return (
    <>
      <Box
        className="headerBoxBottom"
        display={{ base: "flex", md: "flex", lg: "none" }}
        position="sticky"
        top="0"
      >
        <Box width="40%" h="auto" display="flex" alignItems="center">
          <Box
            color="black"
            bgColor="black"
            position="relative"
            width="60vw"
            h="auto"
            justifyContent="flex-start"
            paddingLeft="5px"
            alignContent="center"
          >
            <Button
              onClick={toggleMenu}
              className="hambuergerButton"
              color="black"
              _hover={{
                background: "black",
                color: "black",
              }}
              bgColor="black"
              width="35px"
              h="25px"
              justifyContent="flex-start"
              paddingLeft="10px"
            >
              <Image src="/Images/Hamburger.png"></Image>
            </Button>
          </Box>
        </Box>
        <Box
          w="60%"
          h="100%"
          bg="black"
          alignItems="center"
          justifyContent="right"
          display="flex"
          gap="15px"
          pr="20px"
        >
          <Button
            h="16px"
            w="90px"
            fontWeight="normal"
            fontSize="15px"
            borderRadius="0"
            bgColor="black"
            color="aliceblue"
            _hover={{ bgColor: "black" }}
          >
            <h3>Registrarse</h3>
          </Button>
          <Text color="aliceblue" fontSize="18px">
            |
          </Text>
          <Button
            h="16px"
            w="100px"
            fontWeight="normal"
            fontSize="15px"
            borderRadius="0"
            bgColor="black"
            color="aliceblue"
            pr="20px"
            _hover={{ bgColor: "black" }}
          >
            <h3>Iniciar Sesión</h3>
          </Button>
        </Box>
      </Box>
      <Flex
        className={`hamburgerMenu ${menu ? "isActive" : ""}`}
        w="100vw"
        h="0vh"
        pos="fixed"
        top="0"
        left="0"
        flexDir="column"
        alignItems="center"
        justifyContent="center"
        zIndex="20"
        bgColor="black"
      >
        <Image src="/Images/Logo.png" w="85%" height="auto"></Image>
        <ul className="hambuergernavUl">
          <li onClick={toggleMenu} className="hambuergerNavLi">
            <Link to="/">
              <a href="#">Inicio</a>
            </Link>
          </li>

          <li className="hambuergerNavLi">
            <Link to="/underconstruction">
              {" "}
              <a href="#">Nosotros</a>
            </Link>
          </li>

          <li className="hambuergerNavLi">
            <Link to="/underconstruction">
              <a href="#">Servicios</a>
            </Link>
          </li>
          <li className="hambuergerNavLi">
            <Link to="/underconstruction">
              <a href="#">Estudio</a>
            </Link>
          </li>
          <li className="hambuergerNavLi">
            <a href="#">Contacto</a>
          </li>
          <li className="hambuergerNavLi">
            <Link to="/upload">
              <a href="#">Administrar</a>
            </Link>
          </li>
        </ul>
        <button className="hambuergerButton" onClick={toggleMenu}>
          Cerrar
        </button>
      </Flex>
    </>
  );
};

export default NavbarSM;

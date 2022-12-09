import React from "react";
import { Button, Flex } from "@chakra-ui/react";
import "./NavbarLG.css";
import ContactModal from "../ContactForm/ContactModal";
import { Link } from "react-router-dom";

function NavbarLG() {
  return (
    <Flex
      className="flexNavbar"
      display={{ base: "none", md: "none", lg: "flex" }}
      w="79%"
      pos="relative"
      alignItems="center"
      justifyContent="flex-end"
    >
      <Link to="/">
        <Button
          h="16px"
          w="60px"
          fontWeight="normal"
          fontSize="15px"
          borderRadius="0"
          bgColor="black"
          color="aliceblue"
        >
          <h3>Inicio</h3>
        </Button>
      </Link>
      <Link to="/empresa">
        <Button
          h="16px"
          w="100px"
          fontWeight="normal"
          fontSize="15px"
          borderRadius="0"
          bgColor="black"
          color="aliceblue"
        >
          <h3>Nosotros</h3>
        </Button>
      </Link>
      <Link to={"/propiedades"}>
        <Button
          h="16px"
          w="100px"
          fontWeight="normal"
          fontSize="15px"
          borderRadius="0"
          bgColor="black"
          color="aliceblue"
        >
          <h3>Propiedades</h3>
        </Button>
      </Link>
      <Link to="/underconstruction">
        <Button
          h="16px"
          w="100px"
          fontWeight="normal"
          fontSize="15px"
          borderRadius="0"
          bgColor="black"
          color="aliceblue"
        >
          <h3>Servicios</h3>
        </Button>
      </Link>
      <Link to="/underconstruction">
        <Button
          h="16px"
          w="70px"
          fontWeight="normal"
          fontSize="15px"
          borderRadius="0"
          bgColor="black"
          color="aliceblue"
        >
          <h3>Estudio</h3>
        </Button>
      </Link>
      <ContactModal />
      <Link to="/upload">
        <Button
          h="16px"
          w="90px"
          fontWeight="normal"
          fontSize="15px"
          borderRadius="0"
          bgColor="black"
          color="aliceblue"
          ml="4px"
        >
          <h3>Administrar</h3>
        </Button>
      </Link>
    </Flex>
  );
}

export default NavbarLG;

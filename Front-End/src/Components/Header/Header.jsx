import React from "react";
import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";
import "./Header.css";
import RegisterModal from "../RegisterForm/RegisterModal";
import LoginModal from "../LoginForm/LoginModal";
import NavbarLG from "../Navbar/NavbarLG";
import NavbarSM from "../Navbar/NavbarSM";

function Header() {
  return (
    <Box
      minW="380px"
      w="auto"
      h="14 vh"
      position={{ base: "sticky", md: "relative", lg: "sticky" }}
      top="0"
      zIndex="20"
    >
      <Box
        className="headerBoxTop"
        w="100%"
        h="30%"
        bg="black"
        gap="20px"
        display={{ base: "none", md: "none", lg: "flex" }}
        alignItems="center"
        justifyContent="right"
        pr="30px"
      >
        <RegisterModal />
        <Text color="aliceblue" fontSize="18px" pb="2px">
          |
        </Text>
        <LoginModal />
      </Box>
      <Flex
        w="100%"
        h="70%"
        bg="black"
        alignItems="center"
        justify={{ base: "center", md: "center", lg: "flex-start" }}
        overflow="hidden"
      >
        <Image
          h="95  %"
          width="auto"
          p="0% 1% 0% 2%"
          src="/Images/Logo.png"
        ></Image>
        <NavbarLG />
      </Flex>

      <NavbarSM />
    </Box>
  );
}

export default Header;

import React from "react";
import "./NosotrosMain.css";
import {
  Box,
  Flex,
  Input,
  Text,
  Tabs,
  TabList,
  TabPanels,
  TabPanel,
  Tab,
  Image,
  Button,
} from "@chakra-ui/react";

function NosotrosMain() {
  return (
    <Box className="nosotrosMainBox" overflow="hidden">
      <Flex
        className="titleText"
        fontWeight="medium"
        alignContent="center"
        justify="center"
        fontSize={{
          base: "26px",
          sm: "26x",
          md: "32px",
          lg: "36px",
        }}
        textAlign="center"
        w="100%"
        height="50px"
        mt="2%"
      >
        <Image src="./Images/MarcoIzquierdo.jpg" w="70px" h="60px"></Image>
        <Text w={{ base: "60%", sm: "50%", md: "50%", lg: "45%" }}>
          Nosotros
        </Text>
        <Image
          src="./Images/MarcoDerecho.jpg"
          w="70px"
          h="60px"
          mt="-10px"
        ></Image>
      </Flex>
      <Flex w="100vw" h="auto" flexDirection={{ base: "column", sm: "row" }}>
        <Box
          className="nosotrosBox"
          w={{ base: "100%", sm: "50%", md: "50%", lg: "50%" }}
          minW={{ base: "100vw", sm: "50vw", md: "50vw", lg: "50vw" }}
          h="auto"
        >
          <Text
            className="companySubtitle"
            fontWeight="medium"
            alignContent="center"
            justify="center"
            fontSize={{
              base: "23px",
              sm: "21x",
              md: "27px",
              lg: "31px",
            }}
            textAlign="center"
            w="100%"
            height="50px"
          >
            Nuestro Equipo
          </Text>
          <img className="nosotrosImg" src="Images/Equipo.png"></img>
          Somos una empresa con 25 años de experiencia, fundada en octubre del
          1996. Nuestra actividad incluye: servicios de gestión, intermediación
          y asesoría, en la compra, venta y alquiler de inmuebles, así como la
          administración de propiedades. También desarrollamos proyectos
          inmobiliarios de manera integral, desde la ejecución y supervisión de
          obras, hasta su regularización, comercialización y administración post
          venta, siempre aportando valor a las inversiones en bienes raíces.
        </Box>

        <Box
          className="nosotrosBox"
          w={{ base: "100%", sm: "50%", md: "50%", lg: "50%" }}
          minW={{ base: "100vw", sm: "50vw", md: "50vw", lg: "50vw" }}
          h="auto"
        >
          <Text
            className="companySubtitle"
            fontWeight="medium"
            alignContent="center"
            justify="center"
            fontSize={{
              base: "23px",
              sm: "21x",
              md: "27px",
              lg: "31px",
            }}
            textAlign="center"
            w="100%"
            height="50px"
          >
            Visión
          </Text>
          <img className="nosotrosImg" src="Images/Familia.png"></img>
          Ser una empresa líder en el desarrollo de proyectos inmobiliarios,
          abierta a los cambios y generadora de nuevos modelos de negocios, con
          un horizonte estratégico a 100 años de permanencia de actividades.
          Reconocida a nivel nacional por la calidad de sus servicios, con una
          visión global y una sólida cultura corporativa de “clase mundial’’.
          Nos caracteriza la pasión por lo que hacemos. El trabajo cotidiano
          refleja nuestra cultura y convicciones corporativas, basadas en la
          honestidad, el respeto y el compromiso.
        </Box>
      </Flex>
      <Flex className="nosotrosSumate" h="40vh" w="100%" justify="center">
        <Flex
          w="90%"
          h="100%"
          justifyItems="center"
          flexDirection="column"
          alignItems="center"
          justifyContent={{
            base: "center",
            sm: "center",
            md: "start",
            lg: "start",
          }}
        >
          <Text
            fontWeight="medium"
            alignContent="center"
            justify="center"
            fontSize={{
              base: "23px",
              sm: "21x",
              md: "27px",
              lg: "31px",
            }}
            textAlign="center"
            w="100%"
            height="50px"
            mt="10%"
            color="white"
            textShadow="0.5px 0 #000, -0.5px 0 #000, 0 0.5px #000, 0 -0.5px #000,
             0.5px 0.5px #000, -0.5px -0.5px #000, 0.5px -0.5px #000, -0.5px 0.5px #000"
          >
            ¿Querés ser parte de nuestro equipo?
          </Text>
          <Button
            className="sumateButton"
            position="relative"
            h="auto"
            w="150px"
            p="5px"
            fontWeight="normal"
            fontSize="20px"
            borderRadius="5px"
            bgColor="black"
            color="white"
            _hover={{
              background: "white",
              color: "black",
            }}
            border="2px solid black"
          >
            <h3>SUMATE</h3>
          </Button>
        </Flex>
      </Flex>
    </Box>
  );
}

export default NosotrosMain;

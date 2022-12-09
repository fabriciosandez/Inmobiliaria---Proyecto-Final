import React, { useEffect, useState } from "react";
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
import { Link } from "react-router-dom";
import "./Main.css";
import Carrusel from "../Carrusel/Carrusel";
import { getAllProperties } from "../../api/Rule_property";

function Main() {
  const [inmuebles, setInmuebles] = useState([]);

  const listarInmuebles = async () => {
    await getAllProperties()
      .then((response) => {
        setInmuebles(response);
      })
      .catch((error) => {
        alert(error);
      });
  };

  useEffect(() => {
    listarInmuebles();
  }, []);
  return (
    <>
      <Flex
        h={{ base: "20vh", sm: "28vh", md: "40vh", lg: "86vh" }}
        maxW="100vw"
        minW="380px"
        position="relative"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
        overflow="hidden"
      >
        <video className="backVideo" autoPlay loop muted playsInline>
          <source src="./Video/MainVideo.mp4" />
        </video>
        <Text
          m="5%"
          mt="-2%"
          fontSize={{ base: "18px", md: "34px", lg: "40px" }}
          className="mainText"
          display={{ base: "none", md: "flex", lg: "flex" }}
          textShadow="0.5px 0 #000, -0.5px 0 #000, 0 0.5px #000, 0 -0.5px #000,
             0.5px 0.5px #000, -0.5px -0.5px #000, 0.5px -0.5px #000, -0.5px 0.5px #000"
        >
          TODOS MERECEN CUMPLIR SUS SUEÑOS
       </Text>

      </Flex>
      <div className="destacadas">
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
          mt="4%"
        >
          <Image
            src="./Images/MarcoIzquierdo.jpg"
            w="70px"
            h="60px"
            mt={{ base: "25px", sm: "0", md: "0", lg: "0" }}
          ></Image>
          <Text w={{ base: "60%", sm: "50%", md: "50%", lg: "45%" }}>
            Propiedades Destacadas
          </Text>
          <Image
            src="./Images/MarcoDerecho.jpg"
            w="70px"
            h="60px"
            mt="-10px"
          ></Image>
        </Flex>

        <div className="carruselCont">
          <Link className="divCarousel carrusel1" to={"/inmueble/1"}>
            <div>
              <Carrusel />
              <Flex
                className="propData"
                pl="0.5rem"
                pt="0.5rem"
                justifyItems="center"
                flexDirection="column"
              >
                <span>Superficie 100 m2</span>
                <span>Dormitorios 3 </span> <span>Baños 3</span>
                <h3>
                  Precio <strong>U$S 420.000</strong>
                </h3>
              </Flex>
            </div>
          </Link>
          <Link className="divCarousel carrusel1" to={"/inmueble/2"}>
            <div>
              <Carrusel />
              <Flex
                className="propData"
                pl="0.5rem"
                pt="0.5rem"
                justifyItems="center"
                flexDirection="column"
              >
                <span>Superficie 150 m2</span>
                <span>Dormitorios 3 </span> <span>Baños 3</span>
                <h3>
                  Precio <strong>U$S 520.000</strong>
                </h3>
              </Flex>
            </div>
          </Link>
          <Link className="divCarousel carrusel1" to={"/inmueble/2"}>
            <div>
              <Carrusel />
              <Flex
                className="propData"
                pl="0.5rem"
                pt="0.5rem"
                justifyItems="center"
                flexDirection="column"
              >
                <span>Superficie 120 m2</span>
                <span>Dormitorios 2 </span> <span>Baños 2</span>
                <h3>
                  Precio <strong>U$S 280.000</strong>
                </h3>
              </Flex>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Main;

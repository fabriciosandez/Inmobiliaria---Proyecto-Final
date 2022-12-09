import React, { useEffect, useState } from "react";
import "./RealEstateMain.css";
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
  Grid,
  GridItem,
  Select,
  Image,
  Button,
  filter,
} from "@chakra-ui/react";
import { getAllProperties } from "../../api/Rule_property";
import { Link } from "react-router-dom";
import Carrusel from "../Carrusel/Carrusel";

function RealEstateMain() {
  const [inmuebles, setInmuebles] = useState([]);
  const [allInmuebles, setAllInmuebles] = useState([]);
  const [tipoOpFilter, setTipoOpFilter] = useState("");
  const [localidadFilter, setLocalidadFilter] = useState("");
  const [tipoPropiedad, setTipoPropiedad] = useState("");
  
  const onChangeTipoOperacion = (e) => {
    setTipoOpFilter(e.target.value);
    console.log(e);
  };

  const onChangeLocalidad = (e) => {
    setLocalidadFilter(e.target.value);
    console.log(e);
  };

  const onChangeTipoPropiedad = (e) => {
    setTipoPropiedad(e.target.value);
    console.log(e);
  };

  const filtrarInmuebles = (e) => {
    let filtrados = allInmuebles.filter((inmueble) => {
      if (inmueble.operacion == tipoOpFilter) {
        return true;
      } else {
        return false;
      }
    });
    filtrados = allInmuebles.filter((inmueble) => {
      if (inmueble.localidad == localidadFilter) {
        return true;
      } else {
        return false;
      }
    });
    filtrados = allInmuebles.filter((inmueble) => {
      if (inmueble.tipo == tipoPropiedad) {
        return true;
      } else {
        return false;
      }
    });
    setInmuebles(filtrados);
  };

  const listarInmuebles = async () => {
    await getAllProperties()
      .then((response) => {
        setInmuebles(response);
        setAllInmuebles(response);
      })
      .catch((error) => {
        alert(error);
      });
  };

  useEffect(() => {
    listarInmuebles();
  }, []);

  return (
    <Flex flexDirection="column" alignItems="center" w="auto" bgColor="white">
      <Flex
        className="titleText"
        fontWeight="medium"
        alignContent="center"
        justify="center"
        fontSize={{
          base: "28px",
          sm: "26x",
          md: "32px",
          lg: "36px",
        }}
        textAlign="center"
        w="100%"
        height="50px"
        mt="15px"
      >
        <Image src="./Images/MarcoIzquierdo.jpg" w="70px" h="60px"></Image>
        <Text w={{ base: "45%", sm: "35%", md: "30%", lg: "30%" }}>
          Propiedades
        </Text>
        <Image
          src="./Images/MarcoDerecho.jpg"
          w="70px"
          h="60px"
          mt="-10px"
        ></Image>
      </Flex>
      <Flex
        flexWrap="wrap"
        w={{ base: "90%", sm: "90%", md: "90%", lg: "95%" }}
        justifyContent="space-evenly"
        m="2vw 5vh"
        alignItems="center"
        gap={{ base: "0", lg: "10px" }}
      >
        <Select
          onChange={onChangeTipoOperacion}
          className="selectors"
          border="2px "
          borderColor="black"
          minW="193px"
          w="20% !important"
          placeholder="Tipo de Operación"
        >
          <option value="Alquiler">Alquiler</option>
          <option onvalue="Venta">Venta</option>
        </Select>
        <Select
          onChange={onChangeLocalidad}
          className="selectors"
          border="2px "
          borderColor="black"
          minW="193px"
          w="20%"
          placeholder="Localidad"
        >
          <option value="Montevideo">Montevideo</option>
          <option value="Punta del Este">Punta del Este</option>
          <option value="Salinas">Salinas</option>
          <option value="Piriápolis">Piriápolis</option>
          <option value="Atlántida">Atlántida</option>
        </Select>
        <Select
          onChange={onChangeTipoPropiedad}
          className="selectors"
          border="2px "
          borderColor="black"
          minW="193px"
          w="20%"
          placeholder="Tipo de Propiedad"
        >
          <option value="Apartamento">Apartamento</option>
          <option value="Casa">Casa</option>
          <option value="Terreno">Terreno</option>
        </Select>
        <Select
          className="selectors"
          border="2px "
          borderColor="black"
          minW="193px"
          w="20%"
          placeholder="Ordenado por ..."
        >
          <option value="Precio Descendiente">Precio Descendiente</option>
          <option value="Precio Ascendente">Precio Ascendente</option>
        </Select>
        <Button
          className="inputButtonFilter"
          bgColor="black"
          onClick={filtrarInmuebles}
          w={{ base: "55%", sm: "60%", md: "25%", lg: "20%" }}
          _hover={{
            background: "white",
            color: "black",
          }}
        >
          BUSCAR
        </Button>
      </Flex>
      <Grid
        alignContent="center"
        w="90%"
        h="auto"
        m="0 0 20px 0"
        templateColumns={{
          base: "repeat(1, 1fr)",
          sm: "repeat(2, 1fr)",
          md: "repeat(2, 1fr)",
          lg: "repeat(3, 1fr)",
        }}
        gap="30px"
      >
        {inmuebles.map((inmueble) => {
          return (
            <GridItem w="auto" h="auto">
              <Link className="link" to={`/inmueble/${inmueble.id}`}>
                <div className="divCarousel carrusel1">
                  <Carrusel />

                  <Flex
                    className="propData"
                    pl="0.5rem"
                    pt="0.5rem"
                    justifyItems="center"
                    flexDirection="column"
                  >
                    <span>Superficie {inmueble?.metrosCuadrados} m2</span>
                    <span>Dormitorios {inmueble?.dormitorios} </span>{" "}
                    <span>Baños {inmueble?.sanitarios}</span>
                    <h3>
                      Precio <strong>$ {inmueble?.precio}</strong>
                    </h3>
                  </Flex>
                </div>
              </Link>
            </GridItem>
          );
        })}
      </Grid>
    </Flex>
  );
}

export default RealEstateMain;

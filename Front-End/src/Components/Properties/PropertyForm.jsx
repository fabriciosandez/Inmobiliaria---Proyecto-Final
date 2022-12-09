import {
  Box,
  Button,
  Center,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Select,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { propertyRegister } from "../../api/Rule_property";
import "./PropertyForm.css";
import Swal from "sweetalert2";

function Upload() {
  const [tipo, setTipo] = useState("");
  const [direccion, setDireccion] = useState("");
  const [localidad, setLocalidad] = useState("");
  const [operacion, setOperacion] = useState("");
  const [precio, setPrecio] = useState("");
  const [metrosCuadrados, setMetrosCuadrados] = useState("");
  const [dormitorios, setDormitorios] = useState("");
  const [sanitarios, setSanitarios] = useState("");

  const handleTipo = (ev) => {
    console.log(ev);
    setTipo(ev.target.value);
  };

  const handleDireccion = (ev) => {
    console.log(ev);
    setDireccion(ev.target.value);
  };

  const handleLocalidad = (ev) => {
    console.log(ev);
    setLocalidad(ev.target.value);
  };

  const handleOperacion = (ev) => {
    setOperacion(ev.target.value);
  };

  const handlePrecio = (ev) => {
    console.log(ev);
    setPrecio(ev.target.value);
  };

  const handleMetrosCuadrados = (ev) => {
    console.log(ev);
    setMetrosCuadrados(ev.target.value);
  };

  const handleDormitorios = (ev) => {
    console.log(ev);
    setDormitorios(ev.target.value);
  };

  const handleSanitarios = (ev) => {
    console.log(ev);
    setSanitarios(ev.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const propertyData = {
      tipo: tipo,
      direccion: direccion,
      localidad: localidad,
      operacion: operacion,
      precio: precio,
      metrosCuadrados: metrosCuadrados,
      dormitorios: dormitorios,
      sanitarios: sanitarios,
    };
    await propertyRegister(propertyData)
      .then((response) => {
        Swal.fire(
          'Buen trabajo!',
          'La propiedad ha sido registrada correctamente!',
          'success'
        )
      })
      .catch((error) => {
        alert(error);
      });
  };

  return (
    <>
      <Box fontWeight="normal" mt="20px" mb="40px" ml="40px" width="97%">
        <h2 className="formTitle">Registrar propiedad</h2>
      </Box>
      <form className="propertyForm" onSubmit={handleSubmit}>
        <Center>
          <FormControl flex isRequired onSubmit={handleSubmit} w="90%">
            <FormLabel>Tipo</FormLabel>
            <Select
              className="formInput"
              value={tipo}
              onChange={handleTipo}
              placeholder="Seleccionar tipo de propiedad"
            >
              <option>Apartamento</option>
              <option>Casa</option>
              <option>Terreno</option>
            </Select>
            <FormErrorMessage>
              El tipo de propiedad es obligatorio
            </FormErrorMessage>
            <FormLabel>Dirección</FormLabel>
            <Input
              className="formInput"
              value={direccion}
              onChange={handleDireccion}
              placeholder="Indique la dirección de la propiedad"
            />
            <FormErrorMessage>La dirección es obligatoria</FormErrorMessage>
            <FormLabel>Localidad</FormLabel>
            <Select
              className="formInput"
              value={localidad}
              onChange={handleLocalidad}
              placeholder="Seleccionar localidad de la propiedad"
            >
              <option>Las Piedras</option>
              <option>Lomas de Solymar</option>
              <option>Montevideo</option>
              <option>Parque del Plata</option>
              <option>Pinamar</option>
              <option>Piriápolis</option>
              <option>Punta del Este</option>
              <option>Salinas</option>
            </Select>
            <FormErrorMessage>La localidad es obligatoria</FormErrorMessage>
            <FormLabel>Operación</FormLabel>
            <Select
              className="formInput"
              value={operacion}
              onChange={handleOperacion}
              placeholder="Seleccionar tipo de operación"
              mb="50px"
            >
              <option>Alquiler</option>
              <option>Venta</option>
            </Select>
            <FormErrorMessage>
              El tipo de operación es obligatoria
            </FormErrorMessage>
            <FormLabel>Precio</FormLabel>
            <Input
              className="formInput"
              value={precio}
              onChange={handlePrecio}
              placeholder="Indique el precio de la propiedad"

            />
            <FormErrorMessage>El precio obligatorio</FormErrorMessage>
            <FormLabel>Superficie</FormLabel>
            <Input
              className="formInput"
              value={metrosCuadrados}
              onChange={handleMetrosCuadrados}
              placeholder="Indique la superficie de la propiedad"
            />
            <FormErrorMessage>
              La superficie de la propiedad es obligatoria
            </FormErrorMessage>
            <FormLabel>Dormitorios</FormLabel>
            <Input
              className="formInput"
              value={dormitorios}
              onChange={handleDormitorios}
              placeholder="Indique la cantidad de dormitorios"
            />
            <FormErrorMessage>
              La cantidad de dormitorios es obligatoria
            </FormErrorMessage>
            <FormLabel>Baños</FormLabel>
            <Input
              className="formInput"
              value={sanitarios}
              onChange={handleSanitarios}
              placeholder="Indique la cantidad de baños de la propiedad"
            />
            <FormErrorMessage>
              La cantidad de baños es obligatoria
            </FormErrorMessage>
            <Button
              className="propertyFormButton"
              colorScheme="green"
              mr={3}
              type="submit"
            >
              Ingresar
            </Button>
          </FormControl>
        </Center>
      </form>
    </>
  );
}

export default Upload;

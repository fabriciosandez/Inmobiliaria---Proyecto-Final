import React, { useState } from "react";
import {
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Textarea,
} from "@chakra-ui/react";
import { contactMessage } from "../../api/Rule_contact";
import "./ContactForm.css";

function Contact() {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [telefono, setTelefono] = useState("");
  const [mensaje, setMensaje] = useState("");

  const handleNombre = (ev) => {
    console.log(ev);
    setNombre(ev.target.value);
  };

  const handleEmail = (ev) => {
    console.log(ev);
    setEmail(ev.target.value);
  };

  const handleTelefono = (ev) => {
    setTelefono(ev.target.value);
  };

  const handleMensaje = (ev) => {
    console.log(ev);
    setMensaje(ev.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const info = {
      nombre: nombre,
      email: email,
      telefono: telefono,
      mensaje: mensaje,
    };
    await contactMessage(info)
      .then((response) => {
        alert("El mensaje ha sido recibido correctamente")
      })
      .catch((error) => {
        alert(error);
      });
  };

  return (
    <form className="loginForm" onSubmit={handleSubmit}>
    <FormControl isRequired onSubmit={handleSubmit} w="400px">
      <FormLabel>Nombre</FormLabel>
      <Input className="formInput"
        value={nombre}
        onChange={handleNombre}
        placeholder="Ingrese su nombre"
      />
      <FormErrorMessage>El nombre es obligatorio</FormErrorMessage>
      <FormLabel>Teléfono</FormLabel>
      <Input className="formInput"
        value={telefono}
        onChange={handleTelefono}
        placeholder="Ingrese su teléfono"
      />
      <FormErrorMessage>El teléfono es obligatorio</FormErrorMessage>
      <FormLabel>Correo electrónico</FormLabel>
      <Input className="formInput"
        type="email"
        value={email}
        onChange={handleEmail}
        placeholder="Ingrese su e-mail"
      />
      <FormErrorMessage>El e-mail es obligatorio</FormErrorMessage>
      <FormLabel>Mensaje</FormLabel>
      <Textarea className="formInput"
        value={mensaje}
        onChange={handleMensaje}
        placeholder="¿Cómo podemos ayudarte?"
      />
      <FormErrorMessage>El mensaje es obligatorio</FormErrorMessage>
      <Button className="formButton" colorScheme="green" mr={3} type="submit">
        Enviar
      </Button>
    </FormControl>
    </form>
  );
}

export default Contact;

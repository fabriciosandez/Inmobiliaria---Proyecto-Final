import {
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { userRegister } from "../../api/Rule_register";
import "./RegisterForm.css";
import Swal from "sweetalert2";

function Register() {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleNombre = (ev) => {
    console.log(ev);
    setNombre(ev.target.value);
  };

  const handleApellido = (ev) => {
    console.log(ev);
    setApellido(ev.target.value);
  };

  const handleEmail = (ev) => {
    console.log(ev);
    setEmail(ev.target.value);
  };

  const handlePassword = (ev) => {
    setPassword(ev.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      nombre: nombre,
      apellido: apellido,
      email: email,
      password: password,
    };
    await userRegister(data)
      .then((response) => {
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Te has registrado correctamente',
          showConfirmButton: false,
          timer: 1500
        })
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
      <FormLabel>Apellido</FormLabel>
      <Input className="formInput"
        value={apellido}
        onChange={handleApellido}
        placeholder="Ingrese su apellido"
      />
      <FormErrorMessage>El apellido es obligatorio</FormErrorMessage>
      <FormLabel>Correo electrónico</FormLabel>
      <Input className="formInput"
        type="email"
        value={email}
        onChange={handleEmail}
        placeholder="Ingrese su e-mail"
      />
      <FormErrorMessage>El e-mail es obligatorio</FormErrorMessage>
      <FormLabel>Password</FormLabel>
      <Input className="formInput"
        minLength="8"
        type="password"
        value={password}
        onChange={handlePassword}
        placeholder="Escriba su password"
      />
      <FormErrorMessage>El password es obligatorio</FormErrorMessage>
      <Button className="formButton" colorScheme="green" mr={3} type="submit">
        Ingresar
      </Button>
    </FormControl>
    </form>
  );
}

export default Register;

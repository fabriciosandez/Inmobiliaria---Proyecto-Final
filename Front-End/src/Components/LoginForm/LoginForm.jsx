import React, { useState } from "react";
import { userLogin } from "../../api/Rule_auth";
import {
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import Swal from "sweetalert2";
import "./LoginForm.css";

function Login(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmail = (ev) => {
    setEmail(ev.target.value);
  };

  const handlePassword = (ev) => {
    setPassword(ev.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const credentials = { email: email, password: password };
    await userLogin(credentials)
      .then((response) => {
        Swal.fire(
          'Welcome back!',
          'Has iniciado sesión correctamente!',
          'success'
        )
        props.onClose();
      })
      .catch((error) => {
        alert(error);
      });
  };

  return (
    <form className="loginForm" onSubmit={handleSubmit}>
      <FormControl isRequired w="400px">
        <FormLabel>Correo electrónico</FormLabel>
        <Input
          className="formInput"
          type="email"
          value={email}
          onChange={handleEmail}
          placeholder="Ingrese su e-mail"
        />
        <FormErrorMessage>El e-mail es obligatorio</FormErrorMessage>
      </FormControl>
      <FormControl isRequired>
        <FormLabel>Password</FormLabel>
        <Input
          className="formInput"
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

export default Login;

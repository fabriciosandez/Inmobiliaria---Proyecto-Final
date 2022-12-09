import React from "react";
import {
  Box,
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import Register from "./RegisterForm";
import "./RegisterForm.css";

function RegisterModal() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box>
      <Button
        h="16px"
        w="90px"
        fontWeight="normal"
        fontSize="15px"
        borderRadius="0"
        bgColor="black"
        color="aliceblue"
        onClick={onOpen}
      >
        <h3>Registrarse</h3>
      </Button>
      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader className="formHeader">Crear Cuenta</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Register />
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  );
}

export default RegisterModal;

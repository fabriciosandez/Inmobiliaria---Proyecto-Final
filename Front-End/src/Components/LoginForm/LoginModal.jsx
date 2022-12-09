import React from "react";
import {
  Box,
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import Login from "./LoginForm";
import "./LoginForm.css";

function LoginModal() {
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
        mr="40px"
      >
        <h3>Iniciar Sesión</h3>
      </Button>
      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader className="formHeader">Iniciar Sesión</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Login onClose={onClose} />
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  );
}

export default LoginModal;

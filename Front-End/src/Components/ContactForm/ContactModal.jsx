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
import "./ContactForm.css";
import Contact from "./ContactForm";

function ContactModal() {
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
        mr="10px"
        mb="2px"
      >
        <h3>Contacto</h3>
      </Button>
      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader className="formHeader">Contacto</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Contact onClose={onClose} />
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  );
}

export default ContactModal;

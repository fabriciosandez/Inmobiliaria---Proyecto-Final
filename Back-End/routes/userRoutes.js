// IMPORTACIONES //
const express = require("express");
const router = express.Router();
const {
  login,
  register,
  contact,
} = require("../controllers/user");
const { runValidation } = require("../validators/index");
const {
  userValidator,
  loginValidator,
  contactValidator,
} = require("../validators/user");
const { verifyToken } = require("../validators/auth");

// RUTAS DEL MÓDULO DE USUARIO //
router.post("/user/login", loginValidator, runValidation, login);
router.post("/user/register", userValidator, runValidation, register);
router.post("/user/contact", contactValidator, runValidation, contact);

module.exports = router;
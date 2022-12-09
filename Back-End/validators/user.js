const { check } = require("express-validator");

// VALIDACIÓN DE REGISTRO DE USUARIO //
exports.userValidator = [
  check("email")
    .not()
    .isEmpty()
    .withMessage("Se requiere el email")
    .isEmail()
    .withMessage("Formato de email inválido"),
  check("password")
    .not()
    .isEmpty()
    .withMessage("Formato de contraseña inválido")
    .isLength({ min: 8, max: 120 })
    .withMessage("El password requiere un mínimo de 8 caracteres"),
  check("nombre")
    .isString()
    .withMessage("El nombre es obligatorio y no debe contener números"),
  check("apellido")
    .isString()
    .withMessage("El apellido es obligatorio y no debe contener números"),
];

// VALIDACIÓN DE LOGIN DE USUARIO //
exports.loginValidator = [
  check("email")
    .not()
    .isEmpty()
    .withMessage("Se requiere el email")
    .isEmail()
    .withMessage("Formato de email inválido"),
  check("password")
    .not()
    .isEmpty()
    .withMessage("Formato de contraseña inválido")
    .isLength({ min: 8, max: 120 })
    .withMessage("El password requiere un mínimo de 8 caracteres"),
];

// VALIDACIÓN DEL FORMULARIO DE CONTACTO//
exports.contactValidator = [
  check("nombre")
    .not()
    .isEmpty()
    .isString()
    .withMessage("El nombre es obligatorio y no debe contener números"),
  check("telefono")
    .not()
    .isEmpty()
    .withMessage("Ingrese su número de contacto"),
  check("email")
    .not()
    .isEmpty()
    .withMessage("Se requiere el email")
    .isEmail()
    .withMessage("Formato de email inválido"),
  check("mensaje")
    .not()
    .isEmpty()
    .withMessage("El mensaje es obligatorio")
];

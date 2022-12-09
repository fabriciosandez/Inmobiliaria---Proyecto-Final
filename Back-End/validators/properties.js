const { check } = require("express-validator");

// VALIDACIÓN DE REGISTRO DE PROPIEDADES //
exports.propertyValidator = [
  check("direccion")
    .not()
    .isEmpty()
    .withMessage("Se requiere la dirección"),
  check("precio")
    .not()
    .isEmpty()
    .withMessage("Ingrese el precio"),
  check("operacion")
    .not()
    .isEmpty()
    .withMessage("El tipo de operación es obligatorio")
    .isString()
    .withMessage("El tipo de operación no es correcto"),
  check("tipo")
    .not()
    .isEmpty()
    .withMessage("El tipo de propiedad es obligatorio")
    .isString()
    .withMessage("El tipo de propiedad no es correcto"),
  check("metrosCuadrados")
    .not()
    .isEmpty()
    .withMessage("Se requiere la extensión de la propiedad en metros cuadrados"),
  check("dormitorios")
    .not()
    .isEmpty()
    .withMessage("Se requiere la cantidad de dormitorios"),
  check("sanitarios")
    .not()
    .isEmpty()
    .withMessage("Se requiere especificar la cantidad de baños"),
  check("localidad")
    .not()
    .isEmpty()
    .withMessage("Es obligatorio indicar la localidad de la propiedad"),
];

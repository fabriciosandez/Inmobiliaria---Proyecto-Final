// IMPORTACIONES //
const express = require("express");
const router = express.Router();
const {
  listProperties,
  propertyUpload,
  searchProperty,
  deleteProperty,
} = require("../controllers/properties");
const { runValidation } = require("../validators/index");
const { propertyValidator } = require("../validators/properties");
const { verifyToken } = require("../validators/auth");

// RUTAS DEL MÓDULO DE PROPIEDADES //
router.get("/properties/list", listProperties);
router.get("/properties/:id", searchProperty);
router.post("/properties/upload",propertyValidator, runValidation, propertyUpload);
router.delete("/properties/delete/:id", deleteProperty);

module.exports = router;

// IMPORTACIONES //
const knex = require("../config/knexfile");

// GET: LISTA DE PROPIEDADES //
exports.listProperties = (req, res) => {
  knex("propiedades")
    .then((resultado) => {
      res.json(resultado);
    })
    .catch((error) => {
      res.status(400).json({ error: error.message });
    });
};

// POST: AGREGAR PUBLICACIÓN //
exports.propertyUpload = async (req, res) => {
  const {
    tipo,
    direccion,
    localidad,
    operacion,
    precio,
    metrosCuadrados,
    dormitorios,
    sanitarios,
  } = req.body;

  knex("propiedades")
    .where({ direccion: direccion })
    .then((resultado) => {
      if (resultado.length) {
        res
          .status(400)
          .json({ error: "Ya existe la propiedad en la base de datos" });
        return;
      }
      knex("propiedades")
        .insert({
          tipo: tipo,
          direccion: direccion,
          localidad: localidad,
          operacion: operacion,
          precio: precio,
          metrosCuadrados: metrosCuadrados,
          dormitorios: dormitorios,
          sanitarios: sanitarios,
        })
        .then(() => {
          res.json({
            mensaje: "La propiedad se ha registrado correctamente",
          });
        })
        .catch((error) => {
          res.status(400).json({ error: error.message });
        });
    });
};

// GET: PROPIEDAD ESPECÍFICA //
exports.searchProperty = (req, res) => {
  const propertyId = req.params.id;
  knex
    .select("*")
    .from("propiedades")
    .where("id", propertyId)
    .then((propiedades) => {
      if (propiedades.length) {
        res.json(propiedades[0]);
      } else {
        res.status(404).json({ error: "La propiedad no fue encontrada" });
      }
    })
    .catch((error) => {
      res.status(400).json({ error: error.message });
    });
};

// DELETE: PROPIEDAD ESPECÍFICA //
exports.deleteProperty = (req, res) => {
  const deleteId = req.params.id;
  knex
    .del("*")
    .from("propiedades")
    .where("id", deleteId)
    .then((propiedades) => {
      if (propiedades.length) {
        res.json({
          mensaje: "La propiedad se ha eliminado correctamente",
        });
      } else {
        res.status(404).json({ error: "La propiedad no fue encontrada" });
      }
    })
    .catch((error) => {
      res.status(400).json({ error: error.message });
    });
};


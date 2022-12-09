// IMPORTACIONES //
const knex = require("../config/knexfile");
const formidable = require("formidable");
const fs = require("fs");

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

// GET: IMÁGEN DE LA PROPIEDAD //
exports.bringImage = async (req, res) => {
  const id = req.params.id;
  knex("inmuebles")
    .where({ id: id })
    .then((result) => {
      if (!result[0].filedata) {
        res.json({
          error: "No hay una imágen disponible",
        });
        return;
      }
      res.set("Content-Type", result[0].filetype);
      return res.send(result[0].filedata);
    })
    .catch((error) => {
      res.status(400).json({
        errror: error.message,
      });
    });
};

// POST: AGREGAR PUBLICACIÓN //
exports.propertyUpload = (req, res) => {
  let form = new formidable.IncomingForm();
  form.keepExtensions = true;
  form
    .parse(req, async (err, fields, files) => {
      if (err) {
        return res.status(400).json({
          error: "Image could not upload",
        });
      }
      const {
        tipo,
        direccion,
        localidad,
        operacion,
        precio,
        metrosCuadrados,
        dormitorios,
        sanitarios,
      } = fields;

      let fileData;
      let fileType;
      if (files.file) {
        if (files.file.size > 1000000) {
          return res.status(400).json({
            error: "Tamaño máximo de la imagen: 1MB",
          });
        }

        fileData = fs.readFileSync(files.file.filepath);
        fileType = files.file.mimetype;

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
            filedata: fileData,
            filetype: fileType,
          })
          .then(() => {
            res.json({
              success: true,
              mensaje: "La propiedad se ha registrado correctamente",
            });
          })
          .catch((error) => {
            res.status(400).json({ error: error.message });
          });
      }
    })
};

// GET: PROPIEDAD ESPECÍFICA //
exports.searchProperty = (req, res) => {
  const propertyId = req.params.id;
  knex("propiedades")
    .where("id", propertyId)
    .then((propiedades) => {
      if (propiedades.length) {
        res.json(propiedades[0]);
      } else {
        res.status(404).json({ error: "No existe ese ID en la base de datos" });
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

// SELECT: FILTRADO DE PROPIEDADES //
exports.propertiesFiltered = (req, res) => {
  const { tipo, operacion, localidad } = req.body;
  knex
    .select("*")
    .from("propiedades")
    .then((resultado) => {
      if (operacion !== "" && operacion !== undefined) {
        resultado = resultado.filter((item) => {
          return item.operacion == operacion;
        });
      }
      if (tipo !== "" && tipo !== undefined) {
        resultado = resultado.filter((item) => {
          return item.tipo == tipo;
        });
      }
      if (localidad !== "" && localidad !== undefined) {
        resultado = resultado.filter((item) => {
          return item.localidad == localidad;
        });
      }
      res.json(resultado);
    })
    .catch((error) => {
      res.status(400).json({ error: error.message });
    });
};

// UPDATE: MODIFICAR PROPIEDADES //
exports.modifyProperty = async (req, res) => {
  let form = new formidable.IncomingForm();
  form.keepExtensions = true;

  form.parse(req, async (err, fields, files) => {
    if (err) {
      return res.status(400).json({
        error: "No se pudo cargar la imagen",
      });
    }
    console.log(files.file);
    let fileData;
    let fileType;
    if (files.file) {
      if (files.file.size > 10000000) {
        return res.statu(400).json({
          error: "Tamaño máximo de la imagen: 1MB",
        });
      }
      fileData = fs.readFileSync(files.file.filepath);
      fileType = files.file.mimetype;
    }
    const {
      tipo,
      direccion,
      localidad,
      operacion,
      precio,
      metrosCuadrados,
      dormitorios,
      sanitarios,
    } = fields;
    const id = fields.id;
    try {
      await knex.transaction(async (trx) => {
        const propertyUpdate = await trx("propiedades").where("id", id).update(
          {
            tipo: tipo,
            direccion: direccion,
            localidad: localidad,
            operacion: operacion,
            precio: precio,
            metrosCuadrados: metrosCuadrados,
            dormitorios: dormitorios,
            sanitarios: sanitarios,
            filedata: fileData,
            filetype: fileType,
          },
          "id"
        );
      });
      res.json({
        mensaje: "La propiedad se ha modificado correctamente",
      });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  });
};

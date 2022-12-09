// IMPORTACIONES //
const knex = require("../config/knexfile");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// POST: LOGIN DE USUARIO //
exports.login = (req, res) => {
  const { email, password } = req.body;
  knex("usuarios")
    .where({ email: email })
    .then(async (resultado) => {
      if (!resultado.length) {
        res.status(404).json({ error: "Email y/o password incorrecto" });
        return;
      }
      const validatePassword = await bcrypt.compare(
        password,
        resultado[0].password
      );
      if (!validatePassword) {
        res.status(404).json({ error: "Email y/o password incorrecto" });
        return;
      }
      const token = jwt.sign(
        {
          id: resultado[0].id,
          nombre: resultado[0].nombre,
          email: resultado[0].email,
        },
        process.env.TOKEN_SECRET
      );
      res.json({ success: true, token: token });
    });
};

// POST: REGISTRO DE USUARIO //
exports.register = async (req, res) => {
  const { email, password, nombre, apellido } = req.body;

  const salt = await bcrypt.genSalt(10);
  const passwordEncrypt = await bcrypt.hash(password, salt);

  knex("usuarios")
    .where({ email: email })
    .then((resultado) => {
      if (resultado.length) {
        res
          .status(400)
          .json({ error: "Ya existe el email en la base de datos" });
        return;
      }
      knex("usuarios")
        .insert({
          email: email,
          password: passwordEncrypt,
          nombre: nombre,
          apellido: apellido,
        })
        .then(() => {
          res.json({
            mensaje: "El usuario se ha registrado correctamente",
          });
        })
        .catch((error) => {
          res.status(400).json({ error: error.message });
        });
    });
};

// POST: FORMULARIO DE CONTACTO //
exports.contact = async (req, res) => {
  const { nombre, telefono, email, mensaje } = req.body;
  knex("mensajes")
    .insert({
      nombre: nombre,
      telefono: telefono,
      email: email,
      mensaje: mensaje,
    })
    .then(() => {
      res.json({
        mensaje: "El mensaje se ha recibido correctamente",
      });
    })
    .catch((error) => {
      res.status(400).json({ error: error.message });
    });
};

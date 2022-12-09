// IMPORTACIONES DE DEPENDENCIAS //
const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");
require ("dotenv").config();
const userRouter = require("./routes/userRoutes");
const propertyRouter = require("./routes/propertyRoutes");

// LANZAMIENTO DE EXPRESS //
const app = express();

// MIDDLEWARES //
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());

app.use("/api", userRouter, propertyRouter);

// EJECUCIÓN DEL SERVIDOR //
const port = process.env.PORT || 8000;
app.listen(port, () => {
console.log(`Server is running on port ${port}`);
});

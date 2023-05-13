const express = require("express");
const morgan = require("morgan");

const app = express();

// DB
require("dotenv").config();
require("./database");

// GLOBAL
app.set("port", process.env.PORT || 5000);

// Configuraciones
app.use(morgan("dev"));
app.use(express.json()); // express que use json.

// Endpoints
app.use(require("./routes"));


// Server
app.listen(app.get("port"), () => {
    console.log(`Server Running at port ${app.get("port")}`);
});

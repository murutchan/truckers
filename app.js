const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

const app = express();
app.use(cors());
app.use(morgan("dev"));

//INIT middleware
app.use(express.json());

//DEFINE ROUTES

app.use("/api/users", require("./routes/api/users"));
app.use("/api/auth", require("./routes/api/auth"));
app.use("/api/company", require("./routes/api/company"));

module.exports = app;

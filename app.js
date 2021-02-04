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

module.exports = app;

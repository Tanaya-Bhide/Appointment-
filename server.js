const express = require("express");
const app = express();
require(`dotenv`).config;
const dbconfig = require("./config/dbconfig");
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`node nerver started at port ${port}`));

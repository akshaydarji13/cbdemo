const express = require("express");
const app = express();
const config = require('./config');
const port = config.port || 8888;
const mountRoutes = require("./routes");

const connectDB = require('./db');

connectDB();

const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/health", (req, res) => {
  res.send("health check successful");
});

mountRoutes(app);

app.listen(port, () => {
  console.log("App running on Port: ", port);
});


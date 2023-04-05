const express = require("express");
const CORS = require("../middlewares/CORS.js");
const path = require("path");

const app = express();

app.use(express.json());
app.use(CORS());
app.use(express.static(path.join(__dirname, "./client/build")));
app.get("*", function (_, res) {
  res.sendFile(
    path.join(__dirname, "./client/build/index.html"),
    function (err) {
      res.status(500).send(err);
    }
  );
});

module.exports = app;

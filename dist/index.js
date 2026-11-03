#!/usr/bin/env node
const express = require("express");
const { version, name } = require("../package.json");

const app = express();

const environment = process.env.NODE_ENV || "development";
const port = Number(process.env.PORT || 3000);

app.get("/", (req, res) => {
  res.json({
    application: name,
    version,
    environment,
    message: "Software packaging successful"
  });
});

app.get("/health", (req, res) => {
  res.json({
    status: "healthy",
    environment,
    version
  });
});

if (require.main === module) {
  app.listen(port, () => {
    console.log(`${name} v${version} running in ${environment} on port ${port}`);
  });
}

module.exports = app;

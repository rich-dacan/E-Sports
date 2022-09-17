// const express = require("express");

import express from "express";

const app = express();

app.get("/ads", (request, response) => {
  return response.json([
    { testando: "teste1" },
    { testando: "teste2" },
    { testando: "teste3" },
  ]);
});

app.listen(3001);

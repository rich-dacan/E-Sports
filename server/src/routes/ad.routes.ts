import { Router } from "express";

const adsRouter = Router();

// Listando anúncios por game
adsRouter.get('/games/:id/ads', (request, response) => {
    return response.json([
      { testando: "teste1" },
      { testando: "teste2" },
    ]);
});

// Listando discord por anúncio
adsRouter.get('/ads/:id/discord', (request, response) => {
    return response.json([
      { discord: "testAndo" },
    ]);
});

adsRouter.post('/ads', (request, response) => {
    return response.status(201).json([]);
});


export default adsRouter;

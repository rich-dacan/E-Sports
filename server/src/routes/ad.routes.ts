import { PrismaClient } from "@prisma/client";
import { Router } from "express";

const adsRouter = Router();
const prisma = new PrismaClient({
    log: ['query']
})

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

adsRouter.get('/ads', async (request, response) => {
    const ads = await prisma.ad.findMany()

    return response.json(ads);
});

adsRouter.post('/ads', (request, response) => {
    return response.status(201).json([]);
});

export default adsRouter;

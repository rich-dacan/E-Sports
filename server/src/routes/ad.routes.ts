import { PrismaClient } from "@prisma/client";
import { Router } from "express";

const adsRouter = Router();
const prisma = new PrismaClient({
    log: ['query']
})

// Listando anúncios por game
adsRouter.get('/games/:id/ads', async (request, response) => {
    const gameIdParam = request.params.id
    const ads = await prisma.ad.findMany({
        select: {
            id: true,
            name: true,
            yearsPlaying: true,
            weekDays: true,
            hourStart: true,
            hourEnd: true,
            useVoiceChannel: true,
        },
        where: {
            gameId: gameIdParam,
        },
        orderBy: {
            createdAt: 'desc'
        }
    })

    return response.json(ads.map(ad => {
        return {
            ...ad,
            weekDays: ad.weekDays.split(',')
        }
    }));
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

import { PrismaClient } from "@prisma/client";
import { Router } from "express";
import { convertHourStringToMinutes } from "../utils/convert-hour-string-to-minutes";
import { convertMinutesToHourString } from "../utils/convert-minutes-to-hour-string";

const adsRouter = Router();
const prisma = new PrismaClient({
    log: ['query']
});

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
            weekDays: ad.weekDays.split(','),
            hourStart: convertMinutesToHourString(ad.hourStart),
            hourEnd: convertMinutesToHourString(ad.hourEnd)
        }
    }));
});

// Listando discord por anúncio
adsRouter.get('/ads/:id/discord', async (request, response) => {
    const adId = request.params.id;
    const discordUsername = await prisma.ad.findUnique({
        where: {
            id: adId
        },
        select: {
            discord: true,
        }
    });

    return response.json(discordUsername);
});

// Criando anúncio
adsRouter.post('/games/:gameId/ads', async (request, response) => {
    const gameId = request.params.gameId;
    const dataNewAd = request.body;

    const newAd = await prisma.ad.create({
        data: {
            gameId,
            name: dataNewAd.name,
            yearsPlaying: dataNewAd.yearsPlaying,
            discord: dataNewAd.discord,
            weekDays: dataNewAd.weekDays.join(','),
            hourStart: convertHourStringToMinutes(dataNewAd.hourStart),
            hourEnd: convertHourStringToMinutes(dataNewAd.hourEnd),
            useVoiceChannel: dataNewAd.useVoiceChannel
        }
    })

    return response.status(201).json(newAd);
});

export default adsRouter;

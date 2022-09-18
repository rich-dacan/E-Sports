import { PrismaClient } from "@prisma/client";
import { Router } from "express";

const gameRouter = Router();
const prisma = new PrismaClient({
    log: ['query']
});

gameRouter.get('', async (request, response) => {
    const games = await prisma.game.findMany({
        include: {
            _count: {
                select: {
                    ads: true,
                }
            }
        }
    })

    return response.json(games);
});

gameRouter.post('', async (request, response) => {
    const dataNewGame = request.body;
    
    const newGame = await prisma.game.create({
        data: {
            title: dataNewGame.title,
            bannerUrl: dataNewGame.bannerUrl,
        }
    })
    return response.status(201).json(newGame);
});

export default gameRouter;
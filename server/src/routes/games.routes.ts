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

gameRouter.post('', (request, response) => {
    return response.json([]);
});

export default gameRouter;
import { Router } from "express";

const gameRouter = Router();

gameRouter.get('', (request, response) => {
    return response.json([]);
});

gameRouter.post('', (request, response) => {
    return response.json([]);
});

export default gameRouter;
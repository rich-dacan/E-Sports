import express from "express";
import adsRouter from "./routes/ad.routes";
import gameRouter from "./routes/games.routes";

const app = express();

const PORT = 3001

app.use('/games', gameRouter)
app.use('', adsRouter)

app.listen(PORT, () => {
  console.log(`Server is running in port: ${PORT}! 🚀 `);
});

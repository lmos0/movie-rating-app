import express, {Express, Request, Response} from 'express';
import { PrismaClient } from '@prisma/client';
import dotenv from 'dotenv';
import cors from 'cors';

import router from './routes/userRoutes';
import movieRouter from './routes/movieRoutes'


dotenv.config()

const prisma = new PrismaClient();
const app:Express = express();


app.use(cors({
    origin: 'http://localhost:5173'
}))

const PORT = process.env.PORT || 3002;

app.use(express.json());

app.use('/api', router)
app.use('/api', movieRouter)


app.listen(PORT, () =>{
    console.log (`Servidor rodando na porta ${PORT}`)
})

import express, {Router, Request, Response} from "express";
import { MovieController } from "../controllers/MovieController";
import { MovieService } from "../services/MovieService"

const router:Router = express.Router();
const movieService:MovieService = new MovieService();
const movieController:MovieController = new MovieController(movieService);

router.post('/movies', (req:Request,res:Response) => {movieController.createMovie(req,res)})
router.get('/movies', (req: Request,res:Response) => {movieController.getMovies(req,res)})
router.get('movies/:id', (req:Request, res:Response) => {movieController.getMovieById(req,res)})

export default router;
import { Request, Response } from "express";
import { MovieService } from "../services/MovieService";
import { error } from "console";



export class MovieController {
    private movieService: MovieService;

    constructor(movieService:MovieService){
        this.movieService = movieService;
    }

    async createMovie(req:Request, res:Response){
        const {title, director, year} = req.body
    
    if(!title || !director || !year) {
        return res.status(400).json({error: "Title, director, and year are required"})
    }

    if (isNaN(year) || year < 1888 || year > new Date().getFullYear() + 5){
        return res.status(400).json({error: 'Invalid year'})
    }

    try {
        const movie = await this.movieService.createMovie(title, director, year)
        return res.status(201).json(movie)
    } catch (error) {
        console.error(error);
        
        return res.status(500).json({error: 'Failed to create movie'})
        
    }
}

    async getMovies(req:Request, res:Response){
        try {
            const movies = await this.movieService.getMovies();
            return res.status(200).json(movies);
        } catch (error) {
            return res.status(500).json({error: 'Failed to fetch movies'})
        }
    }

    async getMovieById(req:Request, res:Response){
        const {id} = req.params

        try {
            const movie = await this.movieService.getMovieById
            if(movie){
               return res.status(200).json(movie)
            }
            return res.status(404).json({error: "movie not found"})
        } catch (error) {
            return res.status(500).json({error: 'Failed to fetch'})
            
        }
    }

    }




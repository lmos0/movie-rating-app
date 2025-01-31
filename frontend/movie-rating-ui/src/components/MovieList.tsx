import React, {useEffect, useState} from "react";
import axios from "axios";
import '../styles/MovieList.css';
import { Movie } from "../types/types";



const MovieList: React.FC = () => {
    const [movies, setMovies] = useState<Movie[]>([]);
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState<string>('')

    useEffect( () =>
    {
        const fetchMovies = async () => {
            try {
                setIsLoading(true)
                const response = await axios.get("http://localhost:3000/api/movies")
                    setMovies(response.data)
                
            } catch (error) {
                console.error("Error fetching movies:", error);
                setError('Falha ao carregar os dados')
                
            } finally {
                setIsLoading(false)
            }
        }

        fetchMovies()
    }, [])

    if (isLoading) return <div>Loading...</div>
    if(error) return <div>Error: {error}</div>

    return (
        <div>
        <h2 style={{ textAlign: 'center', marginBottom: '2rem' }}>Filmes</h2>
        <ul className="movie-list">
          {movies.map((movie) => (
            <li key={movie.id} className="movie-item">
              <h3>{movie.title}</h3>
              <p>Directed by: {movie.director}</p>
              <p>Year: {movie.year}</p>
            </li>
          ))}
        </ul>
      </div>
    )
}

export default MovieList
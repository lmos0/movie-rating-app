import React from "react";
import { Movie } from "../types/types";
import '../styles/MovieCard.css';

interface MovieCardProps{
    movie:Movie
}

const MovieCard: React.FC<MovieCardProps> = ({movie}) => {

  const ratings = movie.ratings || [];

  const averageRating = movie.ratings.length > 0
    ? movie.ratings.reduce((acc, rating) => acc + rating.score, 0) / movie.ratings.length
    : 0;
    
    return (
      <div className="movie-card">
      <div className="movie-card-content">
        <h3 className="movie-title">{movie.title}</h3>
        <p className="movie-info">{movie.year} • {movie.director}</p>
        <div className="movie-rating">
          <span>★</span>
          <span>{averageRating.toFixed(1)}</span>
          <span className="rating-count">({movie.ratings.length} reviews)</span>
        </div>
        <div className="movie-footer">
          <small className="movie-date">
            Added: {movie.createdAt ? new Date(movie.createdAt).toLocaleDateString() : 'N/A'}
          </small>
        </div>
      </div>
    </div>
        
    )
}

export default MovieCard
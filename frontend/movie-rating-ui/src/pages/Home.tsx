import React from "react";
import MovieList from "../components/MovieList";
import RateMovie from "../components/RateMovie";

const Home: React.FC = () => {
    return(
        <div style={{ padding: '20px' }}>
        <h1 style={{ textAlign: 'center', marginBottom: '2rem' }}>Avaliador de Filmes</h1>
        <MovieList />
      </div>
    )
}

export default Home
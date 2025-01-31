import React, {useState} from "react";
import { createRating } from "../services/api";

const RateMovie: React.FC = () => {
    const [movieId, setMovieId] = useState<number>(0);
    const [score, setScore] = useState<number>(0);
    const [comment, setComment] = useState<string>('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            await createRating(movieId, score, comment)
            alert('Avaliação enviada')
        } catch (error) {
            console.error('Erro ao enviar a avaliação', error);
            
            
        }
    }

    return(
        <div>
            <h2>Avalie o Filme</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Movie ID:</label>
                    <input type="number" value={movieId} onChange={(e) => setMovieId(Number(e.target.value))} />
                </div>
                    <div>
                    <label>Nota (1-10)</label>
                    <input type="number" value={score} onChange={(e) => setScore(Number(e.target.value))} min="1" max="10" />
                    </div>
                <div>
                    <label htmlFor="">Comment:</label>
                    <input type="text" name="" id="" value={comment} onChange={(e) => setComment(e.target.value)} />
                </div>
                    <button type="submit">Enviar Avaliação</button>

            </form>
        </div>
    )
}

export default RateMovie;
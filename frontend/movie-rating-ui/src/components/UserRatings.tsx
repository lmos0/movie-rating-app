import React, {useEffect, useState} from "react";
import { fetchUserRatings } from "../services/api";
import { Rating } from "../types/types";

const UserRatings:React.FC = () => {
    const [ratings, setRatings] = useState<Rating[]>([])

    useEffect(() => {
        const loadRatings = async () => {
            try {
                const data = await fetchUserRatings('uuid-doidona') //replace
                setRatings(data)
            } catch (error) {
                console.error('Erro ao buscar os dados', error);
                
            }
        }

        loadRatings()
    }, [])

    return(
        <div>
            <h2>Suas Avaliações</h2>
            <ul>
        {ratings.map((rating) => (
          <li key={rating.id}>
            <strong>{rating.movie.title}</strong> - Score: {rating.score}, Comment: {rating.comment}
          </li>
        ))}
      </ul>
        </div>
    )
}

export default UserRatings
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";

const Reviews = () => {
    const { id } = useParams();
    const [movie, setMovie] = useState([]);
    
    useEffect(() => {
        const fetchMovieID = async (id) => {
            try {
                const results = await fetchMovies(id);
                console.log(results.data.results)
                setMovie(results.data.results);
            } catch (error) {
                console.log(error);
            }
        }
        if (id) { fetchMovieID(id); }
    }, [id]);

    const fetchMovies = async (id) => {
        try {
            const API_KEY = '5266ce003df04ebad77cca2af658cdf2';
            const url = `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${API_KEY}`;

            return await axios.get(url);
        } catch (error) {
            console.log(error);
        };
    };
    
   console.log(movie)
    
    return (
        movie && (<ul>
            {movie.length > 0 && movie.map(({ author, content, id, created_at }) => {
                    return (<li key={id}>
                        <p>Author: {author}</p>
                        <p>Review: {content}</p>
                        <p>Created: { created_at }</p>
                    </li>)
                } )}
        </ul>)
    )
};

export default Reviews;
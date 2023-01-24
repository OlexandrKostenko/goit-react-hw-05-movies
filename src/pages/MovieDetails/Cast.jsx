import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";

const Cast = () => {
    const { id } = useParams();
    const [movie, setMovie] = useState([]);
    
    useEffect(() => {
        const fetchMovieID = async (id) => {
            try {
                const results = await fetchMovies(id);
                console.log(results.data.cast)
                setMovie(results.data.cast);
            } catch (error) {
                console.log(error);
            }
        }
        if (id) { fetchMovieID(id); }
    }, [id]);

    const fetchMovies = async (id) => {
        try {
            const API_KEY = '5266ce003df04ebad77cca2af658cdf2';
            const url = `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${API_KEY}&language=en-us`;

            return await axios.get(url);
        } catch (error) {
            console.log(error);
        };
    };
    
   console.log(movie)
    
    return (
        movie && (<ul>
            {movie.length > 0 && movie.map(({ profile_path, name, id, character }) => {
                    return (<li key={id}>
                        <img src={`https://image.tmdb.org/t/p/w500${profile_path}`} alt={name} width="100px"/>
                        <p>{name}</p>
                        <p>Character: { character }</p>
                    </li>)
                } )}
        </ul>)
    )
};

export default Cast;
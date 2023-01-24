import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { Link, Outlet, useParams } from "react-router-dom";

const MovieDetails = () => {
    const { id } = useParams();
    const [movie, setMovie] = useState([]);
    
    useEffect(() => {
        const fetchMovieID = async (id) => {
            try {
                const results = await fetchMovies(id);
                console.log(results.data)
                setMovie(results.data);
            } catch (error) {
                console.log(error);
            }
        }
        if (id) { fetchMovieID(id); }
    }, [id]);

    const fetchMovies = async (id) => {
        try {
            const API_KEY = '5266ce003df04ebad77cca2af658cdf2';
            const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`;

            return await axios.get(url);
        } catch (error) {
            console.log(error);
        };
    };
    
   console.log(movie)
    
    return (
        movie && (<>
            <div>
                <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} width="200px"/>
                <div>
                    <h1>{movie.title} {movie.release_date}</h1>
                    <p>User Score: {Math.floor((Number(movie.vote_average) ) * 10)}%</p>
                    <h2>Overview</h2>
                    <p>{movie.overview}</p>
                    <h3>Genres</h3>
                    {movie.genres && <p>{movie.genres.map(({ name }) => { return (name) }).join(', ')}</p>}
                </div>
            </div>
            <h4>Additional information</h4>
            <ul>
                <Link to="cast">Cast</Link>
                <Link to="reviews">Reviews</Link>
            </ul>
            <Outlet />
        </>)
    )
};

export default MovieDetails;
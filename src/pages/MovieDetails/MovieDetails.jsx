import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { Outlet, useParams } from "react-router-dom";
import { LinkWrapper, Wrapper, Link, Image } from "./MovieDetails.styled";

const MovieDetails = () => {
    const { id } = useParams();
    const [movie, setMovie] = useState([]);
    
    useEffect(() => {
        const fetchMovieID = async (id) => {
            try {
                const results = await fetchMovies(id);
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
    
    const { poster_path, title, release_date, vote_average, overview, genres } = movie;

    return (
        
        movie && (<>
            <Wrapper>
                <Image src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt={title} width="250px"/>
                <div>
                    <h1>{title} ({release_date && release_date.slice(0,4)})</h1>
                    <p>User Score: {Math.floor((Number(vote_average) ) * 10)}%</p>
                    <h2>Overview</h2>
                    <p>{overview}</p>
                    <h3>Genres</h3>
                    {genres && <p>{genres.map(({ name }) => { return (name) }).join(', ')}</p>}
                </div>
            </Wrapper>
            <h4>Additional information</h4>
            <LinkWrapper>
                <Link to="cast">Cast</Link>
                <Link to="reviews">Reviews</Link>
            </LinkWrapper>
            <Outlet />
        </>)
    )
};

export default MovieDetails;
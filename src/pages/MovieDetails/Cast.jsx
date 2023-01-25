import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { CastItem, CastList, CastName } from "./Cast.styled";

const Cast = () => {
    const { id } = useParams();
    const [cast, setCast] = useState([]);
    
    useEffect(() => {
        const fetchMovieID = async (id) => {
            try {
                const results = await fetchMovies(id);
                setCast(results.data.cast);
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
    
    return (
        cast && (<CastList>
            {cast.length > 0 && cast.map(({ profile_path, name, id, character }) => {
                    return (<CastItem key={id}>
                        <img src={`https://image.tmdb.org/t/p/w500${profile_path}`} alt={name} width="200px"/>
                        <CastName>{name}</CastName>
                        <p>Character: { character }</p>
                    </CastItem>)
                } )}
        </CastList>)
    )
};

export default Cast;
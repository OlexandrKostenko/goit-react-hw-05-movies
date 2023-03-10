import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { LinkItem, ListItem } from "./Home.styled";

const Home = () => {
const [trendingMovies, setTrendingMovies] = useState([])

    useEffect(() => {
        const handleFetch = async () => {
            try {
                const results = await fetchTrendingMovies();
                const trendingList = results.data.results;
                setTrendingMovies(trendingList);
            } catch (error) {
                console.log(error);
            }
        }
        handleFetch()
    }, []);

    const fetchTrendingMovies = async () => {
        try {
            const API_KEY = '5266ce003df04ebad77cca2af658cdf2';
            const url = `https://api.themoviedb.org/3/trending/movie/week?api_key=${API_KEY}`

            return await axios.get(url);
        } catch (error) {
            console.log(error);
        };
    };
    
    return (
        <>
            <h1>Trending movies</h1>
            <ul>
                {trendingMovies.length > 0 && trendingMovies.map(({ title, id }) => {
                    return (<ListItem key={id}>
                    <LinkItem to={`/movies/${id}`}>{ title }</LinkItem>
                    </ListItem>)
                } )}
            </ul>
        </>
    )
};

export default Home;
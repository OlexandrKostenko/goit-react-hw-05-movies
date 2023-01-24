import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const Movies = () => {
    const [query, setQuery] = useState('');
    const [searchMovies, setSearchMovies] = useState([]);

        const fetchMovies = async (query) => {
        try {
            const API_KEY = '5266ce003df04ebad77cca2af658cdf2';
            const options = `query=${query}&language=en-US&include_adult=false`;
            const url = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&${options}`

            return await axios.get(url);
        } catch (error) {
            console.log(error);
        };
        };
    
    
        const fetchSearchMovies = async (query) => {
            try {
                const results = await fetchMovies(query);
                const searchList = results.data.results;
                setSearchMovies(searchList);
            } catch (error) {
                console.log(error);
            }
        }
    
    
    const handleSubmit = (event) => {
        event.preventDefault();
        fetchSearchMovies(query)
        console.log(event);        
    };

    const handleChange = (event) => {
        setQuery(event.target.value);
        console.log(event.target.value)
    }

    const reset = () => {
        setQuery('');
    }
    
    
    return (
        <>
        <form onSubmit={handleSubmit}>
            <input type="text" value={query} name='query' onChange={handleChange}/>
                <button type="submit">Search</button>
            </form>
        <ul>
             
                {searchMovies.length > 0 && searchMovies.map(({ title, id }) => {
                    return (<li key={id}>
                        <Link to={`/movies/${id}`}>{ title }</Link>
                   </li>)
                } )}
            
        </ul>
    </>)
            }


export default Movies;
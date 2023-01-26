import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { Label, ReviewItem } from "./Reviews.styled";

const Reviews = () => {
    const { id } = useParams();
    const [review, setReview] = useState([]);
    
    useEffect(() => {
        const fetchMovieID = async (id) => {
            try {
                const results = await fetchMovies(id);
                setReview(results.data.results);
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
    
    return (
        review && (<ul>
            {review.length > 0 ? review.map(({ author, content, id, created_at }) => {
                    return (<ReviewItem key={id}>
                        <p><Label>Author:</Label> {author}</p>
                        <p><Label>Review: </Label>{content}</p>
                        <p><Label>Created: </Label>{ created_at.slice(0,10) }</p>
                    </ReviewItem>)
            })
                : <p>&#129402; We don&#96;t have any reviews for this movie </p>}
        </ul>)
    )
};

export default Reviews;
import { useEffect, useState } from "react";
import { fetchMovieReviews } from "service/api";
import { useParams } from "react-router-dom";
import { LineWave } from 'react-loader-spinner';
import { AutorName, Wrapper, Review } from "./Reviews.styled";
import { Error } from "components/Error/Error";

const Reviews = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [reviews, setReviews] = useState([]);
    const { movieId } = useParams();

    useEffect(() => {
        const fetchMovie = async () => {
            if (!movieId) {
                return
            }
            try {
                setLoading(true);
                setError(false);
                const response = await fetchMovieReviews(movieId);
                setReviews(response.results);
            } catch (error) {
                setError(true);
            } finally {
                setLoading(false);
            };
            
        }
        fetchMovie();
    }, [movieId]);

    return (
        <Wrapper>
            {reviews.length === 0 && !loading ? 
                <div>Sorry, we don't have any reviews for this movie.</div> :
                <div>
                    {loading && <LineWave width="100%" color = '#6a857e'/>}
                    {error && !loading && <Error/>}
                    <ul> {reviews.map(({ id, author, content }) =>
                        (<li key={id}>
                            <AutorName>Author: {author}</AutorName>
                            <Review>{content}</Review>
                        </li>))}
                    </ul>
                </div>
                }
        </Wrapper>
    )
};

export default Reviews;
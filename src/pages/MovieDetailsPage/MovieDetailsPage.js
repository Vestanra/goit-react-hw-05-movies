import { Link, Outlet, useParams, useLocation } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { fetchMovieById } from "service/api";
import { LineWave } from 'react-loader-spinner';
import MovieItem from "components/MovieItem/MovieItem";
import { ButtonBack, Text, StyledLink, List } from "./MovieDetailsPage.styled";
import { Error } from "components/Error/Error";

const MovieDetailsPage = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [movie, setMovie] = useState(null);
    const { movieId } = useParams();
    const location = useLocation();
    const backLink = useRef(location.state?.from ?? '/')

    useEffect(() => {
        const controller = new AbortController();
        const fetchMovie = async () => {
            if (!movieId) {
                return
            }
            try {
                setLoading(true);
                setError(false);
                const response = await fetchMovieById(movieId, controller);
                setMovie(response);
            } catch(error) {
                setError(true);
            } finally {
                setLoading(false);
            };    
        }  
        fetchMovie();
        return () => {
            controller.abort();
        };
    }, [movieId])
 
    return (
        <main>
            <Link to={backLink.current}><ButtonBack>Go back</ButtonBack></Link>
            {loading && <LineWave width="100%" color = '#6a857e'/>}
            {error && !loading && <Error/>}
            {movie !== null && <MovieItem item={movie}>
                <Text>Additional information</Text>
                <List>
                    <li>
                        <StyledLink to="cast">Cast</StyledLink>
                    </li>
                    <li>
                        <StyledLink to="reviews">Reviews</StyledLink>
                    </li>
                </List>
                <Outlet/>
            </MovieItem>}
        </main>
    )
};

export default MovieDetailsPage;
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchMovieById } from "service/api";

const MovieDetailsPage = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [movie, setMovie] = useState({});
    const { movieId } = useParams();

    useEffect(() => {
        const fetchMovie = async () => {
            try {
                setLoading(true);
                setError(false);
                const response = await fetchMovieById(movieId);
                setMovie(response);
                console.log(response);
            } catch(error) {
                setError(true);
            } finally {
                setLoading(false);
            };    
            
        }  
        fetchMovie();
        }, [movieId])
    return (
        <div>Moviedetails</div>
    )
};

export default MovieDetailsPage;
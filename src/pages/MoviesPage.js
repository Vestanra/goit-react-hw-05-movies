import SearchMovie from "components/SearchMovie/SearchMovie";
import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchMoviesByQuery } from "service/api";
import MoviesList from "components/MoviesList/MoviesList";
import { LineWave } from 'react-loader-spinner';
import { Error } from "components/Error/Error";

const MoviesPage = () => {
    const [searchParams] = useSearchParams();
    const [movies, setMovies] = useState([]);
    const [isMovies, setIsMovies] = useState(false)
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const getQuery = searchParams.get('query') ?? '';
     
    useEffect(() => {
        const fetchMovies = async () => {
            if (getQuery === '') {
                return;
            }
            try {
                setIsMovies(false);
                setLoading(true);
                setError(false);
                const getMovies = await fetchMoviesByQuery(getQuery);
                setMovies(getMovies.results);
                if (getMovies.results.length < 1) {
                     setIsMovies(true);
                }
            } catch (error) {
                setError(true);
            } finally {
                setLoading(false);
            }
        }
        fetchMovies()
    }, [getQuery]);
    
    return (
        <main>
            <SearchMovie />
            {loading && <LineWave width="100%" color = '#6a857e'/>}
            {isMovies && <div>Sorry, there are no movies for your search</div>}
            {error && !loading && <Error/>}
            {movies.length > 0 && <MoviesList items={movies} />}
        </main>
    )
}

export default MoviesPage;
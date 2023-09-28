import SearchMovie from "components/SearchMovie";
import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchMoviesByQuery } from "service/api";
import MoviesList from "components/MoviesList";

const MoviesPage = () => {
    const [searchParams] = useSearchParams();
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const getQuery = searchParams.get('query')?? '';
     
    useEffect(() => {
        const fetchMovies = async () => {
            if (getQuery === '') {
                return;
            }
            try {
                setLoading(true);
                setError(false);
                const getMovies = await fetchMoviesByQuery(getQuery);
                setMovies(getMovies.results);
            } catch (error) {
                setError(true);
            } finally {
                setLoading(false);
            }
        }
        fetchMovies()
    }, [getQuery]);
    
   

    return (
        <div>
            <SearchMovie />
            {loading && <div>Loading...</div>}
            {error && !loading && <div>OOPS!!!</div>}
            {movies.length > 0 && <MoviesList items={movies} />}
        </div>
    )
}

export default MoviesPage;
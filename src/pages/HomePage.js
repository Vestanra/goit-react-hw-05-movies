import MoviesList from "components/MoviesList";
import { useEffect, useState } from "react";
import { fetchTrendingMovie } from "service/api";

const HomePage = () => {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                setLoading(true);
                setError(false);
                const movies = await fetchTrendingMovie();
                setMovies(movies.results);
                console.log(movies.results);
            } catch (error) {
                console.log(error);
                setError(true);
            } finally {
                setLoading(false);
            }
        }
        fetchMovies()
    }, []);
    

    return (
        <div>
            <h1>Trending today</h1>
            {loading && <div>Loading...</div>}
            {error && !loading && <div>OOPS!!!</div>}
            {movies.length > 0 && <MoviesList items={movies} />}
        </div>
    )
};

export default HomePage;
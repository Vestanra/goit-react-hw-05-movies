import MoviesList from "components/MoviesList/MoviesList";
import { useEffect, useState } from "react";
import { fetchTrendingMovie } from "service/api";
import { Title } from "./HomePage.styled";
import { LineWave } from 'react-loader-spinner';
import { Error } from "components/Error/Error";

const HomePage = () => {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    useEffect(() => {
        const controller = new AbortController();
 
        const fetchMovies = async () => {
            try {
                setLoading(true);
                setError(false);
                const movies = await fetchTrendingMovie({signal: controller.signal});
                setMovies(movies.results);
            } catch (error) {
                setError(true);
            } finally {
                setLoading(false);
            }
        }
        fetchMovies();

        return () => {
            controller.abort();
        };
    }, []);

    return (
        <main>
            <Title>Trending today</Title>
            {loading && <LineWave width="100%" color = '#6a857e'/>}
            {error && !loading && <Error/>}
            {movies.length > 0 && <MoviesList items={movies} />}
        </main>
    )
};

export default HomePage;
import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
const API_KEY = 'f8e7f7613c544b6e8196590b3307dcc3';

export const fetchTrendingMovie = async () => {
    const response = await axios.get(`trending/movie/day?api_key=${API_KEY}&language=en-US`);
    return response.data;
};

export const fetchMoviesByQuery = async (query) => {
    const response = await axios.get(`search/movie?api_key=${API_KEY}&query=${query}&language=en-US`);
    return response.data;
};

export const fetchMovieById = async (id) => {
    const response = await axios.get(`movie/${id}?api_key=${API_KEY}`);
    return response.data;
};
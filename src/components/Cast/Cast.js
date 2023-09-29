import { useEffect, useState } from "react";
import { fetchMovieCast } from "service/api";
import { useParams } from "react-router-dom";
import { LineWave } from 'react-loader-spinner';
import { CastList, CastName, Wrapper } from "./Cast.styled";
import { Error } from "components/Error/Error";
const defaultImg = 'https://icon-library.com/images/no-picture-available-icon/no-picture-available-icon-20.jpg';

const Cast = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [cast, setCast] = useState([]);
    const { movieId } = useParams();

    useEffect(() => {
        const fetchMovie = async () => {
            if (!movieId) {
                return
            }
            try {
                setLoading(true);
                setError(false);
                const response = await fetchMovieCast(movieId);
                setCast(response.cast);
            } catch (error) {
                setError(true);
            } finally {
                setLoading(false);
            };
        };

        fetchMovie();
    }, [movieId]);

    return (  
        <Wrapper>
            {cast.length === 0 && !loading ? <div>Sorry, we don't have information about tha cast.</div> :
                <div>
                {loading && <LineWave width="100%" color = '#6a857e'/>}
                {error && !loading && <Error/>}
                <ul>{cast.map(el => {
                    return (<CastList key={el.id}>
                        <img src={el.profile_path ? `https://image.tmdb.org/t/p/w500${el.profile_path}` : defaultImg} alt="actor" width={100} />
                        <div>
                            <CastName>{el.name}</CastName>
                            <p>Character: {el.character}</p>
                        </div>
                    </CastList>)})}
                </ul>
                </div>}
            
        </Wrapper>
    )
};

export default Cast;
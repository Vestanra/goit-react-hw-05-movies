import { Wrapper, MovieInfo, Genres, Title } from "./MovieItem.styled";

const MovieItem = ({ item, children }) => {
    const defaultImg = 'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';
    
    return (
        <div>
            <Wrapper>
                <img src={item.poster_path ? `https://image.tmdb.org/t/p/w500${item.poster_path}` : defaultImg} alt="poster" width={250} />
                <MovieInfo>
                    <h2>{item.title}({item.release_date.slice(0, 4)})</h2>
                    <p>User score: {Math.round(item.vote_average * 10)}%</p>
                    <div>
                        <Title>Overview</Title>
                        <p>{item.overview}</p>
                    </div>
                    <div>
                        <Title>Genres</Title>
                        <Genres>{item.genres.map(el => <li key={el.id}>{el.name}</li>)}</Genres>
                    </div>
                </MovieInfo>
            </Wrapper>
            {children}
        </div>
    )
}

export default MovieItem;
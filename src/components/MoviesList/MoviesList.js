import { useLocation } from 'react-router-dom';
import { StyledLink, List } from './MoviesList.styled';

const MoviesList = ({ items }) => {
    const location = useLocation();
    
    return (
        <List>
            {items.map(item => 
                <li key={item.id}>
                    <StyledLink to={`/movies/${item.id}`} state={{ from: location }}>{item.title}</StyledLink>
                </li>
            )}
        </List>
    )
};

export default MoviesList;
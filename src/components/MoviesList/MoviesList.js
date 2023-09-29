import { useLocation } from 'react-router-dom';
import { StyledLink, List } from './MoviesList.styled';

const MoviesList = ({ items }) => {
    const location = useLocation();
    
    return (
        <List>
            {items.map(({id, title}) => 
                <li key={id}>
                    <StyledLink to={`/movies/${id}`} state={{ from: location }}>{title}</StyledLink>
                </li>
            )}
        </List>
    )
};

export default MoviesList;
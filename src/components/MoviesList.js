import { Link } from 'react-router-dom';

const MoviesList = ({ items }) => {
    return (
        <ul>
            {items.map(item => 
                <li key={item.id}>
                    <Link to={`${item.id}`}>{item.title}</Link>
                </li>
            )}
        </ul>
    )
};

export default MoviesList;
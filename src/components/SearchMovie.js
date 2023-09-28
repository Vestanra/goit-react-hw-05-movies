import { useSearchParams } from "react-router-dom";

const SearchMovie = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    
    const onSubmit = (evt) => {
        evt.preventDefault();
        setSearchParams({ 'movie': evt})
    }


    return (
        <div>
            <form onSubmit={evt => onSubmit(evt.target.value)}>
                <input name="query" type="text"/>
                <button type="submit">Search</button>
            </form>
        </div>
    )
}

export default SearchMovie;
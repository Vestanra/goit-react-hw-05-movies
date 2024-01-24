import { useSearchParams } from "react-router-dom";
import { Button, FormWrapper, Input, Svg, Text } from "./SearchMovie.styled";
import { BiSearchAlt } from "react-icons/bi";

const SearchMovie = () => {
    const [, setSearchParams] = useSearchParams();
    
    const onSubmit = (evt) => {
        evt.preventDefault();
        const value = evt.target.elements.query.value;
        setSearchParams({ 'query': value });
        evt.target.reset();
    }

    return (
        <div>
            <FormWrapper onSubmit={onSubmit}>
                <Input name="query" type="text"/>
                <Button type="submit"><Text>search</Text><Svg/></Button>
            </FormWrapper>
        </div>
    )
}

export default SearchMovie;
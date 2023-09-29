import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const StyledLink = styled(Link)`
text-decoration: none;
color: #164235; 
&:hover {
  text-decoration: underline; 
}
`;

export const List = styled.ul`
display: flex;
flex-direction: column;
gap: 4px;
font-weight: 500;
`;
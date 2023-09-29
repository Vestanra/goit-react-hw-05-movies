import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const ButtonBack = styled.button`
margin-top: 16px;
margin-bottom: 16px;
text-align: center;
padding: 4px 24px;
font-size: 18px;
background-color: #6a857e;
color: #F5F5F5;
border: 1px solid #F5F5F5;
border-radius: 4px;
cursor: pointer;
&:hover {
    box-shadow: 1px 1px 2px 2px rgba(194, 194, 214);
}
`;

export const Text = styled.p`
margin-top: 24px;
margin-bottom: 8px;
font-size: 18px;
font-weight:500;
`;


export const StyledLink = styled(Link)`

font-weight:500;
`;

export const List = styled.ul`
list-style: inside;
padding-left: 16px;
margin-bottom: 24px;
`
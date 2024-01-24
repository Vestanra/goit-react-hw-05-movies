import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Header = styled.header`
background-color: #6a857e;
color: #F5F5F5;
padding: 24px 0;
@media (max-width: 767px){
    display: flex;
    justify-content: center;
  }
`;

export const List = styled.ul`
max-width: 1400px;
margin: 0 auto;
padding-left: 24px;
display: flex;
gap: 24px;
`;

export const StyledNavLink = styled(NavLink)`
font-size: 24px;
text-decoration: none;
font-weight: 500;
border-radius: 8px;
padding: 8px;
color: #F5F5F5;
&.active {
    border: 2px solid #F5F5F5;
    box-shadow: 1px 1px 2px 2px rgba(194, 194, 214, 0.5);
  }
`;
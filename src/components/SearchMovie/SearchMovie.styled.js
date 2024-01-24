import styled from 'styled-components';
import { BiSearchAlt } from "react-icons/bi";

export const FormWrapper = styled.form`
margin-top: 24px;
margin-bottom: 16px;
gap: 8px;
display: flex;
@media (max-width: 767px){
    flex-direction: column;
    align-items: center;
    gap: 16px;
  }
`;

export const Button = styled.button`
display: flex;
gap: 8px;
width: 134px;
height: 40px;
justify-content: center;
align-items: center;
text-align: center;
padding: 8px 16px;
font-size: 20px;
background-color: #6a857e;
color: #F5F5F5;
border: 1px solid #F5F5F5;
border-radius: 8px;
cursor: pointer;
&:hover {
    box-shadow: 1px 1px 2px 2px rgba(194, 194, 214);
}
`;

export const Input = styled.input`
    min-width: 300px;
    padding: 10px;
    font-size: 16px;
    border: 1px solid #6a857e;
    border-radius: 8px;
    outline: none;
`;

export const Text = styled.span`
font-weight: 500;
`;

export const Svg = styled(BiSearchAlt)`
    height: 28px;
    width: 28px;
    color: white;
`;

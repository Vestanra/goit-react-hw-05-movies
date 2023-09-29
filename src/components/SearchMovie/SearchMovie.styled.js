import styled from 'styled-components';

export const FormWrapper = styled.form`
margin-top: 24px;
margin-bottom: 16px;
gap: 8px;
display: flex;
`;

export const Button = styled.button`
display: flex;
gap: 4px;
justify-content: center;
align-items: center;
text-align: center;
padding: 8px 16px;
font-size: 20px;
background-color: #6a857e;
color: #F5F5F5;
border: 1px solid #F5F5F5;
border-radius: 4px;
cursor: pointer;
&:hover {
    box-shadow: 1px 1px 2px 2px rgba(194, 194, 214);
}
`;

export const Input = styled.input`
    min-width: 320px;
    padding: 10px;
    font-size: 16px;
    border: 1px solid #ccc;
    border-radius: 4px;
    outline: none;
`;
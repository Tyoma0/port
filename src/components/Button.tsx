import styled from "styled-components";
import { theme } from "../styles/Theme";



export const Button = styled.button`
   background: linear-gradient(to right, #945dd6, #6978d1, #13adc7);
color: ${theme.colors.font};
min-width: 240px;
min-height:60px;
border-radius:83px;
border:none;
font-size: 20px;
font-family:'Poppins';
transition: transform 0.3s ease-in-out;
&:hover{
   transform:scale(1.1);
   cursor:pointer;
}



`
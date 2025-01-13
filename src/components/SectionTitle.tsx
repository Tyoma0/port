import styled from "styled-components";
import { font } from "../styles/Common";

type SectionTitleProps = {
font?:string
weight?:string
size?:string
color?:string
}

export const SectionTitle = styled.h2<SectionTitleProps>`  
  font-family:${props =>props.font || 'Poppins'};
  font-weight: ${props => props.weight || '600'};
  font-size:${props => props.size || '46px'};
  color:${props =>props.color|| '#FFFFFF'};
  display: flex;
justify-content:flex-start;
padding-bottom:70px;
  ${font({family: "'Poppins', sans-serif", weight: 700, Fmax: 46, Fmin: 35})};
  

`
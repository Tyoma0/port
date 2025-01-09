import styled from "styled-components";
import { theme } from "../styles/Theme";

type FlexWrapperType ={
direction?:string
justify?:string
align?:string
wrap?:string
gap?:string
}

export const FlexWrapper = styled.div<FlexWrapperType>`
  display: flex;  
  flex-direction:${props =>props.direction || 'row'};
  justify-content: ${props => props.justify || 'flex-start'};
  align-items:${props => props.align || 'normal'};
  flex-wrap:${props =>props.wrap || 'nowrap'};
  height:100%;
  gap:${props => props.gap || '0'};

  @media ${theme.media.tablet}{
        display: flex;
        flex-direction:column;
        align-items:center;
        justify-content:center
    }
`
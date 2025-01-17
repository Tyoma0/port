
import styled from 'styled-components';
import { theme } from '../../../../../styles/Theme';
import { font } from '../../../../../styles/Common';


type TextTypeProps={
    text:string
}

export const TextLine = (props:TextTypeProps) => {
    return (
        <StyledText>
            {props.text}
        </StyledText>
    );
};

const StyledText = styled.p`
     font-size: 14px;
    margin-top: 30px; 
    text-align: center;
    max-width:260px;
    width:100%;
@media ${theme.media.tablet} {
    
position: relative;
left:-80px;
top:-90px;
text-align:left;
height:50px;
max-width:140px;
${font({family: "'Poppins', sans-serif", weight: 500, Fmax: 14, Fmin: 11})};

}
`
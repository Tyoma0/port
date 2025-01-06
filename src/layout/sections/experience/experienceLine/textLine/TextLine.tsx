
import styled from 'styled-components';


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
    

`
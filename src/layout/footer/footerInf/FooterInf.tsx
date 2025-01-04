
import styled from 'styled-components';
import { theme } from '../../../styles/Theme';


type FooterTypeProps = {
    text:string
    link?:string
    
    }

export const FooterInf = (props:FooterTypeProps) => {
    return (
        <StyledInfo>
            <StyledSpan>{props.text}</StyledSpan>
            <StyledBtn>{props.link}</StyledBtn>
        </StyledInfo>
    );
};

const StyledInfo = styled.div`
    display: flex;
    flex-direction:column
`
const StyledSpan = styled.span`
    
`
const StyledBtn = styled.button`
    border:none;
    background-color:${theme.colors.primaryBg};
    color:${theme.colors.font};
    font-family: 'Poppins','sans-serif';
    font-size: 15px;
    font-weight: 600;
    line-height: 33px;
    cursor:pointer ;
`
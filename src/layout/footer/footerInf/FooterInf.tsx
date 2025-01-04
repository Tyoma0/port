
import styled from 'styled-components';
import { theme } from '../../../styles/Theme';


type FooterTypeProps = {
    link?:string
   
    }

export const FooterInf = (props:FooterTypeProps) => {
    return (
        <StyledInfo>
            <StyledBtn >{props.link}</StyledBtn>
        </StyledInfo>
    );
};

const StyledInfo = styled.div`
    
`

const StyledBtn = styled.span`
    background-color:${theme.colors.primaryBg};
    color:${theme.colors.font};
    font-family: 'Poppins','sans-serif';
    font-size: 15px;
    font-weight: 600;
    line-height: 33px;
    
`
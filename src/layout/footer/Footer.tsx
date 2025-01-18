
import styled from 'styled-components';

import { SocialMedia } from '../../components/socialMedia/SocialMedia';
import { FlexWrapper } from '../../components/FlexWrapper';
import { Container } from '../../components/Container';
import { theme } from '../../styles/Theme';


export const Footer = () => {
    return (
        <StyledFooter>
            <Container>
            <FlexWrapper justify='space-evenly' align='center' >
            <FooterSpan><a href='tel'>Call me: 123-456-789</a></FooterSpan>
            <FooterSpan><a href="#">Email: xxx@xyz.com</a></FooterSpan>
            <SocialMedia/>
            </FlexWrapper>
            </Container>                      
        </StyledFooter>
    );
};

const StyledFooter = styled.footer`
    background-color:#0F1624;
    min-height:20vh;
    display: flex;
    min-height:150px;
    
`
const FooterSpan = styled.span`
background-color:${theme.colors.primaryBg};
    color:${theme.colors.font};
    font-family: 'Poppins','sans-serif';
    font-size: 15px;
    font-weight: 600;
    line-height: 33px;
    padding:25px
`
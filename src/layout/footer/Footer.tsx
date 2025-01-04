
import styled from 'styled-components';
import { FooterInf } from './footerInf/FooterInf';
import { SocialMedia } from '../../components/socialMedia/SocialMedia';
import { FlexWrapper } from '../../components/FlexWrapper';
import { Container } from '../../components/Container';


export const Footer = () => {
    return (
        <StyledFooter>
            <Container>
            <FlexWrapper justify='space-around' align='center'>
            <FooterInf  text='Call me: ' link='123-456-789'/>
            <FooterInf  text='Email: ' link='xxx@xyz.com'/>
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
    align-items:center;
    justify-content: center;
`

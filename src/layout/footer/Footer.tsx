
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
            <FooterInf   link='Call me: 123-456-789'/>
            <FooterInf  link='Email: xxx@xyz.com'/>
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
    min-height:150px
`

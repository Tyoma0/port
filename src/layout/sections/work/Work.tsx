
import styled from 'styled-components';
import { SectionTitle } from '../../../components/SectionTitle';
import { FlexWrapper } from '../../../components/FlexWrapper';
import { Works } from './works/Works';
import foto from './../../../assets/images/workFoto.webp'
import { Container } from '../../../components/Container';

export const Work = () => {
    return (
        <StyledWork>
        <Container> 
        <SectionTitle>Projects</SectionTitle>       
        <FlexWrapper gap='40px' wrap='wrap' justify='space-between' >
            
            <Works src={foto} title={'PROJECT 1'} text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'}/>
            <Works src={foto} title={'PROJECT 2'} text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'}/>
            <Works src={foto} title={'PROJECT 3'} text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'}/>
            <Works src={foto} title={'PROJECT 4'} text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'}/>
        </FlexWrapper>
        </Container>        
        </StyledWork>
    );
};

const StyledWork = styled.section`
    
`


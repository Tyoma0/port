
import styled from 'styled-components';
import { SectionTitle } from '../../../components/SectionTitle';
import { ExperienceLine } from './experienceLine/ExperienceLine';
import { Container } from '../../../components/Container';


export const Experience = () => {
    return (
        <StyledExperience id='experience'>
            <Container>
            <SectionTitle>Experience</SectionTitle>               
                <ExperienceLine/>                          
            </Container>                        
        </StyledExperience>
    );
};

const StyledExperience = styled.section`
    height:65vh;
   min-height:650px;
   position: relative;
`
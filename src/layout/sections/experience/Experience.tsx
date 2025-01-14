
import styled from 'styled-components';
import { SectionTitle } from '../../../components/SectionTitle';
import { ExperienceLine } from './experienceLine/ExperienceLine';
import { Container } from '../../../components/Container';


export const Experience = () => {
    return (
        <StyledExperience>
            <Container>
            <SectionTitle>Experience</SectionTitle>               
                <ExperienceLine/>                          
            </Container>                        
        </StyledExperience>
    );
};

const StyledExperience = styled.section`
    height:100vh;
   height:600px;
   position: relative;
`
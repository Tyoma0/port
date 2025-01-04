
import styled from 'styled-components';
import { SectionTitle } from '../../../components/SectionTitle';
import { ExperienceLine } from './experienceLine/ExperienceLine';
import { Container } from '../../../components/Container';


export const Experience = () => {
    return (
        <StyledExperience>
            <Container>
            <SectionTitle>Experience</SectionTitle>
                <Div>
                
                <ExperienceLine/>
                </Div>
            
            </Container>                        
        </StyledExperience>
    );
};

const StyledExperience = styled.section`
    height:100vh;
   height:600px
`
const Div = styled.div`
    display: flex;
    flex-direction:column;
    justify-content:center;
   
    margin-top:60px
`
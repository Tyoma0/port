
import styled from 'styled-components';
import { SectionTitle } from '../../../components/SectionTitle';
import { FlexWrapper } from '../../../components/FlexWrapper';
import { Icon } from '../../../components/icon/Icon';
import { Skills } from './skills/Skills';
import { Container } from '../../../components/Container';
import { font } from '../../../styles/Common';


export const Skill = () => {
    return (
        <StyledSkill>
            <Container>
            <SectionTitle>Technologies</SectionTitle>
            <FlexWrapper direction='column' align='center'>
              <Skills text='Html' width={78} />
              <Skills text='Css, Sass' width={68} />
              <Skills text='React' width={53} />
              <Skills text='Styled components' width={68} />
            </FlexWrapper>
              
            
            <StyledDiv>
            <StyledTitleSkills>Additional technolgies and skills</StyledTitleSkills>
            <StyledUl>
                <StyledLi><Icon width='100' height='100' viewBox="0 0 100 100"  iconId={'group'}/></StyledLi>
                <StyledLi><Icon width='100' height='100' viewBox="0 0 100 100" iconId={'gitHub2'}/></StyledLi>
                <StyledLi><Icon width='100' height='100' viewBox="0 0 100 100" iconId={'skill'}/></StyledLi>
            </StyledUl>
            </StyledDiv>
            </Container>                                   
        </StyledSkill>
    );
};


 const StyledSkill = styled.section`
    min-height: 100vh;
    position: relative;
 `
 const StyledDiv = styled.div`
   display: flex;
   flex-direction:column;
   align-items:center;
   margin-top:120px
    
 `
 const StyledTitleSkills = styled.h3`
    font-size:44px;
    margin-bottom:70px;
    ${font({family: "'Poppins', sans-serif", weight: 600, Fmax: 44, Fmin: 35})};
 `
  const StyledUl = styled.ul`
    display: flex;
    align-items:flex-start;
    gap:50px;

    
  `
   const StyledLi = styled.li`
    
    
   `

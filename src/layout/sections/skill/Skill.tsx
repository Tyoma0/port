
import styled from 'styled-components';
import { SectionTitle } from '../../../components/SectionTitle';
import { FlexWrapper } from '../../../components/FlexWrapper';
import { Icon } from '../../../components/icon/Icon';
import { Skills } from './skills/Skills';
import { Container } from '../../../components/Container';


export const Skill = () => {
    return (
        <StyledSkill>
            <Container>
            <SectionTitle>Technologies</SectionTitle>
            <FlexWrapper direction='column'>
              <Skills text='Html' width={78} />
              <Skills text='Css, Sass' width={68} />
              <Skills text='React' width={53} />
              <Skills text='Styled components' width={68} />
            </FlexWrapper>
              
            
            <StyledDiv>
            <StyledSpan>Additional technolgies and skills</StyledSpan>
            <StyledUl>
                <StyledLi><Icon width='150' height='150'  iconId={'group'}/></StyledLi>
                <StyledLi><Icon width='150' height='150' iconId={'gitHub2'}/></StyledLi>
                <StyledLi><Icon width='150' height='150' iconId={'skill'}/></StyledLi>
            </StyledUl>
            </StyledDiv>
            </Container>                                   
        </StyledSkill>
    );
};


 const StyledSkill = styled.section`
    min-height: 100vh;
    
 `
 const StyledDiv = styled.div`
   display: flex;
   flex-direction:column;
   align-items:center
    
 `
 const StyledSpan = styled.span`
    font-size:44px;
 `
  const StyledUl = styled.ul`
    display: flex;
    
  `
   const StyledLi = styled.li`
    
   `

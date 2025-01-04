
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
            <FlexWrapper direction='column' align='center'>
              <Skills text='Html' width={78} />
              <Skills text='Css, Sass' width={68} />
              <Skills text='React' width={53} />
              <Skills text='Styled components' width={68} />
            </FlexWrapper>
              
            
            <StyledDiv>
            <StyledSpan>Additional technolgies and skills</StyledSpan>
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
    
 `
 const StyledDiv = styled.div`
   display: flex;
   flex-direction:column;
   align-items:center;
   margin-top:120px
    
 `
 const StyledSpan = styled.span`
    font-size:44px;
    margin-bottom:70px
 `
  const StyledUl = styled.ul`
    display: flex;
    align-items:flex-start;
    gap:50px;

    
  `
   const StyledLi = styled.li`
    
    
   `

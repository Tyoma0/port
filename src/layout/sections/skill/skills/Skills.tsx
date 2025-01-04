
import styled, { keyframes } from 'styled-components';
import { useInView } from 'react-intersection-observer';

type SkillsTypeProps = {
  text: string;
  width: number;
};

export const Skills = (props: SkillsTypeProps) => {
  const { ref, inView } = useInView({
    triggerOnce: false, 
    threshold: 0.5, 
  });

  return (
    <MainDiv ref={ref}>
      <Title>{props.text}</Title>
      <StyledIndicator>
        <StyledDiv width={props.width} inView={inView}>
          <StyledDiv2> </StyledDiv2>
        </StyledDiv>
      </StyledIndicator>
    </MainDiv>
  );
};

const Title = styled.span`
  font-size: 24px;
  font-weight: 600;
  color: #ffff;
`;

const MainDiv = styled.div`

`;

const animatePositive = (width: number) => keyframes`
  0% {
    width: 0%;
  }
  100% {
    width: ${width}%;
  }
`;

const StyledIndicator = styled.div`
  max-width: 900px;
  height: 18px;
  border-radius: 83px;
  margin-bottom: 20px;
  position: relative;
  background-color: #162950;
`;

const StyledDiv = styled.div<{ width: number; inView: boolean }>`
  height: 18px;
  border-radius: 83px;
  position: absolute;
  top: 0;
  left: 0;
  line-height: 4px;
  animation: ${({ width, inView }) => (inView ? animatePositive(width) : 'none')} 6s forwards;
  background: linear-gradient(to right, #945dd6, #6978d1, #13adc7);
`;

const StyledDiv2 = styled.div`
  font-size: 22px;
  font-weight: 600;
  padding: 0 15px;
  float: right;
  
`;
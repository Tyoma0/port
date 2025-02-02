
import styled from 'styled-components';
import foto from './../../../assets/images/MainFoto.webp'
import { FlexWrapper } from '../../../components/FlexWrapper';
import { theme } from '../../../styles/Theme';
import { Container } from '../../../components/Container';
import { font } from '../../../styles/Common';
import Typewriter from 'typewriter-effect';
import Tilt from 'react-parallax-tilt';
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';


export const Main = () => {
    return (
        <FirstDiv>
            
<Container>
<FlexWrapper align='center' justify='space-evenly' wrap='wrap'>
            <DivText>
                <MainTitle>
                    <Typewriter options={{
                    strings: ['Lorem ipsum dolor amet'],
                    autoStart: true,
                    loop: true,
                    delay: 100,
                        }}/>
                    </MainTitle>
                <MainP>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</MainP>
                <ScrollLink 
    to="contact" 
    smooth={true} 
    duration={500} 
    style={{ textDecoration: 'none' }}
><Link>Contact me :)</Link>
</ScrollLink>
            </DivText>
            <Tilt>
            <FotoWrapper>
            <Foto src={foto} alt="" />
            <GradientBorder />
            </FotoWrapper>
            </Tilt>
            
                
            </FlexWrapper>
</Container>            
        </FirstDiv>                            
    );
};

const DivText = styled.div`
   display: flex;
   flex-direction:column;
   align-items:flex-start;
   text-align:start;
   @media ${theme.media.tablet}{
        display: flex;
        align-items:center;
        justify-content:center;
        padding-bottom:10px;
        
    }
`

export const Link = styled.a`
   background: linear-gradient(to right, #945dd6, #6978d1, #13adc7);
color: ${theme.colors.font};
min-width: 240px;
min-height:60px;
border-radius:83px;
display: flex;
align-items:center;
justify-content:center;
border:none;
font-size: 20px;
font-family:'Poppins';
transition: transform 0.3s ease-in-out;
margin-bottom:20px;
&:hover{
   transform:scale(1.1);
   cursor:pointer;
}

`

const FirstDiv = styled.section`
    height:80vh;
    display: flex;
    

    @media ${theme.media.tablet}{
        min-height:1100px
    }
        
    
`

const Foto = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-top-left-radius: 51px;
    border-bottom-right-radius: 51px;
    
`;
const FotoWrapper = styled.div`
    position: relative;
    width: 380px;
    height: 450px;  
    overflow: hidden; 
    border-top-left-radius: 50px;
    border-bottom-right-radius: 50px;
    box-shadow: 5px 5px 50px 5px rgba(53, 189, 223, 0.5);
    
`;
const GradientBorder = styled.div`
position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-top-left-radius: 50px;
    border-bottom-right-radius: 50px;
    pointer-events: none;
    z-index: 1;

    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: linear-gradient(to right, #945dd6, #6978d1, #13adc7);
        border-top-left-radius: 50px;
        border-bottom-right-radius: 50px;
        mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
        -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
        mask-composite: exclude;
        padding: 5px;
    }
`;


const MainTitle = styled.h1`
${font({family: "'Poppins', sans-serif", weight: 700, Fmax: 54, Fmin: 45})};
margin-bottom: 5px;

`
const MainP = styled.p`
font-size: 18px;
line-height: 27px;
color:${theme.colors.MainTextFont};
max-width:448px;
padding-bottom:60px
`

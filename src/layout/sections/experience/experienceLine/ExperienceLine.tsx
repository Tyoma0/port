import styled from 'styled-components';
import { TextLine } from './textLine/TextLine';


export const ExperienceLine = () => {
    return (
        <MainDiv>
            <Timeline>
                <TimelineItem>
                    <TimelineDate>2017</TimelineDate>
                    <TextLine text='Lorem dolor sit amet, consectetur adipiscing elit, sed dempor incididunt ut labore et dolore magna adipiscin'/>
                </TimelineItem>

                <TimelineItem>
                    <TimelineDate>2019</TimelineDate>
                    <TextLine text='Lorem dolor sit amet, consectetur adipiscing elit, sed dempor incididunt ut labore et dolore magna adipiscin'/>
                </TimelineItem>

                <TimelineItem>
                    <TimelineDate>2021</TimelineDate>
                    <TextLine text='Lorem dolor sit amet, consectetur adipiscing elit, sed dempor incididunt ut labore et dolore magna adipiscin'/>
                </TimelineItem>

                <TimelineItem>
                    <TimelineDate>2023</TimelineDate>
                    <TextLine text='Lorem dolor sit amet, consectetur adipiscing elit, sed dempor incididunt ut labore et dolore magna adipiscin'/>
                </TimelineItem>
            </Timeline>
        </MainDiv>
    );
};

const MainDiv = styled.div`
  display: flex; 
  justify-content:center
   
`;

const Timeline = styled.div`
    display: flex; 
    position: relative;
    justify-content:center;
    
    
    &::after {
        content: '';
        position: absolute;
        top: 30%;
        left: 50%;
        transform: translateX(-50% );
        width: 100%;
        height: 8px; 
        background: linear-gradient(to right, #945dd6, #6978d1, #13adc7);
        z-index: 1;
        max-width:760px;
        width: calc(100% - 195px);

        @media (max-width: 768px) {
            width:8px;
            height:380px;
            top:-0%;
            background: linear-gradient(to bottom, #945dd6, #6978d1, #13adc7);
            
        }
    } 
    @media (max-width: 768px) {
            flex-direction:column
        }        
`;

const TimelineItem = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    z-index: 999999;
`;

const TimelineDate = styled.h3` 
    font-size: 26px;  
    position: relative;
    width:100%;
    
    &::before {
        content: '';
        position: absolute;
        top: 90%;
        left: 50%;
        transform: translateX(-50%); 
        width: 25px;
        height: 25px;
        background-color: #ffff;
        border-radius: 50%;
        z-index: 1;
        @media (max-width: 768px) {           
        left:23%           
        }
    }
    @media (max-width: 768px) {           
        top:-30%;
        left:38px            
        }
    
`;
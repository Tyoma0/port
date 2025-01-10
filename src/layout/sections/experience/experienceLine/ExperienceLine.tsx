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
   
  
`;

const Timeline = styled.div`
    display: flex; 
    position: relative;
    
    
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
    }
`;
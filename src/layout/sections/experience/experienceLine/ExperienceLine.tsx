
import styled from 'styled-components';
import { TextLine } from './textLine/TextLine';

export const ExperienceLine = () => {
    return (
        <MainDiv>
        <Timeline>
        <TimelinePoint>
        <TimelineDate>2017</TimelineDate>
        <TextLine text='Lorem dolor sit amet, consectetur adipiscing elit, sed dempor incididunt ut labore et dolore magna adipiscin'/>
    </TimelinePoint>
    <TimelinePoint>
        <TimelineDate>2019</TimelineDate>
        <TextLine text='Lorem dolor sit amet, consectetur adipiscing elit, sed dempor incididunt ut labore et dolore magna adipiscin'/>
    </TimelinePoint>
    <TimelinePoint>
        <TimelineDate>2021</TimelineDate>
        <TextLine text='Lorem dolor sit amet, consectetur adipiscing elit, sed dempor incididunt ut labore et dolore magna adipiscin'/>
    </TimelinePoint>
    <TimelinePoint>
        <TimelineDate>2023</TimelineDate>
        <TextLine text='Lorem dolor sit amet, consectetur adipiscing elit, sed dempor incididunt ut labore et dolore magna adipiscin'/>
    </TimelinePoint>
        </Timeline>
        </MainDiv>
       
    );
};

const MainDiv = styled.div`
    display: flex;
    align-items:center;
    justify-content:center
`

const Timeline = styled.div`
    display: flex;
    justify-content: space-between; 
    align-items: center;
    width: 880px;
    position: relative;
    background-color:#ffff;
    max-height:8px;
    background: linear-gradient(to right, #945dd6, #6978d1, #13adc7);        
    
`
const TimelinePoint = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    z-index: 1;
    background-color:#ffff;
    max-width:25px;
    max-height:25px;
    border-radius:50%
`
const TimelineDate = styled.span`
    font-weight: bold;    
    text-align: center; 
    position: absolute;
    top:-140%;
    font-size:26px;
    

    `

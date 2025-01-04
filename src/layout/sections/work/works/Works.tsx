
import styled from 'styled-components';



type WorksPropsType = {
    title:string
    text:string
    src:string
}

export const Works = (props:WorksPropsType) => {
    return (
        <StyledWorks>
            <Image src={props.src} alt=''/>
            <Title>{props.title}</Title>
            <Text>{props.text}</Text>
            <Link href={'a'}>Look It Up</Link>
        </StyledWorks>
    );
};


const StyledWorks = styled.div`
border:1px solid rgba(163, 157, 157, 1);

    background-color:#0F1624;
    width:48%;
    
    max-width:550px;
    min-height:670px;
    border-top-left-radius:50px;
    border-bottom-right-radius:50px;
    display: flex;
    flex-direction:column;
    align-items:flex-start;
    padding:25px;


    
`
const Image = styled.img`
     max-height:280px;
     max-width:500px;
     width:100%;
     object-fit:cover;     
     border-top-left-radius:24px;
     border-bottom-right-radius:8px;
     border-bottom-left-radius:8px;
     border-top-right-radius:8px;
     margin-bottom:40px;
     
     
   
`
const Title = styled.h3`
    font-size: 30px;
    margin:0 auto;
    margin-bottom:67px;
`
const Text = styled.p`
    font-size: 18px;
    margin-bottom:50px;
`
const Link = styled.a`
font-size:20px;
transition: transform 0.3s ease-in-out;
text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3); 
min-height:60px;
min-width:200px ;
display: flex;
justify-content:center;
align-items:center;
border-radius:83px;
background: linear-gradient(to right, #945dd6, #6978d1, #13adc7);
&:hover{
    transform:scale(1.1);
    
}
`
import styled from "styled-components";
import { Icon } from "../icon/Icon";
import {animateScroll as scroll} from 'react-scroll';
import { useEffect, useState } from "react";

export const GoTopBtn = () => {

const [showBtn,setshowBtn] = useState (false)

useEffect(()=>{
window.addEventListener('scroll',()=>{
    if(window.scrollY > 200){
setshowBtn(true)
    }else{
        setshowBtn(false)
    }
})
},[])

    return (

        <>
        {showBtn && (<StyledGoTopBtn onClick={()=>{scroll.scrollToTop()}}>
            <Icon iconId="openTop" height="15" width="16" viewBox=" 0 0 16 15"/>
        </StyledGoTopBtn>)}

        
        </>       
    );
};

const StyledGoTopBtn = styled.button`
    background-color: rgba(0, 0, 0, 0.2);
    padding:12px;
    position: fixed;
    right: 30px;
    bottom: 30px;
    border-radius:50%;
    cursor:pointer;
    transition: transform 0.2s ease-in-out;
   &:hover{
    transform:scale(1.2);
    
    }
    
`
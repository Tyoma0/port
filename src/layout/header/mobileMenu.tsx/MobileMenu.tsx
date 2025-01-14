
import styled, { css } from 'styled-components';
import { theme } from '../../../styles/Theme';
import { useState } from 'react';




export const MobileMenu = (props: {menuItems:Array<string>}) => {
    const [menuIsOpen,setMenuOpen] = useState(false)
    const onBurgerBtnClick =() =>{setMenuOpen(!menuIsOpen)}
    return (
    <StyledMobileMenu>
        <BurgerButton isOpen={menuIsOpen} onClick={onBurgerBtnClick}>
            <span></span>
        </BurgerButton>
        <MobileMenuWrapper isOpen={menuIsOpen} onClick={()=>{setMenuOpen(false)}}>
        <ul>
        {props.menuItems.map((item,index)=>{
            return <li key={index}>
                <a href="">{item}</a>
                </li>
        })}
        
        </ul>          
        </MobileMenuWrapper>

        

        
    </StyledMobileMenu>
    );
};



const StyledMobileMenu = styled.nav`
display: none;
    
        @media ${theme.media.tablet}{
            display: block;
            
        }
    
`
const MobileMenuWrapper =styled.div<{isOpen:boolean}>`
position: fixed;
background-color:#534f4ff0;
top: 0;
right: 0;
left: 0;
bottom: 0;
z-index:9999;
display: none;
font-size:30px;


${props => props.isOpen && css<{isOpen:boolean}>`
    display: flex;
    justify-content:center;
    align-items:center;
    
    
`}
    ul{
        display: flex;
        gap:55px;
        flex-direction:column;
        align-items:center
    }
`
const BurgerButton = styled.button<{isOpen:boolean}>`
    position: fixed;
    border:none; 
    width: 200px;
    height:200px;
    top:-100px;
    right:-100px;
    z-index:999999 ;
    background-color:rgba(255,255,255,0);

    span{
        display: block;
        width:36px;
        height:2px;
        background-color:${theme.colors.font};
        position:absolute;
        left:40px;
        bottom:50px;

        ${props => props.isOpen && css<{isOpen:boolean}>`
         background-color:rgba(255,255,255,0); 
        `}

        &::before{
        content:'';
        display: block;
        width:36px;
        height:2px;
        background-color:${theme.colors.font}; 
        position:absolute;
        transform:translateY(-10px);

        ${props => props.isOpen && css<{isOpen:boolean}>`
        transform:rotate(-45deg) translateY(0);
        `}
        }
        &::after{
        content:'';
        display: block;
        width:24px;
        height:2px;
        background-color:${theme.colors.font};
        position:absolute;
        transform:translateY(10px);

        ${props => props.isOpen && css<{isOpen:boolean}>`
        transform:rotate(45deg) translateY(0);
        width:36px;
        `}
        }

    }
`
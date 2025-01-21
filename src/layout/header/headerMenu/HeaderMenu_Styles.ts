import styled, { css } from "styled-components"
import { theme } from "../../../styles/Theme"
import {Link} from 'react-scroll'

const MenuItem = styled.li`
       
`
const NavLink = styled(Link)`
    cursor: pointer;
    transition: transform 0.3s ease-in-out;
        &:hover, &.active{
            transform:scale(1.1);
        background: linear-gradient(to right, #945dd6, #6978d1, #13adc7);
            -webkit-background-clip: text; /* Для WebKit-браузеров */
            background-clip: text; /* Стандартное свойство */
            -webkit-text-fill-color: transparent; /* Делаем текст прозрачным */
            color: transparent; /* Стандартное свойство для прозрачного текста */
            text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3); /* Добавляем тень */
        }
`


//MobileMenu

const MobileMenu = styled.nav`           
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

//DesktopMenu

const DesktopMenu = styled.nav`
ul{
    display: flex;
    gap:75px;
    justify-content:center
} 
`


export const S = {
    NavLink,
    MenuItem,
    MobileMenu,
    MobileMenuWrapper,
    BurgerButton,
    DesktopMenu,
}

import styled, { css } from 'styled-components';
import { theme } from '../../../styles/Theme';




export const MobileMenu = (props: {menuItems:Array<string>}) => {
    return (
    <StyledMobileMenu>
        <BurgerButton isOpen={false}>
            <span></span>
        </BurgerButton>
        <MobileMenuWrapper isOpen={false}>
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
background-color:#1d1818;
top: 0;
right: 0;
left: 0;
bottom: 0;
z-index:9999;
display: none;
${props => props.isOpen && css<{isOpen:boolean}>`
    display: flex;
    justify-content:center;
    align-items:center
`}
    ul{
        display: flex;
        gap:75px;
        flex-direction:column;
        align-items:center
    }
`
const BurgerButton = styled.button<{isOpen:boolean}>`
    position: fixed;
    width: 200px;
    height:200px;
    top:-100px;
    right:-100px;
    z-index:999999 ;
    background-color:${theme.colors.headerFont};

    span{
        display: block;
        width:36px;
        height:2px;
        background-color:${theme.colors.font};
        position:absolute;
        left:40px;
        bottom:50px;

        ${props => props.isOpen && css<{isOpen:boolean}>`
        color:rgba(255,255,255,0);
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
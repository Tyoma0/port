
import { useState } from 'react';
import { Menu } from '../menu/Menu';
import {S} from './../HeaderMenu_Styles'



export const MobileMenu: React.FC = () => {
    const [menuIsOpen,setMenuOpen] = useState(false)
    const onBurgerBtnClick =() =>{setMenuOpen(!menuIsOpen)}
    return (
    <S.MobileMenu>
        <S.BurgerButton isOpen={menuIsOpen} onClick={onBurgerBtnClick}>
            <span></span>
        </S.BurgerButton>
        <S.MobileMenuWrapper isOpen={menuIsOpen} onClick={()=>{setMenuOpen(false)}}>
        <Menu />
        </S.MobileMenuWrapper>

        

        
    </S.MobileMenu>
    );
};



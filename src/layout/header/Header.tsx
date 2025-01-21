import React from 'react';
import { Logo } from '../../components/logo/Logo';
import { SocialMedia } from '../../components/socialMedia/SocialMedia';
import { Container } from '../../components/Container';
import { FlexWrapper } from '../../components/FlexWrapper';
import { MobileMenu } from './headerMenu/mobileMenu.tsx/MobileMenu';
import { DesktopMenu } from './headerMenu/desktopMenu/DesktopMenu';
import { S } from './Header_Styles';



export const Header:React.FC = () => {

const [width, setWidth] = React.useState(window.innerWidth);
const breakpoint = 768;


React.useEffect(()=>{
    const handleWindowResize = ()=> setWidth(window.innerWidth)
    window.addEventListener("resize", handleWindowResize);
    return ()=>window.removeEventListener("resize",handleWindowResize);
},[])

    return (
        <S.Header>
            <Container>
                <FlexWrapper justify='space-around' align='center'>
                    <S.LogoWrapper>
                    <Logo/>
                    </S.LogoWrapper>    
                    {width< breakpoint ? <MobileMenu />
                    :<DesktopMenu />}                                                       
                    <SocialMedia/>
                </FlexWrapper>             
            </Container>                      
        </S.Header>
    );
};


import styled from "styled-components"
import { theme } from "../../styles/Theme"

const Header = styled.header`
    background-color:${theme.colors.headerFont};
    padding:20px 0;
    position:fixed;
    top:0;
    left: 0;
    right: 0;
    z-index:99999;
    
`
const LogoWrapper = styled.div`
    @media ${theme.media.tablet} {
        transform: scale(1.5); 
        
    }
`
export const S={
    Header,
    LogoWrapper,
}
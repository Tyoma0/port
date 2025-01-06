
import styled from 'styled-components';
import { theme } from '../../styles/Theme';



export const Menu = (props: {menuItems:Array<string>}) => {
    return (
    <StyledMenu>
        <ul>

        {props.menuItems.map((item,index)=>{
            return <li key={index}>
                <a href="">{item}</a>
                </li>
        })}
        </ul>
    </StyledMenu>
    );
};

const StyledMenu = styled.nav`
    ul{
        display: flex;
        gap:75px;
    }
    li{
        transition: transform 0.3s ease-in-out;
    }
    li:hover{
        transform:scale(1.1);
        background: linear-gradient(to right, #945dd6, #6978d1, #13adc7);
            -webkit-background-clip: text; /* Для WebKit-браузеров */
            background-clip: text; /* Стандартное свойство */
            -webkit-text-fill-color: transparent; /* Делаем текст прозрачным */
            color: transparent; /* Стандартное свойство для прозрачного текста */
            text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3); /* Добавляем тень */
    }

     @media ${theme.media.tablet} {
        display:none
     }
    
`
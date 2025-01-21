
import styled from 'styled-components';




const items=[ 'Projects','Technologies','Experience'
]

export const Menu: React.FC = () => {
    return (
    <StyledMenu >
         <ul>
        {items.map((item,index)=>{
            return <ListItem key={index}>
                <Link href="">{item}</Link>
            </ListItem>
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
    
`

const ListItem = styled.li`
        transition: transform 0.3s ease-in-out;
        &:hover{
            transform:scale(1.1);
        background: linear-gradient(to right, #945dd6, #6978d1, #13adc7);
            -webkit-background-clip: text; /* Для WebKit-браузеров */
            background-clip: text; /* Стандартное свойство */
            -webkit-text-fill-color: transparent; /* Делаем текст прозрачным */
            color: transparent; /* Стандартное свойство для прозрачного текста */
            text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3); /* Добавляем тень */
        }
`
const Link = styled.a`
    
`
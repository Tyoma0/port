import {S} from './../HeaderMenu_Styles'


const items=[
    {
    title:'Works',
    href:'works',
    },
    {
        title:'Technologies',
        href:'technologies',
    },
    
    {
    title:'Experience',
    href:'experience',
    },    
    ]

export const Menu:React.FC = () => {
    return (
        <ul>
        {items.map((item,index)=>{
            return <S.MenuItem key={index}>
                <S.NavLink 
                to={item.href}
                smooth={true}
                activeClass='active'
                spy={true}
                >
                    {item.title}</S.NavLink>
            </S.MenuItem>
        })}
                    </ul>
    );
};


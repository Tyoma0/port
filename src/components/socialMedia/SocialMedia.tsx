
import styled from 'styled-components';
import { Icon } from '../icon/Icon';

export const SocialMedia = () => {
    return (
        <SocialMediaBox>
            <ul>
                <li><a href=""><Icon width='32' height='32'  viewBox='0 0 32 32'  iconId='gitHub'/></a></li>
                <li><a href=""><Icon width='32' height='32' viewBox='0 0 32 32'  iconId='Linkedin'/></a></li>
                <li><a href=""><Icon width='35' height='30' viewBox='0 0 35 30'  iconId='telegram'/></a></li>
            </ul>
        </SocialMediaBox>
    );
};

const SocialMediaBox = styled.div`
max-height:32px;
    ul{
        display: flex;
        gap:25px;
        
    }
    li{
        transition: transform 0.3s ease-in-out;
    }
    li:hover{
        transform:scale(1.1);
    }
    
    
   
`
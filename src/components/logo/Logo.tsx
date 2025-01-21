import { Icon } from '../icon/Icon';
import {animateScroll as scroll} from 'react-scroll'

export const Logo = () => {
    return (
    <a onClick={()=>{scroll.scrollToTop()}}>
        <Icon width='185' height='47' viewBox='10 -8 187 57' iconId='logo'/>
    </a>

    );
    
};



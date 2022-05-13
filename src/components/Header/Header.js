import CTA from './CTA';
import './header.css';
import ME1 from '../../assets/ME1.png';
import HeaderSocials from './HeaderSocials';

const Header = () => {
    return ( 
        <header>
            <div className='contianer  header__contianer'>
                <h5>Hello I'm</h5>
                <h1>Okoye Collins</h1>
                <h5 className='text-light'>Fullstack Developer</h5>
                <CTA />

                <HeaderSocials />

                <div className='me'>
                    <img src={ME1} alt='me' />
                </div>

                <a href='#contact' className='Scroll_down'> Scroll_down</a>
            </div>
        </header>
     );
}
 
export default Header;
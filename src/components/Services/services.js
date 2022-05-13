import './services.css';
import {BiCheck} from 'react-icons/bi'

const Services = () => {
    return ( 
        <section id='services'>
                <h5>What I Offer</h5>
                <h2>Services</h2>

                <div className='container services__container'>
                    <articles className='service'>
                        <div className='services__head'>
                            <h3>UI Design</h3>
                            
                            <ul className='services__list'>
                                <li >
                                    <BiCheck className='service__icon'/>
                                    <p>Figma Design For website</p>
                                </li>
                                <li >
                                    <BiCheck className='service__icon'/>
                                    <p>Figma Design For Mobile Devices</p>
                                </li>
                                <li >
                                    <BiCheck className='service__icon'/>
                                    <p>Photoshop Design</p>
                                </li>
                            </ul>
                        </div>
                    </articles>

                    <articles className='service'>
                        <div className='services__head'>
                            <h3>Web Development</h3>
                            
                            <ul className='services__list'>
                                <li >
                                    <BiCheck className='service__icon'/>
                                    <p>Blog's</p>
                                </li>
                                <li >
                                    <BiCheck className='service__icon'/>
                                    <p>Business website</p>
                                </li>
                                <li >
                                    <BiCheck className='service__icon'/>
                                    <p>Web-Applications</p>
                                </li>
                                <li >
                                    <BiCheck className='service__icon'/>
                                    <p>Others....</p>
                                </li>
                            </ul>
                        </div>
                    </articles>
                </div>
        </section>
     );
}
 
export default Services;
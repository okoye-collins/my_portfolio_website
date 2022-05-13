import './about.css';
import ME from '../../assets/ME.jpg';
import { FaAward } from 'react-icons/fa';
import { FiUsers } from 'react-icons/fi';
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
    return ( 
        <section id='about'>
                <h5>Get To Know</h5>
                <h2>About Me</h2>

                <div className='contianer about__container'>
                    <div className='about__me'>
                        <img src={ME} alt='about img' />
                    </div>

                    <div className='about__content'>
                        <div className='about__cards'>
                            <article className='about_card'>
                                <FaAward  className='about_icon'/>
                                <h5>Experience</h5>
                                <small>3+ Years Working</small>
                            </article>

                            <article className='about_card'>
                                <FiUsers  className='about_icon'/>
                                <h5>Clients</h5>
                                <small>10+ Clients Working</small>
                            </article>

                            <article className='about_card'>
                                <VscFolderLibrary  className='about_icon'/>
                                <h5>Project</h5>
                                <small>30+ Completed Project</small>
                            </article>
                        </div>

                        <p> 
                            lorem mdskh sdk contein sejsec sjknue shbc kjski junufmruvjs shncjhnd kdjvnjjjsnvsdnj
                            ksjdvnvm,j kshvnfhbhs jgsdbuyse wywitw xu cuk x c7=y=hscmbhnedh x7uc87uci7co c9=shenhb
                            mevsjnbnrvnjncskjrerhjdkmnesnesh djchbnefmnzkjknef
                        </p>

                        <a href='#contact' className='btn btn-primary '> Let's Talk</a>
                    </div>
                </div>
        </section>
     );
}
 
export default About;
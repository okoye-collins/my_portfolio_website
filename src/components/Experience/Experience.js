import './experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'

const Experience = () => {
    return ( 
        <section id='experience' >
              <h5>What Skill I Have</h5>
              <h2>My Experience</h2>
              <div className='container experience__container'>
                <div className='experince__frontend'>
                  <h3>Frontend Development</h3>
                  <div className='experince_content'>
                    <article  className='experience_details'>
                      <BsPatchCheckFill className='experience_icon'/> 
                      <div>
                        <h4>HTML</h4>
                        <small className='text-light'>Experience</small>
                      </div>
                    </article>
                    <article  className='experience_details'>
                      <BsPatchCheckFill className='experience_icon' /> 
                      <div>  
                        <h4>CSS</h4>
                        <small className='text-light'>Experience</small>
                      </div>
                    </article>
                    <article  className='experience_details'>
                      <BsPatchCheckFill className='experience_icon'/> 
                      <div>
                        <h4>JavaScript</h4>
                        <small className='text-light'>Intermediate</small>
                      </div>
                    </article>
                    <article  className='experience_details'>
                      <BsPatchCheckFill className='experience_icon'/> 
                      <div>
                        <h4>React</h4>
                        <small className='text-light'>Intermediate</small>
                      </div>
                    </article>
                  </div>
                </div>

                <div className='experince__backend'>
                  <h3>Backend Development</h3>
                  <div className='experince_content'>
                    <article  className='experience_details'>
                      <BsPatchCheckFill className='experience_icon'/> 
                      <div>
                        <h4>Python</h4>
                        <small className='text-light'>Experience</small>
                      </div>
                    </article>
                    <article  className='experience_details'>
                      <BsPatchCheckFill className='experience_icon' /> 
                      <div>
                        <h4>Django</h4>
                        <small className='text-light'>Intermediate</small>
                      </div>
                    </article>
                    <article  className='experience_details'>
                      <BsPatchCheckFill className='experience_icon'/> 
                      <div>
                        <h4>Mysql</h4>
                        <small className='text-light'>Intermediate</small>
                      </div>
                    </article>
                  </div>
                </div>
              </div>
        </section>
     );
}
 
export default Experience;
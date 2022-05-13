import './contact.css';
import { FaWhatsapp} from 'react-icons/fa';
import {MdOutlineEmail} from 'react-icons/md';
import { RiMessageLine } from 'react-icons/ri';
const Contact = () => {
    return ( 
        <section id='contact'>
            <h5>Get In Touch</h5>
            <h2>Contact Me</h2>

            <div className='container conatact__container'>
              <div className='contact__options'>
                <article className='contact_option'>
                    <MdOutlineEmail className='contact_icon' />
                    <h4>Email</h4>
                    <h5>collins.kcj@gmail.com</h5>
                    <a href='mailto:collins.kcj@gmail.com'target='_blank'>Send a message</a>
                </article>
                <article className='contact_option'>
                    <RiMessageLine className='contact_icon' />
                    <h4>Messenger</h4>
                    <h5>collins.kcj@gmail.com</h5>
                    <a href='http://m.me/' target='_blank'>Send a message</a>
                </article>
                <article className='contact_option'>
                    <FaWhatsapp className='contact_icon' />
                    <h4>WhatsApp</h4>
                    <h5>0818-794-7592</h5>
                    <a href='https://api.whatsapp.com/send?phone=+2348187947592' target='_blank'>Send a message</a>
                </article>
              </div>
            {/* End of contact options*/}
              <form action=''>
                <input type='text' name='name' placeholder='Your Full Name' required />
                <input type='email' name='email' placeholder='Email' required />
                <textarea  name='message' rows='7' placeholder='Your Message' required />
                <button type='submit' className='btn btn-primary'>Send Message</button>
              </form>
            </div>
        </section>
     );
}
 
export default Contact;
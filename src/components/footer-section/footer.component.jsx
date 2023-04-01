import './footer.styles.css';
import Logo from '../../assets/logocorrection-removebg-preview.png';
import { Link } from 'react-router-dom'
import { FaInstagram, FaLinkedin } from 'react-icons/fa';
import { handleScrollTop } from '../backToTop/backToTop';



const Footer = () => {
    return (
        <div className='footer-wrapper'>
            <div className="footer-box">
                <div className="footer-one">
                    <h3><Link to='/category' onClick={handleScrollTop}>CATEGORIES</Link></h3>
                    <ul>
                        <li><Link to='/category/lifestyle'>Lifestyle</Link></li>
                        <li><Link to='/categoty/poetry'>Poetry</Link></li>
                        <li><Link to='/category/memoir'>Memoir</Link></li>
                        <li><Link to='/category/excerpt'>Excerpts</Link></li>
                    </ul>

                </div>

                <div className="footer-two">
                    <div className="logo-two">
                        <img src={Logo} alt="logo" />
                        <div className='socials-box'>
                        <FaInstagram className='socials-2' onClick={() => window.open('https://instagram.com/thrive.with.art?igshid=ZDdkNTZiNTM=', '_blank')} />
                        <FaLinkedin className='socials-2' onClick={() => window.open('https://www.linkedin.com/in/rachel-fredrick-9586861a3', '_blank')}/>
                        </div>
                    </div>
                </div>

                <div className="footer-three">
                    <h3>Quick links</h3>
                    <ul>
                        <li><Link onClick={handleScrollTop} to='/'>Home</Link></li>
                        <li><Link to='/mybook'>Buy My Book</Link></li>
                        <li><Link to='/sendemail'>Send me a mail</Link></li>
                    </ul>
                </div>
            </div>
            <p className='copyright'>&#169;2023 Thrive With Art, All rights reserved.</p>

        </div>
    )
}

export default Footer;
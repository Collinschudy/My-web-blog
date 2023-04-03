import { React, useState, useEffect } from 'react';

import './header.styles.css';
import  Logo from '../../assets/logocorrection-removebg-preview.png';
import { Link, useNavigate} from 'react-router-dom';
import { FaFacebook, FaInstagram, FaLinkedin, FaBars, FaTimes } from 'react-icons/fa';
import { HiMail } from 'react-icons/hi';
import { RiAdminLine } from 'react-icons/ri'
import { FiChevronDown } from 'react-icons/fi';
import { auth } from '../../firebase/firebase.utils';
import { signOut } from 'firebase/auth';
import { useLocation } from 'react-router-dom';
import { handleScrollTop } from '../backToTop/backToTop';




const Header = ({ currentUser, setIsAuth }) => {
    const [showheader, setShowHeader] = useState(true);
    const [pathName, setPathName] = useState('');
    const navigate = useNavigate();
    const location = useLocation();
    const { pathname } = location;

    useEffect(() => {
        setPathName(pathname)
    }, [pathname]);

    const signUserOut = async () => {
        await signOut(auth);
        await setIsAuth(false);

    }
    return (
        <div className="header">
            <div className="logo" onClick={() => navigate('/')}>
                <img src={Logo} alt="logo" />
            </div>
            <div className={`${showheader ? 'show' : 'hidee'} nav-contents`}>
                <div className={`${pathName ==='/' ? 'pathname': ''} home-container`}>
                    <Link to="/" onClick={() => {setShowHeader(!showheader);handleScrollTop()}} className="home"> Home</Link>
                </div>
                {currentUser ?
                    <div className={`${pathName.includes('/createpost') ? 'pathname': ''} about-container`}>
                        <Link to="/createpost" onClick={() => {setShowHeader(!showheader)}} className="about"> Create Post</Link>
                    </div>
                    :
                    ""
                }
                <div className={`${pathName.includes('/aboutus') ? 'pathname': ''} about-us-container`}>
                    <Link to="/aboutus" onClick={() => {setShowHeader(!showheader)}} className="about-us"> About Us </Link>
                </div>

                <div className={`${pathName.includes('/mybook') ? 'pathname': ''} book-container`}>
                    <Link to="/mybook" onClick={() => {setShowHeader(!showheader)}} className="books"> My Book </Link>
                </div>
                <div className={`${pathName.includes('/category') ? 'pathname': ''} category-container`}>
                    <Link to="/category" onClick={() => setShowHeader(!showheader)} className="category">
                        Categories
                        <FiChevronDown className='down-icon'/>
                        <SubHeader />
                    </Link>
                </div>

                {currentUser ?
                    (
                        <div className="sign-up-container">
                            <Link to="/" className='sign-up' onClick={signUserOut}> Sign Out </Link>
                        </div>
                    )
                    :
                    <div className="welcome">
                        Welcome, Friend
                    </div>
                    

                }



            </div>
            <div className='show-name'>Thrive With Art</div>
            <div className="toggle">
                {
                    showheader ? (
                        <FaBars className='bars'
                            onClick={() => setShowHeader(!showheader)} showheader />
                    )
                        : (
                            <FaTimes className='times'
                                onClick={() => setShowHeader(!showheader)} />
                        )
                }


            </div>
            <div className="social-icons">
                <FaFacebook className='socials' />
                <FaInstagram className='socials' />
                <Link to='/sendemail'><HiMail className='socials' /></Link>
                <FaLinkedin className='socials' />
                {/* <Link to={`/${process.env.REACT_APP_LOGIN}`}><RiAdminLine className='socials' /></Link> */}
            </div>
            
        </div>

    )
}

const SubHeader = () => {
    return (
        <div className="subheader">
            <Link to='/category/lifestyle' className='lifestyle'>Lifestyle</Link>
            <Link to='/category/memoir' className='memoir' >Memoir</Link>
            <Link to='/category/poetry' className='poetry' >Poetry</Link>
            <Link to='/category/excerpt' className='excerpts'>Excerpts</Link>
        </div>
    )
}



export default Header;
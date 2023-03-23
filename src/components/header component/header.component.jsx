import { React, useState } from 'react';

import './header.styles.css';
import  Logo from '../../assets/IMG-20230319-WA0017 (1).jpg';
import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaBars, FaTimes } from 'react-icons/fa';
import { RiAdminLine } from 'react-icons/ri'
import { FiChevronDown } from 'react-icons/fi';
import { signInWithGoogle, auth } from '../../firebase/firebase.utils';
import { signOut } from 'firebase/auth';



const Header = ({ currentUser, setIsAuth }) => {
    const [showheader, setShowHeader] = useState(true);
    const signUserOut = async () => {
        await signOut(auth);
        await setIsAuth(false);

    }
    return (
        <div className="header">
            <div className="logo">
                <img src={Logo} alt="logo" />
            </div>
            <div className={`${showheader ? 'show' : 'hidee'} nav-contents`}>
                <div className="home-container">
                    <Link to="/" onClick={() => setShowHeader(!showheader)} className="home">Home</Link>
                </div>
                {currentUser ?
                    <div className="about-container">
                        <Link to="/createpost" onClick={() => setShowHeader(!showheader)} className="about"> Create Post</Link>
                    </div>
                    :
                    ""
                }

                <div className="book-container">
                    <Link to="/signin" onClick={() => setShowHeader(!showheader)} className="books">Books</Link>
                </div>
                <div className="category-container">
                    <Link to="/category" onClick={() => setShowHeader(!showheader)} className="category">
                        Categories
                        <FiChevronDown className='down-icon'/>
                        <SubHeader />
                    </Link>
                </div>

                {currentUser ?
                    (
                        <div className="sign-up-container">
                            <Link to="" className='sign-up' onClick={signUserOut}> Sign Out </Link>
                        </div>
                    )
                    :
                    <div className="sign-up-container">
                        <Link to="" className='sign-up' onClick={signInWithGoogle}> Sign In </Link>
                    </div>

                }



            </div>
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
                <FaTwitter className='socials' />
                <FaLinkedin className='socials' />
                <Link to='signin'><RiAdminLine className='socials' /></Link>
            </div>
            {/* <div className={`${showSubheader ? 'showsub' : ''} sub-con`}>
                <SubHeader />
            </div> */}
        </div>

    )
}

const SubHeader = () => {
    return (
        <div className="subheader">
            <Link to='/lifestyle' className='lifestyle'>Lifestyle</Link>
            <Link to='/memoir' className='memoir' >Memoir</Link>
            <Link to='/poetry' className='poetry' >Poetry</Link>
            <Link to='/excerpt' className='excerpts'>Excerpts</Link>
        </div>
    )
}



export default Header;
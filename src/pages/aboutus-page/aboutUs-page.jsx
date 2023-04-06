import './aboutUs.styles.css';
import {useEffect} from 'react';


const AboutUs = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
      }, []);

    return (
        <div className='about-us-page'>
            <div className="aboutpage-content-wrapper">
                <div className='about-page-content'>
                    <p id='first'><b>Welcome to Thrive With Art!</b></p>
                    
                    <p id='second'>We are art enthusiasts who love to explore the beauty and intricacies of various art forms. 
                    Our blog is a space where we share insights, opinions, and knowledge about art with our readers.
                    We are committed to providing our readers with informative and engaging content that explores 
                    the nuances of art, from the classical to the contemporary.</p>
                    
                    <p id='third'>At Thrive With Art, we are committed to authenticity, positivity, and inclusivity. 
                    We believe that everyone has a unique story to tell, and we're dedicated to celebrating and elevating
                     diverse voices and perspectives.</p>
                    
                    <p id='fourth'>We believe that the various forms of art has the power to transform lives and create 
                    connections between people from different cultures and backgrounds. We hope to inspire our readers
                     to develop a deeper appreciation for art and to encourage them to explore the fascinating world of art.</p>
                    
                    <p id='fifth'> Thank you for joining us on this journey. We look forward to sharing our passion  with you, and we hope
                     you enjoy reading our content as much as we enjoy creating it!</p>
                   
                </div>
            </div>
        </div>
    )
}

export default AboutUs;
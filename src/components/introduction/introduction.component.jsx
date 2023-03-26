
import image_2 from '../../assets/rachaelprofile1.png';
import { BsArrowRight } from 'react-icons/bs';
import './introduction.styles.css';
import { Link } from 'react-router-dom';


const Introduction = () => {
    return (
        <div className="introduction-one">
            <div className="background-img">
                <img src={image_2} alt="author" />
            </div>
            <div className="introduction-text">
                <div className="text-container">
        
                    <p className='first-paragraph'><b>Welcome to my creative blog,</b></p>
                    <h3 className='intro-header'>Thrive With Art</h3>
                        <p className='second-paragraph'>Thrive With Art is a place where <em>creativity</em> and inspiration collide to bring you a wide range
                         of content that
                        will spark your imagination and ignite your passion.

                        In this blog, you'll find a mix of <b>personal</b> stories, tutorials, artworks, inspiration, <b>poetry, </b> 
                        <b>lifestyle</b> tips/hacks, and a lot of other exciting content to help you unleash your creativity
                        and explore new avenues of expression.

                        I'm glad you're here. Let's delve into the world of art and creativity together!
                    </p>
                    <br />
                    <Link to='/category'>
                        <button className="explore-button">
                            Explore My Blog Contents <BsArrowRight className='arrow-right' />
                        </button>
                    </Link>
                </div>

            </div>
        </div>
        // </div>

    )
}

export default Introduction;
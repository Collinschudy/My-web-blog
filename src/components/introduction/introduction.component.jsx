
import image_2 from '../../assets/michael-dam-mEZ3PoFGs_k-unsplash.jpg';
import { BsArrowRight } from 'react-icons/bs';
import './introduction.styles.css';
import { Link } from 'react-router-dom'

const Introduction = () => {
    return (
        // <div className="introduction-container">
        <div className="introduction-one">
            <div className="background-img">
                <img src={image_2} alt="" />
            </div>
            <div className="introduction-text">
                <div className="text-container">
                    <h3 className='intro-header'>Thrive With Art</h3>
                    <p>Welcome to my creative blog!

                        Thrive With Art is a place where creativity and inspiration collide to bring you a wide range of content that
                        will spark your imagination and ignite your passion.

                        In this blog, you'll find a mix of personal stories, tutorials, artworks, inspiration, poetry,
                        lifestyle tips/hacks, and a lot of other exciting content to help you unleash your creativity
                        and explore new avenues of expression.

                        I'm glad you're here. Let's delve into the world of art and creativity together!
                    </p>
                    <br />
                    <Link to='/category'>
                        <button className="explore-button">
                            Explore my Blog Contents <BsArrowRight className='arrow-right' />
                        </button>
                    </Link>
                </div>

            </div>
        </div>
        // </div>

    )
}

export default Introduction;
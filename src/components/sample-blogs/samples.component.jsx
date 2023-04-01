import './samples.styles.css';
import { Link, useNavigate } from 'react-router-dom';
import image_1 from '../../assets/1_20230226_173936_0000.png';
import image_2 from '../../assets/images (12).jpeg';
import image_3 from '../../assets/images (7).jpeg';



const SampleBlog = () => {
    const navigate = useNavigate();
    return (
        <div className='sample-blog-container'>
            
            <div className="first-sample">
                <div className="image-box1" 
                onClick={() => {navigate('/category/lifestyle/firstpost')}}
                >
                    <img src={image_1} alt="text reading 'the link between creativity and depression'" />
                </div>
                <p>THE LINK BETWEEN CREATIVITY AND DEPRESSION</p>
                <Link className='readmore' to='/category/lifestyle/firstpost'>Read More</Link>

            </div>

            <div className="second-sample">
                <div className="image-box2" onClick={() => {navigate('/category/excerpt/firstpost')}}>
                    <img src={image_2} alt="human face in distress" />

                </div>
                <p>EXCERPTS FROM VIRGINIA WOOLF</p>
                <Link className='readmore' to='/category/excerpt/'>Read More</Link>
            </div>

            <div className="third-sample">
                <div className="image-box3" onClick={() => {navigate('/category/lifestyle/thirdpost')}}>
                    <img src={image_3} alt='depicting mindfulness' />
                </div>
                <p>THE ART OF MINDFUL LIVING</p>
                <Link className='readmore' to='/category/lifestyle/thirdpost'>Read More</Link>
            </div>
        </div>
    )
}

export default SampleBlog;
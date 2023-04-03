import './lifestylelist.styles.css';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom'


const LifestyleList = () => {

    const navigate = useNavigate();

    return (
        <div className="lifestyle-section">
            <h2 onClick={() => navigate('/category/lifestyle')}>Lifestyle</h2>
            <br />
            <ul>

                <li>

                    <Link to='/category/lifestyle/firstpost'>
                        1. The Link Between Creativity and Depression
                    </Link>
                </li>

                <li>
                    <Link to='/category/lifestyle/secondpost'>
                        2. Seven Ways to Stay Creative and Inspired
                    </Link>
                </li>

                <li>
                    <Link to='/category/lifestyle/thirdpost'>
                        3. The Art of Mindful Living

                    </Link>
                </li>

                <li>
                    <Link to='/category/lifestyle/fourthpost'>
                        4. 5 Things You Should Consider Before Buying A Piece Of Art
                    </Link>
                </li>

                <li>
                    <Link to='/category/lifestyle/fifthpost'>
                        5. "So Your Idea Has Already Been Taken—What Next?"
                    </Link>
                </li>

                <li>
                    <Link to='/category/lifestyle/sixthpost'>
                        6. The Headline is NOT The Story!
                    </Link>
                </li>
            </ul>


        </div>
    )
}


export default LifestyleList;
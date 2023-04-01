import './poetrylist.styles.css';
import { Link, useNavigate } from 'react-router-dom';


const Poetrylist = () => {
    const navigate = useNavigate();
    return (
        <div className="poetry-section">
            <h2 onClick={() => navigate('/category/poetry')}>Poetry</h2>
            <br/>
            <ul>
                <li>
                    <Link to='/category/poetry/thirdpost'>
                        1. Face in The Mirror
                    </Link>
                </li>

                <li>
                    <Link to='/category/poetry/secondpost'>
                        2. Bleak
                    </Link>
                </li>

                <li>
                    <Link to='/category/poetry/fourthpost'>
                        3. The Easter Poem
                    </Link>
                </li>

                <li>
                    <Link to='/category/poetry/firstpost'>
                        4. Paint or Get off the Ladder
                    </Link>
                </li>

                <li>
                    <Link to='/category/poetry/fifthpost'>
                        5. Molten Magma
                    </Link>
                </li>

            </ul>

        </div>
    )
}

export default Poetrylist;
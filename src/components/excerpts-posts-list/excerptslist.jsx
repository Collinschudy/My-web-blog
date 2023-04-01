import './excerptslist.styles.css';
import { Link, useNavigate } from 'react-router-dom';


const Excerptslist = () => {
    const navigate = useNavigate()
    return (
        <div className="excerpts-section">
            <h2 onClick={() => navigate('/category/excerpt')} >Excerpts</h2>
            <br/>
            <ul>
                <li>
                    <Link to='/category/excerpt/secondpost'>
                       1. How much private is too much private?
                    </Link>
                </li>

                <li>
                    <Link to='/category/excerpt/firstpost'>
                        2. Excerpts from Virginia Woolf
                    </Link>
                </li>

                <li>
                    <Link to='/category/excerpt/thirdpost'>
                        3. In Sarah's Point of View
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default Excerptslist;
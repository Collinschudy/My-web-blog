import './memoirlist.styles.css';
import { Link, useNavigate } from 'react-router-dom';


const Memoirlist = () => {
    const navigate = useNavigate()
    return (
        <div className="memoir-section">
            <h2 onClick={() => navigate('/category/memoir')}>Memoir</h2>
            <br/>
            <ul>
                <li>
                    <Link to='/category/memoir/firstpost'>
                        1. The Memoir of Rachel Fredrick
                    </Link>
                </li>

                <li>
                    <Link to='/category/memoir/secondpost'>
                        2. If I could Describe Myself in One Word
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default Memoirlist;
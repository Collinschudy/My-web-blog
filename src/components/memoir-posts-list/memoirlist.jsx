import './memoirlist.styles.css';
import { HashLink } from 'react-router-hash-link';


const Memoirlist = () => {
    return (
        <div className="memoir-section">
            <h2>Memoir</h2>
            <br/>
            <ul>
                <li>
                    <HashLink to='/category/memoir#fmp' smooth>
                        1. The Memoir of Rachel Fredrick
                    </HashLink>
                </li>

                <li>
                    <HashLink to='/category/memoir#smp'>
                        2. If I could Describe Myself in One Word
                    </HashLink>
                </li>
            </ul>
        </div>
    )
}

export default Memoirlist;
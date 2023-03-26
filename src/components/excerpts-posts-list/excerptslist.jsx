import './excerptslist.styles.css';
import { HashLink } from 'react-router-hash-link';


const Excerptslist = () => {
    return (
        <div className="excerpts-section">
            <h2>Excerpts</h2>
            <br/>
            <ul>
                <li>
                    <HashLink to='/category/excerpt#sep'>
                       1. How much private is too much private?
                    </HashLink>
                </li>

                <li>
                    <HashLink to='/category/excerpt#fep'>
                        2. Excerpts from Virginia Woolf
                    </HashLink>
                </li>

                <li>
                    <HashLink to='/category/excerpt#tep'>
                        3. In Sarah's Point of View
                    </HashLink>
                </li>
            </ul>
        </div>
    )
}

export default Excerptslist;
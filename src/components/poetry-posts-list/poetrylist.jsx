import './poetrylist.styles.css';
import { HashLink } from 'react-router-hash-link';


const Poetrylist = () => {
    return (
        <div className="poetry-section">
            <h2>Poetry</h2>
            <br/>
            <ul>
                <li>
                    <HashLink to='/category/poetry#tpp' smooth>
                        1. Face in The Mirror
                    </HashLink>
                </li>

                <li>
                    <HashLink to='/category/poetry#spp' smooth>
                        2. Bleak
                    </HashLink>
                </li>

                <li>
                    <HashLink to='/category/poetry#forthpp' smooth>
                        3. The Easter Poem
                    </HashLink>
                </li>

                <li>
                    <HashLink to='/category/poetry#fpp' smooth>
                        4. Paint or Get off the Ladder
                    </HashLink>
                </li>

                <li>
                    <HashLink to='/category/poetry#fifthpp' smooth>
                        5. Molten Magma
                    </HashLink>
                </li>

            </ul>

        </div>
    )
}

export default Poetrylist;
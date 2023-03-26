import './lifestylelist.styles.css';
import { HashLink } from 'react-router-hash-link';

const LifestyleList = () => {
    return (
        <div className="lifestyle-section">
            <h2>Lifestyle blog</h2>
            <br/>
            <ul>
                <li>
                    <HashLink to='/category/lifestyle#lsf' smooth>
                        1. The Link Between Creativity and Depression
                    </HashLink>
                </li>

                <li>
                    <HashLink to='/category/lifestyle#lss' smooth>
                        2. Seven Ways to Stay Creative and Inspired
                    </HashLink>
                </li>

                <li>
                    <HashLink to='/category/lifestyle#lst' smooth>
                        3. The Art of Mindful Living

                    </HashLink>
                </li>

                <li>
                    <HashLink to='/category/lifestyle#fls' smooth>
                        4. 5 Things You Should Consider Before Buying A Piece Of Art
                    </HashLink>
                </li>

                <li>
                    <HashLink to='/category/lifestyle#ftls' smooth>
                        5. "So Your Idea Has Already Been Taken—What Next?"
                    </HashLink>
                </li>

                <li>
                    <HashLink to='/category/lifestyle#sls' smooth>
                        6. The Headline is NOT The Story!
                    </HashLink>
                </li>
            </ul>


        </div>
    )
}

export default LifestyleList;
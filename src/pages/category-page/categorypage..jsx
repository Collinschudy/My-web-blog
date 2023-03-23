import { HashLink } from 'react-router-hash-link';
import './categorypage.styles.css';

const CategoryPage = () => {
    return (
        <div className="categorypage">
            <div className="lifestyle-section">
                <h2>Lifestyle blog</h2>
                <ul>
                    <li>
                        <HashLink to='/lifestyle#lsf' smooth>
                            The Link Between Creativity and Depression
                        </HashLink>
                    </li>

                    <li>
                        <HashLink to='/lifestyle#lss' smooth>
                            Seven Ways to Stay Creative and Inspired
                        </HashLink>
                    </li>

                    <li>
                        <HashLink to='/lifestyle#lst' smooth>
                            The Art of Mindful Living

                        </HashLink>
                    </li>

                    <li>
                        <HashLink to='/lifestyle#fls' smooth>
                            5 Things You Should Consider Before Buying A Piece Of Art
                        </HashLink>
                    </li>

                    <li>
                        <HashLink to='/lifestyle#ftls' smooth>
                        "So Your Idea Has Already Been Taken—What Next?"
                        </HashLink>
                    </li>

                    <li>
                        <HashLink to='/lifestyle#sls' smooth>
                        The Headline is NOT The Story!
                        </HashLink>
                    </li>
                </ul>


            </div>
            <div className="poetry-section">
                <h2>Poetry</h2>
                <ul>
                    <li>
                        <HashLink to='/poetry#tpp' smooth>
                            Face in The Mirror
                        </HashLink>
                    </li>

                    <li>
                        <HashLink to='/poetry#spp' smooth>
                            Bleak
                        </HashLink>
                    </li>

                    <li>
                        <HashLink to='/poetry#forthpp' smooth>
                            The Easter Poem
                        </HashLink>
                    </li>

                    <li>
                        <HashLink to='/poetry#fpp' smooth>
                            Paint or Get off the Ladder
                        </HashLink>
                    </li>

                    <li>
                        <HashLink to='/poetry#fifthpp' smooth>
                            Molten Magma
                        </HashLink>
                    </li>

                </ul>

            </div>


            <div className="memoir-section">
                <h2>Memoir</h2>
                <ul>
                    <li>
                        <HashLink to='/memoir#fmp' smooth>
                            The Memoir of Rachel Fredrick
                        </HashLink>
                    </li>

                    <li>
                        <HashLink to='/memoir#smp'>
                            If I could Describe Myself in One Word
                        </HashLink>
                    </li>
                </ul>


            </div>
            <div className="excerpts-section">
                <h2>Excerpts</h2>
                <ul>
                    <li>
                        <HashLink to='/excerpt#sep'>
                            How much private is too much private?
                        </HashLink>
                    </li>

                    <li>
                        <HashLink to='/excerpt#fep'>
                            Excerpts from Virginia Woolf
                        </HashLink>
                    </li>

                    <li>
                        <HashLink to='/excerpt#tep'>
                            In Sarah's Point of View
                        </HashLink>
                    </li>
                </ul>







            </div>

        </div>
    )
}

export default CategoryPage;
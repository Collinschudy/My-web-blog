import { useEffect, useState } from 'react';
import { db } from '../../firebase/firebase.utils';
import { collection, onSnapshot } from 'firebase/firestore';
import WithSpinner from '../../components/loader/loader.component';
import './excerpt.styles.css';

const Excerpt = () => {
    const [contentList, setContentList] = useState([]);
    const [isLoading, setIsLoading] = useState(true)
    const excerptRef = collection(db, 'excerpts');

    useEffect(() => {

        const fetchPosts = async () => {
            await onSnapshot(excerptRef, data => {
                setContentList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
                setIsLoading(false);
            })
        };
        fetchPosts()
    }
    );
    if (isLoading) {
        return <WithSpinner />
    };
    return (
        <div className="excerptpage">
            <div className="category-indicator">Excerpts</div>

            {
                contentList.map((content) => {
                    const { body, fileUrls, title, createdAt, tag } = content;

                    if (tag === 'firstexcerptpost') {
                        return (
                            <div className={tag} id='fep'>
                                
                                <h2>{title}</h2>
                                <div className="img-container">
                                    <img className='scream' src={fileUrls[1]} alt='postimage' />
                                </div>
                                <p className="timestamp">{createdAt}</p>
                                <p>{body[0]}</p>
                                <p>{body[1]}</p>
                                <br/>
                                <p>{body[2]}</p>
                                <p>{body[3]}</p>
                                <br/>
                                <p>{body[4]}</p>
                                <p>{body[5]}</p>
                                <br/>
                                <p>{body[6]}</p>
                                <br/><br/>
                                <div className="img-container">
                                    <img className='scream' src={fileUrls[2]} alt='postimage' />
                                </div>
                                <br/>
                                <p>{body[7]}</p>
                                <p>{body[8]}</p>
                                <br/>
                                <div className="img-container">
                                    <img className='scream' src={fileUrls[0]} alt='postimage' />
                                </div>
                                <p><em>{body[9]}</em></p>
                                <br/><br/>
                                <div className="img-container">
                                    <img className='scream' src={fileUrls[3]} alt='postimage' />
                                </div>
                                <p><em>{body[10]}</em></p>
                                <br/>
                            </div>
                        )
                    }
                    else if (tag === 'secondexcerptpost') {
                        return (
                            <div className={tag} id='sep'>
                                <h2>{title}</h2>
                                <div className="img-container">
                                    <img className='scream' src={fileUrls[0]} alt='postimage' />
                                </div>
                                <p>{body[0]}</p>
                                <p className="timestamp">{createdAt}</p>


                                <p>{body[1]}</p>
                                <p>{body[2]}</p>
                                <div className="img-container">
                                    <img className='scream' src={fileUrls[2]} alt='postimage' />
                                </div>
                                <br />
                                <p>{body[3]}</p>
                                <br />
                                <div className="img-container">
                                    <img className='scream' src={fileUrls[1]} alt='postimage' />
                                </div>
                                <br />
                                <p>{body[4]}</p>
                                <br />
                                <p>{body[5]}</p>
                                <br />
                                <div className="img-container">
                                    <img className='scream' src={fileUrls[6]} alt='postimage' />
                                </div>
                                <br />
                                <p>{body[6]}</p>
                                <p>{body[7]}</p>
                                <br />
                                <p>{body[8]}</p>
                                <br />
                                <div className="img-container">
                                    <img className='scream' src={fileUrls[4]} alt='postimage' />
                                </div>
                                <br />
                                <p>{body[9]}</p>
                                <p>{body[10]}</p>
                                <br />
                                <div className="img-container">
                                    <img className='scream' src={fileUrls[3]} alt='postimage' />
                                </div>
                                <br />
                                <p>{body[11]}</p>

                                <p>{body[12]}</p>
                                <br />
                                <div className="img-container">
                                    <img className='scream' src={fileUrls[5]} alt='postimage' />
                                </div>
                                <br />
                                <p>{body[13]}</p>
                                <br />
                                <p>{body[14]}</p>
                                <br />
                                <p>{body[15]}</p>
                                <br />
                                <p>{body[16]}</p>
                                <br />
                                <p>{body[17]}</p>
                            </div>
                        )
                    }
                    else if (tag === 'thirdexcerptpost') {
                        return (
                            <div className={tag} id='tep'>
                                <div className="img-container">
                                    <img className='scream' src={fileUrls[0]} alt='postimage' />
                                </div>
                                <p className="timestamp">{createdAt}</p>
                                <h2>{title}</h2>
                                <p><em><b>{body[0]}</b></em></p>
                                <br />
                                <p>{body[1]}</p>
                                <br />
                                <p>{body[2]}</p>
                                <br />
                                <p>{body[3]}</p>
                                <br />
                                <p>{body[4]}</p>
                                <br />
                                <p>{body[5]}</p>
                                <br />
                                <p>{body[6]}</p>
                                <p>{body[7]}</p>
                                <br />
                                <p>{body[8]}</p>
                                <br />
                                <p>{body[9]}</p>
                                <br />
                                <p>{body[10]}</p>
                            </div>
                        )
                    }
                })
            }
            <div className="lifescribing">Excerpts</div>
        </div>
    )
}

export default Excerpt;
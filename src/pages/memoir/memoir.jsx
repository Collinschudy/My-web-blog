import { useEffect, useState } from 'react';
import { db } from '../../firebase/firebase.utils';
import { collection, onSnapshot } from 'firebase/firestore';
import WithSpinner from '../../components/loader/loader.component';
import './memoir.styles.css';

const Memoir = () => {
    const [contentList, setContentList] = useState([]);
    const [isLoading, setIsLoading] = useState(true)
    const memoirRef = collection(db, 'memoir');

    useEffect(() => {
        const fetchPosts = async () => {
            await onSnapshot(memoirRef, data => {
                setContentList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
                setIsLoading(false);
            })
        };
        fetchPosts()
    })
    if (isLoading) {
        return <WithSpinner />
    };
    return (
        <div className="memoirpage">
            <div className="category-indicator-m">Memoir</div>
            {
                contentList.map((content) => {
                    const { title, body, fileUrls, createdAt, tag } = content;

                    if (tag === 'firstmemoirpost') {
                        return (
                            <div className={tag} id='fmp'>
                                <h2>{title}</h2>
                                <div className="img-container">
                                    <img className='scream' src={fileUrls[0]} alt='postimage' />
                                </div>
                                <p className="timestamp">{createdAt}</p>
                                <p><b>{body[0]}.</b></p>
                                <br/> <br/>
                                <p>{body[1]}</p>
                                <br/>
                                <p>{body[2]}</p>
                                <br/>
                                <p>{body[3]}</p>
                                <br/>
                                <p>{body[4]}</p>
                                <p>{body[5]}</p>
                                <br/>
                                <p>{body[6]}</p>
                                <br/>
                                <p>{body[7]}</p>
                                <p>{body[8]}</p>
                                <br/>
                                <p>{body[9]}</p>
                                <br/>
                                <p>{body[10]}</p>
                                <br/>
                                <p>{body[11]}</p>
                                <br/>
                                <p>{body[12]}</p>
                                <p>{body[13]}</p>
                                <p>{body[14]}</p>
                                <br/>
                                <p>{body[15]}</p>
                                <p>{body[16]}</p>
                                <br/>
                                <p>{body[17]}</p>
                                <br/>
                                <p>{body[18]}</p>
                            </div>
                        )
                    }
                    else if (tag === 'secondmemoirpost') {
                        return (
                            <div className={tag} id='smp'>
                                <h2>{title}</h2>
                                <div className="img-container">
                                    <img className='scream' src={fileUrls[1]} alt='postimage' />
                                </div>
                                <p className="timestamp">{createdAt}</p>
                                <p><em><b>{body[0]}</b></em></p>
                                <br/>
                                <p>{body[1]}</p>
                                <br/>
                                <p>{body[2]}</p>
                                <p>{body[3]}</p>
                                <br/>
                                <p>{body[4]}</p>
                                <br/>
                                <p>{body[5]}</p>
                                <p>{body[6]}</p>
                                <br/>
                                <p>{body[7]}</p>
                                <p>{body[8]}</p>
                                <p>{body[9]}</p>
                                <br/>
                                <p>{body[10]}</p>
                                <br/>
                                <p>{body[11]}</p>
                                <br/>
                                <div className="img-container">
                                    <img className='scream' src={fileUrls[0]} alt='postimage' />
                                </div>
                                <br/><br/>
                                <p>{body[12]}</p>
                              
                                <p>{body[13]}</p>
                                <p>{body[14]}</p>
                                <br/>
                                <p>{body[15]}</p>
                                <br/>
                                <p>{body[16]}</p>
                            </div>
                        )
                    }
                    else if (tag === 'thirdmemoirpost') {
                        return (
                            <div className={tag}>
                                <div className="img-container">
                                    <img className='scream' src={fileUrls[0]} alt='postimage' />
                                </div>
                                <p className="timestamp">{createdAt}</p>
                                <h2>{title}</h2>
                                <p>{body[0]}</p>
                                <p>{body[1]}</p>
                                <p>{body[2]}</p>
                                <p>{body[3]}</p>
                                <p>{body[4]}</p>
                                <p>{body[5]}</p>
                                <p>{body[6]}</p>
                                <p>{body[7]}</p>
                                <p>{body[8]}</p>
                                <p>{body[9]}</p>
                                <p>{body[10]}</p>
                                <p>{body[11]}</p>
                                <p>{body[12]}</p>
                                
                            </div>
                        )
                    }

                })

            }
            <div className="lifescribing">Memoir</div>
        </div>
    )
}


export default Memoir;
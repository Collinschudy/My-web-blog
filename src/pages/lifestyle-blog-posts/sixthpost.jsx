import { useState, useEffect } from 'react';
import './lifestyle.styles.css';
import { connect } from 'react-redux';
import { setLifestyleContentList } from '../../redux/contents/setContent.action';
import { createStructuredSelector } from 'reselect';
import { selectLifestyleContentList } from '../../redux/contents/content.selector';
import { db } from '../../firebase/firebase.utils';
import { collection, onSnapshot } from 'firebase/firestore';
import WithSpinner from '../../components/loader/loader.component';
import commentBox from 'commentbox.io';

const SixthPost = ({ contentList, setContentList }) => {
    useEffect(() => {
        window.scrollTo(0, 0)
      }, []);
      
    const [ isLoading, setIsLoading ] = useState(true)
    const lifestyleRef = collection(db, 'lifestyle');

    useEffect(() => {
        const fetchPosts = async () => {

            await onSnapshot(lifestyleRef, data => {

                setContentList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))

                setIsLoading(false);
            })
        }
        fetchPosts()
    }, [])

    useEffect(() => {
        const removeCommentBox = commentBox('5635068789784576-proj', { className: 'styles' });
        return () => {
            removeCommentBox()
        }
      })

    if (isLoading) {
        return <WithSpinner />
    }

    return (
        <>
        <div className="lifestyle-page">
            <div className="category-indicator">Lifestyle</div>
            {
                contentList.map((content) => {
                    const { body, fileUrls, title, createdAt, tag } = content;
                    
                    if (tag === 'sixthpost') {
                        return (
                            <div className={tag} key={tag}>
                                <h2>{title}</h2>
                                <div className="img-container">
                                    <img className='scream' src={fileUrls[0]} alt='postimage' />
                                </div>
                                <p className="timestamp">{createdAt}</p>
                                <p>{body[0]}</p>
                            
                                <p>{body[1]}</p>
                                <br />
                                <p>{body[2]}</p>
                                <p>{body[3]}</p>
                                <p>{body[4]}</p>
                                <br />
                                <p>{body[5]}</p>
                                <p>{body[6]}</p>
                                <p>{body[7]}</p>
                                <p>{body[8]}</p>
                                <br />
                                <p><b>{body[9]}</b></p>
                                <div style={{'height': '20em', 'objectFit': 'cover'}} className="img-container">
                                    <img className='scream' src={fileUrls[1]} alt='postimage' />
                                </div>
                                <p>(Credit: Tumblr)</p>
                                <br />
                                <p><b>1. Set practical goals.</b></p>
                                <p> {body[10]}</p>
                                <br />
                                <p>{body[11]}</p>
                                <p>{body[12]}</p>
                                <p>{body[13]}</p>
                                <p>{body[14]}</p>
                                <p>{body[15]}</p>
                                <br />
                                <p>{body[16]}</p>
                                <br />
                                <p><b>{body[17]}</b></p>
                                <p>{body[18]}</p>
                                <p>{body[19]}</p>
                                <p>{body[20]}</p>
                                <p>{body[21]}</p>
                                <br />
                                <p><b>{body[22]}</b></p>
                                <p>{body[23]}</p>
                                <p>{body[24]}</p>
                                <p>{body[25]}</p>
                                <br />
                                <p><b>{body[26]}</b></p>
                                <p>{body[27]}</p>
                                <p>{body[28]}</p>
                            </div>
                        )
                    }
                   
                })
            }
            < div className="lifescribing">Lifestyle</div>
        </div >
        <div className={`commentbox ${'styles'}`}/>
        </>
    )
}

const mapDispatchToProps = dispatch => ({
    setContentList: content => dispatch(setLifestyleContentList(content))
})

const mapStateToProps = createStructuredSelector({
    contentList: selectLifestyleContentList
})


export default connect(mapStateToProps, mapDispatchToProps)(SixthPost);
import { useState, useEffect } from 'react';
import './lifestyle.styles.css';
import { connect } from 'react-redux';
import { setLifestyleContentList } from '../../redux/contents/setContent.action';
import { createStructuredSelector } from 'reselect';
import { selectLifestyleContentList } from '../../redux/contents/content.selector';
import { db } from '../../firebase/firebase.utils';
import { collection, onSnapshot } from 'firebase/firestore';
import WithSpinner from '../../components/loader/loader.component';


const ThirdPost = ({ contentList, setContentList }) => {
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

    if (isLoading) {
        return <WithSpinner />
    }

    return (
        <div className="lifestyle-page">
            <div className="category-indicator">Lifestyle</div>
            {
                contentList.map((content) => {
                    const { body, fileUrls, title, createdAt, tag } = content;
                   
                    if (tag === 'thirdpost') {
                        return (
                            <div className={content.tag} id='lst'>
                                <h2 >{title}</h2>
                                <div className="img-container">
                                    <img className='scream' src={fileUrls[0]} alt='postimage' />
                                </div>
                                <p className="timestamp">{createdAt}</p>
                                <p>{body[0]}</p>
                                <br />
                                <p>{body[1]}</p>
                                <p>{body[2]}</p>
                                <br/>
                                <p className='details'><b>{body[3]}</b></p>
                                <p>{body[4]}</p>
                                <br />
                                
                                <p>{body[5]}</p>
                                <br /><br/>
                                <p><b>{body[6]}</b></p>
                                <br />
                                <p>{body[7]}</p>
                                <p>{body[8]}</p>
                                <br />
                                <p>{body[9]}</p>
                                <p>{body[10]}</p>
                                <p>{body[11]}</p>
                                <br /><br />
                                <p><b>{body[12]}</b></p>
                                <p>{body[13]}</p>
                                <p>{body[14]}</p>
                                <p>{body[15]}</p>
                                <p>{body[16]}</p>
                                <p>{body[17]}</p>
                                <p>{body[18]}</p>
                                <br />
                                <div className="img-container">
                                    <img className='scream' src={fileUrls[1]} alt='postimage' />
                                </div>
                                <br />
                                <p>{body[19]}</p>
                                <p>{body[20]}</p>
                                <p>{body[21]}</p>
                                <br /><br />
                                <p><b>{body[22]}</b></p>

                                <p>{body[23]}</p>
                                <p>{body[24]}</p>
                                <p>{body[25]}</p>
                                <p>{body[26]}</p>
                                <p>{body[27]}</p>
                                <p>{body[28]}</p>
                                <p>{body[29]}</p>
                                <p>{body[30]}</p>
                                <p>{body[31]}</p>
                                <p>{body[32]}</p>
                                <p>{body[33]}</p>
                                <br />
                                <div className="img-container">
                                    <img className='scream' src={fileUrls[2]} alt='postimage' />
                                </div>
                                <br />
                                <p>{body[34]}</p>
                                <p>{body[35]}</p>
                                <p>{body[36]}</p>
                                <p>{body[37]}</p>
                                <p>{body[38]}</p>
                                <br /><br />
                                <p><b>{body[39]}</b></p>
                                <p>{body[40]}</p>
                                <p>{body[41]}</p>
                                <p>{body[42]}</p>
                                <p>{body[43]}</p>
                                <p>{body[44]}</p>
                                <p>{body[45]}</p>
                                <p>{body[46]}</p>
                                <br />
                                <p>{body[47]}</p>
                                <br /><br />
                                <p><b>{body[48]}</b></p>
                                <p>{body[49]}</p>
                                <p>{body[50]}</p>
                                <p>{body[51]}</p>
                                <p>{body[52]}</p>
                                <p>{body[53]}</p>
                                <p>{body[54]}</p>
                                <br />
                                <div className="img-container">
                                    <img className='scream' src={fileUrls[3]} alt='postimage' />
                                </div>
                                <br />
                                <p>{body[55]}</p>
                                <p>{body[56]}</p>
                                <p>{body[57]}</p>
                                <br />
                                <p>{body[58]}</p>
                                <p>{body[59]}</p>
                                <br />
                                <p>{body[60]}</p>
                            </div>
                        )
                    }
                        
                    
                })
            }
            < div className="lifescribing">Lifestyle</div>
        </div >
    )
}

const mapDispatchToProps = dispatch => ({
    setContentList: content => dispatch(setLifestyleContentList(content))
})

const mapStateToProps = createStructuredSelector({
    contentList: selectLifestyleContentList
})


export default connect(mapStateToProps, mapDispatchToProps)(ThirdPost);
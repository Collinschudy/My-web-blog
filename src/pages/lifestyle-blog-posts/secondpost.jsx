import { useState, useEffect } from 'react';
import './lifestyle.styles.css';
import { connect } from 'react-redux';
import { setLifestyleContentList } from '../../redux/contents/setContent.action';
import { createStructuredSelector } from 'reselect';
import { selectLifestyleContentList } from '../../redux/contents/content.selector';
import { db } from '../../firebase/firebase.utils';
import { collection, onSnapshot } from 'firebase/firestore';
import WithSpinner from '../../components/loader/loader.component';


const SecondPost = ({ contentList, setContentList }) => {
    useEffect(() => {
        window.scrollTo(0, 0)
      }, []);
      
    const lifestyleRef = collection(db, 'lifestyle');
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const fetchPosts = async () => {

            await onSnapshot(lifestyleRef, data => {

                setContentList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))

                setIsLoading(false);
            })
        }
        fetchPosts()
    }, [])

    if (isLoading){
        return <WithSpinner />
    }

    return (
        <div className="lifestyle-page">
            <div className="category-indicator">Lifestyle</div>
        {
            contentList.map((content) => {
                const { body, fileUrls, title, createdAt, tag } = content;
                if (tag === 'secondpost') {
                    const name_1 = body[2].slice(26);
                    const name_2 = body[4].slice(28);
                    const name_3 = body[8].slice(3);
                    const name_4 = body[9].slice(46);
                    const name_5 = body[10].slice(40);
                    const name_6 = body[11].slice(12);
                    return (
                        <div className={tag} key={tag}>
                            <h2>{title}</h2>
                            <div className="img-container">
                                <img className='scream' src={fileUrls[0]} alt='postimage' />
                            </div>
                            <p className='timestamp'>{createdAt}</p>
                            <p style={{'textAlign': 'justify'}}>{body[0]}</p>
                            <p>{body[1]}</p>
                            <br />
                            <p className='details'>1. <b>Change your Environment</b>{name_1}</p>
                            <p>{body[3]}</p>
                            <br />
                            <p className='details'>2. <b>Join a Group Of Creatives</b>{name_2}</p>
                            <br />
                            <p><b>{body[5]}</b></p>
                            <div className="img-container">
                                <img className='scream' src={fileUrls[1]} alt='postimage' />
                            </div>
                            <br />
                            <p>{body[6]}</p>
                            <br />
                            <p className='details'><b>{body[7]}</b>{name_3}</p>
                            <br />
                            <p className='details'>5. <b>Read an Autobiography of Someone you Admire</b>{name_4}</p>
                            <br />
                            <p className='details'>6. <b>Strike a Conversation with a Stranger</b>{name_5}</p>
                            <div className="img-container">
                                <img className='scream' src={fileUrls[2]} alt='postimage' />
                            </div>
                            <p className='details'>7. <b>Volunteer</b>{name_6}</p>
                            <p><em><b>{body[12]}</b></em></p>
                            <p>{body[13]}</p>
                            <p>{body[14]}</p>
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


export default connect(mapStateToProps, mapDispatchToProps)(SecondPost);


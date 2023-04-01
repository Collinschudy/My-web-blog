import { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectPoetryContentList } from '../../redux/contents/content.selector';
import { setPoetryContentList } from '../../redux/contents/setContent.action';


import { db } from '../../firebase/firebase.utils';
import { collection, onSnapshot } from 'firebase/firestore';

import WithSpinner from '../../components/loader/loader.component';



const FourthPoetryPost = ({contentList, setContentList}) => {

    const [isLoading, setIsLoading] = useState(false);
    const poetryRef = collection(db, 'poetry')

    useEffect(() => {
        const fetchPosts = async () => {
            await onSnapshot(poetryRef, data => {
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
        <div className="poetrypage">
            <div className="category-indicator">Poetry</div>
            {
                contentList.map((content) => {
                    const { body, fileUrls, title, createdAt, tag } = content;

                    if (tag === 'fourthpost'){
                        return (
                            <div className={tag} id='forthpp'>
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
                                <br/>
                                <p>{body[5]}</p>
                                <p>{body[6]}</p>
                                <p>{body[7]}</p>
                                <p>{body[8]}</p>
                                <p>{body[9]}</p>
                                <br/>
                                <p>{body[10]}</p>
                                <p>{body[11]}</p>
                                <p>{body[12]}</p>
                                <p>{body[13]}</p>
                                <p>{body[14]}</p>
                                <br/>
                                <p>{body[15]}</p>
                                <p>{body[16]}</p>
                                <p>{body[17]}</p>
                                <p>{body[18]}</p>
                                <p>{body[19]}</p>
                            </div>
                        )
                    }
                })
            }
            < div className="lifescribing">Poetry</div>
        </div>


    )
}



 const mapDispatchToProps = dispatch => ({
    setContentList: content => dispatch(setPoetryContentList(content))
})

const mapStateToProps = createStructuredSelector({
    contentList: selectPoetryContentList
})



export default connect(mapStateToProps, mapDispatchToProps)(FourthPoetryPost);
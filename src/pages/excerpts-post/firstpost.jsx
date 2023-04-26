import { useEffect, useState } from "react";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";
import { db } from "../../firebase/firebase.utils";
import { collection, onSnapshot } from "firebase/firestore";
import { selectExcerptContentList } from "../../redux/contents/content.selector";
import { setExcerptContentList } from "../../redux/contents/setContent.action";
import WithSpinner from "../../components/loader/loader.component";
import './excerpt.styles.css';
import commentBox from 'commentbox.io'


const FirstExcerptPost = ({ contentList, setContentList }) => {
    useEffect(() => {
        window.scrollTo(0, 0)
      }, []);
      
    const excerptRef = collection(db, 'excerpts');
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                onSnapshot(excerptRef, data => {
                    setContentList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
                    setIsLoading(false);
                })
            } catch (error) {
                console.log('Error: ', error.message)
            }
        };
        fetchPosts()
    }, []);

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
        <div className="excerptpage">
            <div className="category-indicator">Excerpts</div>

            {
                contentList.map((content) => {
                    const { body, fileUrls, title, createdAt, tag } = content;

                    if (tag === 'firstpost') {
                        return (
                            <div className={tag} key={tag}>

                                <h2>{title}</h2>
                                <div className="img-container">
                                    <img className='scream' src={fileUrls[1]} alt='postimage' />
                                </div>
                                <p className="timestamp">{createdAt}</p>
                                <p>{body[0]}</p>
                                <p>{body[1]}</p>
                                <br />
                                <p>{body[2]}</p>
                                <p>{body[3]}</p>
                                <br />
                                <p>{body[4]}</p>
                                <p>{body[5]}</p>
                                <br />
                                <p>{body[6]}</p>
                                <br /><br />
                                <div className="img-container">
                                    <img className='scream' src={fileUrls[2]} alt='postimage' />
                                </div>
                                <br />
                                <p>{body[7]}</p>
                                <p>{body[8]}</p>
                                <br />
                                <div className="img-container">
                                    <img className='scream' src={fileUrls[0]} alt='postimage' />
                                </div>
                                <p><em>{body[9]}</em></p>
                                <br /><br />
                                <div className="img-container">
                                    <img className='scream' src={fileUrls[3]} alt='postimage' />
                                </div>
                                <p><em>{body[10]}</em></p>
                                <br />
                            </div>
                        )
                    }
                })
            }
            <div className="lifescribing">Excerpts</div>
        </div>
         <div className={`commentbox ${'styles'}`}/>
         </>
    )
}

const mapDispatchToProps = dispatch => ({
    setContentList: content => dispatch(setExcerptContentList(content))
})

const mapStateToProps = createStructuredSelector({
    contentList: selectExcerptContentList
})

export default connect(mapStateToProps, mapDispatchToProps)(FirstExcerptPost);
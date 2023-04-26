import { useEffect, useState } from "react";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";
import { db } from "../../firebase/firebase.utils";
import { collection, onSnapshot } from "firebase/firestore";
import { selectExcerptContentList } from "../../redux/contents/content.selector";
import { setExcerptContentList } from "../../redux/contents/setContent.action";
import WithSpinner from "../../components/loader/loader.component";
import commentBox from 'commentbox.io'

const ThirdExcerptPost = ({ contentList, setContentList }) => {
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
        <div className="excerptpage">
            <div className="category-indicator">Excerpts</div>

            {
                contentList.map((content) => {
                    const { body, fileUrls, title, createdAt, tag } = content;

                    if (tag === 'thirdpost') {
                        return (
                            <div className={tag} key={tag} >
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
         <div className={`commentbox ${'styles'}`} />
         </>
    )
}

const mapDispatchToProps = dispatch => ({
    setContentList: content => dispatch(setExcerptContentList(content))
})

const mapStateToProps = createStructuredSelector({
    contentList: selectExcerptContentList
})

export default connect(mapStateToProps, mapDispatchToProps)(ThirdExcerptPost);
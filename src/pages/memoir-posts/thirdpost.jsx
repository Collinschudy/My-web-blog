import { useEffect, useState } from "react";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";
import { db } from "../../firebase/firebase.utils";
import { collection, onSnapshot } from "firebase/firestore";
import { selectMemoirContentList } from "../../redux/contents/content.selector";
import { setMemoirContentList } from "../../redux/contents/setContent.action";
import WithSpinner from "../../components/loader/loader.component";
import commentBox from 'commentbox.io';



const ThirdMemoirPost = ({ contentList, setContentList }) => {
    useEffect(() => {
        window.scrollTo(0, 0)
      }, []);
      
    const memoirRef = collection(db, 'memoir');
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                await onSnapshot(memoirRef, data => {
                    setContentList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
                    setIsLoading(false)
                })
            } catch (error) {
                console.log('Error: ', error.message)
            }

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
    };

    return (
        <>
        <div className="memoirpage">
            <div className="category-indicator-m">Memoir</div>
            {
                contentList.map((content) => {
                    const { title, body, fileUrls, createdAt, tag } = content;

                    if (tag === 'thirdpost') {
                        return (
                            <div className={tag} key={tag}>
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
            < div className="lifescribing">Memoir</div>
        </div>
        <div className={`commentbox ${'styles'}`}/>
        </>
    )
}

const mapDispatchToProps = dispatch => ({
    setContentList: content => dispatch(setMemoirContentList(content))
})

const mapStateToProps = createStructuredSelector({
    contentList: selectMemoirContentList
})


export default connect(mapStateToProps, mapDispatchToProps)(ThirdMemoirPost);
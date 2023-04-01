import { useEffect, useState } from "react";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";
import { db } from "../../firebase/firebase.utils";
import { collection, onSnapshot } from "firebase/firestore";
import { selectMemoirContentList } from "../../redux/contents/content.selector";
import { setMemoirContentList } from "../../redux/contents/setContent.action";
import WithSpinner from "../../components/loader/loader.component";



const SecondMemoirPost = ({ contentList, setContentList }) => {
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

    if (isLoading) {
        return <WithSpinner />
    };

    return (
        <div className="memoirpage">
            <div className="category-indicator-m">Memoir</div>
            {
                contentList.map((content) => {
                    const { title, body, fileUrls, createdAt, tag } = content;

                     if (tag === 'secondpost') {
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
                })
            }
            < div className="lifescribing">Memoir</div>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    setContentList: content => dispatch(setMemoirContentList(content))
})

const mapStateToProps = createStructuredSelector({
    contentList: selectMemoirContentList
})


export default connect(mapStateToProps, mapDispatchToProps)(SecondMemoirPost);
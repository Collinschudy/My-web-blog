import { useState, useEffect } from 'react';
import './lifestyle.styles.css';
import { connect } from 'react-redux';
import { setLifestyleContentList } from '../../redux/contents/setContent.action';
import { createStructuredSelector } from 'reselect';
import { selectLifestyleContentList } from '../../redux/contents/content.selector';
import { db } from '../../firebase/firebase.utils';
import { collection, onSnapshot } from 'firebase/firestore';
import WithSpinner from '../../components/loader/loader.component';


const FourthPost = ({ contentList, setContentList }) => {
    useEffect(() => {
        window.scrollTo(0, 0)
      }, []);
      
    const [errorMessage, setErrorMessage] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    const lifestyleRef = collection(db, 'lifestyle');

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                await onSnapshot(lifestyleRef, data => {

                    setContentList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))

                    setIsLoading(false);
                })
            } catch(error) {
                console.log(error.message)
                setErrorMessage(error.message)
            }
            
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

                    if (tag === 'fourthpost') {
                        return (
                            <div className={tag} key={tag}>
                                <h2>{title}</h2>
                                <div className="img-container">
                                    <img className='scream' src={fileUrls[1]} alt='postimage' />
                                </div>
                                <p className="timestamp">{createdAt}</p>
                                <p style={{ 'marginBottom': '1em' }}>{body[0]}</p>
                                <p style={{ 'marginBottom': '1em' }}>{body[1]}</p>
                                <p style={{ 'marginBottom': '1em' }}>{body[2]}</p>
                                <p style={{ 'marginBottom': '1em' }}>{body[3]}</p>
                                <p>{body[4]}</p>
                                <br /><br />
                                <p>1. <b>Interest</b>: {body[5]}</p>
                                <br />
                                <p>{body[6]}</p>
                                <br />
                                <p>{body[7]}</p>
                                <br />
                                <p>{body[8]}</p>
                                <br />
                                <p>{body[9]}</p>
                                <br /><br />
                                <div className="img-container">
                                    <img className='scream' src={fileUrls[0]} alt='postimage' />
                                </div>
                                <br /><br />
                                <p style={{ 'marginBottom': '1em' }}>2. <b>Budget</b>: {body[10]}</p>
                                <p>{body[11]}</p>
                                <p>{body[12]}</p>
                                <p>{body[13]}</p>
                                <br /><br />
                                <p>3. <b>Harmony</b>: {body[14]}</p>
                                <p>{body[15]}</p>
                                <p>{body[16]}</p>
                                <br /><br />
                                <p>4. <b>Quality</b>: {body[17]}</p>
                                <p>{body[18]}</p>
                                <br /><br />
                                <p>5. <b>Confidence</b>: {body[19]}</p>
                                <br />
                                <div className="img-container">
                                    <img className='scream' src={fileUrls[2]} alt='postimage' />
                                </div>
                                <br />
                                <p>{body[20]}</p>
                                <br />
                                <p>{body[21]}</p>
                                <br />
                                <p>{body[22]}</p>
                                <br />
                                <p>{body[23]}</p>
                                <br />
                                <br />
                                <p style={{ 'marginBottom': '1em' }}>{body[24]}</p>
                                <p style={{ 'marginBottom': '1em' }}>{body[25]}</p>
                                <p style={{ 'marginBottom': '1em' }}>{body[26]}</p>
                                <p style={{ 'marginBottom': '1em' }}>{body[27]}</p>
                                <p style={{ 'marginBottom': '1em' }}>{body[28]}</p>
                                <p style={{ 'marginBottom': '1em' }}>{body[29]}</p>
                                <p style={{ 'marginTop': '1em', 'marginBottom': '1em' }}>{body[30]}</p>

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


export default connect(mapStateToProps, mapDispatchToProps)(FourthPost);
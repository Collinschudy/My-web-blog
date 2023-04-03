import { useState, useEffect } from 'react';
import './lifestyle.styles.css';
import { connect } from 'react-redux';
import { setLifestyleContentList } from '../../redux/contents/setContent.action';
import { createStructuredSelector } from 'reselect';
import { selectLifestyleContentList } from '../../redux/contents/content.selector';
import { db } from '../../firebase/firebase.utils';
import { collection, onSnapshot } from 'firebase/firestore';
import WithSpinner from '../../components/loader/loader.component';


const FirstPost = ({ contentList, setContentList }) => {
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
    }, []);
    useEffect(() => {
        window.scrollTo(0, 0)
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
                   
                    if (tag === 'firstpost') {
                        const name_1 = body[5].slice(19);
                        const name_2 = body[9].slice(17);
                        const name_3 = body[12].slice(13);
                        const name_4 = body[15].slice(15);
                        return (
                            <div className={tag} id='lsf'>
                                <h2 >{title}</h2>
                                <div className="img-container">
                                    <img className='scream' src={fileUrls[3]} alt='postimage' />
                                </div>

                                <p className='timestamp'>{createdAt}</p>

                                <p>{body[0]}</p>
                                <div className="names">
                                    <p>{body[1]}</p>
                                    <p>{body[2]}</p>
                                    <p>{body[3]}</p>
                                    <p>{body[4]}</p>
                                </div>

                                <p className='details'>1. <b>Vincent Van Gogh</b>{name_1}</p>
                                <div className="img-container">
                                    <img className='scream' src={fileUrls[2]} alt='postimage' />
                                </div>
                                <p style={{ 'marginBottom': '1em' }}>{body[6]}</p>
                                <p>{body[7]}</p>
                                <p style={{ 'marginBottom': '5em' }}>{body[8]}</p>
                                <p className='details'>2. <b>Virginia Woolf</b> {name_2}</p>
                                <div className="img-container">
                                    <img className='scream' src={fileUrls[1]} alt='postimage' />
                                </div>
                                <p style={{ 'marginBottom': '1em' }}>{body[10]}</p>
                                <p style={{ 'marginBottom': '5em' }}>{body[11]}</p>
                                <p className='details'>3. <b>Edvard Munch</b> {name_3}</p>
                                <div className="img-container">
                                    <img className='scream' src={fileUrls[4]} alt='postimage' />
                                </div>
                                <p style={{ 'marginBottom': '1em' }}>{body[13]}</p>
                                <p style={{ 'marginBottom': '5em' }}>{body[14]}</p>
                                <p className='details'>4. <b>Sylvia Plath</b>{name_4}</p>
                                <p>{body[16]}</p>
                                <div className="img-container">
                                    <img className='scream' src={fileUrls[0]} alt='postimage' />
                                </div>
                                <p style={{ 'marginTop': '4em', 'marginBottom': '1em' }}>{body[17]}</p>
                                <p>{body[18]}</p>
                                <p>{body[19]}</p>
                                <p style={{ 'marginBottom': '2em' }}>{body[20]}</p>
                                <p>{body[21]}</p>
                                <p>{body[22]}</p>
                                <p>{body[23]}</p>
                                <p style={{ 'marginTop': '1em' }}>{body[24]}</p>
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


export default connect(mapStateToProps, mapDispatchToProps)(FirstPost);
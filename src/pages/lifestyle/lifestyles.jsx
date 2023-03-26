import { useEffect, useState } from 'react';
import { db } from '../../firebase/firebase.utils';
import { collection, onSnapshot } from 'firebase/firestore';
import './lifestyle.styles.css';
import WithSpinner from '../../components/loader/loader.component';


const Lifestyle = () => {
    const [contentList, setContentList] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const lifestyleRef = collection(db, 'lifestyle')

    useEffect(() => {
        const fetchPosts = async () => {
            // const data = await getDocs(lifestyleRef)
            await onSnapshot(lifestyleRef, data => {

                setContentList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
                setIsLoading(false);
            })


        };
        fetchPosts()
    }, []

    );
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
                    else if (tag === 'secondpost') {
                        const name_1 = body[2].slice(26);
                        const name_2 = body[4].slice(28);
                        const name_3 = body[8].slice(3);
                        const name_4 = body[9].slice(46);
                        const name_5 = body[10].slice(40);
                        const name_6 = body[11].slice(12);
                        return (
                            <div className={tag} id='lss'>
                                <h2>{title}</h2>
                                <div className="img-container">
                                    <img className='scream' src={fileUrls[0]} alt='postimage' />
                                </div>
                                <p className='timestamp'>{createdAt}</p>
                                <p>{body[0]}</p>
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
                    else if (tag === 'thirdpost') {
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
                                <p className='details'><b>{body[3]}</b></p>
                                <p>{body[4]}</p>
                                <br />
                                <p>{body[5]}</p>
                                <br />
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
                                <br/>
                                <div className="img-container">
                                    <img className='scream' src={fileUrls[1]} alt='postimage' />
                                </div>
                                <br/>
                                <p>{body[19]}</p>
                                <p>{body[20]}</p>
                                <p>{body[21]}</p>
                                <br/><br/>
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
                                <br/>
                                <div className="img-container">
                                    <img className='scream' src={fileUrls[2]} alt='postimage' />
                                </div>
                                <br/>
                                <p>{body[34]}</p>
                                <p>{body[35]}</p>
                                <p>{body[36]}</p>
                                <p>{body[37]}</p>
                                <p>{body[38]}</p>
                                <br/><br/>
                                <p><b>{body[39]}</b></p>
                                <p>{body[40]}</p>
                                <p>{body[41]}</p>
                                <p>{body[42]}</p>
                                <p>{body[43]}</p>
                                <p>{body[44]}</p>
                                <p>{body[45]}</p>
                                <p>{body[46]}</p>
                                <br/>
                                <p>{body[47]}</p>
                                <br/><br/>
                                <p><b>{body[48]}</b></p>
                                <p>{body[49]}</p>
                                <p>{body[50]}</p>
                                <p>{body[51]}</p>
                                <p>{body[52]}</p>
                                <p>{body[53]}</p>
                                <p>{body[54]}</p>
                                <br/>
                                <div className="img-container">
                                    <img className='scream' src={fileUrls[3]} alt='postimage' />
                                </div>
                                <br/>
                                <p>{body[55]}</p>
                                <p>{body[56]}</p>
                                <p>{body[57]}</p>
                                <br/>
                                <p>{body[58]}</p>
                                <p>{body[59]}</p>
                                <br/>
                                <p>{body[60]}</p>
                            </div>
                        )
                    }
                    else if (tag === 'fourthpost') {
                        return (
                            <div className={tag} id='fls'>
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
                    else if (tag === 'fifthlifestylepost') {
                        return (
                            <div className={tag} id='ftls'>
                                <h2>{title}</h2>
                                <p className="timestamp">{createdAt}</p>
                                <p>{body[0]}</p>
                                <br/>
                                <p>{body[1]}</p>
                                <br/>
                                <p><em>{body[2]}</em> {body[3]}</p>
                                <br/>
                                <div className="img-container">
                                    <img className='scream' src={fileUrls[0]} alt='postimage' />
                                </div>
                                <br/>
                                <p>{body[4]}</p>
                                <br/>
                                <p>{body[5]}</p>
                                <br/>
                                <p>{body[6]}</p>
                                <br/>
                                <p>{body[7]}</p>
                                <br/>
                                <p>{body[8]}</p>
                                <br/>
                                <p>{body[9]}</p>
                                <br/>
                                <p>{body[10]}</p>
                                <br/>
                                <div className="img-container">
                                    <img className='scream' src={fileUrls[1]} alt='postimage' />
                                </div>
                                <br/>
                                <p>{body[11]}</p>
                                <br/>
                                <p>{body[12]}</p>
                                <br/>
                                <p>{body[13]}</p>

                            </div>
                        )
                    }
                    else if (tag === 'sixthlifestylepost') {
                        return (
                            <div className={tag} id='sls'>
                                <h2>{title}</h2>
                                <div className="img-container">
                                    <img className='scream' src={fileUrls[0]} alt='postimage' />
                                </div>
                                <p className="timestamp">{createdAt}</p>
                                <p>{body[0]}</p>
                                <p>{body[1]}</p>
                                <br/>
                                <p>{body[2]}</p>
                                <p>{body[3]}</p>
                                <p>{body[4]}</p>
                                <br/>
                                <p>{body[5]}</p>
                                <p>{body[6]}</p>
                                <p>{body[7]}</p>
                                <p>{body[8]}</p>
                                <br/>
                                <p><b>{body[9]}</b></p>
                                <div className="img-container">
                                    <img className='scream' src={fileUrls[1]} alt='postimage' />
                                </div>
                                <p>(Credit: Tumblr)</p>
                                <br/>
                                <p><b>1. Set practical goals.</b></p>
                                <p> {body[10]}</p>
                                <br/>
                                <p>{body[11]}</p>
                                <p>{body[12]}</p>
                                <p>{body[13]}</p>
                                <p>{body[14]}</p>
                                <p>{body[15]}</p>
                                <br/>
                                <p>{body[16]}</p>
                                <br/>
                                <p><b>{body[17]}</b></p>
                                <p>{body[18]}</p>
                                <p>{body[19]}</p>
                                <p>{body[20]}</p>
                                <p>{body[21]}</p>
                                <br/>
                                <p><b>{body[22]}</b></p>
                                <p>{body[23]}</p>
                                <p>{body[24]}</p>
                                <p>{body[25]}</p>
                                <br/>
                                <p><b>{body[26]}</b></p>
                                <p>{body[27]}</p>
                                <p>{body[28]}</p>
                            </div>
                        )
                    }

                })
            }
            <div className="lifescribing">Lifestyle</div>

        </div >
    )
}

export default Lifestyle;
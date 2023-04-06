import './bookorder.styles.css';
import image from '../../assets/PicsArt_08-16-11.15.42.png';
import { Link } from 'react-router-dom';

const BookOrder = () => {
    return (
        <div className="bookorder">
            <div className="book-intro-container">
                <div className="book-intro">
                    <p className='order'>Buy my book</p>
                    <p className='book-title'>The Pot And The Chess </p>
                    <p className='body'>
                        The Pot And The Chess is a collection of poetry and prose about love, loss, emptiness and life.
                        The book is divided into two major parts which focus on a man and a woman in their search for answers
                        to life and their questions about gender equality.
                        These 40 poems open up a door. They light a candle, and they say to you; welcome.
                    </p>
                    <p className='click-to-buy'><Link to='/mybook'>Click here to buy my book.</Link></p>
                </div>


            </div>
            <div className="book-image">
                <img src={image} alt='book' />
            </div>
        </div>
    )
}

export default BookOrder;
import './bookpage.styles.css';
import image from '../../assets/PicsArt_08-16-11.15.42.png';
import BookReview from '../../components/bookreviews/review.component';


const BookPage = () => {
    return (
        <div className="bookpage">
            <div className="about-book">
                <div className="bookimage-box">
                    <img src={image} alt="the author's book" />
                </div>
                <br/>
                <div className="paragraphs">
                    <p>The Pot And The Chess is a collection of poetry and prose about love, loss, emptiness and life.
                        The book is divided into two major parts which focus on a man and a woman in their search for answers
                        to life and their questions about gender equality.
                       <br/>
                        This debut book follows through a story in bits. It journeys through the life of a man finding and losing 
                        himself,and a woman embracing her selfhood.
                    </p>
                    <br/>
                    <p className='flutterwave'>Click <a style={{'color': 'black', 'textDecoration': 'underline'}} href='https://flutterwave.com/pay/y45e4lhygmfi' target='blank'>here </a>
                        to buy my book on Flutterwave.
                        <button className='book-link'>
                            <a href='https://flutterwave.com/pay/y45e4lhygmfi' target='blank'>
                                Buy on Flutterwave
                            </a>
                        </button>
                    </p>
                    <p className='amazon'>Click <a style={{'color': 'black', 'textDecoration': 'underline'}} href='https://www.amazon.com/Pot-Chess-novelette-poetry-looks/dp/B08GV8ZX8G' target='blank'>here </a>
                        to buy my book on Amazon.
                        <button className='book-link'>
                            <a href='https://www.amazon.com/Pot-Chess-novelette-poetry-looks/dp/B08GV8ZX8G' target='blank'>Buy on Amazon
                            </a>
                        </button>
                    </p>
                </div>
                <BookReview />
            </div>
            
        </div>
    )
}

export default BookPage;
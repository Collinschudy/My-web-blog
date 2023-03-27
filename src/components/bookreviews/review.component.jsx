import './review.styles.css';
import reviewData from './reviewdata.js';
import ReviewItem from '../ReviewItem/reviewitem.component';


const BookReview = () => {
    return (
        <div className='bookreview-container'>
            <h2>Reviews</h2>
            {
                reviewData.map((items, idx) => {
                    return (
                        <ReviewItem items={items} idx={idx}/>
                    )
                })
            }
        </div>
    )

}

export default BookReview;
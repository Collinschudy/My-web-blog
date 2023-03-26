import './review.styles.css';
import reviewData from './reviewdata';


const BookReview = () => {
    reviewData.map((items, idx) => {
        const { author, message, rank } = items;
        console.log(items)
    })
}

export default BookReview;
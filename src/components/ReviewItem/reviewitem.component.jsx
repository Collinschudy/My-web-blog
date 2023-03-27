import './reviewitem.styles.css';


const ReviewItem = ({ items, idx }) => {
    const { author, rank, message } = items;
        return (
            <div className={`${idx === 0 ? 'first-review' : 'second-review'} review-container`}>
                <p className="review-message">
                    {message}
                </p>
                <div className="review-name">
                    <p className="reviewer-rank">
                        -{author}
                    </p>
                    <p className="reviewer-name">
                        {rank}
                    </p>
                </div>
            </div>
        )
   
}

export default ReviewItem;
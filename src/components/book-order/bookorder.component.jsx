import './bookorder.styles.css';
import image from '../../assets/sincerely-media-CXYPfveiuis-unsplash.jpg';

const BookOrder = () => {
    return (
        <div className="bookorder">
            <div className="book-intro-container">
                <div className="book-intro">
                <p className='order'>Order my book</p>
                <p className='book-title'>The Pot And The Chess </p>
                <p className='body'> 
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta eaque hic in mollitia?
                    Blanditiis, ea deserunt harum impedit itaque at non ullam omnis, aspernatur distinctio,
                    a rerum ipsa accusamus quas illo soluta
                    consectetur excepturi deleniti facilis? Deleniti hic error,
                    maxime accusantium sint odit quam ut. The essence of Ipsum tu has venido ala arilla no has buscado.
                </p>
                </div>
               

            </div>
            <div className="book-image">
                <img src={image} alt='book'/>
            </div>
        </div>
    )
}

export default BookOrder;
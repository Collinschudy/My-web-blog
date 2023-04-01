import './blogdetails.styles.css';
import {useNavigate} from 'react-router-dom';


const BlogDetails = ({ content, memoir }) => {
    const navigate = useNavigate();
    const { body, fileUrls, title, category, tag } = content;
    return (
        <div className={`${memoir ? 'memoir-styling' : ''} blogdetails`}>
            <div className='blog-wrapper' >
                <div onClick= {() => {navigate(`/category/${category}/${tag}`)}} className='summaryImage'>
                    <img src={fileUrls[0]} alt='blog-description-image' />
                </div>
                <p className='blog-title'><b>{title}</b></p>
                <div>
                    <p className='blog-body'>{body[8]}</p>
                </div>
            </div>
        </div>
    )
}


export default BlogDetails;
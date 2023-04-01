import { useEffect, useState } from 'react';
import { db } from '../../firebase/firebase.utils';
import { collection, onSnapshot } from 'firebase/firestore';
import WithSpinner from '../../components/loader/loader.component';
import './excerptsummary.styles.css';
import BlogDetails from '../../components/blogDetails/blogdetails';

const Excerpt = () => {
    const [contentList, setContentList] = useState([]);
    const [isLoading, setIsLoading] = useState(true)
    const excerptRef = collection(db, 'excerpts');

    useEffect(() => {

        const fetchPosts = async () => {
            await onSnapshot(excerptRef, data => {
                setContentList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
                setIsLoading(false);
            })
        };
        fetchPosts()
    }
    );
    if (isLoading) {
        return <WithSpinner />
    };
    return (
        <div className="excerpt-summary">

            {
                contentList.map((content) => {
                   return (
                    <BlogDetails content={content} />
                   )
                
                })
            }
        </div>
    )
}

export default Excerpt;
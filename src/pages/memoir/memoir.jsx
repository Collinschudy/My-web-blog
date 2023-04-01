import { useEffect, useState } from 'react';
import { db } from '../../firebase/firebase.utils';
import { collection, onSnapshot } from 'firebase/firestore';
import WithSpinner from '../../components/loader/loader.component';
import BlogDetails from '../../components/blogDetails/blogdetails';
import './memoir-summary.styles.css';

const Memoir = () => {
    const [contentList, setContentList] = useState([]);
    const [isLoading, setIsLoading] = useState(true)
    const memoirRef = collection(db, 'memoir');

    useEffect(() => {
        const fetchPosts = async () => {
            await onSnapshot(memoirRef, data => {
                setContentList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
                setIsLoading(false);
            })
        };
        fetchPosts()
    })
    if (isLoading) {
        return <WithSpinner />
    };
    return (
        <div className="memoir-summary">
            {
                contentList.map((content) => {
                   return (
                <BlogDetails content={content} memoir/>
                   )
                

                })
            }
           
        </div>
    )
}


export default Memoir;
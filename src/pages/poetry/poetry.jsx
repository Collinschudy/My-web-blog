import { useEffect, useState } from 'react';
import { db } from '../../firebase/firebase.utils';
import { collection, onSnapshot } from 'firebase/firestore';
import BlogDetails from '../../components/blogDetails/blogdetails';
import './poetrysummary.styles.css';
import WithSpinner from '../../components/loader/loader.component';


const Poetry = () => {
    const [contentList, setContentList] = useState([]);
    const [isLoading, setIsLoading] = useState(true)
    const poetryRef = collection(db, 'poetry')

    useEffect(() => {

        const fetchPosts = async () => {
            await onSnapshot(poetryRef, data => {
                setContentList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
                setIsLoading(false);
            })
        };
        fetchPosts()
    }
    )
    if (isLoading) {
        return <WithSpinner />
    };
    return (
        <div className="poetry-summary">
            
            {
                contentList.map((content) => {
                    return (
                        <BlogDetails content={content} />
                    )


                }
                )}
        </div>
    )


}

export default Poetry;
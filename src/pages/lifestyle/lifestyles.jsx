import { useEffect, useState } from 'react';
import { db } from '../../firebase/firebase.utils';
import { collection, onSnapshot } from 'firebase/firestore';
import './lifestylesummary.styles.css';
import WithSpinner from '../../components/loader/loader.component';
import BlogDetails from '../../components/blogDetails/blogdetails';


const Lifestyle = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
      }, []);
      
    const [contentList, setContentList] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const lifestyleRef = collection(db, 'lifestyle')

    useEffect(() => {
        const fetchPosts = async () => {

            await onSnapshot(lifestyleRef, data => {

                setContentList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
                setIsLoading(false);
            })


        };
        fetchPosts()
    }, []

    );
    if (isLoading) {
        return <WithSpinner />
    }
   
    return (
        <div className="lifestyle-summary">
            {
                contentList.map((content) => {
                    return (
                    <BlogDetails content={content} />
                    )
                })
            }


        </div >
    )
}

export default Lifestyle;
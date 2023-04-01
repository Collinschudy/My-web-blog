import Excerptslist from '../../components/excerpts-posts-list/excerptslist';
import LifestyleList from '../../components/lifestyle-posts-lists/lifestyle.list';
import Memoirlist from '../../components/memoir-posts-list/memoirlist';
import Poetrylist from '../../components/poetry-posts-list/poetrylist';
import { useEffect } from 'react';
import './categorypage.styles.css';


const CategoryPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])

    return (
        <div className='categorypage'>
            <div className="content-wrapper">
                
            </div>
            <LifestyleList />
            <Poetrylist />
            <Memoirlist />
            <Excerptslist />
            


            
            

        </div>
    )
}

export default CategoryPage;
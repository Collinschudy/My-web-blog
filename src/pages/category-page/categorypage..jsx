import Excerptslist from '../../components/excerpts-posts-list/excerptslist';
import LifestyleList from '../../components/lifestyle-posts-lists/lifestyle.list';
import Memoirlist from '../../components/memoir-posts-list/memoirlist';
import Poetrylist from '../../components/poetry-posts-list/poetrylist';
import './categorypage.styles.css';


const CategoryPage = () => {

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
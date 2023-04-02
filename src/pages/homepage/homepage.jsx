import BookOrder from "../../components/book-order/bookorder.component";
import Introduction from "../../components/introduction/introduction.component";
import AboutSection from "../../components/aboutSection/aboutsecton.component";
import SampleBlog from "../../components/sample-blogs/samples.component";
import {useEffect} from 'react';

import './homepage.css';


const HomePage = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, []);
    
    return (
        <div className="homepage">
            <Introduction />
            <BookOrder />
            <SampleBlog />
            <AboutSection />
        </div>
    )
}

export default HomePage;